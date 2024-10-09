function sendEmail(e) {
    // e.preventDefault();
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "prianshukla2000@gmail.com",
        Password: "07E503E417314AB33C66BD69435F2BA6FC2F",
        To: 'priyanshushukla5555@gmail.com',
        From: document.getElementById('email').value,
        Subject: "New Contact Form Enquiry from " + document.getElementById('organisation').value,
        Body: "Name : " + document.getElementById('name').value +
            "<br> Email : " + document.getElementById('email').value +
            "<br> Phone Number : " + document.getElementById('phone').value +
            "<br> Message : " + document.getElementById('message').value
    }).then(
        alert("Message Sent Succesfuly")
    );
}

let chatButton = document.querySelector('.lets-talk');
let chatBox = document.querySelector('.contact-container');
let close = document.querySelector('#cls-btn');
let visible = false;
chatButton.addEventListener('click', () => {
    visible = !visible;
    if (visible) {
        chatBox.style.transform = "scale(1)";
    } else {
        chatBox.style.transform = "scale(0)";
    }
})
close.addEventListener('click', () => {
    chatBox.style.transform = "scale(0)";
    visible = false;
})


// Username: "prianshukla2000@gmail.com",
// Password: "E9085C9001F6DEC9E14BED62854C6E57E587",
//smtp.elasticemail.com  -- Server
// Port
// 2525