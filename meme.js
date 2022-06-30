"use strict";


let memes = [
   
];
function showMemes() {
    console.log("showMemes");

    let memeArea = document.getElementById("memes");
    let html = "";

    for(let i = 0; i < memes.length; i++){
        let meme = memes[i];
        let img = "<img src=\" " +meme.imgUrl +" \">";
        let topText = "<h3>" + meme.topText + "</h3>";
        let bottomText = "<h3>" + meme.bottomText + "</h3>";
        html +=
            "<div id= \"meme-" + i +"\"" + "class= \"meme\">" +"\n"
             + topText + "\n"
             + img + "\n"
             + bottomText + "\n"
            + "</div>;"
    }

    memeArea.innerHTML = html;
}

function addMeme(imgUrl, topText, bottomText) {
    console.log("addMeme", imgUrl, topText, bottomText);

    memes.push({
        imgUrl: imgUrl,
        topText: topText,
        bottomText: bottomText,
    });
    
}

function handleSubmit(evt) {
    console.log('handleSubmit', evt);
    evt.preventDefault();

    let form = document.getElementById('meme-form');
    let imgUrl = form.imgUrl.value;
    let topText = form.topText.value;
    let bottomText = form.bottomText.value;
    addMeme(imgUrl, topText, bottomText);
    showMemes();
}

function enterKey(evt) {
    if (evt.key === "Enter"){
    console.log('enterKey', evt);
    evt.preventDefault();

    let form = document.getElementById('meme-form');
    let imgUrl = form.imgUrl.value;
    let topText = form.topText.value;
    let bottomText = form.bottomText.value;
    addMeme(imgUrl, topText, bottomText);
    showMemes();}

}



function handleDelete(evt){
    console.log("handleDelete", evt);
    let memeId = Number(evt.target.id.slice(5));
    deleteMeme(memeId);
    showMemes();
}

function deleteMeme(id){
    console.log("delete Meme", id)
    memes.splice(id, 1)
}

showMemes();



document.getElementById("meme-form").addEventListener("submit", handleSubmit);
document.getElementById("meme-form").addEventListener("keypress", enterKey);
document.getElementById("memes").addEventListener("click", handleDelete);
