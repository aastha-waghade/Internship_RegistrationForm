const form = document.getElementById("regForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();

  fetch("https://script.google.com/macros/s/AKfycbyCoThESM1d4JChY77qxEquJ88AiaM_qgFtquBdQPh2yY5eXs3Rx4GZQZ3avei-30nE/exec", {
    method: "POST",
    body: new FormData(form)
  })
  .then(res => res.text())
  .then(text => {
    if (text.trim() === "success") {
      msg.innerText = "Registration Successful!";
      msg.style.color = "lime";
      form.reset();
    } else {
      msg.innerText = "Server error";
      msg.style.color = "red";
    }
  })
  .catch(err => {
    console.error(err);
    msg.innerText = "Error submitting form";
    msg.style.color = "red";
  });
});
