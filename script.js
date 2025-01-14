const motApplication = "Bonjour" // Essayez de mettre un autre mot ici !
let motUtilisateur = prompt("Entrez le mot : " + motApplication)

if (motUtilisateur === motApplication) {
    console.log("Bravo !")
} else {
    console.log("Vous avez fait une erreur de frappe.")
}
