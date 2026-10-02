const hamburger = document.getElementById("hamburger") as HTMLButtonElement;
const navOption = document.getElementById("nav-option") as HTMLElement;

const form = document.getElementById("MessageForm") as HTMLFormElement;
const inputName = document.getElementById("MessengerName") as HTMLInputElement;
const inputEmail = document.getElementById("MessengerEmail") as HTMLInputElement;
const inputSubject = document.getElementById("MessageSubject") as HTMLInputElement;
const inputMessage = document.getElementById("MessageContent") as HTMLTextAreaElement;
const btnSend = document.getElementById("btn-send") as HTMLButtonElement;
const btnCv = document.getElementById("btn-cv") as HTMLButtonElement;

interface ContactData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const saveData = localStorage.getItem("contactData");

if(saveData) {
    const contact: ContactData = JSON.parse(saveData);
    inputName.value = contact.name;
    inputEmail.value = contact.email;
    inputSubject.value = contact.subject;
    inputMessage.value = contact.message;
}

form.addEventListener("input", () => {
    const contact: ContactData = {
        name: inputName.value,
        email: inputEmail.value,
        subject: inputSubject.value,
        message: inputMessage.value
    };

    localStorage.setItem("contactData", JSON.stringify(contact));
});

hamburger.addEventListener("click", () => {
    navOption.classList.toggle("active");
});
    
btnCv.addEventListener("click", () => {
    const cvUrl = "assets/file/mycv.pdf";
    window.open(cvUrl, "_blank");
});