$(document).ready(function(){
    var currentChar = "";
    var currentEnemy = "";
    
    $(".charactersAvail").find('div').on("click", function(){
        //Selects all characters and moves them to 'Enemies'
        $(".charactersAvail").find('div').appendTo('#enemiesAvail');
        
        //Moves character that is clicked on to 'Your Character'
        var pick = $(this).attr('id');
        var currentChar = document.getElementById(pick);
        
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
        
        console.log(this);
    });
});                  