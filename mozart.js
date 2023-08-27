  const ham = document.getElementById("hamburger");
const slidemenu = document.getElementById("slidemenu");
const holder = document.getElementById("burgerholder");

const title = document.getElementById("title");

title.addEventListener("click", (event)=> {
  let Mozartheader = document.getElementById("Mozart")
  event.preventDefault();
   Mozartheader.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
 })



 const menubutton = document.getElementsByClassName("scrollitem");
 const offset = 0;
 for (let k = 0; k < menubutton.length; k++) {  

  menubutton[k].addEventListener("click", (event) => {
  event.preventDefault();
    let section = document.getElementsByClassName("section");
     if (k > 3) {k -= 4}
    section[k].scrollIntoView({ behavior: "smooth", block: "start", inline: "center" })
  })}



ham.addEventListener("click", () => {
  document.getElementById("hamburger").classList.toggle("show");
});

ham.addEventListener("click", () => {
  

  if (
    slidemenu.classList.contains("menu_slide") ||
    slidemenu.classList.contains("menuclassexit")
  ) {
    slidemenu.classList.remove("menu_slide");
    slidemenu.classList.remove("menuclassexit");
    slidemenu.classList.add("menuclassenter");
  } else if (slidemenu.classList.contains("menuclassenter")) {
    slidemenu.classList.add("menuclassexit");
    slidemenu.classList.remove("menuclassenter");
    document.getElementById("hamburger").style.width = "";
  }
});






//const menubutton = document.getElementsByClassName("scrollitem");
//const offset = 0;



for (let k = 0; k < menubutton.length; k++) {  

 menubutton[k].addEventListener("click", (event) => {
 event.preventDefault();

   let section = document.getElementsByClassName("section");

    if (k > 3) {k -= 4}


   section[k].scrollIntoView({ behavior: "smooth", block: "start", inline: "center" })
 





  
  const respon = document.getElementsByClassName("header__responsivemenu--item")
if (event.target = respon) {
  //console.log("test2")
  } 

 else {
  document.getElementById("hamburger").classList.toggle("show");
console.log("test2")
     slidemenu.classList.add("menuclassexit")
   slidemenu.classList.remove("menuclassenter")
    document.getElementById("hamburger").style.width = "";
 }
//doesnt seem to make a difference
} )}
  

    
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
          entry.target.classList.add("Mozartimageanimate");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("Mozartimageanimate");
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
          entry.target.classList.add("grave__Grave--Animate");
          observer3.unobserve(entry.target);
        } else {
          entry.target.classList.remove("grave__Grave--Animate");
        }
      });
    });
    
    window.addEventListener(
      "DOMContentLoaded",
      (event) => {
        const sections = Array.from(
          document.getElementsByClassName("grave__Grave--CrossWrapper")
        );
    
        for (let section of sections) {
          observer3.observe(section);
        }
      },
      options
    );

    [...document.getElementsByClassName("Footer__Button")].forEach(function (item) {
      item.addEventListener("click", function () {
        obj[this.id]();
      });
    });
    
    const obj = {
      spotify1: function () {
        window.location.href =
          "https://open.spotify.com/artist/4NJhFmfw43RLBLjQvxDuRS";
      },
    
      spotify2: function () {
        window.location.href =
          "https://open.spotify.com/artist/4NJhFmfw43RLBLjQvxDuRS";
      },
    
      soundcloud1: function () {
        window.location.href = "https:soundcloud.com/MOZART";
      },
    
      soundcloud2: function () {
        window.location.href = "https:soundcloud.com/MOZART";
      },
    
      pandora1: function () {
        window.location.href =
          "https://www.pandora.com/artist/wolfgang-amadeus-mozart/ARlXdwmldP4lrc4";
      },
    
      pandora2: function () {
        window.location.href =
          "https://www.pandora.com/artist/wolfgang-amadeus-mozart/ARlXdwmldP4lrc4";
      },
    };
    
    
         
      const formsubmit = document.getElementById("submit")
      const formrecipient = document.getElementById("email")
      const formsubject = document.getElementById("subject")
      const formtext = document.getElementById("text")
      

      

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
      