function printLeaves(n) {
    
    var string;
    if (n == 0) {
        string = "<span class = 'glyphicon glyphicon-leaf'></span>";
    }
    if (n == 1) {
        string = "<span class = 'glyphicon glyphicon-leaf'></span>";
    }
    if (n == 2) {
        string = "<span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span>";
    }
    if (n == 3) {
        string = "<span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span>";
    }
    if (n == 4) {
        string = "<span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span>";
    }
    if (n == 5) {
        string = "<span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span><span class = 'glyphicon glyphicon-leaf'></span>";
    }
    
    return string;
}

var main = function () {
    
    $('#numba').hide();
    
    $('#where').keypress(function (e) {
        
        if (e.which == 13) {
            $('#where').submit();
            return false;
        }
        
    });
    
    var map;
    
    $('#where').submit(function () {
    
        $('#numba').fadeIn();
        
        map = new google.maps.Map(document.getElementById('map'));
        
        var searchLocation = "restaurants near " + $('#where').val();
        
        var request = {
            query: searchLocation
        };
        
        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
        
    });
    
};

function callback(results, status) {
    
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        
        for (var i = 0; i < results.length; i++) {
            
            var place = results[i];
            
            var id = place.id;
            var name = place.name;
            var address = place.formatted_address;
            var url = place.url;
            var rating = place.rating;
            var ranking = Math.floor((Math.random() * 5) + 1);
            
            var ourPlace = {};
            ourPlace.id = id;
            ourPlace.name = name;
            ourPlace.address = address;
            ourPlace.url = url;
            ourPlace.rating = rating;
            
            $.ajax({
                
                url: 'js/php/insertPHP.php',
                type: 'post',
                data: {'points' : JSON.stringify(ourPlace)},
                success: function(data) {
                    
                }
            });
            
            var leaves = printLeaves(ranking);
            
            if (Math.round(place.rating) == 0) {
            $("#resultz").prepend("<div class = 'panel panel-default'><div class = 'panel-heading'><h3 class = 'panel-title'>" + place.name + "</h3><span class = 'pull-right'>" + leaves + "</div><div class = 'panel-body'>" + place.formatted_address + "<span class = 'pull-right'>" + "<span class = 'glyphicon glyphicon-star'></span>"  + "</span></div></div>");
            }
            if (Math.round(place.rating) == 1) {
            $("#resultz").prepend("<div class = 'panel panel-default'><div class = 'panel-heading'><h3 class = 'panel-title'>" + place.name + "</h3><span class = 'pull-right'>" + leaves + "</span></div><div class = 'panel-body'>" + place.formatted_address + "<span class = 'pull-right'>" + "<span class = 'glyphicon glyphicon-star'></span>"  + "</span></div></div>");
            }
            if (Math.round(place.rating) == 2) {
            $("#resultz").prepend("<div class = 'panel panel-default'><div class = 'panel-heading'><h3 class = 'panel-title'>" + place.name + "</h3><span class = 'pull-right'>" + leaves + "</span></div><div class = 'panel-body'>" + place.formatted_address + "<span class = 'pull-right'>" + "<span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span>"  + "</span></div></div>");
            }
            if (Math.round(place.rating) == 3) {
            $("#resultz").prepend("<div class = 'panel panel-default'><div class = 'panel-heading'><h3 class = 'panel-title'>" + place.name + "</h3><span class = 'pull-right'>" + leaves + "</span></div><div class = 'panel-body'>" + place.formatted_address + "<span class = 'pull-right'>" + "<span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span>"  + "</span></div></div>");
            }
            if (Math.round(place.rating) == 4) {
            $("#resultz").prepend("<div class = 'panel panel-default'><div class = 'panel-heading'><h3 class = 'panel-title'>" + place.name + "</h3><span class = 'pull-right'>" + leaves + "</span></div><div class = 'panel-body'>" + place.formatted_address + "<span class = 'pull-right'>" + "<span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span>"  + "</span></div></div>");
            }
            if (Math.round(place.rating) == 5) {
            $("#resultz").prepend("<div class = 'panel panel-default'><div class = 'panel-heading'><h3 class = 'panel-title'>" + place.name + "</h3><span class = 'pull-right'>" + leaves + "</span></div><div class = 'panel-body'>" + place.formatted_address + "<span class = 'pull-right'>" + "<span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span><span class = 'glyphicon glyphicon-star'></span>"  + "</span></div></div>");
            }
            
            
        }
        
    }
    
}

$(document).ready(main);