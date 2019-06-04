$(document).ready(function(){
//characters
    var ahsokaTano={name: 'Ahsoka Tano', image: 'assets/images/ahsoka-tano.jpg', healthPoints: 180, attackPower: 8, counterAttack: 60};
    var stormTroopers={name: 'Storm Troopers', image: 'assets/images/storm-troopers.png', healthPoints: 100, attackPower: 4, counterAttack: 2}
    var darthMaul= {name: 'Darth Maul', image: 'assets/images/darth-maul.jpg', healthPoints: 200, attackPower: 10, counterAttack: 45};
    var darthVader= {name: 'Darth Vader', image: 'assets/images/vader.jpg', healthPoints: 170, attackPower: 15, counterAttack: 50};

    //display characters div
    function displayCharacters() {
        $('#ahsoka').html(`<p>${ahsokaTano.name}</p><img src=${ahsokaTano.image} width='150px'><p>${ahsokaTano.healthPoints}</p>`);
        $('#storm').html(`<p>${stormTroopers.name}</p><img src=${stormTroopers.image} width='150px'><p>${stormTroopers.healthPoints}</p>`);$('#maul').html(`<p>${darthMaul.name}</p><img src=${darthMaul.image} width='150px'><p>${darthMaul.healthPoints}</p>`);
        $('#vader').html(`<p>${darthVader.name}</p><img src=${darthVader.image} width='150px'><p>${darthVader.healthPoints}</p>`);
    }

    displayCharacters();

    //chose fighter - AHSOKA
    
})








// $('#attack').on('click', function(){
//     ahsokaTano.healthPoints--;
//     $('#ahsoka').html(`<p>${ahsokaTano.name}</p><img src=${ahsokaTano.image} width='150px'><p>${ahsokaTano.healthPoints}</p>`);
// })

//select fighter - AHSOKA
// var ahsokaClicked = $('#ahsoka').on('click', function(){})

// //select fighter - STORM
// var stormClicked = $('#storm').on('click', function(){
//     $('#ahsoka').prependTo('#enemiesAvailable');
//     $('#maul').prependTo('#enemiesAvailable');
//     $('#vader').prependTo('#enemiesAvailable');
// })

// //select fighter - MAUL
// var maulClicked= $('#maul').on('click', function(){
//     $('#storm').prependTo('#enemiesAvailable');
//     $('#ahsoka').prependTo('#enemiesAvailable');
//     $('#vader').prependTo('#enemiesAvailable');
// })

// //select fighter - VADER
// var vaderClicked = $('#vader').on('click', function(){
//     $('#storm').prependTo('#enemiesAvailable');
//     $('#maul').prependTo('#enemiesAvailable');
//     $('#ahsoka').prependTo('#enemiesAvailable');
// })

// if (ahsokaClicked){
//     $('#storm').prependTo('#enemiesAvailable');
//     $('#maul').prependTo('#enemiesAvailable');
//     $('#vader').prependTo('#enemiesAvailable');
// }