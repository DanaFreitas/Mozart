header {background-color:pink; display:grid; grid-template: "p1" "p2"  
;}
 

.wrapper1 {background-color: lightblue; grid-area: p1; display:flex; flex-direction: row; justify-content: space-evenly;}

  @media screen and (min-width: 480px) {
.item1 {display:none;}
} 


.wrapper2 {display:none}

 @media screen  and (min-width: 480px) {
  .wrapper2{background-color: red; grid-area: p2; display:flex; flex-direction: row; justify-content: space-evenly;}
}
  
