document.querySelectorAll('.spinnable').forEach(img => {
  img.addEventListener('click', function() {
    this.classList.toggle('spinning');
  });
});

function play(audioId) {
    var audio = document.getElementById(audioId);
    audio.play();
};