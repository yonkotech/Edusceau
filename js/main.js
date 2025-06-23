if (localStorage.getItem("theme") == "dark") {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector(".theme-switch").classList.add("dark");
} else {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector(".theme-switch")?.classList.remove("dark");
}

document.querySelector(".theme-switch").addEventListener("click", () => {
    const att = document.querySelector("body").getAttribute("data-bs-theme") ?? "light";
    if (att == "light") {
        document.querySelector("body").setAttribute("data-bs-theme", "dark");
        document.querySelector(".theme-switch")?.classList.add("dark");
    } else {
        document.querySelector("body").setAttribute("data-bs-theme", "light");
        document.querySelector(".theme-switch")?.classList.remove("dark");
    }
    localStorage.setItem("theme", document.querySelector("body").getAttribute("data-bs-theme") ?? "light");
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


document.getElementById("verify")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const correct = getRandomInt(0, 13) % 2 == 0;
    

    document.querySelectorAll(".negative").forEach(e=>{
        if(correct){
            e.classList.add("active");
        }else{
            e.classList.remove("active");
        }
    })

    document.querySelector(".message").classList.add("visible");

});

document.getElementById("connexion")?.addEventListener("submit", (e) => {
    e.preventDefault();
    location = "dashboard.html";
    localStorage.setItem("connected", "1");
    localStorage.setItem("user-id", document.querySelector("#email").value[0].toUpperCase());
});
console.log("lieu", location.pathname);
console.log(!location.pathname.includes("signup.html") && !location.pathname.includes("opt.html") && !location.pathname.includes("login.html"));

if (
    !(
        localStorage.getItem("connected") ??
        localStorage.getItem("connected") == 1
    )
) {

    if (!location.pathname.includes("signup.html") && !location.pathname.includes("opt.html") && !location.pathname.includes("login.html")) {
        location = "login.html";
    }
}


document.getElementById("disconnect")?.addEventListener("click", () => {
    localStorage.removeItem("connected");
    location = "login.html";
})

if (document.getElementById("user-id")) document.getElementById("user-id").innerText = localStorage.getItem("user-id");

document.getElementById("inscription")?.addEventListener("submit", (e) => {
    e.preventDefault();
    location = "opt.html";
})

document.getElementById("verify-mail")?.addEventListener("submit", (e) => {
    e.preventDefault();
    location = "login.html";

});


document.getElementById("delete-req")?.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".message").classList.add("visible");

    document.getElementById("delete").addEventListener("submit", () => {
        localStorage.removeItem("connected");
        location = "login.html";
    })

});

