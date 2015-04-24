/* 
 *  Project : Cropper.js
 *  Author : Tiago Soares
 *  Description : This file contains all the functions related to crop
 */



  /**
             * This function crops and converts the cropped image to base 64 uri. Verify the CORS before use of base64
             * 
             * @returns {base64}    The image in base64
             */
            var cropToBase64 = function(){
                //Croppper vars
                
                var posLeft = $("#dragImg").position().left;
                var posTop = $("#dragImg").position().top;
                var m = $("#slider").slider( "option", "value" );
                
                //Croppping
                var cropX  = (posLeft<0) ? (Math.abs(posLeft) + 120)/m  : (120 - posLeft)/m;
                var cropY = (posTop<0) ?  (Math.abs(posTop) + 15)/m : (15 - posTop)/m ;
                var c = document.getElementById("canvasCrop");
                var ctx = c.getContext("2d");
                var img = document.getElementById("img");
                
                ctx.drawImage(img,cropX,cropY,320/m,320/m,0,0,320,320);

                return c.toDataURL();
                
   };
