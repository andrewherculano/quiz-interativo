const quizForm = document.querySelector('.quiz-form')

const correctAnswers = ['A', 'B', 'B', 'A']

quizForm.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0
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

  console.log(score)
})