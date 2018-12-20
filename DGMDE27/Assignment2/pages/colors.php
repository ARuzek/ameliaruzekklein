<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 2-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Colors | Design System</title>
    
    <?php include("../components/stylesheets.php");?>
    
</head>
<body id="colors" class="body">
    
    <?php include("../components/topnavigation.php");?>
    
    <main>
       <div class="row">
           <div class="two-column side-navigation">
                <?php include("../components/sidenavigation.php");?>
           </div>
           <div class="four-column content">
               <div class="row">
                   <div class="six-column">
                       <h2>Colors</h2>
                   </div>
               </div>
               <div class="row">
                   <div class="six-column primary-color">
                       <p class="dark-color">primary-color</p>
                   </div>
               </div>
               <div class="row">
                   <div class="two-column secondary-color">
                       <p class="dark-color">secondary-color</p>
                   </div>
                   <div class="two-column light-color">
                       <p class="dark-color">light-color (same as background)</p>
                   </div>
                   <div class="two-column medium-light-color">
                       <p class="dark-color">medium-light-color</p>
                   </div>
               </div>
               <div class="row">
                   <div class="two-column medium-color">
                       <p class="light-color">medium-color</p>
                   </div>
                   <div class="two-column medium-dark-color">
                       <p class="light-color">medium-dark-color</p>
                   </div>
                   <div class="two-column dark-color">
                       <p class="light-color">dark-color</p>
                   </div>
               </div>
               <div class="row">
                   <div class="six-column">
                       <h3>How To Use These Colors</h3>
                       <p>Just add the name of the color as a class.</p>
                       <pre>
&lt;div class="two-column medium-color"&gt;
    &lt;p class="light-color"&gt;Your Text Here&lt;/p&gt;
&lt;/div&gt;
                       </pre>
                   </div>
               </div>
            </div>
       </div>
    </main>
</body>
</html>