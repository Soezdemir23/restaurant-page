import './css/style.css'
import Icon from './img/pexels-iconcom-216634.jpg';



function content() {
    let content = document.getElementById("content")
    //const myIcon = new Image();
    //myIcon.src = Icon;

    //content?.appendChild(myIcon)
    return content
}

/**
 * The header contains a nav->ul-> li.
 * center the child of the header with display flex
 * maybe the same with ul. We will see
 */
function header() {
    let head = document.createElement("header");
    // one element that you can justify via flex and then three more elements inside, nav->ul-> (a->li)*3
    let nav = document.createElement("nav")
    let ul = document.createElement("ul")

    //append the nav and ul into head
    head.appendChild(nav)
    nav.appendChild(ul)

    let list1 = document.createElement("li")
    let list2 = document.createElement("li")
    let list3 = document.createElement("li")

    list1.textContent = "Home"
    list2.textContent = "Menu"
    list3.textContent = "Contact"

    //append the lists into ul
    ul.append(list1, list2,list3)

    return head;
}

/**
 * It is the container for the contet of the other cards
 * @returns Element HTML
 */
function contentContainer(home: string | Node) {


    // the container for the cards
    let contentContainer = document.createElement("div");
    contentContainer.classList.add("content-container")
    contentContainer.append(home)
    return contentContainer
}


function homeTitle() {
    let titleContainer = document.createElement("div")
    titleContainer.classList.add("title-container")
    let title = document.createElement("h2")
    title.textContent = "Meat Canyon BBQ Restaurant"
    titleContainer.append(title)
    return titleContainer
}


/**
 * 
 */
function homeComment(){
    let commentContainer = document.createElement("div")
    commentContainer.classList.add("comment-container")
    
    let commentContentContainer = document.createElement("div")
    let commentTitle = document.createElement("h3")
    commentTitle.textContent = "It is a meat PARADISE"
    let commentContent = document.createElement("p")
    commentContainer.textContent = `
    I wasn't sure what awaited me when I first entered this restaurant
    `
    commentContentContainer.append(commentTitle, commentContent)
    commentContainer.append(commentContentContainer)
    return commentContainer;
}

function homeHours(){
    let openingHourContainer = document.createElement("div")
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


function homeLocation() {
    let locationContainer = document.createElement("div")
    let locationTitle = document.createElement("h3")
    locationTitle.textContent = "Location"
    let locationAdress = document.createElement("p")
    locationAdress.textContent ="345 Meat Drive, Houston, Texas"
    locationContainer.append(locationTitle,locationAdress)

    return locationContainer
}

/**
 * Content requires:
 * a header for the title
 * a small quote from a customer
 * oponening hours
 * location 
 */
function home (homeTitle: HTMLDivElement,homeComment: HTMLDivElement,homeHours: HTMLDivElement, homeLocation: HTMLDivElement) {
    let home = document.createElement("section")
    //append the passed divElements
    home.appendChild(homeTitle)
    home.appendChild(homeComment)
    home.appendChild(homeHours)
    home.appendChild(homeLocation)
    
    return home

    
}

content()?.append(
    header(),// header is ALWAYS there
    contentContainer( // content is being erased and replaced here
        home( // the home container is containing all he other elements required to make this works
            homeTitle(),
            homeComment(),
            homeHours(),
            homeLocation()
            ),
        )
    )    
    
