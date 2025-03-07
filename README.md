<div align="center">

<!-- logo -->
![bugs_logo](https://github.com/user-attachments/assets/cc898737-64cb-4636-835e-245ddffde5e1)
# Bugs 웹사이트 리뉴얼(Publishing)
</div> 
</br>

## 🔎 프로젝트 상세내용
|메인페이지(반응형)|
|:---:|
|![bugs_main](https://github.com/user-attachments/assets/c2223c7d-c5ea-4355-a8b8-e3b4cbce2518)|
|![bugs_responsive](https://github.com/user-attachments/assets/f807a5db-c4bc-44b6-aab6-18f48c460643)|
|① 부트스트랩 캐러셀 오토 슬라이드 기능으로 동적인 느낌을 줌.|
|② PC, 태블릿, 모바일 풀 반응형.|
<br>

|뮤직 플레이어|
|:---:|
|![bugs_player](https://github.com/user-attachments/assets/4d61d9fe-403e-4858-a7b4-d0f1e6402cd6)|
|① Jasmine 재생 버튼 클릭시, 새로운 창에서 해당 음악 뮤직 플레이어 자동 재생.|
<br>

|회원가입 창|
|:---:|
|![bugs_join](https://github.com/user-attachments/assets/494e0f54-daef-4549-a71e-2bc954ac820e)|
|① 회원가입 유효성 검사. 필수 항목 미수행 시 가입 버튼 disabled. 모두 수행시 가입 완료.|
<br>

## 🛠️ 사용기술 및 개발환경
<img src="https://github.com/user-attachments/assets/60167f87-c47e-4c31-af84-af685483db0d" width="150"/>
<img src="https://github.com/user-attachments/assets/9d525ab1-1fa7-44ac-b438-3a23d52a6ffb" width="150"/>
<img src="https://github.com/user-attachments/assets/1ba0705b-87e4-4b6b-89bd-97b5f18170c3" width="150"/>
<br />

## 🤔 기술적 이슈와 해결 과정
- 메인페이지의 각 음악 앨범 카드에 hover시 해당 앨범 카드에만 button이 up되게끔 구현하고 싶었다. 처음엔 JS를 사용하여 각 카드의 인덱스에서만 적용되게 끔 코드를 짜야한다고 생각했다. 하지만 css선택자 중 후손선택자 특성을 활용해보니 불필요한 JS없이 CSS만으로 간단하게 구현이 가능하단걸 알 수 있었다.
