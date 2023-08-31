AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.marker1 = document.querySelector('#marker1');
  
        alert("Aproxime os marcadores da câmera");
    },
    tick: function () {
        this.el.addEventListener('click', function (evt) {
            const soundEl = evt.target;
            soundEl.components.sound.playSound();
        });
    }
});

// sound="src: url(banana.mp3); autoplay: false"
