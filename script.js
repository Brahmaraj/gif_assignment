
function loadGif(){
    var search = document.getElementById('text').value;
    var url = `https://api.giphy.com/v1/gifs/search?api_key=PnxD0enrOdpimAMMN2zytQFHpULqvpgZ&limit=10&q=${search}`;
    var response = $.ajax(url,{
        timeout: 1000,
        success: function(data,status,xhr){
            console.log(data)
            let count=1;
            data.data.forEach(element => {
                document.getElementById("addgif"+count).src = element.images.downsized.url;
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