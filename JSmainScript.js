//STAY AT TOP

function schooltimer() {
  
  Apressed();   //change to change schedule
  
}

function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}

refreshAt(7,40,0);

//STAY AT TOP

var rotation = 0;
var scale = 1;
var transformY = 0;
var rotate = 0;
var developerMode ='off';

var one = 0;
var two = 0;
var three = 0;

function crazy() {
  alert("you've activated strobe light mode");
   changeColor();
}

var delay = 0;
var borw = 0; 

function changeColor() {
    delay++;
     
    if (delay > 7) {
      if (borw == 0) {
         document.body.style.backgroundColor = "white";
        borw = 1;
      } else {
           document.body.style.backgroundColor = "black";
        
          borw = 0;
        
      }
        delay = 0;
    }
    requestAnimationFrame(changeColor);
}

$(document).keydown(function(e){
  
  
  if (e.which == 49) {
   one = one + 1;
  }
  if (e.which == 50) {
   two = two + 1;
  }
  if (e.which == 51) {
   three = three + 1;
  }
  if (one == 3 && two == 3 && three == 3) {
    crazy();
  }

  
  
  
  
  
  
   if ((e.metaKey || e.ctrlKey) && (e.metaKey || e.shiftKey) && ( String.fromCharCode(e.which).toLowerCase() === 'l') ) {
     if (lunchMode == 'off') {
       lunchMode = 'on';
     } else {
       if (lunchMode == 'on') {
         lunchMode = 'off';
       }
     }
   }
  
  
  
  
  
  
  
    if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 'x') ) {
      if (developerMode = 'off'){
      developerMode = 'on';
        alert("You have entered developer mode. \n \n Scale: Q & E \n Rotate: A & D \n Move: Arrow Keys")
      }else {
        developerMode = 'off';
        alert("You have exited developer mode.")
      }
    }
  
  
  if  (developerMode == 'on'){
  if (e.which == 37) {
       rotation = rotation + 20;
      updateTransform();
      
       return false;
    } else {
      if (e.which == 39) {
        rotation = rotation - 20;
        updateTransform();
       return false;
    } else {
      if (e.which == 38){
        transformY = transformY + 20;
        updateTransform();
        return false;
      } else {
        if (e.which == 40) {
          transformY = transformY - 20;
          updateTransform();          
          return false;
        } else {
          if (e.which == 69) {
            scale = scale + .1;
            updateTransform();
          } else {
            if (e.which == 81) {
              scale = scale -.1;
              updateTransform();
            } else {
              if (e.which == 65) {
                rotate = rotate + 10;
                updateTransform();
              } else {
                if (e.which == 68) {
                  rotate = rotate - 10;
                  updateTransform();
                }
              }
            }
          }
        }
      }
    }
    }
  }
});

function updateScale(){
  document.body.style.transform = 'scale(' + scale + ')';
}

function updateTransform() {
 // document.body.style.setProperty("-webkit-transform", "rotate(" + rotation + "deg)", null);
  document.body.style.transform = "translateX(" + rotation + "px) translateY("+ transformY + "px) scale("+ scale + ") rotate(" + rotate + "deg)";
}

function unload() {
  document.getElementById("loadingScreen").style.top = "0%";
  setTimeout(function() {
      clearLoad();
}, 0);

}

function clearLoad() {
  document.getElementById("loadingScreen").style.top = "-100%";
  document.getElementById("loadingScreen").style.zIndex = "-1";
}



var a = ''; 
var up = document.getElementById("GFG_P"); 
  
        function mobile() { 
  
            if (navigator.userAgent.match(/Android/i) 
                || navigator.userAgent.match(/webOS/i) 
                || navigator.userAgent.match(/iPhone/i)  
                || navigator.userAgent.match(/iPad/i)  
                || navigator.userAgent.match(/iPod/i) 
                || navigator.userAgent.match(/BlackBerry/i) 
                || navigator.userAgent.match(/Windows Phone/i)) { 
                a = true;
              var result = confirm("Looks like you are using a mobile device (Phone, Tablet, etc.). Do you want to switch to the mobile freindly version of School Timer?");
              if (result) {
                  window.location.href = 'http://schooltimerbeta.glitch.me/mobile.html';
              }
            } else { 
                a = false; 
            }
            up.innerHTML = a; 
        } 
document.getElementById("advancedStats").style.display = "-20vw";


var outState = 0;
function moreStatsOut() {
  
  if (outState == 1) {
 document.getElementById("advancedStats").style.marginRight = "-20vw";
   outState = 0; 
  } else {
    if (outState == 0) {
    document.getElementById("advancedStats").style.marginRight = "10px";
      outState = 1;
    }
  }
}


function weekendCalculate () {
  var newHour = parseFloat(endHour);
  var newMin = parseFloat(endMin);

  var currentDateToday = new Date().getTime();
  var dt = new Date(currentDateToday);

  var newDt = String(dt);
  
  var sunday = newDt.includes("Sun");
  var monday = newDt.includes("Mon");
  var tuesday = newDt.includes("Tue");
  var wednesday = newDt.includes("Wed");
  var thursday = newDt.includes("Thur");
  var friday = newDt.includes("Fri");
  var saturday = newDt.includes("Sat");

  if (sunday == true) {
    newHour = newHour + 120;
  } else {
    if (monday == true) {
      newHour = newHour + 96;
    } else {
      if (tuesday == true) {
        newHour = newHour + 72;
      } else {
        if (wednesday == true) {
          newHour = newHour + 48;
        } else {
          if (thursday == true) {
            newHour = newHour + 24;
          } else {
            if (friday == true) {
              newHour = newHour + 0;
            } else {
              if (saturday == true) {
                newHour = newHour + 144;
              }
            }
          }
        }
      }
    }
  }
  
  var days = newHour / 24;
  days = Math.trunc(days);
  
  var hourInDays = days * 24;
  
  newHour = newHour - hourInDays
  
  if (schoolOver == 'yes') {
    newHour = newHour - 24;
  }
  
  
  document.getElementById('untilWeekend').innerHTML = days + 'd ' + newHour + 'h ' + newMin + 'm ' + seconds + "s";
}



  
//alert(sunday + "\n" + monday + "\n" + tuesday + "\n" + wednesday + "\n" + thursday + "\n" + friday + "\n" + saturday);









var countDownDate = new Date("Jun 16, 2020 15:37:25").getTime();

var x = setInterval(function() {
  
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var weeks = days / 7;
  
  weeks = Math.round(weeks);
  
  document.getElementById("getDate").innerHTML = weeks

  if (distance < 0) {
    clearInterval(x);
      document.getElementById("getDate").innerHTML = "0"
  }
}, 0);

function stuff() {
   var win = window.open("http://schooltimerbeta.glitch.me/stuff.html", '_blank');
   win.focus();
}

var Dsidebar = '#40444F';
var Asidebar = '#626978';

function onloadtest() {
  var styleElem = document.head.appendChild(document.createElement("style"));
styleElem.innerHTML = "#sliderTab2:before {background-color: blue;}";
  //alert("blue");
}

var colorCount = 0;
var onoff = 0;
function moveColor()
{ 

  if (onoff == 0) {
  document.getElementById("mydiv").style.top = "2%";
  onoff = 1;
    if (colorCount == 25){
      alert("In what scenario would you need to click this button 25 times? \n \n Tell me if you got this message. I'm genuinely curious");
    }
  }
  else {
  document.getElementById("mydiv").style.top = "-650px";
    onoff = 0;
    colorCount = colorCount + 1;
  }
}


function date() {
  let current_datetime = new Date()
  let formatted_date = (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + "-" + current_datetime.getFullYear()
}


var keyVar = 'off'; 


window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    alert("this isn't minecraft")
  }
}

var setTabState = 0;

var opp = 1;

function fadeOutEffect() {
    var fadeTarget = document.getElementById("alertOverlay");
    var fadeEffect = setInterval(function () {
     
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 10);
}


function lunchFadeOutEffect() {
    var fadeTarget = document.getElementById("lunchAlertOverlay");
    var fadeEffect = setInterval(function () {
     
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.01;
        } else {
            clearInterval(fadeEffect);
        }
    }, 10);
}




function wait() {
  var wait = 0;
  while(wait < 2) {
    wait = wait + 1;
  }
  setTimeout(wait(), 1000)
}

var isLunchOn = 0;
var isSoundOn = 0;
  function lunch() {
    
       
    if (isSoundOn == 0) {
      document.getElementById("lunchModebutton").style.backgroundColor = Asidebar;
      document.getElementById("lunchModebutton").style.color = settingTxtE;
      document.getElementById("lunchAlertText").innerHTML = "Sounds On";
      
        opp = 1;
        document.getElementById("lunchAlertOverlay").style.opacity = opp;
       setTimeout(function (){

       lunchFadeOutEffect();

        }, 1000); 
     isSoundOn = 1;
    } else {
      if (isSoundOn == 1) {
       // alert("lunch is off");
        isSoundOn = 0;
        
        document.getElementById("lunchModebutton").style.backgroundColor = Dsidebar;
        document.getElementById("lunchModebutton").style.color = settingTxtD;
     
      document.getElementById("lunchAlertText").innerHTML = "Sounds Off";
       document.getElementById("lunchAlertOverlay").style.opacity = 1;
         setTimeout(function (){

        lunchFadeOutEffect();

      }, 1000); 
        
      }
    }  
}
  
var h1 = 8;  var m1 = 29; //initial variables for A mode
var h2 = 9;  var m2 = 17;
var h3 = 10; var m3 = 5;
var h4 = 10; var m4 = 53;
var h5 = 11; var m5 = 41;
var h6 = 12; var m6 = 29;
var h7 = 13; var m7 = 17;
var h8 = 14; var m8 = 5;
var he = 14; var me = 53;

var seconds;
var tabControl = 'on';
var lunchMode = 'off';
var timeDetect1;
var timeDetect2;
var timeDetect3;
var timeDetect4;
var timeDetect5;
var timeDetect6;
var timeDetect7;
var timeDetect8;
var timeDetecte;
var lunch4;
var lunch5;
var lunch6;
var lunch7;
var seconds;


var schedule = 'A';

  var scheduleSelectColor = '#40444F';
  
function Apressed()
  {
    schedule = 'A';
    setTheSchedule();
    
     document.getElementById("Adiv").style.opacity = 1;
     document.getElementById("Bdiv").style.opacity = 0;
     document.getElementById("Cdiv").style.opacity = 0;
     document.getElementById("Ddiv").style.opacity = 0;
    
     document.getElementById("buttonA").style.backgroundColor = scheduleSelectColor;
     document.getElementById("buttonB").style.backgroundColor = radioColor;
     document.getElementById("buttonC").style.backgroundColor = radioColor;
     document.getElementById("buttonD").style.backgroundColor = radioColor;
    

  }
function Bpressed()
  {
    schedule = 'B';
    setTheSchedule();
    
     document.getElementById("Adiv").style.opacity = 0;
     document.getElementById("Bdiv").style.opacity = 1;
     document.getElementById("Cdiv").style.opacity = 0;
     document.getElementById("Ddiv").style.opacity = 0;
    
    
     document.getElementById("buttonA").style.backgroundColor = radioColor;
     document.getElementById("buttonB").style.backgroundColor = scheduleSelectColor;
     document.getElementById("buttonC").style.backgroundColor = radioColor;
     document.getElementById("buttonD").style.backgroundColor = radioColor;


  }
function Cpressed()
  {
    schedule = 'C';
    setTheSchedule();
    
    
      document.getElementById("Adiv").style.opacity = 0;
     document.getElementById("Bdiv").style.opacity = 0;
     document.getElementById("Cdiv").style.opacity = 1;
     document.getElementById("Ddiv").style.opacity = 0;
    
     document.getElementById("buttonA").style.backgroundColor = radioColor;
     document.getElementById("buttonB").style.backgroundColor = radioColor;
     document.getElementById("buttonC").style.backgroundColor =  scheduleSelectColor;
     document.getElementById("buttonD").style.backgroundColor = radioColor;

  }
function Dpressed()
  {
    schedule = 'D';
    setTheSchedule();
    
    
      document.getElementById("Adiv").style.opacity = 0;
     document.getElementById("Bdiv").style.opacity = 0;
     document.getElementById("Cdiv").style.opacity = 0;
     document.getElementById("Ddiv").style.opacity = 1;
    
     document.getElementById("buttonA").style.backgroundColor = radioColor;
     document.getElementById("buttonB").style.backgroundColor = radioColor;
     document.getElementById("buttonC").style.backgroundColor = radioColor;
     document.getElementById("buttonD").style.backgroundColor = scheduleSelectColor;

  }
function setTheSchedule() {

if (keyVar == 'off') {
  if (lunchMode == "off") {
    if (schedule == 'A') {
      
        h1 = 8;  m1 = 29;
        h2 = 9;  m2 = 17;
        h3 = 10; m3 = 5;
        h4 = 10; m4 = 53;
        h5 = 11; m5 = 41;
        h6 = 12; m6 = 29;
        h7 = 13; m7 = 17;
        h8 = 14; m8 = 5;
        he = 14; me = 53;
      
    }
    if (schedule == 'B') {
        h1 = 8;  m1 = 37;
        h2 = 9;  m2 = 24;
        h3 = 10; m3 = 11;
        h4 = 10; m4 = 58;
        h5 = 11; m5 = 45;
        h6 = 12; m6 = 32;
        h7 = 13; m7 = 19;
        h8 = 14; m8 = 6;
        he = 14; me = 53;
    }
    if (schedule == 'C') {
        h1 = 8;  m1 = 22;
        h2 = 9;  m2 = 4;
        h3 = 9;  m3 = 46;
        h4 = 10; m4 = 20;
        h5 = 10; m5 = 54;
        h6 = 11; m6 = 28;
        h7 = 12; m7 = 2;
        h8 = 12; m8 = 31;
        he = 13; me = 0;
    }
    if (schedule == 'D') {
        h1 = 10; m1 = 9;
        h2 = 10; m2 = 39;
        h3 = 11; m3 = 9;
        h4 = 11; m4 = 43;
        h5 = 12; m5 = 17;
        h6 = 12; m6 = 51;
        h7 = 13; m7 = 25;
        h8 = 14; m8 = 9;
        he = 14; me = 53;
    }
  }
}
}
  var schoolOver;
  var flipflop = 0;
function playSoundTick() {
   var click1 = document.getElementById("click1");
    var click2 = document.getElementById("click2");
  
  if (schoolOver == 'yes') {
    
  } else {
    if (flipflop == 0) {
      click1.play();
      flipflop = 1;
    } else {
      if (flipflop == 1) {
        click2.play();
        flipflop = 0;
      }
    }
  }
}

function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
} 

function tick1() { //first Period
    var start = new Date;
    start.setHours(h1, m1, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);
    seconds = ss;
    if (isSoundOn == 1){
      playSoundTick();
    }
    if (hh <= 24 && hh >= 8) {
        document.getElementById("firstEndText").innerHTML = "Period 1 Is Over";
        document.getElementById('firstEnd').innerHTML = '';
        timeDetect1 = 0;
    } else {
       document.getElementById("firstEndText").innerHTML = "Period 1 Ends In:" + "&nbsp";
        document.getElementById('firstEnd').innerHTML = hh + ":" + mm + ":" + ss;
        schoolOver = 'no';
      timeDetect1 = 1;
       if (tabControl == 'on') {
         document.title= hh + ":" + mm + ":" + ss;
        }
    }
}//period 1
function tick2() { //second Period
    var start = new Date;
    start.setHours(h2, m2, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh <= 24 && hh >= 8) {
        document.getElementById("secondEndText").innerHTML = "Period 2 Is Over";
        document.getElementById('secondEnd').innerHTML = '';
      timeDetect2 = 1;
    } else {
       document.getElementById("secondEndText").innerHTML = "Period 2 Ends In:" + "&nbsp";
        document.getElementById('secondEnd').innerHTML =
            hh + ":" + mm + ":" + seconds;
      timeDetect2 = 0;
      if (tabControl == 'on' && timeDetect1 == 0)
      {
        document.title = hh + ":" + mm + ":" + seconds;
      }
    }
}//period 2
function tick3() { //third Period
    var start = new Date;
    start.setHours(h3, m3, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    if (hh <= 24 && hh >= 8) {
        document.getElementById("thirdEndText").innerHTML = "Period 3 Is Over";
        document.getElementById('thirdEnd').innerHTML = '';
      timeDetect3 = 0;
    } else {
       document.getElementById("thirdEndText").innerHTML = "Period 3 Ends In:" + "&nbsp";
        document.getElementById('thirdEnd').innerHTML =
            hh + ":" + mm + ":" + seconds;
      timeDetect3 = 1;
        if (tabControl == 'on' && timeDetect2 == 1)
      {
        document.title = hh + ":" + mm + ":" + seconds;
      }
    }
}//period 3
function tick4() { //fourth Period
	var start = new Date;
	start.setHours(h4, m4, 0);
	var now = new Date;
	if (now > start) {
		start.setDate(start.getDate() + 1);
	}
	var remain = ((start - now) / 1000);
	var hh = pad((remain / 60 / 60) % 60);
	var mm = pad((remain / 60) % 60);
	if (lunchMode == 'on') {
		 if (schedule == 'A') {
        h4 = 10; m4 = 50;
    }
    if (schedule == 'B') {
        h4 = 10; m4 = 55;
    }
    if (schedule == 'C') {
        h4 = 10; m4 = 17;
    }
    if (schedule == 'D') {
        h4 = 11; m4 = 40;
    }
	} else {
    setTheSchedule();
  }
  if (lunchMode == 'on') {
   document.getElementById("fourthEndText").innerHTML = "Period 4 Lunch Ends In:" + "&nbsp"; 
 } else {
    document.getElementById("fourthEndText").innerHTML = "Period 4 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById('fourthEnd').innerHTML = hh + ":" + mm + ":" + seconds;
    timeDetect4 = 1;
    if (tabControl == 'on' && timeDetect3 == 0) {
     document.title = hh + ":" + mm + ":" + seconds; 
    }
  } else {
    document.getElementById('fourthEnd').innerHTML = ' ';
    if (lunchMode == 'off') {
    document.getElementById("fourthEndText").innerHTML = "Period 4 Is Over"; 
    } else {
        document.getElementById("fourthEndText").innerHTML = "Period 4 Lunch Is Over"; 
    }
    timeDetect4 = 0;
  }

} //period 4
function tick5() { //fourth Period
    var start = new Date;
    start.setHours(h5, m5, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
  	if (lunchMode == 'on') {
		 if (schedule == 'A') {
        h5 = 11; m5 = 38;
    }
    if (schedule == 'B') {
        h5 = 11; m5 = 42;
    }
    if (schedule == 'C') {
        h5 = 10; m5 = 51;
    }
    if (schedule == 'D') {
        h5 = 12; m5 = 14;
    }
	} else {
    setTheSchedule();
  }
  if (lunchMode == 'on') {
   document.getElementById("fifthEndText").innerHTML = "Period 5 Lunch Ends In:" + "&nbsp"; 
 } else {
    document.getElementById("fifthEndText").innerHTML = "Period 5 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById('fifthEnd').innerHTML = hh + ":" + mm + ":" + seconds;
      timeDetect5 = 1;
    if (tabControl == 'on' && timeDetect4 == 0) {
     document.title = hh + ":" + mm + ":" + seconds; 
    }
  } else {
    document.getElementById('fifthEnd').innerHTML = ' ';
    if (lunchMode == 'off') {
    document.getElementById("fifthEndText").innerHTML = "Period 5 Is Over"; 
    } else {
       document.getElementById("fifthEndText").innerHTML = "Period 5 Lunch Is Over";  
    }
    timeDetect5 = 0;
  }

}//period 5
function tick6() { //fourth Period
    var start = new Date;
    start.setHours(h6, m6, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
  	if (lunchMode == 'on') {
		 if (schedule == 'A') {
        h6 = 12; m6 = 26;
    }
    if (schedule == 'B') {
        h6 = 12; m6 = 29;
    }
    if (schedule == 'C') {
        h6 = 11; m6 = 25;
    }
    if (schedule == 'D') {
        h6 = 12; m6 = 48;
    }
	} else {
    setTheSchedule();
  }
  	if (lunchMode == 'on') {
		mm = mm - 3;
	}
  if (lunchMode == 'on') {
   document.getElementById("sixthEndText").innerHTML = "Period 6 Lunch Ends In:" + "&nbsp"; 
 } else {
    document.getElementById("sixthEndText").innerHTML = "Period 6 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById('sixthEnd').innerHTML = hh + ":" + mm + ":" + seconds;
    timeDetect6 = 1;
    if (tabControl == 'on' && timeDetect5 == 0) {
     document.title = hh + ":" + mm + ":" + seconds; 
    }
  } else {
    document.getElementById('sixthEnd').innerHTML = ' ';
    if (lunchMode == 'off') {
    document.getElementById("sixthEndText").innerHTML = "Period 6 Is Over"; 
    } else {
    document.getElementById("sixthEndText").innerHTML = "Period 6 Lunch Is Over";  
    }
    timeDetect6 = 0;
  }

}//period 6
function tick7() { //fourth Period
    var start = new Date;
    start.setHours(h7, m7, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
  	if (lunchMode == 'on') {
		 if (schedule == 'A') {
        h7 = 13; m7 = 14;
    }
    if (schedule == 'B') {
        h7 = 13; m7 = 16;
    }
    if (schedule == 'C') {
        h7 = 11; m7 = 59;
    }
    if (schedule == 'D') {
        h7 = 13; m7 = 22;
    }
	} else {
   setTheSchedule();
  }
  	if (lunchMode == 'on') {
		mm = mm - 3;
	}
   if (lunchMode == 'on') {
   document.getElementById("seventhEndText").innerHTML = "Period 7 Lunch Ends In:" + "&nbsp"; 
 } else {
    document.getElementById("seventhEndText").innerHTML = "Period 7 Ends In:" + "&nbsp";
  }
  if (hh <= 10) {
    document.getElementById('seventhEnd').innerHTML = hh + ":" + mm + ":" + seconds;
    timeDetect7 = 1;
    if (tabControl == 'on' && timeDetect6 == 0) {
     document.title = hh + ":" + mm + ":" + seconds; 
    }
  } else {
    document.getElementById('seventhEnd').innerHTML = ' ';
     if (lunchMode == 'off') {
    document.getElementById("seventhEndText").innerHTML = "Period 7 Is Over"; 
     } else {
      document.getElementById("seventhEndText").innerHTML = "Period 7 Lunch Is Over";   
     }
    timeDetect7 = 0;
  }
}//period 7
function tick8() { //fourth Period
    var start = new Date;
    start.setHours(h8, m8, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
   if (hh <= 24 && hh >= 8) {
        document.getElementById("eighthEndText").innerHTML = "Period 8 Is Over";
        document.getElementById('eighthEnd').innerHTML = '';
        timeDetect8 = 0;
    } else {
       document.getElementById("eighthEndText").innerHTML = "Period 8 Ends In:" + "&nbsp";
        document.getElementById('eighthEnd').innerHTML =
            hh + ":" + mm + ":" + seconds;
      timeDetect8 = 1;
      if (tabControl == 'on' && timeDetect7 == 0)
      {
        document.title = hh + ":" + mm + ":" + seconds;
      }
    }
}//period 8

var endHour;
var endMin;

function ticke() { //fourth Period
    var start = new Date;
    start.setHours(he, me, 0);
    var now = new Date;
    if (now > start) {
        start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    
    endHour = hh;
    endMin = mm;
  
  
    if (hh <= 24 && hh >= 8) {
        document.getElementById('endText').innerHTML = 'School Is Over' ;
        schoolOver = 'yes';
        document.getElementById('time').innerHTML = " ";
        document.title = "School Is Over"; 
      

      timeDetecte = 0;
    } else {
        document.getElementById('endText').innerHTML = "End of School In:" + "&nbsp";
        document.getElementById('time').innerHTML =
            hh + ":" + mm + ":" + seconds;
       // document.title = hh + ":" + mm + ":" + seconds;
      timeDetecte = 1;
       if (tabControl == 'on' && timeDetect8 == 0)
      {
        document.title = hh + ":" + mm + ":" + seconds;
      } 
          if (tabControl == 'off'){
        document.title =  hh + ":" + mm + ":" + seconds;
      }

    }
}//end of day


function quarter1 (){
  
  var newHour = parseFloat(endHour);
  var newMin = parseFloat(endMin);

  var countDownDate = new Date("Nov 6, 2019 15:53:00").getTime();

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("until1Quarter").innerHTML = days + "d " + newHour + "h "  + newMin + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(quarter1);
    document.getElementById("until1Quarter").innerHTML = "Quarter 1 Is Over";
  }
}

function quarter2 (){
  
  var newHour = parseFloat(endHour);
  var newMin = parseFloat(endMin);

  var countDownDate = new Date("Jan 24, 2020 15:53:00").getTime();

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("until2Quarter").innerHTML = days + "d " + newHour + "h "  + newMin + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(quarter1);
    document.getElementById("until2Quarter").innerHTML = "Quarter 2 Is Over";
  }
}


function quarter3 (){
  
  var newHour = parseFloat(endHour);
  var newMin = parseFloat(endMin);

  var countDownDate = new Date("Apr 2, 2020 15:53:00").getTime();

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("until3Quarter").innerHTML = days + "d " + newHour + "h "  + newMin + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(quarter1);
    document.getElementById("until3Quarter").innerHTML = "Quarter 3 Is Over";
  }
}



function quarter4 (){
  
  var newHour = parseFloat(endHour);
  var newMin = parseFloat(endMin);

  var countDownDate = new Date("Jun 12, 2020 15:53:00").getTime();

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("until4Quarter").innerHTML = days + "d " + newHour + "h "  + newMin + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(quarter1);
    document.getElementById("until4Quarter").innerHTML = "Quarter 4 Is Over";
  }
}


function schoolEnd (){
  
  var newHour = parseFloat(endHour);
  var newMin = parseFloat(endMin);

  var countDownDate = new Date("Jun 12, 2020 15:53:00").getTime();

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("schoolEnd").innerHTML = days + "d " + newHour + "h "  + newMin + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(quarter1);
    document.getElementById("schoolEnd").innerHTML = "The School Year is Over!";
  }
}


function seniorEnd (){
  
  var newHour = parseFloat(endHour);

  var countDownDate = new Date("Jun 4, 2020 10:30:00").getTime();

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("seniorEnd").innerHTML = days + "d " + hours + "h "  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(quarter1);
    document.getElementById("seniorEnd").innerHTML = "Senior Year is Over";
  }
}



                           
                           
                           
function repeat() {
    tick1(); tick2(); tick3(); tick4(); tick5(); tick6(); tick7(); tick8(); ticke();
  quarter1(); quarter2(); quarter3(); quarter4(); schoolEnd(); seniorEnd();
  
  date();  weekendCalculate();
  
    document.addEventListener('DOMContentLoaded', tick1);
    document.addEventListener('DOMContentLoaded', tick2);
    document.addEventListener('DOMContentLoaded', tick3);
    document.addEventListener('DOMContentLoaded', tick4);
    document.addEventListener('DOMContentLoaded', tick5);
    document.addEventListener('DOMContentLoaded', tick6);
    document.addEventListener('DOMContentLoaded', tick7);
    document.addEventListener('DOMContentLoaded', tick8);
    document.addEventListener('DOMContentLoaded', ticke);
    
    setTimeout(repeat, 1000);
} repeat();//timeouts for each tick
var iro;

var values;

var element = 'background';

function selectColorElement() {
  element = document.getElementById("colorOptions").value;
}

  
var hex1; var hex2; var hex3; var hex4; var hex5; var hex6;
  
var colorPicker = new iro.ColorPicker("#color-picker-container", {
  width: 150,
  color: "#fff"
});
  
  values = document.getElementById("values");

colorPicker.on(["color:init", "color:change"], function(color){
  colorUpdate1();
    values.innerHTML = [
    hex1 = color.hexString,
  ].join("<br>");
});




  var background
  var accent;
  var text;
  var sidebar;
  var sidebarTxt;
  var buttonTxtPres;
  var settingDpres;
  var settingDTxtpres;
  var settingEpres;
  var settingETxtpres;
  var radioExtra;
  var radioDiv;
  



function setElementsAsValues () {
          Dsidebar = settingDpres;
          settingTxtD = settingDTxtpres;
  
          Asidebar = settingEpres;
          settingTxtE = settingETxtpres;
  
          buttonColorChange();
         
          buttonTxtColorChange();
          
          document.body.style.backgroundColor = background;
   
          document.getElementById("Progress_Status").style.backgroundColor = settingDpres;
  
       
  
          document.getElementById("endText").style.color = accent;
          document.getElementById("time").style.color = accent;
         // document.getElementById("video").style.backgroundColor = accent;
         // document.getElementById("myBtn").style.backgroundColor = accent;
          document.getElementById("feature").style.backgroundColor = settingDpres;
          document.getElementById("title").style.color = accent;
          document.getElementById("myprogressBar").style.backgroundColor = accent;
  
            document.getElementById("firstEndText").style.color = text; //time text
            document.getElementById("secondEndText").style.color = text;
            document.getElementById("thirdEndText").style.color = text;
            document.getElementById("fourthEndText").style.color = text;
            document.getElementById("fifthEndText").style.color = text;
            document.getElementById("sixthEndText").style.color = text;
            document.getElementById("seventhEndText").style.color = text;
            document.getElementById("eighthEndText").style.color = text;
            document.getElementById("firstEnd").style.color = text; //actual times
            document.getElementById("secondEnd").style.color = text;
            document.getElementById("thirdEnd").style.color = text;
            document.getElementById("fourthEnd").style.color = text;
            document.getElementById("fifthEnd").style.color = text;
            document.getElementById("sixthEnd").style.color = text;
            document.getElementById("seventhEnd").style.color = text;
            document.getElementById("eighthEnd").style.color = text;
            document.getElementById("like").style.color = text;
            document.getElementById("copy").style.color = text;
  
            document.getElementById("versionNumber").style.color = text;
            document.getElementById("myName").style.color = text;
  
            document.getElementById("dayContainer").style.backgroundColor = sidebar;
            document.getElementById("yearContainer").style.backgroundColor = sidebar;
    
                   document.getElementById("schoolScheduleTxt").style.color = sidebarTxt;
                   document.getElementById("tabTxt").style.color = sidebarTxt;
                   //document.getElementById("lunchTxt").style.color = sidebarTxt;
                  document.getElementById("daySelectTxt").style.color = sidebarTxt;
                  document.getElementById("daySelectTxt2").style.color = sidebarTxt;
                   document.getElementById("daySelectTxt3").style.color = sidebarTxt;
                   document.getElementById("daySelectTxt4").style.color = sidebarTxt;
                   document.getElementById("getDate").style.color = sidebarTxt;
                   document.getElementById("endYearTxt").style.color = sidebarTxt;
                   document.getElementById("progressPercent").style.color = sidebarTxt;
  
  
               document.getElementById("Adiv").style.backgroundColor = radioDiv;
               document.getElementById("Bdiv").style.backgroundColor = radioDiv;
               document.getElementById("Cdiv").style.backgroundColor = radioDiv;
               document.getElementById("Ddiv").style.backgroundColor = radioDiv;
  
  
    document.getElementById("feature").style.backgroundColor = settingDpres;
  document.getElementById("feature").style.color = settingDTxtpres;
  
          document.getElementById("myBtn").style.backgroundColor = settingDpres;
          document.getElementById("myBtn").style.color = settingDTxtpres;
       
               if (schedule == 'A') {
                  document.getElementById("buttonB").style.backgroundColor = radioExtra;//asdfasdfasdf
                 document.getElementById("buttonC").style.backgroundColor = radioExtra;//asdfasdfasdf
                 document.getElementById("buttonD").style.backgroundColor = radioExtra;//asdfasdfasdf
               } else {
                 if (schedule == 'B') {
                    document.getElementById("buttonA").style.backgroundColor = radioExtra;//asdfasdfasdf
               document.getElementById("buttonC").style.backgroundColor = radioExtra;//asdfasdfasdf
               document.getElementById("buttonD").style.backgroundColor = radioExtra;//asdfasdfasdf
                 } else {
                   if (schedule == 'C') {
                      document.getElementById("buttonA").style.backgroundColor = radioExtra;//asdfasdfasdf
               document.getElementById("buttonB").style.backgroundColor = radioExtra;//asdfasdfasdf
               document.getElementById("buttonD").style.backgroundColor = radioExtra;//asdfasdfasdf
                   } else {
                     if (schedule == 'D') {
                        document.getElementById("buttonA").style.backgroundColor = radioExtra;//asdfasdfasdf
               document.getElementById("buttonB").style.backgroundColor = radioExtra;//asdfasdfasdf
               document.getElementById("buttonC").style.backgroundColor = radioExtra;//asdfasdfasdf
                     }
                   }
                 }
               }
  
                    if (schedule == 'A') {
                      document.getElementById("buttonA").style.backgroundColor = scheduleSelectColor;//asdfasdfasdf
                   } else {
                     if (schedule == 'B'){
                      document.getElementById("buttonB").style.backgroundColor = scheduleSelectColor;//asdfasdfasdf
                     } else {
                       if (schedule =='C') {
                          document.getElementById("buttonC").style.backgroundColor = scheduleSelectColor;//asdfasdfasdf
                       } else { 
                         if (schedule == 'D') {
                          document.getElementById("buttonD").style.backgroundColor = scheduleSelectColor;//asdfasdfasdf
                         }
                       }
                     }
                   }
              
}


function determineRemember() {
  selectedPreset = document.getElementById("presets").value;
  localStorage.setItem("keySelectedPreset", selectedPreset);
  preset = selectedPreset;
  selectPreset();
}

function rememberPreset() {
  var remSelectedPreset = localStorage.getItem("keySelectedPreset");
    $("#presets").val(remSelectedPreset);
  preset = remSelectedPreset;
  selectPreset();
}

var doOrNot;
var preset;
var selectedPreset;

function selectPreset() {

  if (preset == 'Default') {
    setPresetValDefault();
  } else {
    if (preset == 'Light') {
      setPresetValLight();
    } else {
      if (preset == 'Stealth') {
        setPresetValStealth();
      } else {
        if (preset == 'Blue') {
          setPresetValBlue();
        } else {
          if (preset == 'Yellow') {
            setPresetValYellow();
          } else {
            if (preset == 'Green') {
              setPresetValGreen();
            } else {
              if (preset == 'Aqua') {
                setPresetValAqua();
              } else {
                if (preset == 'Blue/Pink')  {
                  setPresetValBluePink();
                } else {
                  if (preset == 'Cool') {
                    setPresetValCool();
                  } else {
                    if (preset == 'Neutral') {
                      setPresetValNeutral();
                    } else {
                      if (preset == 'Terrible') {
                        setPresetValTerrible();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  setElementsAsValues();
}

var radioColor = 'white';

   function colorUpdate1() {
     if (element == 'background') {  //BACKGROUND
    document.body.style.backgroundColor = hex1;
       
    localStorage.setItem("customBackgroundColor", hex1);
       
     } else {
       if (element == 'accent') {   //ACCENT
          document.getElementById("endText").style.color = hex1;
          document.getElementById("time").style.color = hex1;
          
          document.getElementById("title").style.color = hex1;
          document.getElementById("myprogressBar").style.backgroundColor = hex1;
         
          localStorage.setItem("customAccentColor", hex1);
         // alert(hex1);
         
       } else {
         if (element == 'text') { //TEXT
            document.getElementById("firstEndText").style.color = hex1; //time text
            document.getElementById("secondEndText").style.color = hex1;
            document.getElementById("thirdEndText").style.color = hex1;
            document.getElementById("fourthEndText").style.color = hex1;
            document.getElementById("fifthEndText").style.color = hex1;
            document.getElementById("sixthEndText").style.color = hex1;
            document.getElementById("seventhEndText").style.color = hex1;
            document.getElementById("eighthEndText").style.color = hex1;

            document.getElementById("firstEnd").style.color = hex1; //actual times
            document.getElementById("secondEnd").style.color = hex1;
            document.getElementById("thirdEnd").style.color = hex1;
            document.getElementById("fourthEnd").style.color = hex1;
            document.getElementById("fifthEnd").style.color = hex1;
            document.getElementById("sixthEnd").style.color = hex1;
            document.getElementById("seventhEnd").style.color = hex1;
            document.getElementById("eighthEnd").style.color = hex1;
    
            document.getElementById("like").style.color = hex1;

            document.getElementById("copy").style.color = hex1;
            document.getElementById("versionNumber").style.color = hex1;
            document.getElementById("myName").style.color = hex1;
           
            localStorage.setItem("customTextColor", hex1);
         } else {
           if (element == 'sidebar') { //SIDEBAR
                document.getElementById("dayContainer").style.backgroundColor = hex1;
                document.getElementById("yearContainer").style.backgroundColor = hex1;
             
             localStorage.setItem("customSidebarColor", hex1);
           } else {
             if (element == 'sidebarTxt') {
                   document.getElementById("schoolScheduleTxt").style.color = hex1;
                   document.getElementById("tabTxt").style.color = hex1;
                   
                   document.getElementById("daySelectTxt").style.color = hex1;
                   document.getElementById("daySelectTxt2").style.color = hex1;
                   document.getElementById("daySelectTxt3").style.color = hex1;
                   document.getElementById("daySelectTxt4").style.color = hex1;
               
               document.getElementById("Adiv").style.backgroundColor = hex1;
               document.getElementById("Bdiv").style.backgroundColor = hex1;
               document.getElementById("Cdiv").style.backgroundColor = hex1;
               document.getElementById("Ddiv").style.backgroundColor = hex1;
               
                document.getElementById("progressPercent").style.color = hex1;
               
               localStorage.setItem("customSidebarTextColor", hex1);

               radioColor = hex1;
               
               if (schedule == 'A') {
                  document.getElementById("buttonB").style.backgroundColor = hex1;//asdfasdfasdf
                 document.getElementById("buttonC").style.backgroundColor = hex1;//asdfasdfasdf
                 document.getElementById("buttonD").style.backgroundColor = hex1;//asdfasdfasdf
               } else {
                 if (schedule == 'B') {
                    document.getElementById("buttonA").style.backgroundColor = hex1;//asdfasdfasdf
               document.getElementById("buttonC").style.backgroundColor = hex1;//asdfasdfasdf
               document.getElementById("buttonD").style.backgroundColor = hex1;//asdfasdfasdf
                 } else {
                   if (schedule == 'C') {
                      document.getElementById("buttonA").style.backgroundColor = hex1;//asdfasdfasdf
               document.getElementById("buttonB").style.backgroundColor = hex1;//asdfasdfasdf
               document.getElementById("buttonD").style.backgroundColor = hex1;//asdfasdfasdf
                   } else {
                     if (schedule == 'D') {
                        document.getElementById("buttonA").style.backgroundColor = hex1;//asdfasdfasdf
               document.getElementById("buttonB").style.backgroundColor = hex1;//asdfasdfasdf
               document.getElementById("buttonC").style.backgroundColor = hex1;//asdfasdfasdf
                     }
                   }
                 }
               }
                   document.getElementById("getDate").style.color = hex1;
                  document.getElementById("endYearTxt").style.color = hex1;
             } else {
               if (element == 'buttonTxt') {
                  // document.getElementById("video").style.color = hex1;
                   document.getElementById("myBtn").style.color = hex1;
                   document.getElementById("feature").style.color = hex1;
                 
                   localStorage.setItem("customButtonTextColor", hex1);
               } else {
                 if (element == 'settingD') {
                   
                    localStorage.setItem("customSettingDisabledColor", hex1);
                   
                     document.getElementById("feature").style.backgroundColor = hex1;
                   document.getElementById("myBtn").style.backgroundColor = hex1;
                    document.getElementById("Progress_Status").style.backgroundColor = hex1;//asdfasdfasdf
                   
                     scheduleSelectColor = hex1;
                   
                   if (schedule == 'A') {
                      document.getElementById("buttonA").style.backgroundColor = hex1;//asdfasdfasdf
                   } else {
                     if (schedule == 'B'){
                      document.getElementById("buttonB").style.backgroundColor = hex1;//asdfasdfasdf
                     } else {
                       if (schedule =='C') {
                          document.getElementById("buttonC").style.backgroundColor = hex1;//asdfasdfasdf
                       } else { 
                         if (schedule == 'D') {
                          document.getElementById("buttonD").style.backgroundColor = hex1;//asdfasdfasdf
                         }
                       }
                     }
                   }
                   Dsidebar = hex1;
                   buttonColorChange();
                   
                 } else {
                   if (element == 'settingE') {
                     localStorage.setItem("customSettingEnabledColor", hex1);
                     Asidebar = hex1;
                     buttonColorChange();
               
                   } else {
                     if (element =='settingETxt') {
                       localStorage.setItem("customSettingEnabledTextColor", hex1);
                       settingTxtE = hex1;
                       
                       buttonTxtColorChange();
                     } else {
                       if (element == 'settingDTxt') {
                         localStorage.setItem("customSettingDisabledTextColor", hex1);
                         settingTxtD = hex1;
                    
                         document.getElementById("myBtn").style.color = hex1;
                          document.getElementById("feature").style.color = hex1;
                         buttonTxtColorChange();
                         
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       }
     }
  }

var settingTxtE = 'white';
var settingTxtD = 'white';

function buttonTxtColorChange() {

  
  
  if (tabControl == 'off') {
        document.getElementById("tabTitleButton").style.color = settingTxtE;
  } else {
        document.getElementById("tabTitleButton").style.color = settingTxtD;
  }
  if (lunchMode == 'on') {
            document.getElementById("lunchModebutton").style.color = settingTxtE;
  } else {
            document.getElementById("lunchModebutton").style.color = settingTxtD;
  }
}

function buttonColorChange () {
  if (tabControl == 'off') {
    document.getElementById("tabTitleButton").style.backgroundColor = Asidebar;
  }  else {
    document.getElementById("tabTitleButton").style.backgroundColor = Dsidebar;
  }
  
  if (lunchMode == 'on') {
    document.getElementById("lunchModebutton").style.backgroundColor = Asidebar;
  } else {
    document.getElementById("lunchModebutton").style.backgroundColor = Dsidebar;
  }
  
}
  function tabSwitch() {
          var xhr = new XMLHttpRequest();
 var myURL = "https://maker.ifttt.com/trigger/timerAction/with/key/bc48cOTCsHu3gBrt1nX1EE?value1=" + "Tab Switch";
xhr.open("POST", myURL, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    value: "value"
})); 
    
    
    
    var checkBox = document.getElementById("togglePoint2");
    if (setTabState == 0) {
     setTabState = 1;
     tabControl = 'off';
      document.getElementById("tabTitleButton").style.backgroundColor = Asidebar;
      document.getElementById("tabTitleButton").style.color = settingTxtE;
      
      document.getElementById("alertText").innerHTML = "Tab Title Enabled";
      
        opp = 1;
        document.getElementById("alertOverlay").style.opacity = opp;
       setTimeout(function (){

  fadeOutEffect();

}, 1000); 

    }
    else
    {
     setTabState = 0;
     tabControl = 'on';
      document.getElementById("tabTitleButton").style.backgroundColor = Dsidebar;
      document.getElementById("tabTitleButton").style.color = settingTxtD;
     
      document.getElementById("alertText").innerHTML = "Tab Title Disabled";
       document.getElementById("alertOverlay").style.opacity = 1;
         setTimeout(function (){

  fadeOutEffect();

}, 1000); 
      
    }
} 

var check = function(){
    if(1 == 0){
        // run when condition is met
    }
    else {
        setTimeout(check, 1000); // check again in a second
    }
}

  function notes() {
  window.location.href = 'http://schooltimerbeta.glitch.me/releasenotes.html';

  }
      var daysOfSchool = 284;
  
  var daysWith;
  

   var width = 1; 

var x = setInterval(function() {

    var element = document.getElementById("myprogressBar");  

  var countDownDate = new Date("Jun 12, 2020 15:37:25").getTime();
  
  
  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //document.getElementById("untilSummerBreak").innerHTML = days + " " + "Days";
  
  daysWith = days / daysOfSchool;
  
  daysWith = 1 - daysWith;
  
  daysWith = daysWith * 100;
  
   daysWith = daysWith.toFixed(1);
  
   element.style.width = daysWith + '%';  
  document.getElementById("progressPercent").innerHTML = daysWith + '%';  

}, 1);


//stay at bottom!!!!!!

function setPresetValDefault() {
    background = '#101214'
    accent = '#ff1c3e';
    text = 'white';
    sidebar = '#191B1F'
    sidebarTxt = 'white';
    buttonTxtPres = 'white';
    settingDpres = '#2B2F36';
    settingDTxtpres = 'white';
    settingEpres = '#626978';
    settingETxtpres = 'white';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = '#40444F';  
}

function setPresetValLight() {
    background = 'white'
    accent = '#ff1c3e';
    text = '#0f0f0f';
    sidebar = 'd9d9d9'
    sidebarTxt = 'black';
    buttonTxtPres = 'black';
    settingDpres = 'white';
    settingDTxtpres = 'black';
    settingEpres = '#bdbdbd';
    settingETxtpres = 'black';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = 'black';
}

function setPresetValStealth() {
    background = 'black'
    accent = '#242424';
    text = '#242424';
    sidebar = 'black'
    sidebarTxt = '#242424';
    buttonTxtPres = 'black';
    settingDpres = '#0F0F0F';
    settingDTxtpres = '#242424';
    settingEpres = '#242424';
    settingETxtpres = '#000000';
      
    radioDiv = '242424';
      
    radioColor = sidebarTxt;
    radioExtra = radioColor;
    scheduleSelectColor = '#303030';
}

function setPresetValBlue() {
    background = '020D19'
    accent = '#03D5F8';
    text = 'E1F4FF';
    sidebar = '0a1c30'
    sidebarTxt = 'white';
    buttonTxtPres = 'white';
    settingDpres = '#40444F';
    settingDTxtpres = 'white';
    settingEpres = '#626978';
    settingETxtpres = 'white';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = '#40444F';  
}

function setPresetValYellow() {
     background = '#000411'
    accent = '#edc24c';
    text = '#E1EFE6';
    sidebar = '#000411';
    sidebarTxt = 'white';
    buttonTxtPres = 'white';
    settingDpres = '#40444F';
    settingDTxtpres = 'white';
    settingEpres = '#626978';
    settingETxtpres = 'white';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = '#40444F';  
}
function setPresetValGreen() {
    background = '#212424'
    accent = '#36D98E';
    text = 'white';
    sidebar = '#1a1c1c';
    sidebarTxt = 'white';
    buttonTxtPres = 'white';
    settingDpres = '#40444F';
    settingDTxtpres = 'white';
    settingEpres = '#626978';
    settingETxtpres = 'white';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = '#40444F';  
}

function setPresetValAqua() {
    background = '#212424'
    accent = '#70ABAF';
    text = 'white';
    sidebar = '#1a1c1c';
    sidebarTxt = 'white';
    buttonTxtPres = 'white';
    settingDpres = '#40444F';
    settingDTxtpres = 'white';
    settingEpres = '#626978';
    settingETxtpres = 'white';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = '#40444F';  
}

function setPresetValBluePink() {
    background = '#212424'
    accent = '#F45B69';
    text = 'white';
    sidebar = '#456990';
    sidebarTxt = 'white';
    buttonTxtPres = 'white';
    settingDpres = '#40444F';
    settingDTxtpres = 'white';
    settingEpres = '#626978';
    settingETxtpres = 'white';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = '#40444F';  
}

function setPresetValCool() {
    background = '#212424'
    accent = '#15d4bb';
    text = '#E1EFE6';
    sidebar = '#FF715B';
    sidebarTxt = 'white';
    buttonTxtPres = 'white';
    settingDpres = '#40444F';
    settingDTxtpres = 'white';
    settingEpres = '#626978';
    settingETxtpres = 'white';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = '#40444F';  
}

function setPresetValNeutral() {
    background = '#27363B'
    accent = 'dbb293';
    text = 'white';
    sidebar = '#809c80';
    sidebarTxt = 'white';
    buttonTxtPres = 'white';
    settingDpres = '#40444F';
    settingDTxtpres = 'white';
    settingEpres = '#626978';
    settingETxtpres = 'white';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = '#40444F';  
}

function setPresetValTerrible() {
    background = '#FFFF00'
    accent = '#FF00D0';
    text = '#FF0000';
    sidebar = '#00FF1E';
    sidebarTxt = '#FF364D';
    buttonTxtPres = 'white';
    settingDpres = '#00CCFF';
    settingDTxtpres = 'white';
    settingEpres = '#FFA200';
    settingETxtpres = 'white';
    
    radioDiv = 'white';
      
    radioColor = 'white';
    radioExtra = radioColor;
    scheduleSelectColor = '#40444F';  
}