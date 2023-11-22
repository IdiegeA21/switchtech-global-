// this is a script file written by Id-A-22
// for form handling via emailjs.



const form = document.querySelector("form");
let sendStatus = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let sw2 = document.getElementById("sw-input1"); //Name of client
    let sw3 = document.getElementById("sw-input2"); // email of client
    let sw4 = document.getElementById("sw-input3"); // telephone of client
    let sw5 = document.getElementById("sw-input4"); // description about client information
    

    let vArray = [sw2, sw3, sw4, sw5];
    if(sendStatus){
        console.log("This user the carry us play oooo, This user has already sent an email before");
    }else{
        
        let [userName, mail, tel, desc] = vArray;

        emailjs.init("aIp-3uOz8Y7qbbit-");

        function onSuccess() {
            console.log("Email successfully sent!");
            Swal.fire({
                title: "Thank You for Contacting Us!!",
                text: "Thanks for reaching out! We've received your website request and will be in touch shortly.",
                icon: "success"
            });
            sendStatus = !sendStatus;
            vArray.forEach(one => {
                one.value = "";
            })
        }

        // Main emailjs handler
        function sendEmail() {
            emailjs.send("service_r0r8fwt", "template_zehdzix", {
                name: userName.value,
                email: mail.value,
                telephone: tel.value,
                description: desc.value,
            })
            .then(
                function(response) {
                    onSuccess();
                },
                function(error) {
                    console.log("Email sending failed:", error);
                }
            );
        }

        // Call your function to send the email
        sendEmail();
    }

});