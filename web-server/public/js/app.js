// let intt;
// var inp = document.querySelector('input');
// inp.addEventListener('input', (e) => {
//     intt = e.target.value
// })

// var btn = document.querySelector('button');
// btn.addEventListener('click', (e) => {
// url = `http://localhost:3003/weather?address=d`
// fetch(url)
//     .then(res => res.json())
//     .then((data) => {
//         if (data.error) {
//             console.log(data.error);
//         } else {
//             console.log(data);
//         }
//     })
// })
const para = document.querySelector('p')

var weatherForm = document.querySelector('form')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const int = e.target[0].value
    url = `http://localhost:3003/weather?address=${int}`
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                para.innerHTML = JSON.stringify(data);
            }
        })
})

// url = 'http://puzzle.mead.io/puzzle'
// fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data)) 