window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', () => {
    Pizzicato.context.resume();

    var voice = new Pizzicato.Sound({
      source: 'input',
      options: {
        volume: 1
      }
    }, function () {

      voice.addEffect(new Pizzicato.Effects.Reverb({
        time: 1,
        decay: 3,
        mix: 0.5
      }));


      voice.addEffect(new Pizzicato.Effects.Delay({
        feedback: .1,
        time: .05,
        mix: 0.3,
      }));

      voice.addEffect(new Pizzicato.Effects.Delay({
        feedback: .2,
        time: .5,
        mix: .5,
      }));

      voice.play();
    });

    document.addEventListener('keydown', handleKeyDown);

    let horn;
    horn = new Pizzicato.Sound('assets/horn.mp3');
    horn.addEffect(new Pizzicato.Effects.Reverb({
      time: 1,
      decay: 3,
      mix: 0.5
    }));

    let music = new Pizzicato.Sound(
      {
        source: 'file',
        options: {
          path: 'assets/music.m4a',
          volume: 0.6
        }
      }, () => {
        music.play(0, 100);
      }
    );


    function handleKeyDown(e) {
      switch (e.key) {
        case 'h':
          if (horn.playing) horn.stop();
          horn.play();
          break;
        case 'm':
          if (music.playing) {
            music.pause();
          } else {
            music.play();
          }
          break;
        default:
      }
    }
  });
});
