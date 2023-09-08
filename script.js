// 🦁 Importe cette fonction
import { prompt } from "./helper.js";

let mail = await prompt("Enter recipient your mail : ");
let object = "";
let message = "";

if (mail.length === 0) {
  console.log("Error : You must enter a mail, an object and a message");
  process.exit(1);
} else {
  object = await prompt("Enter your object : ");
  if (object.length === 0) {
    console.log("Error : You must enter an object");
    process.exit(1);
  } else {
    message = await prompt("Enter your message : ");
    if (message.length === 0) {
      console.log("Error : You must enter a message");
      process.exit(1);
    } else {
      console.log("NODE-MAILER ™️");

      console.log(`To user : ${mail}
Object : ${object}
Message : ${message}
`);

      console.log("Envoi du mail en cours...");
    }
  }
}
// 🦁 Récupère le mail, l'objet et le message

// 🦁 Affiche un log
// - Indiquant que le mail est en train d'être envoyé
// - Le mail du destinataire
// - L'objet du mail
// - Le message du mail
