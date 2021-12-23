const quizForm = document.querySelector('.quiz-form')
const popupAnswers = document.querySelector('.popup-wrapper')
const answerPopup = document.querySelector('#answer')

const correctAnswers = ['A', 'B', 'B', 'A']
let score = 0

quizForm.addEventListener('submit', event => {
  event.preventDefault()

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

  answerPopup.textContent = `${score}%`
  popupAnswers.style.display = 'block'

  score = 0
})

popupAnswers.addEventListener('click', event => {
  const classNameClickedElement = event.target.classList[0]
  const classNamesToClose = ['popup-close', 'button-continue']

  const shouldClosePopup = classNamesToClose
    .some(className => className === classNameClickedElement)

  if (shouldClosePopup) {
    popupAnswers.style.display = 'none'
  }
})