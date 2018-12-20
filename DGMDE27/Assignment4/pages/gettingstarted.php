<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 4-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Getting Started | Queens CSS Framework</title>
    
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
                       <h2>Getting Started</h2>
                       <p>QUEENS is a quick to understand easy everything no-nonsense styling system to create websites that look great.</p>
                       <section>
                           <h4>Before Download</h4>
                           <p>You should know how to write basic HTML.</p>
                       </section>
                       <section>
                           <h4>Inside the Downloaded File</h4>
                           <p>QUEENS includes a CSS folder and a SASS folder. A CSS file is a cascading style sheet, it tells your website how it should look - the colors, the fonts, and more. By linking your HTML webpage to queens.css you can begin building a website that looks great. If you would like to customize the QUEENS styling to meet your personal preference, use the SASS folder to update styling.</p>
                       </section>
                       <section>
                           <h4>How to Download QUEENS</h4>
                           <p>Click this link: <a href="http://ameliaruzekklein.com/DGMDE27/Assignment4/queens.zip" download>Download QUEENS</a> </p>
                           
                       </section>
                       <section>
                           <h4>How to Connect the Stylesheet to your HTML</h4>
                           <p>Begin with an HTML document in the text editor of your choice. In the head portion, connect to queens.css and the script for the mobile navigation.</p>
                           <h5>HTML Example</h5>
                           <pre>
    &lt;head&gt;
        &lt;link rel="stylesheet" href="path/to/queens.css"&gt;
        &lt;script&gt;
            /* Mobile Nav Method From https://www.w3schools.com/howto/howto_js_off-canvas.asp */
            function openNav() {
                document.getElementById("mobile-navigation").style.width = "75%";
            }
        &lt;/script&gt;
    &lt;/head&gt;                          
                           </pre>
                       </section>
                       <section>
                           <h4>How to Use the SASS Files to Customize QUEENS</h4>
                           <p>To adjust the styling of queens.css, open the SASS folder. Different styles are separated by type. Most style changes can be accomplished by updating the _variables.scss. This file includes fonts and colors. To change a style, simply change the value of that variable and then compile queens.scss to queens.css by using a SASS compiler. More advanced styling changes are editable through the _layout.scss, _style.scss, and _base.scss. Layout includes the grid, navigation, and responsive systems. Style includes the font, color, button, form, and container systems.</p>
                       </section>
                   </div>
               </div>    
            </div>
       </div>
    </main>
</body>
</html>