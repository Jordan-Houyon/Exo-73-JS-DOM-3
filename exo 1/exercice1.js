let avatarEléments = document.getElementsByTagName("img");


for (let i = 0; i<avatarEléments.length; i++){
    avatarEléments[i].innerText= i.toString();
    avatarEléments[i].style.height = "20px";
    avatarEléments[i].title = avatarEléments[i].alt;


}






