
function submitChanges() {
    let name = document.getElementById("nameInput").value;
    if (name) {
        greeting.textContent = "Hello, " + name + "!";
    }
    else {
        greeting.textContent = "Hello, User!";
    }

    let userMessage = document.getElementById("messageInput");

    if (userMessage) {
        document.getElementById("message").textContent = userMessage.value;
    }
    else {
        document.getElementById("message").textContent = "Customize this webpage by filling out the form below!";
    }

    let selectedColor = document.getElementById("options").value;
    document.body.style.backgroundColor = selectedColor;
}