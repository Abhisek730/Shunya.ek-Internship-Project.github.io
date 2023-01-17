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
const allcampaigns = document.getElementById("allCampaigns")



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

// beats.addEventListener("click", changeTab("beats"));
// amazon.addEventListener("click", changeTab("amazon"));
// bp.addEventListener("click", changeTab("bp"));
// stack.addEventListener("click", changeTab("stack"));

