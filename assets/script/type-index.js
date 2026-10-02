const hamburger = document.getElementById("hamburger");
const navOption = document.getElementById("nav-option");
const form = document.getElementById("MessageForm");
const inputName = document.getElementById("MessengerName");
const inputEmail = document.getElementById("MessengerEmail");
const inputSubject = document.getElementById("MessageSubject");
const inputMessage = document.getElementById("MessageContent");
const btnSend = document.getElementById("btn-send");
const saveData = localStorage.getItem("contactData");
if (saveData) {
    const contact = JSON.parse(saveData);
    inputName.value = contact.name;
    inputEmail.value = contact.email;
    inputSubject.value = contact.subject;
    inputMessage.value = contact.message;
}
form.addEventListener("input", () => {
    const contact = {
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
//# sourceMappingURL=type-index.js.map