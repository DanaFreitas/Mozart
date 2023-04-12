const ham = document.getElementById("hamburger");
const menu = document.getElementById("menu");
let menc = document.getElementsByClassName("menuclass")


ham.addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("show");
});


ham.addEventListener("click", () => {
  if (menu.classList.contains("menuclass"))  {
    menu.classList.remove("menuclass");
    menu.classList.add("menuclass2");
  } else if (menu.classList.contains("menuclass2")) {    
    menu.classList.remove("menuclass2");
  menu.classList.add("menuclass");
//document.getElementsByClassName("menuclass").style.display="none";


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

ham.addEventListener("click", () =>{
  
})


/*
const appear = {
  transform: "translate(500px, 0px)",
};

const dissappear = {
  transform: "translate(-500px, 0px)",
};

const move = {
  duration: 500,
  iterations: 1,
};

menu.addEventListener("click", () => {
  if (document.getElementById("menu").style.animate == "") {
    menu.animate(appear, move);
  }

  else if (appear = true){
    menu.animate(dissappear, move);
  }

  else {
    menu.animate(appear,move)
  }

});
*/

//get elementbyid.
//onclick for loop.
//  paragraphs[i].style.animate = "";

let aud = new Audio("Eine-Kleine-Nachtmusik.mp3");

aud.play();

const music = document.getElementById("music");

music.addEventListener("click", () => {
  let aud = new Audio("Eine-Kleine-Nachtmusik.mp3");
  let audio = document.getElementById("audio");

  audio.style.display = "absolute";
  aud.play();
});

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

//increase threshhold
//add music icon. secondary effect. should nudge the title and hamburger to right places
//make animation for menu when selecting button
