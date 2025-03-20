function checkEmail() {
    let email = document.getElementById("email").value;
    let domain = email.slice(-4);

    if (email.includes("@") && (domain === ".com" || domain === ".vn")) {
        document.getElementById("result").textContent = "Email hợp lệ!";
    } else {
        document.getElementById("result").textContent = "Email không hợp lệ!";
    }
}