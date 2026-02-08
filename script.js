function sendData() {

    var phone = document.getElementById("phone").value.trim();

    // 🔴 Phone validation
    if (!/^\d{10}$/.test(phone)) {
        alert("❌ Phone number must be exactly 10 digits");
        document.getElementById("phone").focus();
        return; // STOP execution
    }

    // 🔹 SHOW LOADER (only if validation passed)
    document.getElementById("loader").style.display = "flex";

    var gender = document.querySelector('input[name="gender"]:checked').value;

    var data = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: phone,
        dob: document.getElementById("dob").value,
        gender: gender,
        address: document.getElementById("address").value.trim(),
        password: document.getElementById("password").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzPAdQJovMeIZmidDdxIQWzr7k11AWy8AJWyJ5r7HOl3QqMwDnNt45jD8A5aDf9HoKo/exec", {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors"
    })
    .then(() => {
        document.getElementById("loader").style.display = "none";
        alert("🎉 Form Submitted Successfully!");
        document.querySelector("form").reset();
    })
    .catch(() => {
        document.getElementById("loader").style.display = "none";
        alert("❌ Error while submitting form");
    });
}