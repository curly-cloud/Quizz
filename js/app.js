class Question {
    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    //si le choix de la réponse est bonne
    //on renvoie vrai 
    isCorrectAnswer(choice) {
        
        return this.answer === choice;
        
      }
      
     isNotCorrectAnswer(choice) {
        return this.answer !== choice;
    }

}
let questions = [
new Question (
    "In which part of your body would you find the cruciate ligament ?",
    ["Knee","wrist","head","shoulder"],
    "Knee"),
new Question (
    "What is the name of the main antagonist in the Shakespeare play Othello ?",
    ["Siré","Iago","Lise","tessa"],
    "Iago"),
new Question (
    "What element is denoted by the chemical symbol Sn in the periodic table ?",
    ["sodium","Tin","aluminum","potasium"],
    "Tin"),
new Question (
    "What is the name of the 1976 film about the Watergate scandal, starring Robert Redford and Dustin Hoffman ?",
    [ "All the President’s Men","Gone with the wind","Forest Gump","Gone too soon"],
    "All the President’s Men"),
new Question (
    "How many of Henry VIII’s wives were called Catherine ?",
    [2,1,3,4],
    3 ),
new Question (
    "What was the most popular girls name in the UK in 2019 ?",
    ["Olivia","Brenda"," Diana","Eva"],
    "Olivia"),
new Question (
    "Which comedian was the second permanent host of Never Mind the Buzzcocks after Mark Lamarr ?",
    ["Daisy May", "Phil Jupitus","Simon Amstell","May Jupitus"],
    "Simon Amstell"),
new Question (
    "Which popular video game franchise has released games with the subtitles World At War and Black Ops ?",
    [ "Call of Duty","Assassin's Creed","Soulcalibur","Taken"],
    "Call of Duty"),
new Question (
    "In what US State is the city Nashville ?",
    ["Tennessee","Kansas","Texas","Bronx"],
    "Tennessee"),
new Question (
    "Which rock band was founded by Trent Reznor in 1988 ?",
    ["Nine Inch Nails","Red hot chili peppers","U2","2K2"],
    "Nine Inch Nails"),
new Question (
    "What is the currency of Denmark ?",
    ["Franc","Krone","Euro","Yen"],
    "Krone"),
new Question (
    "Which Tennis Grand Slam is played on a clay surface ?",
    ["Wimbledon","Open D'Australie","The French Open (Roland Garros)",
    "US Open "],
    "The French Open (Roland Garros)"),
new Question (
    "In which European country would you find the Rijksmuseum ?",
    ["Germany","Wales","Spain","Netherlands"],
    "Netherlands"),
new Question (
    "How many films have Al Pacino and Robert De Niro appeared in together ?",
    ["six","five","Four","three"],
    "Four"),
new Question (
    "What was the old name for a Snickers bar before it changed in 1990 ?",
    ["Run","Marathon","Feet","Sprint"],
    "Marathon"),
new Question (
    "Who was the head of state in Japan during the second world war ?",
    ["Emperor Hirohito","Emperor Akihito"," Naruhito","Emperor Yoshihito"],
    "Emperor Hirohito"),
new Question (
    "What is the smallest planet in our solar system ?",
    ["Pluton","Jupiter","Mars","Mercury"],
    "Mercury"),
new Question (
    "Who wrote the novels Gone Girl and Sharp Objects ?",
    ["Gill Flynn","Robert Flynn","Phil Flynn","Gillian Flynn"],
    "Gillian Flynn"),
new Question (
    "Which legendary surrealist artist is famous for painting melting clocks ?",
    ["Salvador Dali","Salvador Bali","Henry Salvador","Bali Roux"],
    "Salvador Dali"),
new Question (
    "Which football club plays its home games at Loftus Road",
    [" Queen’s Fight Rangers", " Queen’s Power Rangers"," Queen’s Park Rangers","Arsenal"],
    " Queen’s Park Rangers",),
new Question (
    "Continental United States has 4 time zones, can you name them ?",
    [" Pacific, Mountain, Central, Eastern"," North, South, East, west", " Pacific, Western, Central, Eastern","Central,East,Quatorial,Pole"],
    " Pacific, Mountain, Central, Eastern"),
new Question (
    "What was the Turkish city of Istanbul called before 1930 ?",
    [" Constantinople"," Istanbul"," Jerusalem","Paris"],
    " Constantinople"),
new Question (
    "From which US city do the band The Killers originate ?",
    ["Las Vegas","Washington","Kansas","Texas"],
    "Las Vegas"),
new Question (
    "Name the Coffee shop in US sitcom Friends",
    ["Central Park","Central Perk","Pub Central ","Central Square"],
    "Central Perk"),
new Question (
    "How many human players are there on each side in a polo match ?",
    ["Four","two","Five","three"],
    "Four",),
new Question (
    "In what year did Tony Blair become British Prime Minister ?",
    [1997,1995,1998,1994], 
    1997),
new Question (
    "How many times has England won the men’s football World Cup ?",
    ["Once (1966)","3 times","Twice","4 times"],
    "Once (1966)",),
new Question (
    "What is the capital of New Zealand?",
    ["Auckland","Arllington","Wellington","Linz"],
    "Wellington",),
new Question (
    "Street artist Banksy is originally associated with which British city ?",
    ["Bristol","Arsenal","Pristol","Aristol"],
    "Bristol",),
new Question (
    "From what grain is the Japanese spirit Sake made ?",
    ["Corn","Rice","wheat","Quinoa"],
    "Rice")
];
/* console.log(questions); */

class Quiz {

    constructor (questions){
        //nombre de bonnes réponses
        this.score = 0 ; 
        this.questions = questions;
        //mauvaises question 
        this.wrongAnswer = 0;  
        //index du tableau
        this.currentQuestionIndex= 0;
    }

    //affichage de la question 
    getCurrentquestion(){
        
        return this.questions[this.currentQuestionIndex];
        
    }
    //Si la reponse est bonne on incrémente 
    guess(answer) {
        if (this.getCurrentquestion().isCorrectAnswer(answer)) {
          this.score++;
        }else{
            this.wrongAnswer++;
        }

        this.currentQuestionIndex++;
    }
    hasEnded(){
        return this.currentQuestionIndex >= this.questions.length;
    }

    handleChangeSelect(event){
        //récupérer la valeur dans le select "cibl du select"
        //target = cible événement = le thème
        const selectedTheme= event.target.value;
        /* console.log(selectTheme); */
        //recupérer la balise body 
        const body = document.querySelector('body');
        /* console.log(body); */
        //modifier la classe du body 
        body.className = selectedTheme;
        //Stocker le cookie 
        //thème modifié => création du cookie pour stocker son nom 
        //le cookie dispose d'un nom et d'une valeur et d'autres options 
        //qu'on peut lui ajouter : domaine, date d'expiration..
        //max-age = nombre de seconde dans une annéé
        document.cookie="theme-choisi="+ selectedTheme + ";max-age=31536000"
    }

    
}

//les fonctions qui affichent l'app
const display = {
elementshown : function (id,text) {
    let element = document.getElementById(id);
    element.innerHTML= text;
},
endQuiz: function () {
    let endQuizTitle=`<h1>Le jeu est terminé bg j'espère que t'as dead ça </h1>`
    let endQuizHTML = ` 
    <h3> Score : ${quiz.score} /${quiz.questions.length}</h3>
     `;
     let endQuizWA = ` 
    <h3> Wrong answers: ${quiz.wrongAnswer} /${quiz.questions.length} </h3> `;
     ` 
     ` ;
   this.elementshown("results-score",endQuizHTML);

    this.elementshown("container",endQuizTitle); 
   this.elementshown("results-wrong",endQuizWA);    
},

question: function(){
    this.elementshown("question-index",quiz.getCurrentquestion().text);
    
},

choices: function(){
    //le choix ds reponse se fait par rapport a la question 
    //les 4 élemnts des reponses 
    let choices = quiz.getCurrentquestion().choices;
    //prendre en compte la réponse de l'utilisateur
    guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        };
    }

    //affichage des quatres élements du tableau 
    for (let i = 0; i < choices.length; i++) {
        this.elementshown("choice" + i,choices[i])
        guessHandler("guess"+ i,choices[i]);
    }
 
},

progress: function() {
    //si on clique sur le bouton d'une réponse 
    //on incrémente le nombre de page 
    //on prend l'index 0 + 1
    let currentQuestionNumber = quiz.currentQuestionIndex +1;
    this.elementshown("progress-question", "Question " + currentQuestionNumber + "/" + quiz.questions.length)
},

//changement de theme
 theme: function() {
    const themeSelect = document.querySelector("#select-menu");
    themeSelect.addEventListener('change', quiz.handleChangeSelect);
    /* console.log(themeSelect);  */
 },

 loadtheme:function(){
     //verification si il y a un cookie 
     //si différent de vide
     if(document.cookie != ""){
    //recupération du coockie 
    //split casse une chaine de caratère en tableau
    const cookieTheme = document.cookie
    .split('; ')
    .find(row => row.startsWith('theme-choisi='))
    .split('=')[1];
    
    //recuperation de la balise body 
    const body = document.querySelector('body');
    body.className = cookieTheme;
    /* console.log(cookieTheme); */
}
},

chrono: function(){
    //démarrer le compteur 
    let counter = 30 ;
    //recupération de l'id où intégrer le chrono
    let timerElement = document.querySelector('#chrono-text'); 
    //creation du compteur 
    //avec setInterval qui a besoin d'une fonction et de sa durée
    const timer = setInterval(function countDown() {
        console.log( counter);
        //ajout de texte du counter
    timerElement.innerHTML= counter;
        counter = counter -1;
        if (counter === 0) {
            //attendre 1 seconde avant d'afficher le texte
            setTimeout(() => {
                timerElement.innerHTML= "it's over baby";
                //arrete de l'intervale à 0
                clearInterval(timer);    
            },1000);
            /* counter=0;
            timerElement.innerHTML = counter;
            if(timerElement.innerHTML == "0"){
                chrono();
            } */
        }
    }, 1000);

    //arreter le timer 
    /*  */
    }, 

 }
 
//le fonctionnement du quiZ (init)
quizApp = ()=> {
    //dès le chargement de la page on verifie que l'utilisateur
    //n'a pas selectionné un thème grace à ses cookies
    display.loadtheme();
    if (quiz.hasEnded()){
        //fin de jeu 
        display.endQuiz();
        
    }else{
      //on affiche la question
      display.question();
      //le choix
      display.choices();
      //progression dans les questions 
      display.progress () ;
      //changement du theme
        display.theme();
        /* display.chrono(); */
    }
    

}

// Pour etre sur que notre code JS se lance bien APRÈS le chargement complet de la page, on place un écouteur sur celle-ci pour surveiller l'événement DOMContentLoaded. Ce dernier est émis par le navigateur lorsque toutes les ressources de la page sont bien téléchargées.
// Quand tout est téléchargé, on lance la fonction init ! 
document.addEventListener('DOMContentLoaded', quizApp);
//create quiz (creation objet quiz)
let quiz =  new Quiz(questions);
quizApp();
console.log(quiz);

