/* 
* Project : Cropper.js
* Author : Tiago Soares
* Description : This file listen all the events that are related to the indx.html file,sets the jqueryui values 
*               and defines  the drag constrains
* 
*
*
 */


 $(function () {
                $("#slider").slider({
                    value:1,
                    min: 1,
                    max: 2,
                    step: 0.10
                });
            });

            $("#slider").on("slide", function (event, ui) {
                $("#img").height(320 * ui.value);
                $("#dragImg").position().left = Math.max(447 - $("#img").width(), $("#dragImg").offset().left);
            });

            $("#dragImg").draggable({
                drag: function (event, ui) {
                    //Crop image constraints
                    //---------------------------------------------
                    ui.position.left = Math.min(120, ui.position.left); // Left constraint
                    ui.position.top = Math.min(-320, ui.position.top);  // Top constraint
                    ui.position.left = Math.max(447 - $("#img").width(), ui.position.left);//right constraint
                    ui.position.top = Math.max(0 - $("#img").height(), ui.position.top);
    }
            });
            
            
            
            $("#btnCrop").click(function (){   
            });
