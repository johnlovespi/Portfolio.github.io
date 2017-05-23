# Portfolio.github.io
Portfolio website


// FIRST TEMPLATE CODE //
<!-- 
<!DOCTYPE html>
<html>
<head>
 <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet">

<meta name="viewport" content="width=device-width, initial-scale=1"> -->

<!-- <link href="https://fonts.googleapis.com/css?family=Poiret+One|Rajdhani" rel="stylesheet">
 -->
<!--   <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  <script type="text/javascript" src="script.js"></script>
  <meta charset="utf-8">
 -->
 <!--  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>JohnEspinoza</title>
 </head>
<body>

<div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" style="color:#088A29" class="closebtn" onclick="closeNav()">&Ouml;</a>
       <div id="main">
          <header id="header">
             <hr>
           <h3>Full-Stack Developer</h3>
              <a href="https://www.linkedin.com/in/john-espinoza" style="font-size:42px"><i class="fa fa-linkedin"></i></a>
              <a href="mailto:johne3741@gmail.com" style="font-size:42px"><i class="fa fa-envelope"></i></a>
              <a href="https://github.com/johnlovespi" style="font-size:42px"><i class="fa fa-github" aria-hidden="true"></i></a>
              <a href="http://codepen.io/JOHNESPINOZA/" style="font-size:42px"><i class="fa fa-codepen" aria-hidden="true"></i></a><br>

              <p><strong>" i’ve become accomplished in many different libraries and frameworks and being able to develop full-stack web applications. I thoroughly enjoy challenging myself, learning new things and solving complex problems, it gives me a great sense of accomplishment. "</strong></p>
             <h1>JOHN ESPINOZA</h1>
          </header>
       </div>

       <div id="hamburger-button">
        <span></span>
        <span></span>
        <span></span>
    </div>
</div>


<div class="container">

   <span class="openbtn" style="font-size:40px" onclick="openNav()">&raquo;</span>
          <h1 id="r-text">Experience</h1>
            <p>GENERAL ASSEMBLY"<br>Web Development Immersive</p>
            <p>Hack-Athon 2015<br>Lehman College</p>
            <p>Living In New York<br></p>
            <p>Motorcyclist Enthusiast<br></p>

<
<div class="second-wall">
      <h2 id="w-text">Portfolio</h2>
         <img class="mySlides" src="images/projectOne.png">
         <img class="mySlides" src="images/projectTwo.png">
         <img class="mySlides" src="images/projectThree.png">

</div>

<div class="Rouge_one">
<p>Bages</p>
 <!--  <h2>Bages</h2> -->
<!--   <div id="bages">
  <ul>
    <li><a href="" class="btn btn-5"><span></span>HTML</a></li>
    <li><a href="" class="btn btn-5">CSS</a></li>
    <li><a href="" class="btn btn-5">React</a></li>
    <li><a href="" class="btn btn-5">Node.js</a></li>
    <li><a href="" class="btn btn-5">JS</a></li>
    <li><a href="" class="btn btn-5">PostgreSQL</a></li>
    <li><a href="" class="btn btn-5">Jquery</a></li>
  </ul> -->

<!--   </div>


</div>
<div class="third_wall">
      <p><strong>Get In</strong>touch</p>
        <input class="user" type="text" name="First_name" placeholder="Your name">
        <input class="user" type="text" name="Last_name" placeholder="Email">
        <input class="user" type="text" name="Email" placeholder="Subject">
        <input class="usertext" type="text" name="Text" placeholder="Your Message">
         <br>
        <button type="">Submit</button>
          <br>
      <a href="https://www.linkedin.com/in/john-espinoza" style="font-size:30px;margin-left: 282px;margin-top: 20px;"><i class="fa fa-linkedin"></i></a>
      <a href="mailto:johne3741@gmail.com"    style="font-size:30px;margin-left: 272px;"></a>


    </div>
</div> -->
<!-- Our hamburger button -->

<!-- </body> -->


  <script>
    var slideIndex = 0;
carousel();
function carousel() {
  // console.log('here');
    var i;
    var x = document.getElementsByClassName("mySlides");
     for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2800); // Change image every 2 seconds
}
  </script>
</html>
