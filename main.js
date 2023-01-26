const onClickStart = document.getElementById("onClickStart")
const onClickStop = document.getElementById("onClickStop")
const onClickReset = document.getElementById("onClickReset")
const time = document.querySelector("time");

let startTime = 0;
let running = false;
let timerInterval = undefined;
let currentTime = "";
let calcTime = 0;

const displayTimer = () => {
    timerInterval = window.setInterval(() => {
      calcTime = Date.now() - startTime;

      const currentTime = new Date(calcTime);
      const h = String(currentTime.getHours() - 9).padStart(1, "0");
      const m = String(currentTime.getMinutes()).padStart(1, "0");
      const s = String(currentTime.getSeconds()).padStart(1, "0");
      const ms = String(currentTime.getMilliseconds()).padStart(1, "0");
      const ms1 =ms.slice(0,1);

      time.textContent = `${h}:${m}:${s}:${ms1}`;
    }, 10);
}

// スタートボタンクリック（イベント）
onClickStart.addEventListener('click', function(){
   startTime = Date.now()　- calcTime;
   displayTimer();
   // ボタンの状態
   onClickStart.disabled = true;
   onClickStop.disabled = false;
   onClickReset.disabled = false;
})

// ストップボタンクリック（イベント）
onClickStop.addEventListener('click', function(){
   window.clearInterval(timerInterval);
   // ボタンの状態
   onClickStart.disabled = false;
   onClickStop.disabled = true;
   onClickReset.disabled = false;
})

// リセットボタンクリック（イベント）
onClickReset.addEventListener('click', function(){
  calcTime = 0;
  time.textContent = "0:0:0:0";
  onClickStart.disabled = false;
  window.clearInterval(timerInterval);
  // ボタンの状態
  onClickStart.disabled = false;
  onClickStop.disabled = true;
  onClickReset.disabled = true;
})