//This are the global variables

var numberList = [];
var matchNumber = "";
// var crystalList = [];
var redCrystal = "";
var blueCrystal = "";
var greenCrystal = "";
var yellowCrystal = "";
var redCrystalValue = "";
var blueCrystalValue = "";
var greenCrystalValue = "";
var yellowCrystalValue = "";
// The random number shown at the start of the game should be between 19 - 120.
//Each crystal should have a random hidden value between 1 - 12.
var crystalList = [];
for (var i = 1; i <= 12; i++) {
    crystalList.push(i);
};

// game counters
var counter = 0;
var winCounter = 0;
var lossCounter = 0;


//Function syntext to create object
function createCrystals() {

    var redCrystal = $('<img>');
    //redCrystal.attr('data-num', crystalList[i]);
    redCrystal.attr('src', 'assets/images/red.png');
    redCrystal.attr('alt', 'red crystal');
    redCrystal.addClass('center-block');
    redCrystal.addClass('crystalImage');
    console.log(redCrystal);
    $('#redCrystal').append(redCrystal); //finding id from html and adding to redCrysl Variab

    var blueCrystal = $('<img>');
    blueCrystal.attr('data-num', crystalList[i]);
    blueCrystal.attr('src', 'assets/images/blue.png');
    blueCrystal.attr('alt', 'blue crystal');
    blueCrystal.attr('class', 'center-block'); //modified
    blueCrystal.addClass('crystalImage');
    $('#blueCrystal').append(blueCrystal);


    var yellowCrystal = $('<img>');
    yellowCrystal.attr('data-num', crystalList[i]);
    yellowCrystal.attr('src', 'assets/images/yellow.png');
    yellowCrystal.attr('alt', 'yellow crystal');
    yellowCrystal.addClass('center-block');
    yellowCrystal.addClass('crystalImage');
    $('#yellowCrystal').append(yellowCrystal);

    var greenCrystal = $('<img>');
    greenCrystal.attr('data-num', crystalList[i]);
    greenCrystal.attr('src', 'assets/images/green.png');
    greenCrystal.attr('alt', 'green crystal');
    greenCrystal.addClass('center-block');
    greenCrystal.addClass('crystalImage');
    $('#greenCrystal').append(greenCrystal);

}
//this is the new crystal function at the bottom
function newCrystals() {
    counter = 0;
    //this creates the array of numbers to be used to pick the Match the number section
    numberList = [];
    for (var i = 19; i <= 120; i++) {
        numberList.push(i);
    }
    //console.log(numberList);

    matchNumber = Math.floor(Math.random() * 101) + 19; //Learned from the tutor: lowest i can get is 19 and highest 101.  0+19
    //matchNumber = numberList[Math.floor(Math.random() * numberList.length)];
    console.log(matchNumber); //selected number to reach

    //this places the 'match this number 'on the html page
    $('#randomNumber').text(matchNumber);

    redCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];

    $('#redCrystalValue').text(redCrystalValue);

    console.log(redCrystalValue);

    blueCrystalValue = crystalList[Math.floor(Math.random() *
        crystalList.length)];

    $('#blueCrystalValue').text(blueCrystalValue);
    console.log(blueCrystalValue);

    greenCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];

    $('#greenCrystalValue').text(greenCrystalValue);
    console.log(greenCrystalValue);

    yellowCrystalValue = crystalList[Math.floor(Math.random() * crystalList.length)];

    $('#yellowCrystalValue').text(yellowCrystalValue);
    console.log(yellowCrystalValue);
}

function checkGameOver() {
    if (counter === matchNumber) {
        winCounter++;
        alert('Nice Job!! You are a winner! :]');
        $('#wins').html(winCounter);
        $('#randomNumber').text(matchNumber);
        counter = 0;
        $('#userTotalScore').text(counter);
        newCrystals();
    } else if (counter > matchNumber) {
        lossCounter++;
        alert('You did not win! Try again!! :[');
        $('#losses').html(lossCounter);
        $('#randomNumber').text(matchNumber);
        counter = 0;
        $('#userTotalScore').text(counter);
        newCrystals();
        //win/loss it creates new values for crystals
    }
}

function startGame() {
    counter = 0;

    //this places the numberToReach on the html page
    $('#randomNumber').text(matchNumber);


    //this assigns the counter to the userTotalScore on the html page
    $('#userTotalScore').text(0);



    //this puts the winCounter, lossCounter & counter values in their correct locations on the page
    $('#wins').text(winCounter);
    $('#losses').text(lossCounter);
    $('#userTotalScore').text(counter);
}
//click events for each crystal


$('#redCrystal').on('click', function() {
    counter = counter + redCrystalValue;
    $('#userTotalScore').text(counter);
    checkGameOver();
    // if(counter === matchNumber){
    //  	winCounter++;
    // 	alert('FANTASTIC! You are a winner! :]');
    // 	$('#wins').html(winCounter);
    // 	$('#randomNumber').text(matchNumber);
    // 	counter = 0;
    // 	$('#userTotalScore').text(counter);
    // 	newCrystals();
    // }else if(counter > matchNumber){
    // 	lossCounter++;
    // 	alert('You did not win! Try again!! :[');
    // 	$('#losses').html(lossCounter);
    // 	$('#randomNumber').text(matchNumber);
    // 	counter = 0;
    // 	$('#userTotalScore').text(counter);
    // 	newCrystals();
    // 	//win/loss it creates new values for crystals
    // }
})

$('#blueCrystal').on('click', function() {
    counter = counter + blueCrystalValue;
    $('#userTotalScore').text(counter);
    checkGameOver();
    // if(counter === matchNumber){
    //  	winCounter++;
    // 	alert('Nice Job!! You are a winner! :]');
    // 	$('#wins').html(winCounter);
    // 	$('#randomNumber').text(matchNumber);
    // 	counter = 0;
    // 	$('#userTotalScore').text(counter);
    // 	newCrystals();
    // }else if(counter > matchNumber){
    // 	lossCounter++;
    // 	alert('You did not win! Try again!! :[');
    // 	$('#losses').html(lossCounter);
    // 	$('#randomNumber').text(matchNumber);
    // 	counter = 0;
    // 	$('#userTotalScore').text(counter);
    // 	newCrystals();
    // }
})
$('#yellowCrystal').on('click', function() {
    counter = counter + yellowCrystalValue;
    $('#userTotalScore').text(counter);
    checkGameOver();
    // if(counter === matchNumber){
    //  	winCounter++;
    // 	alert('Nice Job!! You are a winner! :]');
    // 	$('#wins').html(winCounter);
    // 	$('#randomNumber').text(matchNumber);
    // 	counter = 0;
    // 	$('#userTotalScore').text(counter);
    // 	newCrystals();
    // }else if(counter > matchNumber){
    // 	lossCounter++;
    // 	alert('You did not win! Try again!! :[');
    // 	$('#losses').html(lossCounter);
    // 	$('#randomNumber').text(matchNumber);
    // 	counter = 0;
    // 	$('#userTotalScore').text(counter);
    // 	newCrystals();
    // }
})
$('#greenCrystal').on('click', function() {
    counter = counter + greenCrystalValue;

    $('#userTotalScore').text(counter);
    checkGameOver();
    // 	if(counter === matchNumber){
    //  	winCounter++;
    // 	alert('Nice Job!! You are a winner! :]');
    // 	$('#wins').html(winCounter);
    // 	$('#randomNumber').text(matchNumber);
    // 	counter = 0;
    // 	$('#userTotalScore').text(counter);
    // 	newCrystals();
    // }else if(counter > matchNumber){
    // 	lossCounter++;
    // 	alert('You did not win! Try again!! :[');
    // 	$('#losses').html(lossCounter);
    // 	$('#randomNumber').text(matchNumber);
    // 	counter = 0;
    // 	$('#userTotalScore').text(counter);
    // 	newCrystals();
    // }
})




createCrystals();
newCrystals();
startGame();