<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 2-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Typography | Design System</title>
    
    <?php include("../components/stylesheets.php");?>
    
</head>
<body id="typography" class="body">
    
    <?php include("../components/topnavigation.php");?>
    
    <main>
       <div class="row">
           <div class="two-column side-navigation">
                <?php include("../components/sidenavigation.php");?>
           </div>
           <div class="four-column content">
               <div class="row">
                   <div class="six-column">
                       <h2>Typography</h2>
                       <p>This design system has two fonts, Quattrocento Sans and Source Code Pro.</p>
                       <h3>Quattrocento Sans</h3>
                       <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                       <p>abcdefghijklmnopqrstuvwxyz</p>
                       <p>0123456789</p>
                       <h3>Source Code Pro</h3>
                       <pre>ABCDEFGHIJKLMNOPQRSTUVWXYZ</pre>
                       <pre>abcdefghijklmnopqrstuvwxyz</pre>
                       <pre>0123456789</pre>
                   </div>
               </div>    
            </div>
       </div>
    </main>
</body>
</html>