const toggleButton = document.getElementById("toggle-button");
toggleButton.addEventListener("click", ()=> {
    var element = document.body;
    if(element.classList.toggle("dark-mode")){
    toggleButton.innerHTML = "Switch to bright mode";
  }else{
    toggleButton.innerHTML = "Switch to dark mode";
  }
}
)