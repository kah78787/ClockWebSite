function TimeClock() {
  var time = new Date();
  var clockOne = document.getElementById("clock-1");
  var clockTwo = document.getElementById("clock-2");
  var clockThree = document.getElementById("clock-3");
  var clockFour = document.getElementById("clock-4");
  var clockFive = document.getElementById("clock-5");
  var clockSix = document.getElementById("clock-6");
  var clockSeven = document.getElementById("clock-7");
  //--------------Hours------------------
  HoursOne = time.getHours().toString();
  HoursOne = HoursOne[0];
  HoursTwo = time.getHours().toString();
  HoursTwo = HoursTwo[1];
  clockOne.innerHTML = HoursOne;
  clockTwo.innerHTML = HoursTwo;
  if (time.getHours() <= 9) {
    HoursOne = "0";
    HoursTwo = time.getHours().toString();
    HoursTwo = HoursTwo[0];
    clockOne.innerHTML = HoursOne;
    clockTwo.innerHTML = HoursTwo;
  }
  //--------------Minutes------------------
  MinutesOne = time.getMinutes().toString();
  MinutesOne = MinutesOne[0];
  MinutesTwo = time.getMinutes().toString();
  MinutesTwo = MinutesTwo[1];
  clockThree.innerHTML = MinutesOne;
  clockFour.innerHTML = MinutesTwo;
  if (time.getMinutes() <= 9) {
    MinutesOne = "0";
    MinutesTwo = time.getMinutes().toString();
    MinutesTwo = MinutesTwo[0];
    clockThree.innerHTML = MinutesOne;
    clockFour.innerHTML = MinutesTwo;
  }
  //-------------Seconds--------------------
  SecondsOne = time.getSeconds().toString();
  SecondsOne = SecondsOne[0];
  SecondsTwo = time.getSeconds().toString();
  SecondsTwo = SecondsTwo[1];
  clockFive.innerHTML = SecondsOne;
  clockSix.innerHTML = SecondsTwo;
  if (time.getSeconds() <= 9) {
    SecondsOne = "0";
    SecondsTwo = time.getSeconds().toString();
    SecondsTwo = SecondsTwo[0];
    clockFive.innerHTML = SecondsOne;
    clockSix.innerHTML = SecondsTwo;
  }
  if (HoursOne == "0") {
    clockSeven.innerHTML = "AM";
  } else {
    clockSeven.innerHTML = "PM";
  }
}
setInterval(TimeClock, 1000);
