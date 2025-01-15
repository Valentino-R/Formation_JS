// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
const listeMots = ['Cachalot', 'Pétunia', 'Serviette']

let score = 0
let nombreQuestions = listeMots.length

function retournerMessageScore(score, nombreQuestions) {
    let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
    return message
}
//boucle de parcour du tableau
for (let i = 0; i < listeMots.length; i++){
    //demande de saisie de mot à l'utilisateur
    let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
    if (motUtilisateur === listeMots[i]){
        score++
    }
}
console.log(retournerMessageScore)