$(document).ready(function(){
    var currentChar, currentEnemy, characterHealth, enemyAttack;
    
    $("#charactersAvail").find('div').on("click", function(){
        //Selects all characters and moves them to 'Enemies'
        $("#charactersAvail").find('div').appendTo('#enemiesAvail');
        
        //Moves character that is clicked on to 'Your Character'
        var pick = $(this).attr('id');
        currentChar = document.getElementById(pick);
        
        $('#yourCharacter').append(currentChar)
        
        console.log("Pick: " + pick);
        
        //Attempting to single out remaining characters to select for 'Defender'
        $("#enemiesAvail").find('div').on("click", function(){
            var pick = $(this).attr('id');
            currentEnemy = document.getElementById(pick);

            $('#defender').append(currentEnemy);

            console.log("Enemy: " + pick);
        });
    }); 
    
    $("#attackButton").on("click", function(){
//        characterHealth = $('#yourCharacter').find('.health').val;
//        enemyAttack = $('#defender').val;
//        
//        console.log($('#yourCharacter'));
//        console.log(enemyAttack);
//
//        characterHealth = parseInt(characterHealth);
//        enemyAttack = parseInt(enemyAttack);
//        
//        characterHealth -= enemyAttack;
        console.log(this);
    });
});                  