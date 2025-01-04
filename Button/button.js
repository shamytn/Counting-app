

let saveEl = document.getElementById("save-el")
let Countel = document.getElementById("count-el")// get the specific elementId wichi is located to html  (ito yung zero value sa html)
console.log(Countel)// to run the element that you get you need to console.log to get the order that you requested 
console.log(saveEl)

let count  = 0; // letting the count will be start from zero 

function Increment(){ // this   function variable  increment is connected to the html located in script (button 'to)
    count = count += 1 // so yung zero na value is madagdagan ng madadagdagan one user clicked the button  +1+ 2 +.... (zero na value)
    Countel.innerText = count 
    // ito yung kunuha mong elemment tapos cinonnect mo sa count so basically yung countel variable is maadopt nya yung  value ng count funtion so yung 
}
Increment()

//let  DisPlay= document.getElementById("")

function display(){
    let save = count
    saveEl.innerText += save + " " +" - "
    //let Countel  = 0
      count = 0
     Countel.innerText = count


     //saveEl.textContent = "Something went wrong, Please try again! "

    }
    console.log(count)


