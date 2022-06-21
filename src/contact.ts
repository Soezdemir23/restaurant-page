
export function contact(titleContainer: HTMLDivElement, ...cards:HTMLDivElement[]){

    let contactContent = document.createElement("div")
    contactContent.appendChild(titleContainer)

    for (let index = 0; index < cards.length; index++) {
        contactContent.appendChild(cards[index])        
    }
    return contactContent
}

export function contactTitle() {
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    titleContainer.innerHTML = 
    `<h2>Contact</h2>
    `
    return titleContainer
}

