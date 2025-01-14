const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
let score = 0

let motUtilisateur = prompt('Entrez le mot : ' + listeMots[0])
if (motUtilisateur === listeMots[0]) {
    score++
}
motUtilisateur = prompt('Entrez le mot : ' + listeMots[1])
if (motUtilisateur === listeMots[1]) {
    score++
}
motUtilisateur = prompt('Entrez le mot : ' + listeMots[2])
if (motUtilisateur === listeMots[2]) {
    score++
}
console.log("Votre score est de " + score + " sur 3")