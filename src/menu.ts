export function menu(menuTitle: HTMLDivElement, ...cards: HTMLDivElement[]){
    let menuContent = document.createElement("section");
    
    menuContent.appendChild(menuTitle)
    for (let i = 0; i < cards.length; i++) {
        menuContent.appendChild(cards[i])
        
    }
        
    return menuContent
}

export function menuTitle() {
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    let title = document.createElement("h2");
    title.textContent = "The Menu";
    titleContainer.append(title);
    return titleContainer;
}

export function card(title: string, description: string, url: string = "") {
    let foodCard = document.createElement("div")
    foodCard.classList.add("card")

    foodCard.innerHTML = 
    `
    <div class="card-pic">
        <img src ="${url}" alt="${title}">
    </div>
    <div class ="card-desc">
        <h4>${title}</h4>
        <p>${description}</p>
    </div>
    `

    return foodCard
}
