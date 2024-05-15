function showNonImageDetails(hike){
    details.innerHTML = `
    <h1>${hike.name}</h1>
    <p>${hike.description}</p>
    <table><tr><th>Length</th></th>Difficulty</th></tr>
        <tr><td>${hike.length}</td><td>${hike.difficulty}</td></table>
    <p>ID: ${hike.id} </p>
    `;
}
function showImage(imageName, title){
    details.innerHTML += `<h2>${title}</h2>
    <img src="./images/${imageName}"`;
}

function showHikeDetails(hike){
    showNonImageDetails(hike);
    showImage(hikes.scenicImage, "Scenic Image");
    showImage(hikes.trailMapImage, "Trail Map");
}
function onHikeChange(){
for(h of hikes){
    if(h.id == hikesElement.value){
       showHikeDetails(h);
    }
}
}

function showHikes(){
    for(h of hikes){
    hikesElement.innerHTML += `<option value="${h.id}">${h.name}</option>`
    }
}
function init(){
    showHikes()
    hikesElement.addEventListener("change", onHikeChange)
}
document.addEventListener("DOMContentLoaded", init);

