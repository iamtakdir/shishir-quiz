const correctAnswers = ['B', 'B', 'A', 'A', 'B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]

    //check ans

    userAnswers.forEach((answers, i) => {
        if (answers === correctAnswers[i]) {
            score += 20;
        }
    });

    // show result 

    scrollTo(0, 0)

    result.querySelector('span').textContent = `${score}%😎`;
    //removing class 
    result.classList.remove('d-none')

    let output = 0;

    const timer = setInterval(() => {

        result.querySelector('span').textContent = `${output}%😎`

        if (output === score) {
            clearInterval(timer)
        } else {
            output++
        }

    }, 20);




})