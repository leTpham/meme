"use strict";

let memes = [];

function showMemes() {
    let memeArea = document.getElementById("memes"); 
    let html = "";

    for(let i = 0; i < memes.length; i++){
        let meme = memes[i];
        let img = "<img src=\" " + meme.imgUrl +" \">";
        let topText = "<h3 class=topText>" + meme.topText + "</h3>";
        let bottomText = "<h3 class=bottomText>" + meme.bottomText + "</h3>";
        let deleteButton = "<button id= \"delete-" + i + "\" class = \"del\">🗑</i></button>";
        html +=
            "<div id=\" +i + \" class= \"meme\">" +"\n"
             + topText + "\n"
             + img + "\n"
             + bottomText + "\n"
             + deleteButton 
            + "</div>";
    }
    memeArea.innerHTML = html;
}

function addMeme(imgUrl, topText, bottomText) {
    memes.push({
        imgUrl: imgUrl,
        topText: topText,
        bottomText: bottomText,
    });
}

function handleSubmit(evt) {
    evt.preventDefault();

    let form = document.getElementById('meme-form');
    let imgUrl = form.imgUrl.value;
    let topText = form.topText.value;
    let bottomText = form.bottomText.value;
    addMeme(imgUrl, topText, bottomText);
    form.reset();
    showMemes();
}

function deleteMeme(id){
    memes.splice (id, 1);
}

function handleDelete(evt){
    if (evt.target.id.startsWith("delete-")){
        let memeId = Number(evt.target.id.split("")[7]);
        deleteMeme(memeId);
    }
showMemes();
}


showMemes();

document.getElementById("meme-form").addEventListener("submit", handleSubmit);

document.getElementById("memes").addEventListener("click", handleDelete);