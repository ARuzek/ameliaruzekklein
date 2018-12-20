<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 2-->

<!--I ended up making these php because I didn't want to have to repeat so much similar html with the navigations and such-->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Design System</title>
    
    <?php include("components/stylesheets.php");?>
    
</head>
<body id="homepage" class="body">
   
    <?php include("components/topnavigation.php");?>
    
    <main>
       <div class="row">
           <header class="spotlight">
               <h1 class="primary-color">Design System</h1>
           </header>
       </div>
       <div class="row">
            
            <div class="three-column">
               <h2>Learn About The Framework</h2>
                <p>Design System is a css framework that helps developers make pretty websites. It is easy to use, responsive, consistent, and lightweight. Its pattern library includes a grid system, typography, form elements, buttons, and more. The framework is perfect for small to mid-size websites that need to look beautiful. </p>
                <button class="button-primary">Read the documentation</button>
            </div>
            <div class="three-column personal-bio">
                <picture class="one-column">
                    <source srcset = "images/Amelia-150.jpg" media="(min-width: 60em)" >
                    <source srcset = "images/Amelia-100.jpg" media="(min-width: 40em) and (max-width: 59em)" >
                    <img alt="Amelia's face" src="images/Amelia-50.jpg"/>
                </picture>
                <p>Amelia Ruzek is the creator of the Design System. Her favorite colors are pink and yellow.</p>
            </div>
       </div>
    </main>
    
    <script src="js/navigation.js"></script>
</body>
</html>