document.addEventListener('DOMContentLoaded', function(event) {
    let xPos = Math.floor(Math.random() * 4) + 1;
    let yPos = Math.floor(Math.random() * 4) + 1;
    document.getElementById(`${xPos}-${yPos}`).style.backgroundColor = "lightblue";
  })

 function boxClicked(id) {
    console.log(`${id}: ${document.getElementById(id).style.backgroundColor}`);
    let box = document.getElementById(id);

    if(box.style.backgroundColor === "red") {
        box.style.backgroundColor = "#d9d9d9";
    } else {
        box.style.backgroundColor = "red";
    }
  }