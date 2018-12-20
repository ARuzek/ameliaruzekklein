<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 4-->

<!--I ended up making these php because I didn't want to have to repeat so much similar html with the navigations and such-->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Queens CSS Framework</title>
    
    <?php include("components/stylesheets.php");?>
    
</head>
<body>
   
    <?php include("components/topnavigation.php");?>
    
    <main>
       <div class="row">
           <header class="spotlight center dark-color">
               <h1 class="primary-color center wide-letter-spacing">QUEENS</h1>
               <p class="primary-color center">Quick to Understand Easy Everything No-Nonsense Styling</p>
               <a href="queens.zip" download><button class="button-primary center hover-effect">DOWNLOAD</button></a>
           </header>
       </div>
       <div class="row wrapper">
            <div class="six-column spotlight center">
               <h2 class="center">Learn About The Framework</h2>
                <p class="center">QUEENS is a css framework that helps you make pretty websites the easy way. It is responsive, consistent, and lightweight. It includes a grid system, typography, form elements, buttons, and more. The framework is perfect for small to mid-size websites that need to look their best.</p>
                <a href="pages/gettingstarted.php"><button class="button-primary center">Read the Reference Guide</button></a>
            </div>
       </div>
    </main>
</body>
</html>