function bg_color() {
  let myreturn = document.body;
  myreturn.classList.toggle("return1");

  //document.getElementById("listOfItems").style.color = "black";
}

function reduce() {
  let another = Array.from(document.getElementsByClassName("items"));
  another.map((items) => {
    items.classList.toggle("return2");
  });
}
// function bg_color(){
//     document.getElementById("bgcolor").style.backgroundColor="brown";
//     document.getElementById("bgcolor").style.fontFamily="Franklin Gothic Medium";

//     }

//      function reduce(){
//          document.getElementById("image").style.opacity="0.36";
//     }
