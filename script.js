

let s = Math.floor(Math.random() * 101);
const sub = document.getElementById('submit')
sub.addEventListener('click', myfunc)
sub.addEventListener('click', flash)

function myfunc() {
  let gnumber;
  gnumber = document.getElementById('num').value;
  if (gnumber == s) {
    container.innerHTML = 'You have guessed correct'
    document.getElementById('container').style.display = 'none'
  }
  else if (gnumber > s) {
    container.innerHTML = 'Number is less than your guess'
    document.getElementById('container').style.display = 'none'
  }
  else {
    container.innerHTML = 'Number is greater than your guess'
    document.getElementById('container').style.display = 'none';
  }

}

function flash() {
  let c = document.getElementById('container')
  setTimeout(function() {
    c.style.display = (c.style.display == 'none' ? '' : 'none')
  }, 300)
}
let count = 0
submit.onclick = function() {
  count++
  attempts.innerHTML = "Your Attempts: " + count
  if (count > 8) {
    attempts.innerHTML = 'More than 8 attempts'
    sub.removeEventListener('click', myfunc)
    sub.removeEventListener('click', flash)
    const img = document.querySelector("img");
    img.src = "game_over.png"
  }
}
clickhint = function() {
  hint.innerHTML = 'Start from the number 50. Choose middle point at every attempt.'
}

