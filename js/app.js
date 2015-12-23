var main = function () {
    
    $('.initialBox').animate({
            
            left: '50%'
            
        }, 200);
    
    $('.enter').click( function () {
                
        $('.initialBox').animate({
            
            left: '125%'
            
        }, 200);
        
        $('.welcomeBox').animate({
            
            left: '50%'
            
        }, 200);
        
    });
    
    $('#1').click( function () {
        
        $('.welcomeBox').animate({
            
            left: '125%'
            
        }, 200);
        
    });
    
    $('#2').click( function () {
        
        $('.welcomeBox').animate({
            
            left: '125%'
            
        }, 200);
        
    });
    
    $('#3').click( function () {
        
        $('.welcomeBox').animate({
            
            left: '125%'
            
        }, 200);
        
    });
    
};

$(document).ready(main);