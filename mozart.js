

const ham = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const holder = document.getElementById("burgerholder");



//makes menu animate
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

  } else if (menu.classList.contains("menuclassenter")) {
    menu.classList.add("menuclassexit");
    menu.classList.remove("menuclassenter");
    document.getElementById("hamburger").style.width = "";   



  }
});









//makes menu dissappear







const menubutton = document.getElementsByClassName("menu-item")

const offset = 10;




 for (let k = 0; k < menubutton.length; k++) {


 menubutton[k].addEventListener("click",  (event) => {
  //console.log(window.scrollY);


event.preventDefault();
//Stop the buttons from going directly to the element. the menu distorts what is shown.


const index = Array.from(menubutton).indexOf(event.target);
//the element represents the targeted part of an array made up of the inputted elements.
let targetPosition = menubutton[index].getBoundingClientRect().top + window.scrollY + offset;
//getboundingclientrect provides the position of the element relative to the viewport
//.top is the topmost window
//window.scrollY is how many pixels from the top the viewport is
//offset is a value of pixels

console.log(targetPosition)
//targetPosition.scrollIntoView({ top: targetPosition, behavior: 'smooth' });
window.scrollTo({ top: targetPosition, behavior: 'smooth' });


//issue. the scrolling only moves the screen a handful of pixels, not to the target/






    document.getElementById("hamburger").classList.toggle("show");

    menu.classList.add("menuclassexit");

    menu.classList.remove("menuclassenter");

    window.moveTo(11110, 1110);



    document.getElementById("hamburger").style.width = "";

   })
 }






 


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

let music = document.getElementById("musicbutton");

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


let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
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



const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("Contact__Grave--Animate");
      observer3.unobserve(entry.target);
    } else {
      entry.target.classList.remove("Contact__Grave--Animate");
    }
  });
});

window.addEventListener(
  "DOMContentLoaded",
  (event) => {
    const sections = Array.from(
      document.getElementsByClassName("Contact__Grave--CrossWrapper")
    );

    for (let section of sections) {
      observer3.observe(section);
    }
  },
  options
);











  let contact = document.getElementsByClassName("Footer__Button--Dark");

  for (let i = 0; i < contact.length; i++) {
    contact[i].addEventListener("mouseover", () => {
    

      if (contact[i].style.display == "block") {
        contact[i].style.display = "none";
        contactlight[i].style.display = "block";

     
      } else if ((contact[i].style.display = "none")) {
        contact[i].style.display = "block";
        contactlight[i].style.display = "none";
      }
    });
  }


  [...document.getElementsByClassName("Footer__Button")].forEach(function(item){

    item.addEventListener('click', function() {
    obj[this.id]();
  })
    })
    
   

   var obj = {
  
     spotify1: function() {
       window.location.href="https://open.spotify.com/artist/4NJhFmfw43RLBLjQvxDuRS"
     },
  
     spotify2:  function() {
       window.location.href="https://open.spotify.com/artist/4NJhFmfw43RLBLjQvxDuRS"
     },
  
     soundcloud1: function() {
       window.location.href="https:soundcloud.com/MOZART"
     },
  
     soundcloud2: function() {
     window.location.href="https:soundcloud.com/MOZART"
   },
  
      pandora1: function()  {
        window.location.href="https://www.pandora.com/artist/wolfgang-amadeus-mozart/ARlXdwmldP4lrc4"
      },
  
      pandora2: function()  {
        window.location.href="https://www.pandora.com/artist/wolfgang-amadeus-mozart/ARlXdwmldP4lrc4"
      }  
   }


  let contactlight = document.getElementsByClassName("Footer__Button--Light");


  for (let j = 0; j <= contactlight.length; j++) {
    contactlight[j].addEventListener("mouseout", () => {
      if (contactlight[j].style.display == "block") {
        contact[j].style.display = "block";
        contactlight[j].style.display = "none";
      } else if ((contactlight[j].style.display = "none")) {
        contact[j].style.display = "none";
        contactlight[j].style.display = "block";
      }
    });
  }






