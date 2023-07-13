const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
// container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요</h3>";

const dateFormMaker = function () {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;
  // const dateFormat = inputYear + "-" + inputMonth + "-" + inputDate;
  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;
  return dateFormat;
};
const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const now = new Date();
  const target = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (target - now) / 1000;
  if (remaining <= 0) {
    // remaining === 0 이면 타이머가 종료되었습니다. 출력
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    console.log("타이머가 종료되었습니다.");
  } else if (isNaN(remaining)) {
    // 만약, 유효하지 않은 날짜가 입력되면, 유효한 시간대가 아닙니다. 출력
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    console.log("유효한 시간대가 아닙니다.");
  }
  // const remainingDate = Math.floor(remaining / 3600 / 24);
  // const remainingHours = Math.floor(remaining / 3600) % 24;
  // const remainingMin = Math.floor(remaining / 60) % 60;
  // const remainingSec = Math.floor(remaining) % 60;
  // ms까지 포함하므로 단위 변경 해줘야함

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHours: Math.floor(remaining / 3600) % 24,
    remainingMin: Math.floor(remaining / 60) % 60,
    remainingSec: Math.floor(remaining) % 60,
  };

  // querySelector("#id") === getElementById('id')
  // const days = document.getElementById("days");
  // const hours = document.getElementById("hours");
  // const min = document.getElementById("min");
  // const sec = document.getElementById("sec");

  // const documentObj = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   min: document.getElementById("min"),
  //   sec: document.getElementById("sec"),
  // };
  const documentArr = ["days", "hours", "min", "sec"];
  const documentObj = {};
  for (let tag of documentArr) {
    documentObj[tag] = document.getElementById(`${tag}`);
    console.log(documentObj[tag].textContent);
  }
  const timeKeys = Object.keys(remainingObj);

  // for (let i = 0; i < timeKeys.length; i++) {
  //   documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
  // }

  let i = 0;
  for (let key in documentObj) {
    documentObj[key].textContent = remainingObj[timeKeys[i]];
    i++;
  }

  // documentObj.days.textContent = remainingObj.remainingDate;
  // documentObj.hours.textContent = remainingObj.remainingHours;
  // documentObj.min.textContent = remainingObj.remainingMin;
  // documentObj.sec.textContent = remainingObj.remainingSec;
};
