
function loadGif(){
    var search = document.getElementById('text').value;
    var url = `https://api.giphy.com/v1/gifs/search?api_key=PnxD0enrOdpimAMMN2zytQFHpULqvpgZ&limit=10&q=${search}`;
    var response = $.ajax(url,{
        timeout: 1000,
        success: function(data,status,xhr){
            console.log(data)
            let count=1;
            data.data.forEach(element => {
                var img_tag = document.createElement('img');
                img_tag.id = "addgif"+count;
                img_tag.className = "common";
                //console.log(img_tag);
                document.getElementById('main-container').appendChild(img_tag);
                document.getElementById("addgif"+count).src = element.images.downsized.url;
                img_tag.src = element.images.downsized.url;
                //document.appendChild
                count++;
            });
            //document.getElementById('addgif1').src = data.data[0].images.downsized.url;
        },
        error: function(jqXHR,textstatus,err){
            console.log(" jqxhr ",jqXHR," textstatus ",textstatus," error ",err);
        }
    })
    console.log(response);
}