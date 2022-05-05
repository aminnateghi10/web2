

//navbar toggle
navbarNavDropdown = document.querySelector('#navbarNavDropdown');
navbarNavDropdown.addEventListener('click', function () {
    this.classList.remove('show')
})

// fetch('https://ideal-it.ir/api/v1/todos', {
//     method: 'POST',
//     body: JSON.stringify({
//         name: 'foo',
//         email: 'amin@gmail.com',
//         subjact: 'ad',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

fetch('https://api.a-nateghi.ir/api/v1/tickets')
    .then(response => response.json())
    .then(json => console.log(json))