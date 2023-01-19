const beatsTab = document.getElementById("beatsTab");
const amazonTab = document.getElementById("amazonTab");
const bpTab = document.getElementById("bpTab");
const stackTab = document.getElementById("stackTab");
const beats = document.getElementById("beats")
const amazon = document.getElementById("amazon")
const bp = document.getElementById("bp");
const stack = document.getElementById("stack");
const camp = document.getElementById("camp");
const pending = document.getElementById('pending')
const completed = document.getElementById("completed");
const allcompleted = document.getElementById("allcompleted")
const allpending = document.getElementById("allpending");
const allcampaigns = document.getElementById("allCampaigns");
const extraDash = document.querySelector(".extraDash");
let dash = false
const morebtn = document.getElementById("more")
const dashToggle = document.getElementById("dashToggle");
const dropDown = document.getElementById("dropDown")
let dropDownshow = false;
let isSideBarOpen = true;
const sidebar = document.getElementById("sidebar");
const logo = document.getElementById("logo")
const tooltip = document.querySelector(".tooltip");
const mobFoot = document.querySelector(".mob-foot");
const toggleNav = document.getElementById("toggle-nav")
const sideMain = document.getElementById("side-main")
const menu = document.querySelector(".menu")
let mobsidebar = false

function changeTab(button) {
    beats.style.border = "none";
    bp.style.border = "none";
    amazon.style.border = "none";
    stack.style.border = "none";
    beatsTab.style.display = "none";
    bpTab.style.display = "none";
    amazonTab.style.display = "none";
    stackTab.style.display = "none";
    if (button == "beats") {
        beatsTab.style.display = "table"
        beats.style.borderBottom = "4px solid #3E97FF"
    } else if (button == "amazon") {
        amazonTab.style.display = "table"
        amazon.style.borderBottom = "4px solid #3E97FF"
    } else if (button == "bp") {
        bpTab.style.display = "table"
        bp.style.borderBottom = "4px solid #3E97FF"
    } else if (button == "stack") {
        stackTab.style.display = "table"
        stack.style.borderBottom = "4px solid #3E97FF"
    }

}

function changeCampaign(info) {
    camp.style.border = "none"
    pending.style.border = "none"
    completed.style.border = "none"
    allcampaigns.style.display = "none";
    allpending.style.display = "none";
    allcompleted.style.display = "none";
    if (info == "campaigns") {
        camp.style.borderBottom = "2px solid rgb(40, 132, 239)"
        allcampaigns.style.display = "table"
    } else if (info == "pendings") {
        pending.style.borderBottom = "2px solid rgb(40, 132, 239)"
        allpending.style.display = "table"
    } else if (info == "completed") {
        completed.style.borderBottom = "2px solid rgb(40, 132, 239)"
        allcompleted.style.display = "table"
    }
}



menu.addEventListener("mouseover", onhover)
menu.addEventListener("mouseout", notHover)
toggleNav.addEventListener('click', toggleClick)


// onhover
function onhover() {
    console.log("over")
    const shortSidebar = document.querySelector(".shortSidebar")
    if (shortSidebar) {
        if (!isSideBarOpen) {
            toggleSideBar()
        }
    }
}

// onmouseout
function notHover() {
    const shortSidebar = document.querySelector(".shortSidebar")
    if (shortSidebar) {
        if (isSideBarOpen) {
            toggleSideBar()

        }
    }

}

// toggle on click

function toggleClick() {
    menu.classList.toggle("shortSidebar");

    toggleSideBar()
}

function toggleSideBar() {
    if (isSideBarOpen) {
        toggle("menu-title", "none")
        toggle("menu-arrow", "none")
        toggleVisibility("menu-content", "hidden")
        isSideBarOpen = false
        sidebar.style.width = "70px"
        logo.style.display = "none"
        tooltip.style.display = "none"
        mobFoot.style.display = "block";
        toggleNav.style.transform = 'rotate(180deg)'

    } else if (!isSideBarOpen) {
        toggle("menu-title", "flex")
        toggle("menu-arrow", "flex")
        toggleVisibility("menu-content", "visible")
        isSideBarOpen = true
        sidebar.style.width = "265px"
        logo.style.display = "block"
        tooltip.style.display = "block"
        mobFoot.style.display = "none"
        toggleNav.style.transform = 'rotate(0deg)';

    }
}

function showExtraDash() {
    if (dash == false) {
        extraDash.style.display = "block";
        dash = true
        morebtn.innerText = "-"
        dashToggle.innerText = "Show less"
    } else {
        extraDash.style.display = "none"
        dash = false
        morebtn.innerText = "+"
        dashToggle.innerText = "Show more"
    }
}

function showDropDown() {
    if (dropDownshow == false) {
        dropDown.style.display = 'block'
        dropDownshow = true
    } else {
        dropDown.style.display = "none"
        dropDownshow = false
    }
}


// to hide and show sidebar elements
function toggle(className, displayState) {
    var elements = document.getElementsByClassName(className)

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = displayState;
    }
}

function toggleVisibility(className, displayState) {
    var elements = document.getElementsByClassName(className)

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.visibility = displayState;
    }
}


// to show navbar with hamburger

function showMobSidebar() {
    sidebar.style.left = "0px";
    mobsidebar = true
}

function hideMobSidebar(event) {

    if (mobsidebar) {
        var mouseClickWidth = event.clientX;
        if (mouseClickWidth >= 265) {

            sidebar.style.left = "-300px";
        }

    }

}


document.addEventListener("click", hideMobSidebar);


