const selectForm = document.getElementById('search-form');


//select form
selectForm.addEventListener('submit',function(e){
     //Get limit
     const searchLimit = document.getElementById('limit').value;

     //fetch data from the api
     fetch(`https://meme-api.herokuapp.com/gimme/${searchLimit}`)
     .then(res => res.json())
     .then(data => showData(data.memes))
     .catch(err => console.log(err));
    e.preventDefault();
})

//Show Data
function showData(data){
    document.getElementById('results').innerHTML =  data.map(dat => 
                `<div class="card meme col-sm-12 mb-5">
                <img src="${dat.url}" class="card-img-top" />
                <div class="card-body">
                <h5 class="card-title">${dat.title == undefined ? 'img/download.png' : dat.title}</h5>
                </div>
                 </div>`).join('');
}

// async function downloadImage(link) {
//     const a = document.createElement("a");
//     a.href = await toDataURL(link);
//     a.download = "";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// }

// async function download() {
//     const link = getLink();
//     await downloadImage(link);
// }

// function getLink() {
//     return "/meme?" + $.param({
//         "meme" : $("#meme").val(),
//         "top" : $("#top-text").val(),
//         "bottom" : $("#bottom-text").val()
//     });
// }

// function update() {
//     const link = getLink();
//     $("#meme-image").attr("src", link);
//     $("#api-link").val(window.origin + link).parent().show();
// }
// $("form").change(function() {
//     update();
// }).submit(function() {
//     update();
//     return false;
// });


// update();