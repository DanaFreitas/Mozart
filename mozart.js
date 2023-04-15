const ham = document.getElementById("hamburger");
const menu = document.getElementById("menu");
let menc = document.getElementsByClassName("menuclass0")


ham.addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("show");
});


ham.addEventListener("click", () => {
  if (menu.classList.contains("menuclass0") || (menu.classList.contains("menuclass")))  {
    menu.classList.remove("menuclass0");
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


let aud = new Audio("Eine-Kleine-Nachtmusik.mp3");


aud.play();

const music = document.getElementById("musicbutton");
//let sound = document.getElementById("test");
let test = document.getElementById("test");
let audioele = document.getElementById("audios");


music.addEventListener("click", () => {

  let audiosource = new Audio("Eine-Kleine-Nachtmusik.mp3");
  //let sound = document.getElementById("audios");

  console.log(test)
  console.log(audioele)


  if (test.style.display == "block"){

    console.log("no block");

    console.log(test)
    console.log(audioele)

    test.style.display = "none"
    test.style.padding = "50px";
    //sound.style.display = "none";
    audioele.style.display = "none";
   // audiosource.play();  
    //console.log("testing");
    console.log("no block");

    console.log(test)
    console.log(audioele)

//whatever changes go on only are effected by the initial if statement. additionally, the other styles are uniformly wiped out,
//replaced by an elment{} not of my creation.
//perhaps I need to wrap it
//wrapping doesnt work. the button is doing something, but im not sure what the exaxt problem is
//padding effects it, but even when set to block, the element just...dissappears 

  } else if (test.style.display == "none")
{    


test.style.display = "block"
audioele.style.display = "block"

console.log("block");

console.log(test)
console.log(audioele)


}
console.log("    ")
console.log("    ")
console.log("    ")

//for some reason, the condition for the if statement never thinks its false
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
