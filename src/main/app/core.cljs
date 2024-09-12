(ns app.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

#_(def vertex-shader-source
    "attribute vec4 a_position;
    void main() {
        gl_Position = a_position;
    }")

#_(def fragment-shader-source
    "precision mediump float;
   uniform vec4 u_color;
    void main() {
        gl_FragColor = u_color;
   }")

#_(defn create-shader [gl type source]
    (let [shader (.createShader gl type)]
      (.shaderSource gl shader source)
      (.compileShader gl shader)
      (if ^boolean (.getShaderParameter gl shader (.-COMPILE_STATUS gl))
        shader
        (do
          (println (.-getShaderInfoLog shader))
          (.deleteShader gl shader)
          nil))))

#_(defn create-program [gl vertex-shader fragment-shader]
    (let [program (.createProgram gl)]
      (.attachShader gl program (create-shader gl (.-VERTEX_SHADER gl) vertex-shader))
      (.attachShader gl program (create-shader gl (.-FRAGMENT_SHADER gl) fragment-shader))
      (.linkProgram gl program)
      (if ^boolean (.getProgramParameter gl program (.-LINK_STATUS gl))
        program
        (do
          (println (.-getProgramInfoLog program))
          (.deleteProgram gl program)
          nil))))

#_(defn draw [id]
    (let [canvas (js/document.getElementById id)
          gl (or (.getContext canvas "webgl")
                 (.getContext canvas "experimental-webgl"))
          program (create-program gl vertex-shader-source fragment-shader-source)
          position-attribute-location (.getAttribLocation gl program "a_position")
          position-buffer (.createBuffer gl)
          position-buffer-data (js/Float32Array. [-1 -1 0 1 -1 0 -1 1 0 1 1 0])]
      (.bindBuffer gl (.-ARRAY_BUFFER gl) position-buffer)
      (.bufferData gl (.-ARRAY_BUFFER gl) position-buffer-data (.-STATIC_DRAW gl))
      (.clearColor gl 0 0 0 0)
      (.clear gl (.-COLOR_BUFFER_BIT gl))
      (.useProgram gl program)
      (.enableVertexAttribArray gl position-attribute-location)
      (.vertexAttribPointer gl position-attribute-location 3 (.-FLOAT gl) false 0 0)
      (.drawArrays gl (.-TRIANGLE_STRIP gl) 0 4)))

#_(defn file-info [id]
    (let [upload-input (js/document.getElementById id)]
      (set! (.-onchange upload-input)
            (fn [e]
              (let [files (.. e -target -files)]
                (doseq [file files]
                  (println "file" file "name" (.-name file) "size" (.-size file) "type" (.-type file))
                  (let [reader (js/FileReader.)]
                    (println "reader" reader)
                    (set! (.-onload reader)
                          (fn [e]
                            (let [buf (.. e -target -result)]
                              (println (.-byteLength buf) "bytes read from" (.-name file)
                                       "type" (.-type file)
                                       "size" (.-size file)
                                       "buf" buf))))
                    (.readAsArrayBuffer reader file))))))))

(def image-file-url (r/atom nil))

(def canvas-width 640)
(def canvas-height 640)

(defonce app-state (r/atom {:image nil
                            :drag-start nil
                            :image-pos {:x 0 :y 0}
                            :image-scale 0.1
                            :image-rotation 0}))

(defn draw [id]
  (let [canvas (js/document.getElementById id)
        ctx (.getContext canvas "2d")
        image (js/Image.)]
    (set! (.-onload image) (fn [_] (.drawImage ctx image 0 0 canvas-width canvas-height)))
    (if @image-file-url
      (.setAttribute image "src" @image-file-url)
      (js/console.error "No image file URL yet."))))

(defn deg-to-rad [degrees]
  (* degrees (/ Math/PI 180)))

#_(defn draw-transformed-image [canvas scale translation-x translation-y rotation]
    (println "draw-transformed-image" canvas scale translation-x translation-y rotation)
    (let [w (.-width canvas)
          h (.-height canvas)
          ctx (.getContext canvas "2d")
          image (js/Image.)]
      (set! (.-onload image) (fn [_]
                               (.clearRect ctx 0 0 w h)
                               (.transform ctx scale 0 0 scale 0 0)
                               (.rotate ctx (deg-to-rad rotation))
                               (.drawImage ctx image translation-x translation-y)))

      (if @image-file-url
        (.setAttribute image "src" @image-file-url)
        (js/console.error "No image file URL yet."))))

(defn draw-image [canvas image x y scale rotation]
  (let [ctx (.getContext canvas "2d")
        scaled-width (* (.-width image) scale)
        scaled-height (* (.-height image) scale)]
    (println "scale" scale " x" x " y" y " scaled-width" scaled-width " scaled-height" scaled-height)
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (.save ctx)
    (.rotate ctx (deg-to-rad rotation))
    (.translate ctx (+ x (/ scaled-width 2)) (+ y (/ scaled-height 2)))
    (.drawImage ctx image
                (- (/ scaled-width 2))
                (- (/ scaled-height 2))
                scaled-width
                scaled-height)
    (.restore ctx)))

(defn create-image [image-file callback]
  (let [image (.createElement js/document "img")]
    (set! (.-onload image) (fn [_] (callback image)))
    (if @image-file-url
      (do
        (.setAttribute image "src" image-file)
        (swap! app-state assoc :image image))
      (js/console.error "No image file URL yet."))))

(defn convert-image [image]
  (let [canvas (.createElement js/document "canvas")
        ctx (.getContext canvas "2d")]
    (set! (.-width canvas) (.-width image))
    (set! (.-height canvas) (.-height image))
    (.drawImage ctx image 0 0)
    (let [data (.getImageData ctx 0 0 (.-width canvas) (.-height canvas))]
      (println "data" data)
      (let [buf (.-data data)]
        (println "width" (.-width image) "height" (.-height image) "bytes per pixel" 3 "buf" buf)))))

(defn on-image-change [event]
  (let [image-file (.createObjectURL js/URL (first (.. event -target -files)))]
    (println "image-file" image-file)
    (reset! image-file-url image-file)
    (create-image image-file convert-image)))

(defn on-mouse-down [event]
  (let [canvas (.getElementById js/document "canvas")
        rect (.getBoundingClientRect canvas)
        _ (println "clientX" (.-clientX event) "clientY" (.-clientY event) "left" (.-left rect) "top" (.-top rect) "width" (.-width rect) "height" (.-height rect))
        x (- (.-clientX event) (.-left rect))
        y (- (.-clientY event) (.-top rect))]
    (swap! app-state assoc :drag-start {:x x :y y})))

(defn on-mouse-move [event]
  (when-let [drag-start (:drag-start @app-state)]
    (let [canvas (.getElementById js/document "canvas")
          rect (.getBoundingClientRect canvas)
          x (- (.-clientX event) (.-left rect))
          y (- (.-clientY event) (.-top rect))
          dx (- x (:x drag-start))
          dy (- y (:y drag-start))
          _ (println "dx" dx "dy" dy "x" x "y" y "drag-start" drag-start)
          new-pos {:x (+ (:x (:image-pos @app-state)) dx)
                   :y (+ (:y (:image-pos @app-state)) dy)}]
      (println "new-pos" new-pos)
      (swap! app-state assoc :image-pos new-pos)
      (draw-image  canvas (:image @app-state) (:x new-pos) (:y new-pos) (:image-scale @app-state) (:image-rotation @app-state))
      (swap! app-state assoc :drag-start {:x x :y y}))))

(defn on-mouse-up []
  (swap! app-state assoc :drag-start nil))

(defn app []
  [:div
   [:h1 "Hello from React and Shadow CLJS!"]
   [:input {:type "file" :id "input" :multiple true :accept "image/*" :on-change on-image-change}]
   [:canvas {:id "canvas" :width canvas-width :height canvas-height :style {:border "1px solid black"}
             :on-mouse-down on-mouse-down
             :on-mouse-move on-mouse-move
             :on-mouse-up on-mouse-up
             :on-mouse-leave on-mouse-up}]
   [:button {:on-click #(draw-image (.getElementById js/document "canvas") (:image @app-state) 0 0 (:image-scale @app-state)
                                    (:image-rotation @app-state))} "Draw transformed image"]])

(defn ^:dev/after-load mount []
  (rdom/render [app] (js/document.getElementById "app")))

(defn init []
  (mount))
