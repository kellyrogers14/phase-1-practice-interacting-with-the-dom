
// see the time increment every second once the page has loaded

startTimer = function () {
    return setInterval(function () {
      var a = document.getElementById("counter"),
        b = parseInt(a.innerText);
      a.innerText = b + 1;
    }, 1000);
  },
  
  seconds = startTimer();

  // plus and minus buttons

  const plus = document.getElementById('plus')
  const minus = document.getElementById('minus')

  plus.addEventListener('click', () => {
    var a = document.getElementById("counter"),
        b = parseInt(a.innerText);
      a.innerText = b + 1;
  })

  minus.addEventListener('click', () => {
    var a = document.getElementById("counter"),
        b = parseInt(a.innerText);
      a.innerText = b - 1;
  })

// liking a number

const like = document.getElementById('heart')
let timer = document.getElementById('counter')
let clickCount = 0 

like.addEventListener('click', () => {
    currentClicks = clickCount++
    const currentNumber = parseInt(timer.textContent)
    document.querySelector('.likes').textContent = `${currentNumber} has ${currentClicks} likes`
})

// pause and restart the counter

const pause = document.getElementById('pause')
pause.classList.add('running')

pause.addEventListener("click", () => {
   if (pause.classList.contains("running")){
    clearInterval(seconds)
    pause.textContent = "Resume"
    minus.disabled = true
    plus.disabled = true
    like.disabled = true
    submit.disabled = true
    pause.classList.remove("running")
   } else {
    pause.textContent = "Pause"
    minus.disabled = false
    plus.disabled = false
    like.disabled = false
    submit.disabled = false
    startTimer();
   }
    })

// inputting comments
document.querySelector('#comment-form').addEventListener('submit', (e) => {
    e.preventDefault()
    commentInput = document.querySelector('#comment-input').value
    createComment(commentInput)
})

function createComment(comment){
    let li = document.createElement('li')
    li.textContent = comment
    document.querySelector('#list').appendChild(li)
}