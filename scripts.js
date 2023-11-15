//executam codul dupa 1000 de milisecunde
setTimeout(() => {
    Array.from(document.querySelectorAll('.needs-validation')).map(form => {
        form.addEventListener('submit', event => {
            form.querySelector('.form_error').innerHTML = ''
            event.preventDefault()
            let errors = []
            Array.from(form.elements).map(el => {
                if (el.name && el.value.trim() === '') errors.push(`${el.name} este invalid`)
            })
            if (errors.length) form.querySelector('.form_error').innerHTML = errors.join('<br/>') + '<br/>va rog nu va bate-ti joc'
            else form.querySelector('.form_error').innerHTML = 'Mesajul a fost trimis cu success'
        })
    })
}, 1000)


let url1 = new URL('https://emiliasfirlogea.github.io/portfolio-bootstrap/html5/web-design/servicii');
let url2 = new URL('https://emiliasfirlogea.github.io/portfolio-bootstrap/posters/ecommerce/creator-logo/banners');
console.log(decodeURI(encoded));
