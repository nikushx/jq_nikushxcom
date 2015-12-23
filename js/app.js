var main = function () {
    
    $('.initialBox').animate({
            
            left: '50%'
            
        }, 200);
    
    $('.enter').click( function () {
                
        $('.initialBox').animate({
            
            left: '225%'
            
        }, 200);
        
        $('.welcomeBox').animate({
            
            left: '50%'
            
        }, 200);
        
    });
    
    $('#1').click( function () {
        
        $('.welcomeBox').animate({
            
            left: '225%'
            
        }, 200);
        
        $('.aboutBox').animate({
            
            left: '50%'
            
        }, 200);
        
    });
    
    $('#2').click( function () {
        
        $('.welcomeBox').animate({
            
            left: '225%'
            
        }, 200);
        
        $('.expBox').animate({
            
            left: '50%'
            
        }, 200);
        
    });
    
    $('#3').click( function () {
        
        $('.welcomeBox').animate({
            
            left: '225%'
            
        }, 200);
        
        $('.contactBox').animate({
            
            left: '50%'
            
        }, 200);
        
    });
    
};

$(document).ready(main);