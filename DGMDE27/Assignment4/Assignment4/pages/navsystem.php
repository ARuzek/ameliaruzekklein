<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 4-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Navigation | Queens CSS Framework</title>
    
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
                       <h2>Navigation</h2>
                       <p>QUEENS' navigation includes two types, top and side. To add top navigation to your website, use a nav tag with a class of “top-navigation”</p>
                       <h5>HTML Example</h5>
                       <pre>
    &lt;nav class="top-navigation"&gt;...&lt;/nav&gt;
                       </pre>
                       <p>To add side navigation to your website, use the class “side-navigation”</p>
                       <h5>HTML Example</h5>
                       <pre>
    &lt;div class="side-navigation"&gt;...&lt;/div&gt;
                       </pre>
                       <p>To take advantage of QUEENS' mobile responsive drawer navigation, identify the navigation items that you’d like to appear on mobile, then use the id “mobile-navigation”</p>
                       <h5>HTML Example</h5>
                       <pre>
    &lt;ul id="mobile-navigation"&gt;...&lt;/ul&gt;
                       </pre>
                       <p>Then, outside of the mobile nav, place an icon that will open the drawer. Use the the javascript function onclick=”openNav()”</p>
                       <h5>HTML Example</h5>
                       <pre>
    &lt;img width="30px" class="push-right mobile-only" onclick="openNav()" role="navigation" alt="navigation drawer" src="path/to/your-nav-icon"/&gt;
                       </pre>
                       <p>Notice that in this example, the classes of push-right and mobile-only are also applied. Learn more about these classes in the containers section of this reference.</p>
                   </div>
               </div>
            </div>
       </div>
    </main>
</body>
</html>