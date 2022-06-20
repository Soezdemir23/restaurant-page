/**
 * Content requires:
 * a header for the title
 * a small quote from a customer
 * oponening hours
 * location
 */
 export function home(homeTitle: HTMLDivElement, homeComment: HTMLDivElement, homeHours: HTMLDivElement, homeLocation: HTMLDivElement) {
    let home = document.createElement("section");
    //append the passed divElements
    home.appendChild(homeTitle);
    home.appendChild(homeComment);
    home.appendChild(homeHours);
    home.appendChild(homeLocation);
    return home;
}


export function homeTitle() {
    let titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    let title = document.createElement("h2");
    title.textContent = "Meat Canyon BBQ Restaurant";
    titleContainer.append(title);
    return titleContainer;
}



export function homeComment(){
    let commentContainer = document.createElement("div")
    commentContainer.classList.add("comment-container")
    
    let commentContentContainer = document.createElement("div")
    commentContainer.append(commentContentContainer);
    
    let commentTitle = document.createElement("h3")
    commentTitle.textContent = "It is a meat PARADISE"
    commentContentContainer.append(commentTitle)

    let commentParagraph = document.createElement("p")
    commentParagraph.classList.add("comment-paragraph")
    commentParagraph.textContent = "MHHmmmmh. This shop is a T-Bone gem in an ocean of vegetables and seedoils"
    commentContentContainer.append(commentParagraph)
    return commentContainer;
}

export function homeHours(){
    let openingHourContainer = document.createElement("div")
    openingHourContainer.classList.add("opening-hour-container")
    
    let openingHourTitle = document.createElement("h3")
    openingHourTitle.textContent = "Hours"
    //opening hours
    let openingMonday = document.createElement("p")
    openingMonday.textContent = "Monday: Closed"
    let openingTuesday = document.createElement("p")
    openingTuesday.textContent = "Tuesday: 09:00AM - 09:00PM"
    let openingWednesday = document.createElement("p")
    openingWednesday.textContent = "Wednesday: 09:00AM - 09:00PM"
    let openingThursday = document.createElement("p")
    openingThursday.textContent = "Thursday: 09:00AM - 09:00PM"
    let openingFriday = document.createElement("p")
    openingFriday.textContent = "Friday: 09:00AM - 09:00PM"
    let openingSaturday = document.createElement("p")
    openingSaturday.textContent = "Saturday: 09:00AM - 11:00PM"
    let openingSunday = document.createElement("p")
    openingSunday.textContent = "Saturday: Closed"

    openingHourContainer.append(
        openingHourTitle,
        openingMonday,
        openingTuesday,
        openingWednesday,
        openingThursday,
        openingFriday,
        openingSaturday,
        openingSunday
    )
    return openingHourContainer
}

export function homeLocation() {
    let locationContainer = document.createElement("div")
    locationContainer.classList.add("location-container")
    let locationTitle = document.createElement("h3")
    locationTitle.textContent = "Location"
    let locationAdress = document.createElement("p")
    locationAdress.textContent ="345 Meat Drive, Houston, Texas"
    locationContainer.append(locationTitle,locationAdress)

    return locationContainer
}