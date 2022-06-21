import './css/style.css'
import { home, homeTitle, homeComment, homeHours, homeLocation } from './home';
import {menu, menuTitle, foodCard} from './menu'
import DeepFried from './img/pexels-ahmed-bhutta-7169619.jpg'
import Steak from './img/pexels-mali-maeder-65175.jpg'
import Fish from './img/pexels-markus-spiske-246120.jpg'
import Liver from './img/pexels-rafał-nawrocki-8878358.jpg'

// need a string to hold the current state
let orientation = "home";

function content() {
    let content = document.getElementById("content")

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

    list1.dataset.page = "home"
    list2.dataset.page = "menu"
    list3.dataset.page = "contact"

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

// first we always see the home
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

//onclick and switch case
content()!.onclick = (ev: MouseEvent) => {
    let target = ev.target as HTMLElement
    console.log(target) 
    
    if (target.dataset.page === orientation) return
    else if (typeof(target.dataset.page ==="string")) {
        if (target.dataset.page !== undefined) {
            orientation = target.dataset.page

            switch(orientation) {
                case "home":
                    content()?.replaceChildren(
                        header(),
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
                    
                    break;
                case "menu":
                    content()?.replaceChildren(
                        header(),
                        contentContainer( // content is being erased and replaced here
                        menu(
                            menuTitle(),
                            foodCard("Steak", "The classic, the one and only. The king of the Texan soul next to a few inches shorter sawed double barrel shotguns",Steak),
                            foodCard("Fish", "Not for everyone, daily changing condiments and spices to give this fat slapper a new spin everyday", Fish),
                            foodCard("Liver", "Prepared with utmost care to make sure your body asks for more. Either with coleslaw, caramellized onions Also ask us for raw liver, diced for easy chewing and swallowing", Liver),
                            foodCard("Deep-fried", "Mystery meat, mystery dish. Surely not made by food inspectors and unruly customers", DeepFried)
                        )
                        ),
                    footer()// footer always there
                    )
                    break
                case "contact":
                    console.log("Here should be contact")
                    break;
                default:
                    console.log("Shouldn't happen")
            }
        }
    }
}