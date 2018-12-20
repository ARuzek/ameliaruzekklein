<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 1-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pretty Pink Design System</title>
    <?php include("components/stylesheets.php");?> 
</head>
<body>
    <div class="decorative-line"></div>
    <nav>
        <h3 class="logo">Pretty Pink Design System</h3>
        <ul>
            <li>
                <a href="index.html">About</a>
            </li>
            <li>
                <a href="pages/gridsystem.html">Patterns</a>
            </li>
        </ul>
    </nav>
    <main>
       <div class="row">
           <header class="spotlight">
               <h1 class="logo">Pretty Pink Design System</h1>
           </header>
       </div>
       <div class="row">
            
            <div class="three-column">
               <h2>Learn About The Framework</h2>
                <p>Pretty Pink Design System is a css framework that helps developers make pretty websites. It is easy to use, responsive, consistent, and lightweight. Its pattern library includes a grid system, typography, form elements, buttons, and more. The framework is perfect for small to mid-size websites that need to look beautiful. </p>
                <p>To start using it today, navigate to the patterns section and read the documentation.</p>
            </div>
            <div class="three-column personal-bio">
                <picture class="one-column">
                    <source srcset = "images/Amelia-150.jpg" media="(min-width: 60em)" >
                    <source srcset = "images/Amelia-100.jpg" media="(min-width: 40em) and (max-width: 59em)" >
                    <img alt="Amelia's face" src="images/Amelia-50.jpg"/>
                </picture>
                <p>Amelia Ruzek is the creator of the Pretty Pink Design System. Her favorite colors are pink and yellow.</p>
            </div>
       </div>
    </main>
</body>
</html>