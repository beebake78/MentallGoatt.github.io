document.addEventListener('DOMContentLoaded', function() {
    const startQuizButton = document.querySelector('#start-quiz-btn');
    const quizQuestionsSection = document.querySelector('#quiz-questions');
    const submitQuizButton = document.querySelector('#submit-quiz');

    
    startQuizButton.addEventListener('click', function() {
        quizQuestionsSection.style.display = 'block';
        startQuizButton.style.display = 'none';  
    });

    // validation
    submitQuizButton.addEventListener('click', function(event) {
        const form = document.querySelector('#quiz-form');
        const questions = form.querySelectorAll('.question');
        let isComplete = true;

        // Check if all answered
        questions.forEach(function(question) {
            const radios = question.querySelectorAll('input[type="radio"]');
            const isAnswered = Array.from(radios).some(radio => radio.checked);

            if (!isAnswered) {
                isComplete = false;
            }
        });

        // If not , prevent form submission
        if (!isComplete) {
            alert('Please answer all the questions.');
            event.preventDefault();
        } else {
            alert('Thank you for submitting the quiz!');
        }
    });
});
