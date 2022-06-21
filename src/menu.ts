export function menu(menuTitle: HTMLDivElement, ...foodCard: HTMLDivElement[]){
    let menuContent = document.createElement("section");
    
    menuContent.appendChild(menuTitle)
    for (let i = 0; i < foodCard.length; i++) {
        menuContent.appendChild(foodCard[i])
        
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

export function foodCard(title: string, description: string, url: string = "") {
    let foodCard = document.createElement("div")
    foodCard.classList.add("food-card")

    foodCard.innerHTML = 
    `
    <div class="food-pic">
        <img src ="${url}" alt="${title}">
    </div>
    <div class ="food-desc">
        <h4>${title}</h4>
        <p>${description}</p>
    </div>
    `

    return foodCard
}
