import './css/style.css'

function component() {
    let div = document.createElement("h1")
    div.textContent="Test";
    return div
}

document.body.appendChild(component())