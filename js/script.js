//navbar toggle
let navbarNavDropdown = document.querySelector('#navbarNavDropdown');
navbarNavDropdown.addEventListener('click', function () {
    this.classList.remove('show')
})


//post input

let InputName = document.querySelector('#InputName')
let InputEmail = document.querySelector('#InputEmail')
let InputSubject = document.querySelector('#InputSubject')
let InputMessage = document.querySelector('#InputMessage')
let Form = document.querySelector('#contact-form')

Form.addEventListener('submit', () => {
    // e.preventDefault();
    axios.post('https://api.a-nateghi.ir/api/v1/tickets', {
        name: InputName.value,
        email: InputEmail.value,
        subject: InputSubject.value,
        body: InputMessage.value
    })
        .then(function (response) {
            console.log('ارسال شد');
        })
        .catch(function (error) {
            console.log(error);
        });
})