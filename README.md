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
+ 주요 기능 미리보기
+ 프로젝트 배포 구조
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
      <td>
      <img src=https://user-images.githubusercontent.com/96876293/204131639-6729532b-acc5-45a0-870b-dc28a7b8d1aa.gif width="500">
    </td>
    <td>
      <b>메인 페이지</b><br />
      - 웹 페이지에 들어오면 제일 먼저 볼 수 있는 메인 페이지 입니다.<br /><br />
      - 10개의 영화 장르중 3개 장르의 영화들이 랜덤하게 캐루셀로 나타나도록 하였습니다.<br /><br />
      - mouse hover시 영화 이름을 볼 수 있고 클릭하면 해당 영화의 상세 페이지로 이동합니다.<br /><br />
      - 검색어 자동완성 기능을 구현 하였고 입력한 검색어와 자동완성된 영화 제목중 일치하는 부분은 하이라이팅 처리가 되도록 구현하였습니다.
    </td>
    </tr>
     <tr>
      <td>
      <img src=https://user-images.githubusercontent.com/96876293/204131993-59ab8971-66c5-4bec-88ea-ca4e58b54673.gif width="500"></br></br>
      <img src=https://user-images.githubusercontent.com/96876293/204132576-2c8aa9fc-c33b-4371-8da7-e7c91b34fd89.gif width="500">
    </td>
    <td>
      <b>검색 페이지</b><br />
      - 검색창에 검색어를 입력 했을 때 나타나는 페이지 입니다.<br /><br />
      - 영화 장르, 상영시간, 개봉날짜, 개봉국가 등의 필터링을 구현하였고 중복 필터링이 가능하도록 구현하였습니다.<br /><br />
      - 최신순, 인기순 정렬을 구현하여 필터링과 중복 적용 되도록 하였습니다.<br /><br />
      - 무한 스크롤링을 구현하여 스크롤을 내리면 한번에 5개씩 영화를 새로 보여줍니다. 더이상 가져올 영화가 없다면 api 요청을 보내지 않습니다 <br /><br />
      - 새로고침을 하여도 검색어가 초기화 되지 않도록 구현해보았습니다.
    </td>
    </tr>
      <tr>
      <td>
      <img src=https://user-images.githubusercontent.com/96876293/204132971-93244b0e-f190-462f-8ad5-f9e3b9ffc00f.gif width="500"></br></br>
      <div align="center">
      <img src=https://user-images.githubusercontent.com/96876293/204134432-c87a5838-e53b-4d1a-8c49-52dcd673215f.gif width="200">
      </div>
    </td>
    <td>
      <b>영화 상세 페이지</b><br />
      - 영화의 상세 정보를 볼 수 있는 상세페이지 입니다.<br /><br />
      - 영화의 출연진, 감독이름을 클릭하면 클릭한 출연진, 감독의 다른 영화들을 보여주는 동시에 그 영화들의 장르 분포도를 차트로 보여줍니다.<br /><br />
      - 영화에 대한 리뷰데이터를 딥러닝 학습을 통해 긍정, 부정 리뷰로 구분을 하여 보여줍니다.<br /><br />
      - 모바일 화면일 때는 긍정 부정 리뷰를 버튼을 클릭하여 선택하여 볼 수 있도록 구현하였습니다.<br /><br />
    </td>
    </tr>
  </table>

# 프로젝트 배포 구조 🛠
  
  ![배포](https://user-images.githubusercontent.com/96876293/204134918-452c8093-d8ba-48b7-a885-e838e75bb5ef.png)

+ AWS Ec2 인스턴스에 배포를 하였습니다.
+ elasticsearch는 docker로 container로 만들어 ec2에 올려주었습니다.
+ 앞단에 nginx를 두어 /api 로 url이 들어오면 server쪽으로 , 그 외는 client로 포트포워딩을 해주었습니다.

# Lesson Learned ✏
 > <b>검색어 하이라이팅 구현</b>
 
 유저가 입력한 검색어 중 자동완성된 영화 리스트의 이름에서 **같은 글자인 경우** 붉은색으로 하이라이팅을 해주는 기능을 구현 해보았습니다.</br>
 유저가 입력한 검색어는 띄어쓰기가 있을 수 도 있고 없을 수 도 있습니다.</br>
 또한 자동 완성된 영화 제목도 띄어쓰기가 존재 할 수도 있고 존재 하지 않을 수 도 있습니다.</br>
 이러한 띄어쓰기의 유무 때문에 들어온 검색어를 영화 제목이랑 매칭 시키는게 조금 까다로웠습니다.</br>
 방법을 계속 찾은 결과 영화의 제목 앞에서부터 한글자씩 매칭이되는 글자를 하이라이팅 하기 위해 **정규식과 replace 메소드**를 이용하여 하이라이팅 구현을 했습니다.
 
  > <b>redux-toolkit 도입하기</b>
  
  이번에 프로젝트를 혼자 리팩토링 해보면서 **redux-toolkit**을 공부하여 도입해보았습니다.</br>
  기존 redux 만 사용했을 때에 비해 코드량이 현저히 줄어드는 것을 알 수 있었고 세팅도 편리하다는 것을 느낄 수 있었습니다.</br>
  비동기 요청의 경우 thunk 기반의 createasyncthunk 를 사용해서 액션 함수를 구현하였습니다.</br>
  다음에는 redux-toolkit-query를 공부해서 적용을 해보고 싶습니다.
  
   # 반응형 레이아웃(추가) 🖥
   
  <table>
   <tr>
     <td>DeskTop</td>
     <td>Mobile</td>
   </tr>
   <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/96876293/204136517-53fec2a9-925e-45d0-947b-b6021f48560f.png width="500">
    </td>
    <td>
     <img src=https://user-images.githubusercontent.com/96876293/204136541-c90db82b-e4c3-47d3-8fce-55f4d79848ba.png height="400">
    </td>
  </tr>
   <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/96876293/204136577-2d17543f-b414-44cc-972e-c3ab513e2067.gif width="500">
    </td>
    <td>
     <img src=https://user-images.githubusercontent.com/96876293/204136615-07c46371-2d9a-4885-b97b-6027cc44504b.gif height="400">
    </td>
  </tr>
   <tr>
    <td>
      <img src=https://user-images.githubusercontent.com/96876293/204136704-167d77e9-1568-4bfa-9909-e460c0c8e493.png width="500">
    </td>
    <td>
     <img src=https://user-images.githubusercontent.com/96876293/204136720-a663856a-9ba7-4928-be6b-65344cff5672.png height="400">
    </td>
  </tr>
 </table>
 
   > <b>반응형 레이아웃 구현</b>
 
