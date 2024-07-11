class AudioControl {
  constructor(game) {
    this.game = game

    this.carHitSound = document.getElementById('carHitSound');
    this.frogSound = document.getElementById("frogSound");
    this.splashSound = document.getElementById("splashSound");
  }
  play(sound) {
    sound.currentTime = 0;
    sound.play();
  }
}
