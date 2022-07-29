<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>

    @import url("https://fonts.googleapis.com/css2?family=Exo:ital,wght@1,700&display=swap");

    *,
    ::before,
    ::after {
      box-sizing: border-box;
      margin: 0;
    }

    :root {
      --spacing1: 4px;
      --spacing2: 8px;
      --spacing3: 16px;
      --hue: 400;
      --background1: hsl(214, 60%, 20%);
      --background2: hsl(214, 60%, 13%);
      --background3: hsl(214, 60%, 5%);
      --brand1: hsl(var(--hue) 80% 60%);
      --brand2: hsl(var(--hue) 80% 50%);
      --text1: hsl(0, 0%, 100%);
      --text2: hsl(var(--hue), 4%, 80%);
      --text3: hsl(var(--hue), 4%, 5%);
      --error: hsl(359, 83%, 59%);
      font-size: 1.25rem;
    }

    html {
      font-family: "Exo";
      color: white;
      background-color: var(--background1);
    }

    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: var(--spacing3);
    }

    a {
      color: var(--brand2);
      font-size: 0.8em;
    }

    form {
      & > div {
        display: flex;
        flex-direction: column;
      }

      & .greeting {
        font-size: 0.8em;
        color: var(--text2);
      }

      & .error {
        color: var(--error);
        font-size: 0.8em;
      }

      & .active-error {
        color: var(--error);
        & > label {
          color: var(--error);
        }
      }

      & button, input {
        border: 4px transparent;
        padding: var(--spacing2);
        border-radius: var(--spacing1);
        border: 4px solid transparent;
      }

      & .active-error + input:not(:focus) {
        border-color: var(--error);
      }

      & button {
        color: var(--text3);
        background: var(--brand1);
        cursor: pointer;
        transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
        font-size: 1em;
        padding: var(--spacing1);
        &:hover {
          background: var(--brand2);
        }
      }

      label {
        font-size: 0.9em;
        color: var(--text2);
      }
    }

    .container {
      background: var(--background2);
      padding: var(--spacing3);
      border-radius: var(--spacing2);
      display: flex;
      flex-direction: column;
      gap: var(--spacing3);
      min-width: max(400px, 50vw);
    }



    .pen-description {
      max-width: min-content;
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
      border: 0;
    }
    .star-rating {
        border:solid 1px #ccc;
        display:flex;
        flex-direction: row-reverse;
        font-size:1.5em;
        justify-content:space-around;
        padding:0 .2em;
        text-align:center;
        width:5em;
    }

    .star-rating input {
        display:none;
    }

    .star-rating label {
        color:#ccc;
        cursor:pointer;
    }

    .star-rating :checked ~ label {
        color:#f90;
    }

    .star-rating label:hover,
    .star-rating label:hover ~ label {
        color:#fc0;
    }

    </style>


</head>
<body>

모든 점수는 0이상 5이하의 정수로 매겨주세요!
<!-- 상대경로 사용, [현재 URL이 속한 계층 경로 + /save] -->

<form class="container" onsubmit="onSubmit(event)"  action="save" method="post" novalidate>
  <div>
    <h3 style="color:red">Welcome Back</h3>
    <div class='greeting'>Were so excited to see you again!</div>
  </div>
  <div>
    <div>
      <label for='username1'>주소</label>
      <span class="error" aria-live="polite"></span>
    </div>
    <input id='username1' type="text" name="address" required default/>
  </div>
  <div>
    <div>
      <label for='username2'>집의 유형(1:기숙사 2: 원룸 3: 투룸/빌라 4:아파트 5:하숙집)</label>
      <span class="error" aria-live="polite"></span>
    </div>
    <input id='username2' type="text" name="kindofhouse" required />
  </div>

  교통 점수
  <div class="star-rating">
      <input type="radio" id="5-stars" name="transportation_score" value="5" />
      <label for="5-stars" class="star">&#9733;</label>
      <input type="radio" id="4-stars" name="transportation_score" value="4" />
      <label for="4-stars" class="star">&#9733;</label>
      <input type="radio" id="3-stars" name="transportation_score" value="3" />
      <label for="3-stars" class="star">&#9733;</label>
      <input type="radio" id="2-stars" name="transportation_score" value="2" />
      <label for="2-stars" class="star">&#9733;</label>
      <input type="radio" id="1-star" name="transportation_score" value="1" />
      <label for="1-star" class="star">&#9733;</label>
  </div>

  건물 점수
  <div class="star-rating">
        <input type="radio" id="5-stars-2" name="building_score" value="5" />
        <label for="5-stars-2" class="star">&#9733;</label>
        <input type="radio" id="4-stars-2" name="building_score" value="4" />
        <label for="4-stars-2" class="star">&#9733;</label>
        <input type="radio" id="3-stars-2" name="building_score" value="3" />
        <label for="3-stars-2" class="star">&#9733;</label>
        <input type="radio" id="2-stars-2" name="building_score" value="2" />
        <label for="2-stars-2" class="star">&#9733;</label>
        <input type="radio" id="1-star-2" name="building_score" value="1" />
        <label for="1-star-2" class="star">&#9733;</label>
  </div>

  환경 점수
  <div class="star-rating">
          <input type="radio" id="5-stars-3" name="environment_score" value="5" />
          <label for="5-stars-3" class="star">&#9733;</label>
          <input type="radio" id="4-stars-3" name="environment_score" value="4" />
          <label for="4-stars-3" class="star">&#9733;</label>
          <input type="radio" id="3-stars-3" name="environment_score" value="3" />
          <label for="3-stars-3" class="star">&#9733;</label>
          <input type="radio" id="2-stars-3" name="environment_score" value="2" />
          <label for="2-stars-3" class="star">&#9733;</label>
          <input type="radio" id="1-star-3" name="environment_score" value="1" />
          <label for="1-star-3" class="star">&#9733;</label>
  </div>

  거주점수
  <div class="star-rating">
            <input type="radio" id="5-stars-4" name="living_score" value="5" />
            <label for="5-stars-4" class="star">&#9733;</label>
            <input type="radio" id="4-stars-4" name="living_score" value="4" />
            <label for="4-stars-4" class="star">&#9733;</label>
            <input type="radio" id="3-stars-4" name="living_score" value="3" />
            <label for="3-stars-4" class="star">&#9733;</label>
            <input type="radio" id="2-stars-4" name="living_score" value="2" />
            <label for="2-stars-4" class="star">&#9733;</label>
            <input type="radio" id="1-star-4" name="living_score" value="1" />
            <label for="1-star-4" class="star">&#9733;</label>
  </div>

  총 만족도 점수

    <div class="star-rating">
                <input type="radio" id="5-stars-5" name="main_score" value="5" />
                <label for="5-stars-5" class="star">&#9733;</label>
                <input type="radio" id="4-stars-5" name="main_score" value="4" />
                <label for="4-stars-5" class="star">&#9733;</label>
                <input type="radio" id="3-stars-5" name="main_score" value="3" />
                <label for="3-stars-5" class="star">&#9733;</label>
                <input type="radio" id="2-stars-5" name="main_score" value="2" />
                <label for="2-stars-5" class="star">&#9733;</label>
                <input type="radio" id="1-star-5" name="main_score" value="1" />
                <label for="1-star-5" class="star">&#9733;</label>
    </div>
    <div>
    <div>
      <label for='username' >장점</label>
      <span class="error" aria-live="polite"></span>
    </div>
    <input id='username' type="text" name="pros" required />

  </div>
  <div>
    <div>
      <label for='password'>단점</label>
      <span class="error" aria-live="polite"></span>
    </div>
    <input id='password' type='text' name="cons" required  />
  </div>
  <button type="submit">
    제출
  </button>
  <span aria-live="assertive" id="js-loadingMsg" class="sr-only">
     <!-- Use JavaScript to inject the the loading message -->
  </span>
</form>


</body>
</html>