// 🦁 Importe cette fonction
import { prompt } from "./helper.js";

let mail = await prompt("Enter recipient your mail : ");
let object = await prompt("Enter your object : ");
let message = await prompt("Enter your message : ");

console.log("NODE-MAILER ™️");

console.log("Envoi du mail en cours...");

console.log(`To user : ${mail}
Object : ${object}
Message : ${message}
`);

// 🦁 Récupère le mail, l'objet et le message

// 🦁 Affiche un log
// - Indiquant que le mail est en train d'être envoyé
// - Le mail du destinataire
// - L'objet du mail
// - Le message du mail
