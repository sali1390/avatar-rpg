$(document).ready(function(){   
    var currentChar, currentEnemy, characterHealth, characterAttack, enemyHealth, enemyAttack;
    
    function resetGame() {
        currentChar = null;
        currentEnemy = null;
        var gameClone = $("#rpgGame").clone();
        $("#rpgGame").replaceWith(gameClone.clone());
    }

    $('.charBox').on("click", function(){        
        //Checks to see if a character has been chosen yet. If not, use element clicked
        if(currentChar == null){
            //Moves character that is clicked on to 'Your Character', moves the others to 'Enemies Available' 
            currentChar = $(this).attr('id');
            
            $('#' + currentChar).appendTo('#yourCharacter');
            $('#enemiesAvail').html($('#charactersAvail').html());
            $('#charactersAvail').html("");
            
            characterHealth = $(this).data("health");
            characterAttack = $(this).data("attack");
            
            console.log("Character health: " + characterHealth)
            console.log("Character attack: " + characterAttack)
        }
        //Event handler to target Enemy
        $('.charBox').on("click", function(){
            //Checks to see if an enemy has been chosen yet. If not, use element clicked
            if(currentEnemy == null){
                currentEnemy = $(this).attr('id');

                $('#' + currentEnemy).appendTo('#defender');

                enemyHealth = $(this).data("health");
                enemyAttack = $(this).data("attack");
                
                console.log("Enemy health: " + enemyHealth)
                console.log("Enemy attack: " + enemyAttack)
            }
        }); 
    }); 
     
    $("#attackButton").on("click", function(){
        //Changes values from string to integers
        characterAttack = parseInt(characterAttack)
        characterHealth = parseInt(characterHealth);
        enemyAttack = parseInt(enemyAttack);
        enemyHealth = parseInt(enemyHealth);
        
        
//        console.log("Character Health: " + characterHealth);
//        console.log("Enemy Attack: " + enemyAttack);
//        console.log("Enemy Health: " + enemyHealth);
//        console.log("Character Attack: " + characterAttack);
        
//        var attackMultiplier = 0;
//        console.log("attack multiplier " + attackMultiplier);
//        
//        characterAttack = characterAttack + (characterAttack * attackMultiplier++);
//        console.log("with multiplier " + characterAttack);
//        
        //Subtracts attacks from healths for both character and enemy
        characterHealth -= enemyAttack;
        enemyHealth -= characterAttack;
//        console.log("Character Health: " + characterHealth);
//        console.log("Enemy Health: " + enemyHealth);
        
        $('#' + currentChar).children('p').html(characterHealth);
        $('#' + currentEnemy).children('p').html(enemyHealth);
        
        $("#gameInfo1").html("You have attacked " + currentEnemy + " for " + characterAttack + " points.")
        $("#gameInfo2").html(currentEnemy + " has attacked you for " + enemyAttack + " points.");
        
        if (characterHealth <= 0) {
            $("#gameInfo1").html("You have been defeated by " + currentEnemy + ". You Lose!");
            $("#gameInfo2").html('<button type="submit" class="btn btn-default btn-success" style="margin-top: 15px;" id="restartButton">RESTART GAME</button>');
            
            $("#restartButton").on("click", function(){
                resetGame();
            });
             
        } else if (enemyHealth <= 0) {
            $("#gameInfo1").html("You have defeated " + currentEnemy + ". Select another enemy.");
            $("#gameInfo2").html('');
            $('#defender').html('');
            currentEnemy = null;
            
            $('.charBox').on("click", function(){
            //Checks to see if an enemy has been chosen yet. If not, use element clicked
                if(currentEnemy == null){
                    currentEnemy = $(this).attr('id');

                    $('#' + currentEnemy).appendTo('#defender');

                    enemyHealth = $(this).data("health");
                    enemyAttack = $(this).data("attack");

//                    console.log("Enemy health: " + enemyHealth)
//                    console.log("Enemy attack: " + enemyAttack)
                }
            });
        }
    });
    
});                  