//initialiser le jeu avec une fonction anonyme stocké dans une variable 
const init = () => {
    console.log("lance le jeu bg");
    //recupération d'une question 
    //extraction d'un nombre aléatoir 
    function getRandomQuestion (min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let ressult = Math.floor(step2) + min;

        return ressult;
    }

    function askQuestion () {
        let questionName = document.querySelector('#question-index');
        let question = getRandomQuestion(0,questions.length-1)
        questionName.innerHTML = questions[question]; 
        return questionName;
    }

    let questionAked =  askQuestion ();
}

init();