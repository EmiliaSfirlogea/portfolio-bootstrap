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

url1 = Home
url2 = Portfolio
url3 = Contact
let url1 = new URL('https://emiliasfirlogea.github.io/portfolio-bootstrap/html5/web-design/servicii');
let url2 = new URL('https://emiliasfirlogea.github.io/portfolio-bootstrap/posters/ecommerce/creator-logo/banners');
let url3 = new URL('https://emiliasfirlogea.github.io/portfolio-bootstrap/contact/logo-online/standard-html5/e-commerce-e/wordpress/email/message')
console.log(url1);
console.log(url2);
console.log(url3);
