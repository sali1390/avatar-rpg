$(document).ready(function(){
    var currentChar = "";
    var currentEnemy = "";
    
    $("#charactersAvail").find('div').on("click", function(){
//        var pick = $(this).attr('id');
//        var currentChar = document.getElementById(pick);
//        if ($(this).attr('id')) {   
//            $('#yourCharacter').append($(this).attr('id'))
//        }
//        else {
//            $(".charactersAvail").find('div').appendTo('#enemiesAvail');
//        }
        
        //Selects all characters and moves them to 'Enemies'
        $("#charactersAvail").find('div').appendTo('#enemiesAvail');
        
        //Moves character that is clicked on to 'Your Character'
        var pick = $(this).attr('id');
        var currentChar = document.getElementById(pick);
        
        $('#yourCharacter').append(currentChar)
        
        console.log("User Pick: " + pick);
    });
    
    //Attempting to single out remaining characters to select for 'Defender'
    $("#enemiesAvail").find('div').on("click", function(){
        
        if ($(this).has("#charAang")) {
			$("#defender").append("#charAang");
		} else if ($(this).has("#charAzula")) {
			$("#defender").append("#charAzula");
		} else if ($(this).has("#charZuko")) {
			$("#defender").append("#charZuko");
		} else if ($(this).has("#charKatara")) {
			$("#defender").append("#charKatara");
		}
        
        console.log(this);
    });
});                  