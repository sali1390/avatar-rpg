$(document).ready(function(){   
    var currentChar, currentEnemy, characterHealth, characterAttack, enemyHealth, enemyAttack;
    
//    $("<div>").attr("class", "col-md-3 charBox").attr("id", "charAang2").appendTo("#charactersAvail");
//    $('<p>').html("Aang").appendTo("#charAang2");
    var pick ;
    var all_characters = ['charAzula','charZuko','charAang','charKatara'];
    var enemy;
    $('.charBox').on("click", function(e){
//        //Selects all characters and moves them to 'Enemies'
//        $("#charactersAvail").find('div').appendTo('#enemiesAvail');
//        
//        e.stopPropagation();
        if(currentChar == null){
            //Moves character that is clicked on to 'Your Character'
            currentChar = $(this).attr('id');
            
            $('#' + currentChar).appendTo('#yourCharacter');
            $('#enemiesAvail').html($('#charactersAvail').html());
            $('#charactersAvail').html("");
            
            characterHealth = $(this).data("health");
            characterAttack = $(this).data("attack");
            
            console.log("Character health: " + characterHealth)
            console.log("Character attack: " + characterAttack)
        }
        $('.charBox').on("click", function(e){
            if(currentEnemy == null){
                currentEnemy = $(this).attr('id');

                $('#' + currentEnemy).appendTo('#defender');

                enemyHealth = $(this).data("health");
                enemyAttack = $(this).data("attack");
                
                console.log("Enemy health: " + enemyHealth)
                console.log("Enemy attack: " + enemyAttack)
            }
        }); 
//        return false;
    }); 
    
//    //Attempting to single out remaining characters to select for 'Defender'
//    $("#enemiesAvail").find('div').on("click", function(){
//        
//    });
//    
    $("#attackButton").on("click", function(){
        //Changes values from string to integers
        characterAttack = parseInt(characterAttack)
        characterHealth = parseInt(characterHealth);
        enemyAttack = parseInt(enemyAttack);
        enemyHealth = parseInt(enemyHealth);
        
        
        console.log("Character Health: " + characterHealth);
        console.log("Enemy Attack: " + enemyAttack);
        console.log("Enemy Health: " + enemyHealth);
        console.log("Character Attack: " + characterAttack);
        
        //Subtracts attacks from healths
        characterHealth -= enemyAttack;
        enemyHealth -= characterAttack;
        console.log("Character Health: " + characterHealth);
        console.log("Enemy Health: " + enemyHealth);
        
        $("#gameInfo").html("You have attacked " + currentEnemy + " for " + characterAttack + " points.").append(
            currentEnemy + " has attacked you for " + enemyAttack + " points.");
        
    });
});                  