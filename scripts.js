new class {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => this.main())
    }
    initForm() {
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
    }
    getUrlData() {
        return window.location.href.split("/portfolio-bootstrap/")[1]?.split('/').reduce((a, v) => {
            if (v) a.push(v)
            return a
        }, []) || []
    }
    main() {
        this.initForm()
        console.log(this.getUrlData())
    }
}




/*
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


let home = new URL('https://emiliasfirlogea.github.io/portfolio-bootstrap/html5/web-design/servicii');
let menu2 = new URL('https://emiliasfirlogea.github.io/portfolio-bootstrap/posters/ecommerce/creator-logo/banners');
let menu3 = new URL('https://emiliasfirlogea.github.io/portfolio-bootstrap/contact/logo-online/standard-html5/e-commerce-e/wordpress/email/message')

let url1 = home
let url2 = menu2
let url3 = menu3
console.log(home);
console.log(menu2);
console.log(menu3);
*/
