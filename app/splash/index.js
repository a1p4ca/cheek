import 'normalize.css'
import './style.scss'

document.body.classList.add('noscroll')

document.addEventListener(
    'DOMContentLoaded',
    () => fetch('/app.bundle.js')
        .then(res => res.text())
        .then(loadScript)
        .then(dominate)
)

function dominate () {
    document.querySelector('.splash').classList.add('slideOut')
    document.addEventListener('animationend', ({animationName}) => {
        if (animationName === 'slideOut')
            document.body.classList.remove('noscroll')
    })
}

function loadScript (text) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        const splash = document.querySelector('.splash')

        splash.classList.add('done')
        script.innerHTML = text
        document.body.appendChild(script)

        setTimeout(resolve, 1000)
    })
}
