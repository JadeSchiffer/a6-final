/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, JSLINT, brackets */
/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function(){
    
    if (sessionStorage.getItem("firstVisit") == "2") {
        $("#welcome").remove();
        $("#arrow").remove();
        console.log("hello");
    }
    
    else {
        /*Text Scramble Effect*/
        /*Adopted from https://codepen.io/krzysztofnowak/pen/WvZqKa */
        var container = $('#descriptionText').get(0);
        var textToWrite = 'Hello! My name is Jade Schiffer, and welcome to my portfolio';
        var i = 0;
        var progress = 0;
        var codingChars = "%$@#|*!®†¨ø∑œåΩ≈√˜˚"

        function animate() {
          setTimeout(function(){ 
            i++;
            var currentText = textToWrite.substr(0, i);
            currentText += getRandomChars(textToWrite.length - i);


            container.innerHTML = currentText;
            progress = i/textToWrite.length;

            if(progress < 1) {
              animate()
            }
          }, 70);
        }

        function getRandomChars(howMany) {
          var result = '';

          for(var i=0; i<howMany; i++) {
            if(i % 5 == 0) {
              result += ' '
            } else {
              result += codingChars.charAt(Math.floor(Math.random() * codingChars.length));
            }
          }
          return result
        }

        animate();
        
        /* Toggle Div */
        $("#arrow").on("click", function(){
            console.log("Jade1");
            $("#welcome").slideUp("slow");
            $("#arrow").slideUp("slow");
            $("row-one").attr("display", "block");
            $("row-two").attr("display", "block");
            console.log("Jade2");
            sessionStorage.setItem('firstVisit',"2");
            });
    }
});