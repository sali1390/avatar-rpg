$(document).ready(function(){   
    var currentChar, currentEnemy, characterHealth, characterAttack, enemyHealth, enemyAttack;
    
    $("#charactersAvail").find('div').on("click", function(){
        //Selects all characters and moves them to 'Enemies'
        $("#charactersAvail").find('div').appendTo('#enemiesAvail');
        
        //Moves character that is clicked on to 'Your Character'
        var pick = $(this).attr('id');
        currentChar = document.getElementById(pick);
        
        $('#yourCharacter').append(currentChar);
        characterHealth = $(this).data("health");
        characterAttack = $(this).data("attack");
        
//        console.log(characterAttack);
//        console.log(characterHealth);
        
        console.log("Pick: " + pick);
        
        //Attempting to single out remaining characters to select for 'Defender'
        $("#enemiesAvail").find('div').on("click", function(){
            var pick = $(this).attr('id');
            currentEnemy = document.getElementById(pick);

            enemyHealth = $(this).data("health");
            enemyAttack = $(this).data("attack");
            
//            console.log(enemyAttack);
//            console.log(enemyHealth);
            
            $('#defender').append(currentEnemy);

            console.log("Enemy: " + pick);
        });
    }); 
    
    $("#attackButton").on("click", function(){
        //Changes values from string to integers
        characterHealth = parseInt(characterHealth);
        enemyAttack = parseInt(enemyAttack);
        
        console.log(characterHealth);
        console.log(enemyAttack);
        
        //Subtracts attacks from healths
        characterHealth -= enemyAttack;
    });
});                  