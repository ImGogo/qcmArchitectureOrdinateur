titleEffect();

function titleEffect() {
  var title = 'L\'ARCHITECTURE DES ORDINATEURS';
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById('text')
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = title.substring(0, letterCount)
      window.setTimeout(function() {
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === title.length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
    }, 10000)
    } else if (waiting === false) {
      target.innerHTML = title.substring(0, letterCount)
      letterCount += x;
    }
}, 100)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
