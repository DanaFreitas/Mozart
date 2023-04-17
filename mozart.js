const ham = document.getElementById("hamburger");
const ham2 = document.getElementById("hamburger2");
const menu = document.getElementById("menu");
let menc = document.getElementsByClassName("menuclass0");


ham.addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("show");
  document.getElementById("hamburger2").classList.toggle("show");

});

ham.addEventListener("click", () => {
 // const ham2 = document.getElementById("hamburger2");

  if (
    menu.classList.contains("menuclass0") ||
    menu.classList.contains("menuclass")
  ) {
    menu.classList.remove("menuclass0");
    menu.classList.remove("menuclass");    
    menu.classList.add("menuclass2");
    ham.style.display = "none";
    ham2.style.display = "block";

//ham.remove()
//ham2.add()

  }
});

ham2.addEventListener("click", () => {
  {
    document.getElementById("hamburger").classList.toggle("show");
    document.getElementById("hamburger2").classList.toggle("show");
  

    //ham2.remove()
    //ham.add()
    ham2.style.display = "none";
    ham.style.display = "block";

    menu.classList.remove("menuclass2");
    menu.classList.add("menuclass");}
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


  if ((audioele.style.display == "none" || audioele.style.display == "")) {
    audioele.style.display = "block";
    audiosource.play();


  }
 else if (audioele.style.display = "block") {
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

//increase threshhold
//add music icon. secondary effect. should nudge the title and hamburger to right places
//make animation for menu when selecting button
