const menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => { navbar.classList.toggle("active"); }
window.onscroll = () => { navbar.classList.remove("active"); }

async function getData(num) {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const data = await res.json();

    const arr = []

    for (let i = 0; i < num; i++) {
        arr.push(data.meals[i])
    }

    return arr;
}

async function main() {
    const data = await getData(5);
    displayData(data);
}

main();

function displayData(arr) {
    const container = document.querySelector(".about-container")
    

    for (let i = 0; i < arr.length; i++) {
        const box = document.createElement("div")
        box.classList.add("about-box")

        const boxImg = document.createElement("div")
        boxImg.classList.add("box-img")

        const img = document.createElement("img")
        img.src = `${arr[i].strMealThumb}`

        const name = document.createElement("h3")
        const detail = document.createElement("h2")

        name.textContent = `${arr[i].strMeal}`
        detail.textContent = `${arr[i].strArea} ${arr[i].strCategory}`

        boxImg.appendChild(img)
        box.appendChild(boxImg)
        box.appendChild(name)
        box.appendChild(detail)
        container.appendChild(box)
    }
}



const form = document.getElementById("contactForm")
const formDiv = document.querySelector(".contact-form")

console.log(form)
console.log(formDiv)

form.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log("YO")

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    console.log(name)

    localStorage.setItem("name", name)

    const notif = document.createElement("div")
    notif.classList.add("notif")
    notif.textContent = `${name}, your email has been registered`

    formDiv.appendChild(notif)

    setTimeout(() => {
        notif.remove()
        document.getElementById("email").value =  ""
        document.getElementById("name").value = ""
        document.getElementById("message").value = ""
    }, 3000);
})



// scroll
const scroll = document.getElementById("scroll")

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scroll.classList.add("show")
    } else {
        scroll.classList.remove("show")
    }
})

scroll.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})
