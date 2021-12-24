const quizForm = document.querySelector('.quiz-form')
const popupAnswers = document.querySelector('.popup-wrapper')
const finalScore = document.querySelector('#answer')

const correctAnswers = ['A', 'B', 'B', 'A']
let score = 0

const getUserAnswers = () => {
  let userAnswers = []

  correctAnswers.forEach((_, index) => {
    const userAnswer = quizForm[`inputQuestion${index + 1}`].value
    userAnswers.push(userAnswer)
  })
  return userAnswers
}

const calculateUserAnswers = (userAnswers) => {
  userAnswers.forEach((answer, index) => {
    const isUserAnswerCorrect = answer === correctAnswers[index]
    if (isUserAnswerCorrect) {
      score += 25
    }
  })
}

const showPopupScore = () => {
  popupAnswers.style.display = 'block'
}

const animateFinalScore = () => {
  let counter = 0
  const timer = setInterval(() => {
    if (counter === score) {
      clearInterval(timer)
    }

    finalScore.textContent = `${counter}%`
    counter++
  }, 10)
}

const handleSubmitForm = event => {
  event.preventDefault()

  const userAnswers = getUserAnswers()

  calculateUserAnswers(userAnswers)
  showPopupScore()
  animateFinalScore()
}

const closePopup = ({ target }) => {
  const classNameClickedElement = target.classList[0]
  const classNamesToClose = ['popup-close', 'button-continue']

  const shouldClosePopup = classNamesToClose
    .some(className => className === classNameClickedElement)

  if (shouldClosePopup) {
    popupAnswers.style.display = 'none'
  }

  score = 0
}

quizForm.addEventListener('submit', handleSubmitForm)
popupAnswers.addEventListener('click', closePopup)