<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 4-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Containers | Queens CSS Framework</title>
    
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
                       <h2>Containers</h2>
                       <section>
                           <h4>How to Change the Shape of a Container</h4>
                           <p>Containers are rectangular by default. To make circular use the class "circular". To make rounded, use the class "rounded"</p>
                           <h5>Example</h5>
                           <div class="row">
                               <div class="medium-light-color two-column"><p>Default</p></div>
                               <div class="medium-light-color rounded two-column"><p>Rounded</p></div>
                               <div class="medium-light-color circular two-column"><p>Circular</p></div>
                           </div>
                           <h5>HTML Example</h5>
                           <pre>
    &lt;div class="row"&gt;
       &lt;div class="medium-light-color two-column"&gt;&lt;p&gt;Default&lt;/p&gt;&lt;/div&gt;
       &lt;div class="medium-light-color rounded two-column"&gt;&lt;p&gt;Rounded&lt;/p&gt;&lt;/div&gt;
       &lt;div class="medium-light-color circular two-column"&gt;&lt;p&gt;Circular&lt;/p&gt;&lt;/div&gt;
    &lt;/div&gt;
                           </pre>
                       </section>
                       <section>
                           <h4>How to Add Limit The Width of Content</h4>
                           <p>100% width content looks great on smaller devices, but can become too wide on larger sizes. Use the class "wrapper" to contain the width of full-page content for easier reading.</p>
                           <h5>HTML Example</h5>
                           <pre>
    &lt;main class="wrapper"&gt;...&lt;/main&gt;
                           </pre>
                       </section>
                       <section>
                           <h4>How to Add a Spotlight & Background Image</h4>
                           <p>Many website homepages begin with a large spotlight. To create a spotlight, use the class "spotlight". This will adjust the padding and width of that container.  </p>
                           <h5>HTML Example</h5>
                           <pre>
    &lt;header class="spotlight"&gt;...&lt;/header&gt;
                           </pre>
                           <p>To place a background image on a spotlight or any other element, add the following style to the element:</p>
                           <h5>HTML Example</h5>
                           <pre>
    style="background-image: url(images/your-image-here.png)"
                           </pre>
                       </section>
                       <section>
                           <h4>How to Push Content Right</h4>
                           <p>If there are any elements that need to be pushed to the right, use the class "push-right"</p>
                           <h5>HTML Exmaple</h5>
                           <pre>
    &lt;button class="push-right"&gt;...&lt;/button&gt;
                           </pre>
                       </section>
                       <section>
                           <h4>How to Limit Content to Display on Mobile or Desktop</h4>
                           <p>To style a mobile-only element, use the class "mobile-only". This will hide the element from desktop view.</p>
                           <h5>HTML Example</h5>
                           <pre>
    &lt;nav class="mobile-only"&gt;...&lt;/nav&gt;
                           </pre>
                           <p>To style a desktop-only element, use the class "desktop-only". This will hide the element from mobile view.</p>
                           <h5>HTML Example</h5>
                           <pre>
    &lt;nav class="desktop-only"&gt;...&lt;/nav&gt;
                           </pre>
                       </section>
                   </div>
               </div>
            </div>
       </div>
    </main>
</body>
</html>
