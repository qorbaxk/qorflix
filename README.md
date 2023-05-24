# 📽️ qorflix
![image](https://github.com/qorbaxk/qorflix/assets/97217443/0d087e42-9138-4da0-9aa4-02d567c09d01)

## 📕 프로젝트 정보
### 프로젝트 기간

![project_start](https://img.shields.io/badge/Project%20start-2023--05--01-green) ![project_end](https://img.shields.io/badge/Project%20end-2023--05--25-orange) 

### 프로젝트 내용

TMDB API를 사용하여 제작한 영화 정보 제공 사이트 입니다. Firebase를 사용하여, 찜하기 및 여러 기능을 제공합니다.

> 🚩 URL : https://qorflixvertwo.netlify.app/

## 🎨 Environment

### Skill

<div align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
</div>

![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white) 
![ESlint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=ESLint&logoColor=white) 


## 프로젝트 기능 안내
### 메인 홈
![image](https://github.com/qorbaxk/qorflix/assets/97217443/fe8c16f1-4db0-44da-b530-4aeeebfe4fc0)
- 메인 홈에서 상영중인 영화, 인기영화, 상영 예정 영화를 스와이퍼를 통해 20개를 제공합니다.
- 각 영화카드 클릭시 세부 페이지로 안내합니다.
- 각 영화마다 장르, 관람등급을 안내하고 개봉후 영화는 별점을, 개봉전 영화는 개봉일을 제공합니다.
### 세부 페이지
![image](https://github.com/qorbaxk/qorflix/assets/97217443/e91c2dba-45cb-49fe-92e1-4c263c3b269d)
- 영화의 세부 정보를 안내합니다.
- 개요 탭에서는 줄거리와 출연배우, 감독을 이미지와 함께 제공합니다.
- 트레일러 탭에서는 영화의 트레일러를 제공합니다. 여러 개 일 경우 모두 제공
- 리뷰 탭에서는 작성되어있는 리뷰를 짧게 제공하고, 각각의 리뷰 클릭시 전체 내용을 볼 수 있습니다.
- 추천 영화 탭에서는 해당 영화와 비슷한 영화를 제공합니다.
- 상단의 플러스 버튼을 클릭하여 찜 목록에 영화를 추가할 수 있습니다. (로그인시)
- 공유하기 버튼 클릭시 카카오톡으로 해당 영화의 세부페이지를 제공하는 기능을 추가할 예정입니다.
### 전체영화 페이지
![image](https://github.com/qorbaxk/qorflix/assets/97217443/edcde465-e94c-4a06-a655-e524f6b50a7a)
- 모든 영화를 제공하는 페이지 입니다. <br>
![image](https://github.com/qorbaxk/qorflix/assets/97217443/cf909bb6-0452-4f08-ad38-76959196c906) <br>
- 사이드의 검색창을 통하여 영화를 검색할 수 있습니다.
- 첫번째 드롭다운 메뉴(수익, 인기, 평가수)를 선택하여 영화목록을 필터링 할 수 있습니다.
- 두번째 드롭다운 메뉴(개봉년도 범위)를 선택하여 해당 범위의 영화만 보일 수 있게 할 수 있습니다.
- 세번째 드롭다운 메뉴(장르)에서 버튼들을 클릭하여 해당 장르의 영화만 보일 수 있게 할 수 있습니다.
- 모든 필터링은 전부 동시에 사용 가능합니다.
![스크린샷 2023-05-25 013258](https://github.com/qorbaxk/qorflix/assets/97217443/ac6f2d8e-c6d2-45cc-880d-41d821f9930f)
![image](https://github.com/qorbaxk/qorflix/assets/97217443/08a8f058-9594-4b30-9c6b-aa0d9a72408e)
- 하단의 페이지네이션을 통하여 총 500페이지의 영화목록을 제공합니다.
- 필터링에 따라 페이지는 제공되지 않을 수 있습니다.
### 마이 페이지
![image](https://github.com/qorbaxk/qorflix/assets/97217443/71b54ade-c65d-44be-972a-c6e37b0a5184)
- 로그인된 사용자의 프로필 사진과 닉네임을 수정할 수 있습니다.
- 로그아웃 기능을 제공합니다.
- 회원탈퇴 기능을 제공합니다.
### 찜한 영화 페이지
![image](https://github.com/qorbaxk/qorflix/assets/97217443/3e6850d6-7757-49a5-b62e-fc8ceef30774)
![image](https://github.com/qorbaxk/qorflix/assets/97217443/a048b8e4-db33-4ddf-902c-4993dd0e2aa5)
- 최근에 담은 순서를 기본으로 찜한 영화의 목록을 제공합니다.
- 상단의 옵션을 선택하여 목록의 순서를 조정할 수 있습니다.
- 모든 기능은 로그인 시 제공됩니다.
### 로그인 페이지
![image](https://github.com/qorbaxk/qorflix/assets/97217443/08137a0a-4ae9-4653-87a5-3007e5f3a0b1)
- 이메일과 비밀번호를 입력해 로그인 할 수 있습니다.
- 구글 소셜로그인과 깃허브 소셜로그인을 제공합니다.
### 회원가입 페이지
![image](https://github.com/qorbaxk/qorflix/assets/97217443/e3a6e600-33d8-4936-9567-628f31809750)
- 프로필사진과 각종 회원 정보를 입력할 수 있습니다.
- 모든 정보는 유효성검사를 통해 올바를 때만 회원가입이 가능합니다.

## 프로젝트 추가 예정 기능
### 공유하기 기능
- 카카오 API를 활용하여 영화 세부 페이지를 메세지로 공유할 수 있도록 제공할 예정입니다.
### 리뷰작성 기능
- 다른사람의 리뷰만 볼 수 있는 것이 아닌, 자신의 리뷰도 추가할 수 있도록 개발할 예정입니다.
- 추가시 글 작성 뿐만아니라 별점시스템도 도입


