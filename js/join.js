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
const regExp2 = /^(?=.*[A-Za-z].*)(?=.*\d|\W)(?!.*\s).{8,20}$/;
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
  if (inputPw1.value === inputPw2.value) {
    div2.innerHTML = "비밀번호 일치";
    div2.style.color = "green";
  } else {
    div2.innerHTML = "비밀번호 불일치";
    div2.style.color = "red";
  }

  if (inputPw1.value.length === 0) {
    this.value = "";
    Swal.fire({
      icon: "error",
      title: "비밀번호를 먼저 입력하세요",
    });
    inputPw1.focus();
  }

  if (inputPw2.value.length === 0) {
    div2.innerHTML = "";
  }
});

// 전화번호 인증 버튼 클릭 시
document.getElementById("phone-btn").addEventListener("click", function () {
  const tel = document.getElementById("phone-window");
  const regExp3 = /^[0][0-9]{2}[0-9]{3,4}[0-9]{4}$/;

  if (!regExp3.test(tel.value)) {
    Swal.fire({
      title: "전화번호를 형식에 맞게 입력하세요",
      icon: "error",
    });
    return;
  }

  // 전화번호 유효성 검사 통과 시, 가입 완료 버튼 활성화
  document.getElementById("sign-up-btn").disabled = false;
  Swal.fire({
    title: "인증 성공!",
    icon: "success",
  });
});

// 회원가입 완료 버튼 클릭 시
const signUpBtn = document.getElementById("sign-up-btn");
signUpBtn.addEventListener("click", () => {
  // 체크박스 요소들
  const agree1 = document.getElementById("agree-2");
  const agree2 = document.getElementById("agree-3");

  // 체크박스가 모두 선택되었는지 확인
  if (!agree1.checked || !agree2.checked) {
    Swal.fire({
      icon: "error",
      title: "이용약관과 개인정보 수집 및 이용에 동의해 주세요.",
    });
    event.preventDefault(); // 폼 제출을 막음
  } else {
    // 체크박스가 모두 선택되었으면 유효성 검사 진행 (이미 존재하는 validate 함수 등)
    if (validate()) {
      Swal.fire({
        title: "회원가입 완료!",
        icon: "success",
      }).then(() => {
        setTimeout(() => {
          location.reload(); // 페이지 새로고침
        }, 500);
      });
      event.preventDefault();
    }
  }
});

// 유효성 검사 함수
function validate() {
  const gender = document.getElementsByName("gender");

  if (!gender[0].checked && !gender[1].checked) {
    Swal.fire({
      title: "성별을 선택해 주세요",
      icon: "question",
    });
    return false;
  }

  const tel = document.getElementById("phone-window");
  const regExp3 = /^[0][0-9]{2}[0-9]{3,4}[0-9]{4}$/;

  if (tel.value.length === 0) {
    Swal.fire({
      title: "전화번호를 입력해 주세요",
      icon: "question",
    });
    return false;
  }
  if (!regExp3.test(tel.value)) {
    Swal.fire({
      icon: "error",
      title: "전화번호를 형식에 맞게 입력하세요",
    });
    return false;
  }

  Swal.fire({
    title: "인증 성공!",
    icon: "success",
  });

  return true; // 유효성 검사가 성공하면 true 반환
}

// 버튼을 기본적으로 비활성화 상태로 설정
signUpBtn.disabled = true;
