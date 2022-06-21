import './css/style.css'
import { home, homeTitle, homeComment, homeHours, homeLocation } from './home';
import {menu, menuTitle, card} from './menu'
import { contact, contactTitle } from './contact';

import DeepFried from './img/pexels-ahmed-bhutta-7169619.jpg'
import Steak from './img/pexels-mali-maeder-65175.jpg'
import Fish from './img/pexels-markus-spiske-246120.jpg'
import Liver from './img/pexels-rafał-nawrocki-8878358.jpg'
import Logistics from './img/pexels-kampus-production-5920775.jpg'
import Cook from './img/pexels-rodnae-productions-8523164.jpg'
import HeadServer from './img/pexels-andrea-piacquadio-3770107.jpg'
import Customer from './img/pexels-pixabay-41008.jpg'
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

    <ul>
        <li>Picture sources are found in this <a target="_blank" href="https://github.com/Soezdemir23/restaurant-page#readme">readme file</a></li>
        <li>You can find the repo <a target="_blank" href="https://github.com/Soezdemir23/restaurant-page">here</a></li>
        <li>Also check my <a href="https://github.com/Soezdemir23">profile</a></li> 
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
            card("Meat paradise", "I wasn't sure what I was looking forward to, when I was invited to a birthday party. He is a type 1 diabetic, so most food is off-limits. Which left him with the pure basics: Animal sources. I am glad this restaurant exists, because it's allowing people who can't participate in social cook-offs an opportunity to do so.", Customer),
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
                            card("Steak", "The classic, the one and only. The king of the Texan soul next to a few inches shorter sawed double barrel shotguns",Steak),
                            card("Fish", "Not for everyone, daily changing condiments and spices to give this fat slapper a new spin everyday", Fish),
                            card("Liver", "Prepared with utmost care to make sure your body asks for more. Either with coleslaw, caramellized onions Also ask us for raw liver, diced for easy chewing and swallowing", Liver),
                            card("Deep-fried", "Mystery meat, mystery dish. Surely not made by food inspectors and unruly customers", DeepFried)
                        )
                        ),
                    footer()// footer always there
                    )
                    break
                case "contact":
                    content()?.replaceChildren(
                        header(),
                        contentContainer(
                            contact(
                                contactTitle(),
                                card("Mr Fresh", "Mr Fresh is a very passionate logistics expert and hobbyist. While the shop is running hot, he makes sure the ingredients are staying cool and ready and the staff is happy.", Logistics),
                                card("Mr Walter", "Walter is nuts. Nuts for BBQ and making something special with simple ingredients that make customers ask for more. His passion for BBQ is only matched by his love to chill after a good work done.", Cook),
                                card("Perry", "Perry is our Head Server, coming from a long line of service staff. He has the experience, the attitude and the lack of patience for Karens to make the restaurant welcoming for those, who just want to eat our BBQ.", HeadServer)
                            )

                        ),footer()
                    )
                    break;
                default:
                    console.log("Shouldn't happen")
            }
        }
    }
}