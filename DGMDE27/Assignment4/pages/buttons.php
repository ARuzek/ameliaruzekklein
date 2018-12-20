<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 4-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Buttons | Queens CSS Framework</title>
    
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
                       <h2>Buttons & Links</h2>
                       <p>Buttons can be styled as primary buttons or secondary buttons</p>
                       <h5>Example</h5>
                       <button class="button-primary hover-effect">Primary Button</button>
                       <button class="button-secondary">Secondary Button</button>
                       <h5>HTML Example</h5>
<pre>&lt;button class="button-primary hover-effect"&gt;Primary Button&lt;/button&gt;</pre><br/>
<pre>&lt;button class="button-secondary"&gt;Primary Button&lt;/button&gt;</pre>
                       <h4>Links</h4>
                       <p>Any &lt;a&gt; tag will be underlined on hover by default. You may also choose to use the class "hover-effect"</p>
                       <h5>Example</h5>
                       <div class="medium-color hover-effect six-column"><p class="light-color center">Hover Over Me</p></div>
                       <h5>HTML Example</h5>
<pre>&lt;div class="dark-color hover-effect"&gt;...&lt;/div&gt;</pre>
                   </div>
               </div>
            </div>
       </div>
    </main>
</body>
</html>