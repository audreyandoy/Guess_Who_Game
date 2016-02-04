
var playerChar;

$(document).ready(function() {

// document.addEventListener('DOMContentLoaded',function(){


var i = 0;
var characters = $(".col-xs-2");
// var charList = [

//   'characters/2Chainz.png','characters/50cent.png','characters/andre3000.png', 'characters/bigboi.png','characters/biggie.png','characters/busta.png',
//   'characters/common.png','characters/drake.png','characters/e40.png','characters/eminem.png','characters/fatjoe.png','characters/jadakiss.png',
//   'characters/jayz.png','characters/jcole.png','characters/kanyewest.png','characters/kendrick.png','characters/laurynhill.png','characters/missyelliot.png',
//   'characters/mosdef.png','characters/nas.png','characters/puffdaddy.png','characters/snoopextra.png','characters/tupac.png','characters/weezy.png'
  
// ];

// console.log(charList);


  
    // if (i >= charList.length -1) {
    //   i = 0;
    // }

    // characters.css('background-image', 'url("' + charList[i] + '")');
    //       i++;
    // if (i>=charList.length -1 ) {
    //   $(".col-xs-2").css('background-image', 'url("' + charList[i++] + '")');
    // }
   
  //Player presses start button 
      $("#start").click (function() {
        swal({ title: "Welcome to Guess Who!", text: "To start, please choose your secret character." });
        // chooseChar();
      });


//Player chooses their secret character.
characters.on("click", function(){
  playerChar= $(this).attr("id");
  alert('clicked on a character space')
  console.log($(this).attr("id"));
  // have the cpu select a random character
  chooseChar(playerChar);

});

  //CPU randomly selects a character.

    //triggers 
   
  var chooseChar = function (char) {
     var name = $(this).data('name');
     var pic = $(this).css('background-image', '')

  //Selected Character gets put on the 
      if (char == "a") {
      $("#playerPic").html('<img src="characters/2Chainz.png"/>');
           
         swal({   title: "You picked "+ name,  imageUrl: "characters/2Chainz.png" });
      }                                                     // .css('background-image', 'url(' + varImagePath + ')'')

      // $(this).attr('data-charname')
                                                            // .css('background-image', 'url(' + varImagePath + ')'')

      // $(this).attr('data-charname')
          
          
        
      // $( "#b" ).click(function() {
      //     swal({   title: "You picked 50cent!", imageUrl: "characters/50cent.png" });
      // });
      // $( "#c" ).click(function() {
      //    swal({   title: "You picked Andre3000!", imageUrl: "characters/andre3000.png" });
      // });
      // $( "#d" ).click(function() {
      //     swal({   title: "You picked Big Boi!", imageUrl: "characters/bigboi.png" });
      // });
      // $( "#e" ).click(function() {
      //     swal({   title: "You picked Notorious B.I.G.!", imageUrl: "characters/biggie.png" });
      // });
      // $( "#f" ).click(function() {
      //     swal({   title: "You picked Busta Rhymes!", imageUrl: "characters/busta.png" });
      // });
      // $( "#g" ).click(function() {
      //     swal({   title: "You picked Common!", imageUrl: "characters/common.png" });
      // });
      // $( "#h" ).click(function() {
      //    swal({   title: "You picked Drake!", imageUrl: "characters/drake.png" });
      // });
      // $( "#i" ).click(function() {
      //    swal({   title: "You picked E-40!", imageUrl: "characters/e40.png" });
      // });
      // $( "#j" ).click(function() {
      //    swal({   title: "You picked Eminem!", imageUrl: "characters/eminem.png" });
      // });
      // $( "#k" ).click(function() {
      //    swal({   title: "You picked Fat Joe!", imageUrl: "characters/fatjoe.png" });
      // });
      // $( "#l" ).click(function() {
      //    swal({   title: "You picked Jadakiss!", imageUrl: "characters/jadakiss.png" });
      // });
      // $( "#m" ).click(function() {
      //    swal({   title: "You picked Jay-Z!", imageUrl: "characters/jayz.png" });
      // });
      // $( "#n" ).click(function() {
      //    swal({   title: "You picked J.Cole!", imageUrl: "characters/jcole.png" });
      // });
      // $( "#o" ).click(function() {
      //    swal({   title: "You picked Kanye West!", imageUrl: "characters/kanyewest.png" });
      // });
      // $( "#p" ).click(function() {
      //    swal({   title: "You picked Kendrick Lamar!", imageUrl: "characters/kendrick.png" });
      // });
      // $( "#q" ).click(function() {
      //    swal({   title: "You picked Lauryn Hill!", imageUrl: "characters/laurynhill.png" });
      // });
      // $( "#r" ).click(function() {
      //    swal({   title: "You picked Missy Elliot!", imageUrl: "characters/missyelliot.png" });
      // });
      // $( "#s" ).click(function() {
      //    swal({   title: "You picked Mos Def!", imageUrl: "characters/mosdef.png" });
      // });
      // $( "#t" ).click(function() {
      //   swal({   title: "You picked Nas!", imageUrl: "characters/nas.png" });
      // });
      // $( "#u" ).click(function() {
      //    swal({   title: "You picked P. Diddy!", imageUrl: "characters/puffdaddy.png" });
      // });
      // $( "#v" ).click(function() {
      //    swal({   title: "You picked Snoop Dog!", imageUrl: "characters/snoopextra.png" });
      // });
      // $( "#w" ).click(function() {
      //    swal({   title: "You picked Tupac!", imageUrl: "characters/tupac.png" });
      // });
      // $( "#x" ).click(function() {
      //    swal({   title: "You picked Weezy!", imageUrl: "characters/weezy.png" });
      // });
    
 };

 }); 
 
  //Scrollbar//
  $( "#trigger" ).ready(function() {
    $( "#questions" ).scroll();
  });

