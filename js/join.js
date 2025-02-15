const inputId = document.getElementById("email-window");
const regExp1 = /^[a-z](\d|\w|-|_){5,13}$/;

inputId.addEventListener("keyup", function () {
  if (regExp1.test(inputId.value)) {
    this.style.backgroundColor = "skyblue";
  } else {
    this.style.backgroundColor = "hotpink";
  }

  if (inputId.value.length == 0) {
    this.style = "";
  }
});

const inputPw1 = document.getElementById("pw-window1");
const regExp2 = /^(\d|\w|!|@|#|\$|%|\^|&|\*|-|_|\+){8,20}$/;
const div1 = document.getElementById("div1");

inputPw1.addEventListener("keyup", function () {
  if (regExp2.test(inputPw1.value)) {
    div1.innerHTML = "비밀번호 적합";
    div1.style.color = "green";
  } else {
    div1.innerHTML = "비밀번호 부적합";
    div1.style.color = "red";
  }

  if (inputPw1.value.length == 0) {
    div1.innerHTML = "";
  }
});

const inputPw2 = document.getElementById("pw-window2");
const div2 = document.getElementById("div2");

inputPw2.addEventListener("keyup", function () {
  if (inputPw1.value == inputPw2.value) {
    div2.innerHTML = "비밀번호 일치";
    div2.style.color = "green";
  } else {
    div2.innerHTML = "비밀번호 불일치";
    div2.style.color = "red";
  }

  if (inputPw1.value == 0) {
    this.value = "";
    alert("비밀번호를 먼저 입력하세요");
    inputPw1.focus();
  }

  if (inputPw2.value.length == 0) {
    div2.innerHTML = "";
  }
});

function validate() {
  const gender = document.getElementsByName("gender");

  if (!gender[0].checked && !gender[1].checked) {
    alert("성별을 선택해 주세요.");
    return false;
  }

  const tel = document.getElementById("phone-window");
  const regExp3 = /^[0][0-9]{2}[0-9]{3,4}[0-9]{4}$/;

  if (tel.value.length == 0) {
    alert("전화번호를 입력해 주세요.");
    return false;
  }
  if (!regExp3.test(tel.value)) {
    alert("전화번호 형식 불일치.");
    return false;
  }
  if (regExp3.test(tel.value)) {
    alert("인증 되었습니다!");
    return false;
  }
}
