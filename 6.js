$(document).ready(function(){

    // Load Actions
    retrieveData();

    // Functions
    function printLine(str){
        $(".div-main").append("<p>"+str+"</p>");
    }

    function retrieveData(){
        $.get( "data.csv", function( data ) {
            lines = data.split("\n");
            alert(lines.length);
            printLine(lines.length);
            for (i=1; i < lines.length; i++) { //first line is headers
                printLine(lines[i]);
            }
          });
    }

    // Events

});