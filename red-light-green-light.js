


var light = 'red';
var start = 1;
var runner = 0;
var repeater = null;
var timeReducer = 10000;
var minusTime = 0;
var sing = new Audio('audio.mp3');
var kill = new Audio('end.mp3');
var winSong = new Audio('win.mp3');



var timeLeft = 35;
var elem = document.getElementById('timer_div');
var timerId = setInterval(countdown, 1000);

function countdown(){
    if (timeLeft == -1) {
        clearTimeout(timerId);
        clearInterval(repeater);
        $('#player456').stop();
        loseDisplay();
        return
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft --;
    }
};


function playAudio(){
    sing.play();
}

function pauseAudio(){
    sing.pause();
}


function playAudio(){
    kill.play();
}

function pauseAudio(){
    kill.pause();
}



 function startRepeater(){
     clearInterval(repeater);
     repeater = setInterval(changeLight, ((Math.random() * 1000) + 700));
 };

function checkRed(){
    clearInterval(repeater);
    repeater = setInterval(checkLight, 500);
}

function checkLight(){
    if(light === "red" && runner === 1){
        clearInterval(repeater);
        $('#player456').stop();
        loseDisplay();
        return
    } else{
        startRepeater();
} 
};



function loseDisplay(){
    $('#container').hide();
    var lost = `<div id="box">
    <h1 style="line-height: 35px; background-color: #333;">SO SAD FOR YOU HOPE YOU LIKED THE GAME YOU CAN DO THIS TRY AGAIN !!</h1>
    <p style="background-color: #333;">Refresh the page to play again.</p>
</div>`;

$(lost).hide().appendTo('body').fadeIn(2000);
kill.play();
};


function winDisplay() {
    clearInterval(repeater);
    $('#container').hide();
    var win = `<div id="box">
            <h1 style="line-height: 35px; background-color: #333;">Congratulations, you survived! YOU ARE GENIUS AND SPECICIAL ONLY  2 % OF PEAPOLE COMPLETE THIS IN A MONTH DO YOU WANNA TRY YOUR SKILLS AGAIN??</h1>
            <p style="background-color: #333;">Refresh the page to play again.</p>
    </div>`;
    $(win).hide().appendTo('body').fadeIn(2000);
    winSong.play();
    clearInterval(timerId);
};


function changeLight(){
    if(light === "red"){
        light = "green";
        $('#lightCenter').removeClass('red');
        $('#lightCenter').addClass('green');
        $('#killerRobot').removeClass('Looking');
        $('#killerRobot').addClass('notLooking');
        sing.play();
    } else {
        light = "red";
			$('#lightCenter').removeClass('green');
			$('#lightCenter').addClass('red');
			$('#killerRobot').removeClass('notLooking');
			$('#killerRobot').addClass('Looking');
			sing.pause();
			checkRed();
    }
}

$(document).ready(function(){

 
    $('#moveButton').click(function(){
        if(start === 1){
            $('#lightCenter').removeClass('red');
            $('#lightCenter').addClass('green'); 
            light = 'green';
            start = 0;
            sing.play(); 
    };
    $('#player456').animate({
        left: 1000}, timeReducer, "linear", winDisplay);
        runner = 1;
        startRepeater();
        checkLight;
    });


   
    $('#stopButton').click(function(){
        $('#player456').stop();
      
        minusTime = Math.floor($('#player456').position().left);

        timeReducer = ((1100 - minusTime)/1100)*10000;
        runner = 0;
    });

});

    
 

