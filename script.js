let text = document.getElementById("text");
let alert = document.getElementById("alert");

function storeString (input){
    // console.log(input);
    text.innerHTML = input;
    if (input.length>20){
        alert.innerHTML = "Tu título no puede tener más de 20 caracteres";
        alert.style.display = "block";
        text.style.color = "red";
    }else {
        alert.style.display = "none";
        text.style.color = "rgba(0, 0, 0, 0.5)";
    }
}