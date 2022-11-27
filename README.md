# Movie Dream :movie_camera:
#### Movie Dream은 영화 정보 검색 웹 서비스 입니다
![main](https://user-images.githubusercontent.com/96876293/204118812-37ace5ee-5af2-40aa-9f94-6cc349ad469e.png)
> 개발기간: 22.09.05 ~ 22.11.25 (약 3개월) </br>
> 개발인원: 팀 프로젝트(5인 개발) </br>

> [Movie Dream 홈페이지 바로가기](http://3.37.88.244/) </br>

# Index 📖
+ 팀원 구성
+ 프로젝트 주제 선정 이유
+ 프로젝트 사용 기술
+ 프로젝트 폴더 구조
+ 프로젝트 배포 구조
+ 주요 기능 미리보기
+ Lesson Learned 
</br>

# 팀원 구성 :raising_hand:
<table>
  <tr>
    <td>
         <img src="https://user-images.githubusercontent.com/96876293/204119092-198375f2-4fcb-4534-b14a-50010659e261.jpeg" width="100">
    </td>
     <td>
         <b>김준규</b></br>
         Front 팀장</br>
         영화 검색 필터링(장르 , 영화 러닝타임 , 영화 개봉날짜 , 영화 정렬 , 영화 국가) 구현</br>
         검색어 자동완성 , 하이라이팅 구현</br>
         movie detail page 출연진 , 감독 클릭 모달 구현</br>
         프로젝트 배포</br>
         반응형 화면 구현</br>
         search page infinity scroll 구현</br>
         Front 리팩토링</br>
         전반적인 Front 개발 총괄
    </td>
      
   </tr>
   <tr>
        <td>
         <img src="https://user-images.githubusercontent.com/96876293/204119323-29acab5d-0064-4694-944a-8c0d53f4773a.png" width="100">
    </td>
     <td>
         <b>양재연</b></br>
         Front 팀원</br>
         movie detail page 영화 정보 구현</br>
    </td>
   </tr>
    <tr>
        <td>
         <img src="https://user-images.githubusercontent.com/96876293/204119447-be66d541-1c2f-4d81-9858-0a0b3df555d6.png" width="100">
    </td>
     <td>
         <b>정현지</b></br>
         Front 팀원</br>
         main page 캐루셀 구현</br>
         프로젝트 logo 제작</br>
    </td>
   </tr>
    <tr>
        <td>
         <img src="https://user-images.githubusercontent.com/96876293/204119499-1e5de145-8d0a-47d1-87f9-578cc6ecdc8d.png" width="100">
    </td>
     <td>
         <b>박세연</b></br>
         Front 팀원</br>
         movie page review 부분 구현</br>
    </td>
   </tr>
    <tr>
        <td>
         <img src="https://user-images.githubusercontent.com/96876293/204119580-e47f93c9-0f94-4fdb-89bc-e293975bd6b3.png" width="100">
    </td>
     <td>
         <b>정찬용</b></br>
         Backend 팀원</br>
         backend api 구현</br>
         naver 영화 크롤링</br>
         elasticsearch 구축</br>
    </td>
   </tr>
</table>

# 프로젝트 주제 선정 이유 :question:
(주)알엠 소프트 교육 인턴 프로젝트 입니다. </br>
elasticsearch 를 활용하여 검색 페이지를 구현하는 프로젝트를 하달 받았고 어떤 검색 사이트를 만들까 고민해보다가 </br>

**Naver 영화의 영화 크롤링 데이터를 기반**으로 하여 영화 정보 검색 사이트를 만들어보기로 했습니다.
</br></br>
# 프로젝트 사용 기술  🛠
> <b>Front</b> </br>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"></br>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Redux toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white">

+ 프론트 개발이 처음인 팀원을 고려하여 처음 개발에는 Javascript , React 만을 사용하여 Front 개발을 진행하였습니다. </br>
+ 프론트 개발이 완료된 이후 **Redux-toolkit , typescript** 를 적용하여 Front 단을 다시 리팩토링 해보았습니다.

> <b>Backend</b> </br>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white"></br>
 <img src="https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=Elasticsearch&logoColor=white">  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
 
+ 백엔드 개발은 node js, express js 를 기반으로 개발을 하였습니다 </br>
+ Docker 를 활용하여 elasticsearch container를 생성하여 node 서버와 연동을 해주었습니다.

> <b>Deploy</b> </br>

<img src="https://img.shields.io/badge/Amazon AWS-FF9900?style=for-the-badge&logo=Amazon AWS&logoColor=white"> <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=Nginx&logoColor=white"> </br>

# 프로젝트 폴더 구조 :open_file_folder:

### Front

```
📦client
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂@types
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┣ 📂movie
 ┃ ┃ ┗ 📂search
 ┃ ┣ 📂action
 ┃ ┃ ┣ 📜auto.ts
 ┃ ┃ ┣ 📜main.ts
 ┃ ┃ ┣ 📜movie.ts
 ┃ ┃ ┣ 📜review.ts
 ┃ ┃ ┗ 📜search.ts
 ┃ ┣ 📂assets
 ┃ ┃ ┗ 📜NoResult.json
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂common
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┣ 📂movie
 ┃ ┃ ┗ 📂search
 ┃ ┣ 📂fonts
 ┃ ┣ 📂hooks
 ┃ ┣ 📂reducer
 ┃ ┣ 📂Routes
 ┃ ┣ 📂store
 ┃ ┣ 📂styles
 ┃ ┣ 📜App.tsx
 ┃ ┣ 📜fonts.d.ts
 ┃ ┣ 📜index.tsx
 ┗ ┗ 📜Router.tsx
```

 + :open_file_folder: action : reducer 비동기 액션 합수들을 모아둔 폴더 입니다.
 + :open_file_folder: components : components 요소들을 모아둔 폴더입니다.
 + :open_file_folder: Routes : 웹서비스의 페이지들을 모아둔 폴더입니다.
 + :open_file_folder: reducer : 여러 reducer 들을 모아둔 폴더입니다.
 + :open_file_folder: @types : custom interface 들을 모아둔 폴더입니다.
 + :open_file_folder: store : redux-toolkit store 폴더입니다.
 + :open_file_folder: hooks : custom hook 을 모아둔 폴더입니다.
  ### Backend
  ```
  📦server
 ┣ 📂src
 ┃ ┣ 📂lib
 ┃ ┃ ┗ 📜elasticsearch.js
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜autocomplete.js
 ┃ ┃ ┣ 📜movieCrwl.js
 ┃ ┃ ┗ 📜search.js
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📂auto
 ┃ ┃ ┃ ┗ 📜autocompleteService.js
 ┃ ┃ ┣ 📂crwl
 ┃ ┃ ┃ ┗ 📜crwlMovieService.js
 ┃ ┃ ┗ 📂search
 ┃ ┃ ┃ ┣ 📜genreSearchService.js
 ┃ ┃ ┃ ┣ 📜mainSearchService.js
 ┃ ┃ ┃ ┣ 📜movieGroupSearchService.js
 ┃ ┃ ┃ ┣ 📜movieSearchService.js
 ┃ ┃ ┃ ┗ 📜moviewReviewSearchService.js
 ┃ ┣ 📂static
 ┃ ┃ ┗ 📜commonStatic.js
 ┃ ┣ 📂util
 ┃ ┃ ┗ 📜esUtil.js
 ┃ ┗ 📜server.js
  ```
 + :open_file_folder: services : service 함수 코드 폴더입니다.
 + :open_file_folder: static : elasticsearch index static 폴더입니다.
 + :open_file_folder: routes : express route 관련 폴더입니다.
 
  # 주요기능 미리보기 🖥
  <table>
    <tr>
       <td>미리보기</td>
       <td>설명</td>
     </tr>
    <tr>
   
    </tr>
  </table>
  작성중...
  
