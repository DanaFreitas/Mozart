let ham = document.getElementById("hamburger");
ham.addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("show");
});
ham.addEventListener("click", () => {
  if (document.getElementById("menu").style.display == "block") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu").style.width = "0rem";
  } else {
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu").style.width = "10rem";
  }
  console.log("test");
});




let aud = new Audio("Eine-Kleine-Nachtmusik.mp3")

aud.play();


const music = document.getElementById("music");

music.addEventListener("click", () => {
  
  let aud = new Audio("Eine-Kleine-Nachtmusik.mp3")

  aud.play();
  

}

)



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
    }

    else{
      entry.target.classList.remove('Mozartimagetest');
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