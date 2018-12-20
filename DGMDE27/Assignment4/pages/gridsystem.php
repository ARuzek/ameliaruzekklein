<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 4-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Grid | Queens CSS Framework</title>
    
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
                       <h2>Grid System</h2>
                       <p>The grid system has six columns with gutter sizes of 1em.</p>
                   </div>
               </div>
               
               <div class="row ">
                   <div class="six-column mobile-only secondary-color">
                       <p class="light-color">It looks like you're viewing the framework documentation on a mobile device. On smaller devices, every column will default to 100% width. Switch to a desktop view to see how the grid looks on larger screens.</p>
                   </div>
               </div>

               <div class="row">
                 <div class="one-column medium-light-color">
                     <p class="center">one-column</p>
                 </div>
                 <div class="five-column medium-light-color">
                     <p class="center">five-column</p>
                 </div>   
               </div>
               <div class="row">
                 <div class="two-column medium-light-color">
                     <p class="center">two-column</p>
                 </div>
                 <div class="four-column medium-light-color">
                     <p class="center">four-column</p>
                 </div>   
               </div>
               <div class="row">
                 <div class="three-column medium-light-color">
                     <p class="center">three-column</p>
                 </div>
                 <div class="three-column medium-light-color">
                     <p class="center">three-column</p>
                 </div>   
               </div>
               <div class="row">
                 <div class="two-column medium-light-color">
                     <p class="center">two-column</p>
                 </div>
                 <div class="two-column medium-light-color">
                     <p class="center">two-column</p>
                 </div>   
                 <div class="two-column medium-light-color">
                     <p class="center">two-column</p>
                 </div> 
               </div>
               <div class="row">
                 <div class="six-column medium-light-color">
                     <p class="center">six-column</p>
                 </div>
               </div>
               <div class="row">
                 <div class="one-column medium-light-color">
                     <p class="center">one-column</p>
                 </div>
                 <div class="one-column medium-light-color">
                     <p class="center">one-column</p>
                 </div>
                 <div class="one-column medium-light-color">
                     <p class="center">one-column</p>
                 </div>
                 <div class="one-column medium-light-color">
                     <p class="center">one-column</p>
                 </div>
                 <div class="one-column medium-light-color">
                     <p class="center">one-column</p>
                 </div>
                 <div class="one-column medium-light-color">
                     <p class="center">one-column</p>
                 </div>
               </div>

               <div class="row">
                   <div class="six-column">
                       <h4>How to Use the Grid System</h4>
                       <p>To use the grid system, first create the row in which your columns will be placed. To create a row, just add the class "row" to the parent tag. Then give a class of one-column or two-column or three-column etc... to the  children of the row tag. You can mix tags together as long as they add up to 6. For example, you could use a class of one-column and then three-column and then two-column.</p>
                       <h5>Example</h5>
                       <div class="row">
                         <div class="one-column medium-light-color">
                             <p class="center">one-column</p>
                         </div>
                         <div class="three-column medium-light-color">
                             <p class="center">three-column</p>
                         </div>   
                         <div class="two-column medium-light-color">
                             <p class="center">two-column</p>
                         </div> 
                       </div>
                       <h5>HTML Example</h5>
                       <pre>
    &lt;div class="row"&gt;
     &lt;div class="one-column"&gt;
        &lt;p>one-column&lt;/p&gt;
     &lt;/div&gt;
     &lt;div class="three-column"&gt;
        &lt;p>three-column&lt;/p&gt;
     &lt;/div&gt;
     &lt;div class="two-column"&gt;
        &lt;p>two-column&lt;/p&gt;
     &lt;/div&gt;
    &lt;/div&gt;
                       </pre>
                   </div>
               </div>
           </div>
       </div>
    </main>
</body>
</html>