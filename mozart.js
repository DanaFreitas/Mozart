let ham = document.getElementById("hamburger")
ham.addEventListener ("click", 
() => {
    document.getElementById("hamburger").classList.toggle("show")

})
ham.addEventListener ("click", 
() => {
if (document.getElementById("menu").style.display == "block") {
    document.getElementById("menu").style.display = "none"
    document.getElementById("menu").style.width = "0rem"

}

else  {
    document.getElementById("menu").style.display = "block"
    document.getElementById("menu").style.width = "10rem"

}
   console.log("test")

})









//observer.observe(document.getElementById("box"));
//vs
//observer.observe(document.getElementById("Mozartfamily"));




//let increasingopacity = fam.style.opacity = "0";


/*
let opa = document.getElementById("box").style.opacity;
let opa2 = parseFloat(document.getElementById("Mozartfamily").style.opacity);
let opa3 = document.getElementById("Mozartfamily");

const styling = window.getComputedStyle(opa3);
console.log(`My opacity is ${styling.getPropertyValue("opacity")}`)

console.log(opa2)
console.log(typeof opa2)
*/

////Why didn't I use css to set up the animation and js to trigger it?
//Try https://dev.to/jslim/fading-up-sections-using-intersection-observer-3fhj VERY IMPORTANT





	const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {

     // const intersecting = entry.isIntersecting
     // entry.target.style.backgroundColor = intersecting ? "blue" : "orange"
     //console.log(`The revised opacity is ${opa}`)
     //console.log(`The revised color is ${blue}`)


     if (entry.isIntersecting) {
      entry.target.classList.add('Mozartimagetest');
      observer.unobserve(entry.target);
     // entry.target.classList.remove('Mozartimagetest');


  // if (intersecting == true){

     }}
   )})

   //observer.observe(document.getElementById("Mozartfamily"));


   window.addEventListener('DOMContentLoaded', (event) => { 

    const sections  =Array.from(document.getElementsByClassName('Mozartimage'));
    
    for (let section of sections) {
      observer.observe(section);
    }
    
    });




/*
opa3.style.opacity = ".15";
const sty = window.getComputedStyle(opa3);
console.log(`My unadjusted opacity is ${sty.getPropertyValue("opacity")}`)
*/

 //   for (let i = 0; i < 10; i++) {

     
      

     // project(i)

    //  task(i);

    //  testing(i)

/*
    }

   function project(i){

    setTimeout(() => {(opa2 +=  parseFloat(.2))
      console.log(opa2)
      console.log(typeof parseFloat(.2))
      console.log(typeof opa2)

    ;}, 2000 * i); }



   function task(i) {
    setTimeout(function() {
      opa == parseInt(.7)
      console.log(opa2)

      document.getElementById("Mozartfamily").style.opacity == opa2
      
    }, 2000 * i);
  }

function testing(i){

  setTimeout(() => {opa3.style.opacity += .1
    console.log(opa)
  ;}, 2000 * i); }



}}
  )})

*/




/*
window.addEventListener(
    "load",
    (event) => {
      boxElement = document.querySelector("#box");
  
      createObserver();
    },
    false
  );

  function createObserver() {
    let observer;
  
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList(),
    };
  
    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
  }

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > prevRatio) {
        //entry.target.style.backgroundColor = increasingColor.replace(
        //  "ratio",
         // entry.intersectionRatio
         entry.target.opacity = increasingopacity.replace(
                entry.intersectionRatio
        );
      } else {
        //entry.target.style.backgroundColor = decreasingColor.replace(
          //"ratio",
          //entry.intersectionRatio
          entry.target.opacity = decreasingopacity.replace(
            entry.intersectionRatio

        );
      }
  
      prevRatio = entry.intersectionRatio;
    });
  }
  
  function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;
  
    for (let i = 1.0; i <= numSteps; i++) {
      let ratio = i / numSteps;
      thresholds.push(ratio);
    }
  
    thresholds.push(0);
    return thresholds;
  }
  */