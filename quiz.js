function checkAnswers() {
    const correctAnswers = {
        q1: '86',
        q2: 'R.O.B.',
        q3: 'Kirby',
        q4: 'Diddy Kong',
        q5: 'Plant'
    };

    let score = 0;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswer) {
            score++;
        }
    }

    // Display the score at the bottom of the screen
    document.getElementById('score').textContent = `You scored ${score} out of ${Object.keys(correctAnswers).length}`;
}