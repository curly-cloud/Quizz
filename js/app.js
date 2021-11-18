//initialiser le jeu avec une fonction anonyme stocké dans une variable 
const init = () => {
    console.log("lance le jeu bg");
    //recupération d'une question 
    function askQuestion (questionIndex) {
        question = questions[questionIndex];
        return question;
    }

    let questionAsked = askQuestion (0); 
    console.log(questionAsked);
    //placer la question dans le DOM
    function addQuestionToDOM(questionIndex) {
     //Selection de l'id
     let questionName = document.querySelector('#question-index');
     //insertion
      questionName.innerHTML = questions[questionIndex]; 
      console.log(questionName );
    }

     let addedQuestionToDom = addQuestionToDOM(5); 
    console.log(addedQuestionToDom); 
}

init();