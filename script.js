function checkAnswer(questionName, correctAnswer, resultId) {
    var answer = document.querySelector(`input[name="${questionName}"]:checked`);
    var result = document.getElementById(resultId);

    if (answer) {
        if (answer.value === correctAnswer) {
            result.textContent = "Correct !";
            result.classList.add("correct");
            result.classList.remove("incorrect", "warning");
        } else {
            result.textContent = "Incorrect. Essayez encore.";
            result.classList.add("incorrect");
            result.classList.remove("correct", "warning");
        }
    } else {
        result.textContent = "Veuillez choisir une réponse.";
        result.classList.add("warning");
        result.classList.remove("correct", "incorrect");
    }
}