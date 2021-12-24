const quizForm = document.querySelector('.quiz-form')
const popupAnswers = document.querySelector('.popup-wrapper')
const answerPopup = document.querySelector('#answer')

const correctAnswers = ['A', 'B', 'B', 'A']

const handleSubmitForm = event => {
  event.preventDefault()

  let score = 0
  let counter = 0

  const userAnswers = [
    quizForm.inputQuestion1.value,
    quizForm.inputQuestion2.value,
    quizForm.inputQuestion3.value,
    quizForm.inputQuestion4.value
  ]

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25
    }
  })

  popupAnswers.style.display = 'block'

  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    answerPopup.textContent = `${counter}%`
    counter++
  }, 10)
}

const closePopup = event => {
  const classNameClickedElement = event.target.classList[0]
  const classNamesToClose = ['popup-close', 'button-continue']

  const shouldClosePopup = classNamesToClose
    .some(className => className === classNameClickedElement)

  if (shouldClosePopup) {
    popupAnswers.style.display = 'none'
  }
}

quizForm.addEventListener('submit', handleSubmitForm)
popupAnswers.addEventListener('click', closePopup)