import 'normalize.css'
import './style.scss'

fetch('/app.bundle.js')
    .then(res => res.text())
    .then(text => {
        const script = document.createElement('script')
        script.innerHTML = text
        document.body.appendChild(script)
    })
