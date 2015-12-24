var main = function () {
    
    $('.returnArrow').hide();
    $('.initialBox').hide();
    $('.initialBox').fadeIn(1000);
    
    $('.enter').click(function () {
                
        $('.initialBox').animate({
            
            left: '225%'
            
        }, 200);
        
        $('.welcomeBox').animate({
            
            left: '50%'
            
        }, 200);
        
    });
    
    var currentOption = 0;
    
    $('#1').click(function () {
        
        currentOption = 1;
        
        $('.returnArrow').fadeIn(1000);
        
        $('.welcomeBox').animate({
            
            left: '225%'
            
        }, 200);
        
        $('.aboutBox').animate({
            
            left: '50%'
            
        }, 200);
        
    });
    
    $('#2').click(function () {
        
        currentOption = 2;
        
        $('.returnArrow').fadeIn(1000);
        
        $('.welcomeBox').animate({
            
            left: '225%'
            
        }, 200);
        
        $('.expBox').animate({
            
            left: '50%'
            
        }, 200);
        
    });
    
    $('#3').click(function () {
        
        currentOption = 3;
        
        $('.returnArrow').fadeIn(1000);
        
        $('.welcomeBox').animate({
            
            left: '225%'
            
        }, 200);
        
        $('.contactBox').animate({
            
            left: '50%'
            
        }, 200);
        
    });
    
    // Return Arrow Control
    $('.returnArrow').click(function () {
        
        $('.returnArrow').fadeOut(600);
        
        if (currentOption === 1) {
           
            $('.welcomeBox').animate({
            
                left: '50%'
            
            }, 200);
        
            $('.aboutBox').animate({
            
                left: '-125%'
            
            }, 200);
           
        } else if (currentOption === 2) {
           
            $('.welcomeBox').animate({
            
                left: '50%'
            
            }, 200);
        
            $('.expBox').animate({
            
                left: '-125%'
            
            }, 200);
           
        } else if (currentOption === 3) {
           
            $('.welcomeBox').animate({
            
                left: '50%'
            
            }, 200);
        
            $('.contactBox').animate({
            
                left: '-125%'
            
            }, 200);
           
        }
        
    });
    
};

$(document).ready(main);