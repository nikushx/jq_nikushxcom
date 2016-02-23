<!DOCTYPE html>

<html>

    <head>
        <!--Bootstrap Header - Meta Information - NIKUSHx Hub-->
		<title>VeggieOut! - Making Vegetarian Easy</title>
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="author" content="Nikush Dalia & Ethan Silver">
		<meta name = "viewport" content = "width=device-width, initial-scale=1.0">
        <link href ='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
        <link href = "css/bootstrap.min.css" rel = "stylesheet">
        <link href = "css/font-awesome.min.css" rel="stylesheet">
		<link href = "css/styles.css" rel = "stylesheet">
		<meta charset = "UTF-8">
        
        <!-- Analytics -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-59459077-2', 'auto');
            ga('send', 'pageview');
        </script>
        
    </head>

    <body>
        
        <!-- Background Set-up -->
        <div class = "background"></div>
        
        <div class = "navbar navbar-default">
            <div class = "container-fluid">
                
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- <img src = "img/logo.png" /> -->
                    <a class="navbar-brand" href="#"><img src = "img/logo.png" class = "img-responsive logoImageHoly" \></a>
                </div>
                
                <div class = "collapse navbar-collapse" id = "bs-example-navbar-collapse-1">
                    <ul class = "nav navbar-nav pull-right">
                        <li class = "active"><a href = "index.php">Home</a></li>
                        <li><a href = "#">Lists</a></li>
                        <li><a href = "about.php">About</a></li>
                    </ul>
                </div>
            
            </div>
        </div>
        
        <div class = "container">
            <div class = "jumbotron">
                
                
                
                <div class = "input-group">
                    <span class = "input-group-addon glyphicon glyphicon-search" id="basic-addon1"></span>
                    <input type= = "text" id = "where" class = "form-control" placeholder = "Enter a city, state is optional." aria-describedby = "basic-addon1">
                </div>

                <div id = "map"></div>
            </div>
        </div>
        
        <div class = "container">
            <div class = "jumbotron" id = "numba">
                <div class = "container"><p class = "pull-right" style = "font-size: 1.3em">Key (the more the better!)   </p><span class = "glyphicon glyphicon-leaf pull-right" style= "font-size: 2em"></span></div>
                <span id = "resultz">

                    

                </span>


            </div>
        </div>
        
        <!-- Javascript Imports -->
        <script src = "js/jquery.js"></script>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmeGbjA3mtANFg1TE_t9BPjfwKe-gMf7g&libraries=places"></script>
        <script src = "js/app.js"></script>
    
    </body>
    
</html>