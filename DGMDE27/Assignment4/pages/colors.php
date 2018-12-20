<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 4-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Colors | Queens CSS Framework</title>
    
    <?php include("../components/stylesheets.php");?>
    
</head>
<body>
    
    <?php include("../components/topnavigation.php");?>
    
    <main class="wrapper">
       <div class="row">
           <?php include("../components/sidenavigation.php");?>
           <div class="four-column">
               <div class="row">
                   <div class="six-column">
                       <h2>Colors</h2>
                   </div>
               </div>
               <div class="row">
                   <div class="three-column primary-color">
                       <p class="light-color">primary-color</p>
                   </div>
                   <div class="three-column secondary-color">
                       <p class="light-color">secondary-color</p>
                   </div>
               </div>
               <div class="row">
                   <div class="three-column light-color">
                       <p class="dark-color">light-color (same as background)</p>
                   </div>
                   <div class="three-column medium-light-color">
                       <p class="dark-color">medium-light-color</p>
                   </div>
               </div>
               <div class="row">
                   <div class="three-column medium-color">
                       <p class="light-color">medium-color</p>
                   </div>
                   <div class="three-column dark-color">
                       <p class="light-color">dark-color</p>
                   </div>
               </div>
               <div class="row">
                   <div class="six-column">
                       <h4>How To Use These Colors</h4>
                       <p>Just add the name of the color as a class.</p>
                       <h5>HTML Example</h5>
                       <pre>
&lt;div class="two-column medium-color"&gt;
    &lt;p class="light-color"&gt;Your Text Here&lt;/p&gt;
&lt;/div&gt;
                       </pre>
                       <p>Colors added to text elements will change the color of the text. Colors added to other elements will change their background color.</p>
                   </div>
               </div>
            </div>
       </div>
    </main>
</body>
</html>