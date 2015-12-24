var main = function () {
    
    var fadeSpeed = 400;
    
    $('.returnArrow').hide();
    $('.initialBox').hide();
    $('.initialBox').fadeIn(1000);
    
    $('.enter').click(function () {
                
        $('.initialBox').animate({
            
            left: '225%'
            
        }, fadeSpeed);
        
        $('.welcomeBox').animate({
            
            left: '50%'
            
        }, fadeSpeed);
        
    });
    
    var currentOption = 0;
    
    $('#1').click(function () {
        
        currentOption = 1;
        
        $('.returnArrow').fadeIn(1000);
        
        $('.welcomeBox').animate({
            
            left: '225%'
            
        }, fadeSpeed);
        
        $('.aboutBox').animate({
            
            left: '50%'
            
        }, fadeSpeed);
        
    });
    
    $('#2').click(function () {
        
        currentOption = 2;
        
        $('.returnArrow').fadeIn(1000);
        
        $('.welcomeBox').animate({
            
            left: '225%'
            
        }, fadeSpeed);
        
        $('.expBox').animate({
            
            left: '50%'
            
        }, fadeSpeed);
        
    });
    
    $('#3').click(function () {
        
        currentOption = 3;
        
        $('.returnArrow').fadeIn(1000);
        
        $('.welcomeBox').animate({
            
            left: '225%'
            
        }, fadeSpeed);
        
        $('.contactBox').animate({
            
            left: '50%'
            
        }, fadeSpeed);
        
    });
    
    // Return Arrow Control
    $('.returnArrow').click(function () {
        
        $('.returnArrow').fadeOut(600);
        
        if (currentOption === 1) {
           
            $('.welcomeBox').animate({
            
                left: '50%'
            
            }, fadeSpeed);
        
            $('.aboutBox').animate({
            
                left: '-125%'
            
            }, fadeSpeed);
           
        } else if (currentOption === 2) {
           
            $('.welcomeBox').animate({
            
                left: '50%'
            
            }, fadeSpeed);
        
            $('.expBox').animate({
            
                left: '-125%'
            
            }, fadeSpeed);
           
        } else if (currentOption === 3) {
           
            $('.welcomeBox').animate({
            
                left: '50%'
            
            }, fadeSpeed);
        
            $('.contactBox').animate({
            
                left: '-125%'
            
            }, fadeSpeed);
           
        }
        
    });
    
};

$(document).ready(main);