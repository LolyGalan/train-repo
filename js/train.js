//94a3359b
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=94a3359b

$(function () {
    
    $('#titulo').on('change', function () {
        let tituloPelicula = $(this).val();
        $.get('http://www.omdbapi.com/?i=tt3896198&apikey=94a3359b' , { s: tituloPelicula } , function (res) {
            
            console.log(res);
            res.Search.forEach(element => {
                $('#peli').append('<p>' + element.Title + '</p><img src="'+ element.Poster + '">');
            });

        });

    })
    
})