$(document).ready(function(){
    var currentChar = "";
    var currentEnemy = "";
    
    
    //Selects all characters and moves them to Enemies Div
    $(".charactersAvail").children('div').on("click", function(){
        //$('.charactersAvail').addClass('enemiesAvail');
        var otherChars = document.getElementsByClassName('charactersAvail');
        $('#enemiesAvail').append(otherChars);
        
        //Moves character that is selected to 'Your Character'
        var pick = $(this).attr('id');
        var currentChar = document.getElementById(pick);
        //$(currentChar).removeClass('enemiesAvail');
        
        $('#yourCharacter').append(currentChar)
        
        console.log(pick);
        console.log(currentChar);
    });
    
    //Attempting to single out remaining characters
    $("#enemiesAvail").find('div').on("click", function(){
        if ($(this).is("aang")) {
			$("#defender").append("#aang");
		} else if ($(this).is("azula")) {
			$("#defender").append("#azula");
		} else if ($(this).is("zuko")) {
			$("#defender").append("#zuko");
		} else if ($(this).is("katara")) {
			$("#defender").append("#katara");
		}
        
//        var pick = $(this).attr('id');
//        var yourPick = document.getElementById(pick);
//        $('#defender').append(yourPick)
        
        console.log(pick);
    });
});                  