const form = document.getElementById("enquiryForm");
const messageBox = document.getElementById("message-box");

form.addEventListener("submit", function(event){
    event.preventDefault();

    messageBox.textContent = "Thank you! Your message has been sent.";
    form.reset();

const name = document.getElementById("Your name").value;
    const email = document.getElementById("Your email").value;
    const message = document.getElementById("Your message").value;
 
    if (name === ""){
        messageBox.textContent = "Please enter your name.";
        return;
    }
 
    if (email === ""){
        messageBox.textContent = "Please enter your email.";
        return;
    }
 
    if (!email.includes("@") || !email.includes(".")){
        messageBox.textContent = "Please enter a valid email.";
        return;
    }
 
    if (message === ""){
        messageBox.textContent = "Please state your enquiry.";
        return;
    }
 
    const myEmail = "oamogetswe.tsoeu@gmail.com";
 
    const subject = "New enquiry from " + name;
    const body = "Name: "+ name + "\nEmail: " + email + "\n\nMessage: " + message;
 
    window.location.href =
        "mailto: " + myEmail + "?subject=" + encodeURIComponent(subject) + "&body=" +
        encodeURIComponent(body);
 
    messageBox.textContent = "Thank you " + name + " your enquiry has been sent"

    const map = google.maps.Map(document.getElementById("map"), { zoom: 15, center:hopeForPaws, mapId: "HOPE_FOR_PAWS_MAP" })

})

