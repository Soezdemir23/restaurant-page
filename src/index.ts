import './css/style.css'
import { home, homeTitle, homeComment, homeHours, homeLocation } from './home';



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


function footer() {
    let footer  = document.createElement("footer")

    footer.innerHTML =`

    <ul class="footer-left">
        <li>sdfsdf<li>
    </ul>
    <ul class="footer-right">
        <li>background image by: <a href="https://www.pexels.com/photo/bonfire-wallpaper-216634/">Icon0.com-Bonfire Wallpaper</a> </li>
        <li>Steak picture by: <a href="https://www.pexels.com/photo/red-meat-with-chili-pepper-and-green-spies-65175/">Photo by mali maeder: </a></li>
        <li>BBQ picture by <a href="https://www.pexels.com/photo/selective-focus-photography-of-meat-on-grill-2491273/">Photo by Desativado: </a></li>
    </ul>
    
        `
    return footer
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
        ),
    footer()// footer always there
)


    
