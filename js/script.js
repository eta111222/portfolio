let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active');
}

let section= document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');

window.onscroll=()=>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >=offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    let header= document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    menuIcon.classList.remove('active');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let formData = new FormData(this);

    let messageContent = `
        Email: ${formData.get('from_email')}\n
        Number: ${formData.get('from_number')}\n
        Subject: ${formData.get('subject')}\n
        Message: ${formData.get('message')}
    `;

    emailjs.send("service_wghrt0r", "template_ymyjoqc", {
        from_name: formData.get('from_name'),
        message: messageContent
    }).then(function(response) {
        alert('SUCCESS!', response.status, response.text);
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert('FAILED...', error);
    });
});