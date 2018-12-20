<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 4-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Typography | Queens CSS Framework</title>
    
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
                       <h2>Typography</h2>
                   </div>
               </div>
               <div class="row">
                   <div class="three-column">
                       <h4>Quattrocento Sans</h4>
                       <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                       <p>abcdefghijklmnopqrstuvwxyz</p>
                       <p>0123456789</p>
                   </div>
                   <div class="three-column">
                       <h4>Source Code Pro</h4>
                       <pre>ABCDEFGHIJKLMNOPQRSTUVWXYZ</pre><br/>
                       <pre>abcdefghijklmnopqrstuvwxyz</pre><br/>
                       <pre>0123456789</pre>
                   </div>
               </div>
               <div class="row">
                   <div class="six-column">
                       <p>To control the size of your fonts, use different tags &lt;h1&gt; - &lt;h6&gt; &lt;p&gt; etc… </p>
                       <h5>Example</h5>
                       <h1 class="primary-color">h1 is this size.</h1>
                       <h2 class="primary-color">h2 is this size.</h2>
                       <h3 class="primary-color">h3 is this size.</h3>
                       <h4 class="primary-color">h4 is this size.</h4>
                       <h5 class="primary-color">h5 is this size.</h5>
                       <h6 class="primary-color">h6 is this size.</h6>
                       <p class="primary-color">p is this size.</p>
                       <section>
                           <h4>Aligning Text</h4>
                           <p>By default, type will align left. To center a font, use the class “center”</p>
                           <h5>HTML Example</h5>
                           <pre>
        &lt;h1 class="center"&gt;...&lt;/h1&gt;
                           </pre>
                           <p>To use wide letter spacing, use the class “wide-letter-spacing”</p>
                           <h5>HTML Example</h5>
                           <pre>
        &lt;h1 class="wide-letter-spacing"&gt;...&lt;/h1&gt;
                           </pre>
                       </section>
                   </div>
               </div>    
            </div>
       </div>
    </main>
</body>
</html>