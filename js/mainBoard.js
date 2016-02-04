
var playerChar;
var cpuChar;
var name;

$(document).ready(function() {

// document.addEventListener('DOMContentLoaded',function(){

char = false;
var i = 0;
var characters = $(".col-xs-2");
var board =$(".board");
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
      });


 //Player chooses their secret character by clicking.
  characters.on("click", function() {
    playerChar = $(this).attr("id");
    name = $(this).data("name");
    console.log($(this).attr("id"));
    console.log($(this).data("name"));
    chooseChar(playerChar);
    randomCPU(cpuChar);

  });
 
   
 var chooseChar = function (char) {
  // Selected Character send out sweet alert notifying the player,
  // Keeps the character selection in the left column.
  // Triggers the CPU random character selection.

      if (char == "a") {
          $("#playerPic").html('<img src="characters/2Chainz.png"/>');
          swal({   title: "You picked "+ name + "!",  imageUrl: "characters/2Chainz.png"});
          
      }                                                     // .css('background-image', 'url(' + varImagePath + ')'')
          // $(this).attr('data-charname')
         
      else if (char == "b") {
          $("#playerPic").html('<img src="characters/50cent.png"/>');
          swal({   title: "You picked "+ name + "!", imageUrl: "characters/50cent.png" });
         
      }  

      else if (char == "c") {
          $("#playerPic").html('<img src="characters/andre3000.png"/>');
          swal({   title: "You picked "+ name + "!", imageUrl: "characters/andre3000.png" });
          
      }
      
      else if (char == "d") {   
        $("#playerPic").html('<img src="characters/bigboi.png"/>');
          swal({   title: "You picked "+ name + "!", imageUrl: "characters/bigboi.png" });
             
        }

      else if (char == "e") {
        $("#playerPic").html('<img src="characters/biggie.png"/>');
           swal({   title: "You picked "+ name + "!", imageUrl: "characters/biggie.png" });
               }   

     else if (char == "f") {
        $("#playerPic").html('<img src="characters/busta.png"/>');
           swal({   title: "You picked "+ name + "!", imageUrl: "characters/busta.png" });
           
      }
          
    else if (char == "g") {
        $("#playerPic").html('<img src="characters/common.png"/>');
           swal({   title: "You picked "+ name + "!", imageUrl: "characters/common.png" });
           
      }    
      
    else if (char == "h") {
        $("#playerPic").html('<img src="characters/drake.png"/>'); 
            swal({   title: "You picked "+ name + "!", imageUrl: "characters/drake.png" });
            
      }
      
    else if (char == "i") {
        $("#playerPic").html('<img src="characters/biggie.png"/>');
            swal({   title: "You picked "+ name + "!", imageUrl: "characters/e40.png" });
            
      }
      
    else if (char == "j") {
        $("#playerPic").html('<img src="characters/eminem.png"/>');
            swal({   title: "You picked "+ name + "!", imageUrl: "characters/eminem.png" });
            
      }

    else if (char == "k") {
        $("#playerPic").html('<img src="characters/biggie.png"/>');
           swal({   title: "You picked "+ name + "!", imageUrl: "characters/biggie.png" });
           
      }
          
    else if (char == "l") {
        $("#playerPic").html('<img src="characters/jadakiss.png"/>');
           swal({   title: "You picked "+ name + "!", imageUrl: "characters/jadakiss.png" });
           
      }
      
    else if (char == "m") {
        $("#playerPic").html('<img src="characters/jayz.png"/>');
           swal({   title: "You picked "+ name + "!", imageUrl: "characters/jayz.png" });
           
      }

    else if (char == "n") {
        $("#playerPic").html('<img src="characters/jcole.png"/>');
          swal({   title: "You picked "+ name + "!", imageUrl: "characters/jcole.png" });
          
      }

    else if (char == "o") {
        $("#playerPic").html('<img src="characters/kanyewest.png"/>');
          swal({   title: "You picked "+ name + "!", imageUrl: "characters/kanyewest.png" });
          
      }

    else if (char == "p") {
        $("#playerPic").html('<img src="characters/kendrick.png"/>');
         swal({   title: "You picked "+ name + "!", imageUrl: "characters/kendrick.png" });
         
      }
          
    else if (char == "q") {
        $("#playerPic").html('<img src="characters/laurynhill.png"/>');
         swal({   title: "You picked "+ name + "!", imageUrl: "characters/laurynhill.png" });
         
      }

    else if (char == "r") {
        $("#playerPic").html('<img src="characters/missyelliot.png"/>');
         swal({   title: "You picked "+ name + "!", imageUrl: "characters/missyelliot.png" });
         
      }

    else if (char == "s") {
        $("#playerPic").html('<img src="characters/mosdef.png"/>');
        swal({   title: "You picked "+ name + "!", imageUrl: "characters/mosdef.png" });
        
      }

    else if (char == "t") {
        $("#playerPic").html('<img src="characters/nas.png"/>');
        swal({   title: "You picked "+ name + "!", imageUrl: "characters/nas.png" });
        
      }

    else if (char == "u") {
        $("#playerPic").html('<img src="characters/puffdaddy.png"/>');
        swal({   title: "You picked "+ name + "!", imageUrl: "characters/puffdaddy.png" });
        
      }

    else if (char == "v") {
        $("#playerPic").html('<img src="characters/snoopextra.png"/>');
        swal({   title: "You picked "+ name + "!", imageUrl: "characters/snoopextra.png" });
        
      }

    else if (char == "w") {
        $("#playerPic").html('<img src="characters/tupac.png"/>');
        swal({   title: "You picked "+ name + "!", imageUrl: "characters/tupac.png" });
        
      }
      
    else if (char == "x") {
        $("#playerPic").html('<img src="characters/weezy.png"/>');
        swal({   title: "You picked "+ name + "!", imageUrl: "characters/weezy.png" });
        
      }   

};


 //CPU randomly selects a character.
 var randomCPU = function () {
      
   var ran = $(".col-xs-2");
      if (ran.length) {
      var keep = Math.floor(Math.random() * ran.length);
      for (var i = 0; i < ran.length; ++i) {
      if (i !== keep) {
          
    }
  }
     console.log(ran);
}
     
}; 



 }); 
 
  //Scrollbar//
  $( "#trigger" ).ready(function() {
    $( "#questions" ).scroll();
  });

