AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.marker1 = document.querySelector('#marker1');
        this.marker2 = document.querySelector('#marker2');
  
        alert("Aproxime os marcadores da câmera");
    },
    tick: function () {
        const marker1Visible = this.marker1.object3D.visible;
        const marker2Visible = this.marker2.object3D.visible;
        
        this.el.addEventListener('click', function (evt) {
            const soundEl = evt.target;
            soundEl.components.sound.playSound();
        });
    }
});

// sound="src: url(banana.mp3); autoplay: false"
