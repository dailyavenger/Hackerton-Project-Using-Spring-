<주제: 연대생들을 위한 내집마련 웹서비스>

<<구현 과정>>

밑의 "구현 결과"에 나오는 안내에서 서비스1은 주로 다른 조원들이, 서비스2는 주로 제가 만들었습니다.

(1) demo/src/main/java/com/example/demo 폴더에 장소 도메인, repository, MVC 컨트롤러 등 구현(내가 맡은 역할)
(2) demo/src/main/webapp/WEB-INF 폴더에 jsp 파일 4개 구현(내가 맡은 역할)
(3) demo/src/main/webapp 폴더에 필요한 html,css,js 파일들 구현(다른 조원들이 맡은 역할)

<<구현 결과>>

<시작페이지>

![캡처](https://user-images.githubusercontent.com/65271296/191298080-59c4877a-77bd-4365-9397-500f5b18d71a.JPG)


<서비스1. 신촌 근처 모음>
(1) 신촌 검색시 나오는 지도 서비스

![캡처](https://user-images.githubusercontent.com/65271296/191298897-9228da3c-3252-453c-8550-a3cf5ba64c99.JPG)

(2) 위 사진에서 숫자 클릭시 지도 확대됨

![캡처2](https://user-images.githubusercontent.com/65271296/191299048-6cbfd05b-63fb-4f3a-adda-2780717b3462.JPG)

(3) 지도서 특정 위치 클릭하면 나오는 페이지(구현 미완성으로 어느 위치든 똑같은 집 정보가 나옵니다)

![캡처3](https://user-images.githubusercontent.com/65271296/191299290-097dee20-03fe-4350-81cc-447dcd1e85b6.JPG)

<서비스2. 신규 리뷰 등록 및 검색(신촌지역 아니어도 됨)>

(1) 새로운 리뷰 작성

![캡처](https://user-images.githubusercontent.com/65271296/191299718-1474010d-b690-4279-a0ce-b508e6738940.JPG)

(2) 새로운 리뷰들 검색할 수 있는 페이지

![캡처](https://user-images.githubusercontent.com/65271296/191300277-1526f583-08e3-4baf-ae30-e42b8d495717.JPG)

(3) 주소 검색시 나오는 결과

![캡처](https://user-images.githubusercontent.com/65271296/191300542-189bc242-a732-4ebe-a054-b3ec2a6e2edb.JPG)

<<향후 개선할점>

(1)서비스1에서 지도 서비스 등을 어떻게 가져왔는지, 코드들을 리뷰한 후 서비스1과 서비스2를 합치기
(2)JPA를 이해한 후 데이터베이스도 
