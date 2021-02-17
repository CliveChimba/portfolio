//get the form by its id
const form = document.getElementById("contact-form"); 

const formEvent = form.addEventListener("submit", (e) => {
    e.preventDefault();
    let mail = new FormData(form);
    sendMail(mail);
})

const sendMail = (mail) => {
    fetch("https://nodemailer-vic-lo.herokuapp.com/send", {
      method: "post",
      body: mail,
  }).then((response) => {
      return response.json();
    });
  };