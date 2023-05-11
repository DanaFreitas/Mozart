const ham = document.getElementById("hamburger");
const menu = document.getElementById("menu");
let menc = document.getElementsByClassName("menuclassdefault");
const holder = document.getElementById("burgerholder");

ham.addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("show");
});

ham.addEventListener("click", () => {
  if (
    menu.classList.contains("menuclassdefault") ||
    menu.classList.contains("menuclassexit")
  ) {
    menu.classList.remove("menuclassdefault");
    menu.classList.remove("menuclassexit");
    menu.classList.add("menuclassenter");
    // document.getElementById("hamburger").style.position = "fixed";
    //document.getElementById("hamburger").style.left = "14.3vw";
    //document.getElementById("navbar").style.position = "relative";
  } else if (menu.classList.contains("menuclassenter")) {
    menu.classList.add("menuclassexit");
    menu.classList.remove("menuclassenter");
   // document.getElementById("hamburger").style.position = "relative";
    document.getElementById("hamburger").style.width = "";
   // document.getElementById("hamburger").style.left = "0rem";
   // document.getElementById("navbar").style.position = "fixed";
  }
});

const keyframesRule = `
  @keyframes myAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const music = document.getElementById("musicbutton");

const audioele = document.getElementById("audios");
const audiosource = new Audio("Eine-Kleine-Nachtmusik.mp3");
music.addEventListener("click", () => {
  if (audioele.style.display == "none" || audioele.style.display == "") {
    audioele.style.display = "block";
    audiosource.play();
  } else if ((audioele.style.display = "block")) {
    audioele.style.display = "none";
    audiosource.pause();
    audiosource.currentTime = 0;
  }
});

//if block, else none it works fine
//if none else block, there needs to be a second click for it to start working

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("Mozartimagetest");
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("Mozartimagetest");
    }
  });
});

window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    const sections = Array.from(document.getElementsByClassName("Mozartimage"));

    for (let section of sections) {
      observer.observe(section);
    }
  },
  options
);

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("Legacy_Video");
      observer2.unobserve(entry.target);
    } else {
      entry.target.classList.remove("Legacy_Video");
    }
  });
});

window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    const sections = Array.from(
      document.getElementsByClassName("Legacy_Video")
    );

    for (let section of sections) {
      observer2.observe(section);
    }
  },
  options
);












const contact = document.getElementsByClassName("Footer__Button--Dark");
const contactlight = document.getElementsByClassName("Footer__Button--Light");
const testing = document.getElementById("Spotifydark");

for (let i = 0; i < contact.length; i++) {
  contact[i].addEventListener("click", () => {
    if ((contact[i].style.display = "block")) {

      contact[i].style.display = "none";
      contactlight[i].style.display = "block";

    } else if (contact[i].style.display = "none")
    
    {
      contact[i].style.display = "block";
      contactlight[i].style.display = "none";

    }
  });
}


for (let j = 0; j < contactlight.length; j++) {
  contactlight[j].addEventListener("click", () => {
    if ((contactlight[j].style.display = "block")) {

      contact[j].style.display = "block";
      contactlight[j].style.display = "none";
    } else if (contactlight[j].style.display = "none")
    
    {
      contact[j].style.display = "none";
      contactlight[j].style.display = "block";
    }
  });
}