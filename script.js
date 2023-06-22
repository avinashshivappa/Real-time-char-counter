const textaraeEl = document.getElementById("textarea")
const totalcounterEl = document.getElementById("total-counter")
const remainingcounterEl = document.getElementById("remaining-counter")

textaraeEl.addEventListener("keyup", ()=>{
    console.log("key is pressed")
    updateCounter()
})

function updateCounter(){
  totalcounterEl.innerText =  textaraeEl.value.length
   remainingcounterEl.innerText =  textaraeEl.getAttribute("maxlength") - textaraeEl.value.length
}

