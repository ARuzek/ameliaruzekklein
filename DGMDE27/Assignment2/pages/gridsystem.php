<!DOCTYPE html>
<!--Amelia Ruzek-->
<!--DGMDE27 Assignment 2-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Grid | Design System</title>
    
    <?php include("../components/stylesheets.php");?>
    
</head>
<body id="gridsystem" class="body">
    
    <?php include("../components/topnavigation.php");?>
    
    <main>
       <div class="row">
           <div class="two-column side-navigation">
                <?php include("../components/sidenavigation.php");?>
           </div>
           <div class="four-column content">
               <div class="row">
                   <div class="six-column">
                       <h2>Grid System</h2>
                       <p>The grid system has six columns with gutter sizes of 1em.</p>
                   </div>
               </div>
               
               <div class="row ">
                   <div class="six-column warning-notification">
                       <p>It looks like you're viewing the Pretty Pink Design System grid on a mobile device. On smaller devices, every column will default to 100% width. Switch to a desktop view to see how the grid looks on larger screens.</p>
                   </div>
               </div>

               <div class="row example">
                 <div class="one-column">
                     <p>one-column</p>
                 </div>
                 <div class="five-column">
                     <p>five-column</p>
                 </div>   
</div>
               <div class="row example">
                 <div class="two-column">
                     <p>two-column</p>
                 </div>
                 <div class="four-column">
                     <p>four-column</p>
                 </div>   
               </div>
               <div class="row example">
                 <div class="three-column">
                     <p>three-column</p>
                 </div>
                 <div class="three-column">
                     <p>three-column</p>
                 </div>   
               </div>
               <div class="row example">
                 <div class="two-column">
                     <p>two-column</p>
                 </div>
                 <div class="two-column">
                     <p>two-column</p>
                 </div>   
                 <div class="two-column">
                     <p>two-column</p>
                 </div> 
               </div>
               <div class="row example">
                 <div class="six-column">
                     <p>six-column</p>
                 </div>
               </div>
               <div class="row example">
                 <div class="one-column">
                     <p>one-column</p>
                 </div>
                 <div class="one-column">
                     <p>one-column</p>
                 </div>
                 <div class="one-column">
                     <p>one-column</p>
                 </div>
                 <div class="one-column">
                     <p>one-column</p>
                 </div>
                 <div class="one-column">
                     <p>one-column</p>
                 </div>
                 <div class="one-column">
                     <p>one-column</p>
                 </div>
               </div>

               <div class="row">
                   <div class="six-column">
                       <h3>How to Use the Grid System</h3>
                       <p>To use the grid system, first create the row in which your columns will be placed. To create a row, just add the class "row" to the parent tag. Then give a class of one-column or two-column or three-column etc... to the  children of the row tag. You can mix tags together as long as they add up to 6. For example, you could use a class of one-column and then three-column and then two-column.</p>
                       <h4>Example</h4>
                       <div class="row example">
                         <div class="one-column">
                             <p>one-column</p>
                         </div>
                         <div class="three-column">
                             <p>three-column</p>
                         </div>   
                         <div class="two-column">
                             <p>two-column</p>
                         </div> 
                       </div>
                       <h3>HTML Example</h3>
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