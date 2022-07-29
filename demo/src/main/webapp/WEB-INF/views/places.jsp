<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<a href="/index.html">메인</a>
<table>
    <thead>
    <th>주소</th>
    <th>집의 유형</th>
    <th>교통 점수</th>
    <th>건물 점수</th>
    <th>환경 점수</th>
    <th>거주 점수</th>
    <th>총 만족도 점수</th>
    <th>장점</th>
    <th>단점</th>
    </thead>
    <tbody>
    <c:forEach var="item" items="${places}">
        <tr>
            <td>${item.address}</td>
            <td>${item.kindofhouse}</td>
            <td>${item.transportation_score}</td>
            <td>${item.building_score}</td>
            <td>${item.environment_score}</td>
            <td>${item.living_score}</td>
            <td>${item.main_score}</td>
            <td>${item.pros}</td>
            <td>${item.cons}</td>

        </tr>
    </c:forEach>
    </tbody>
</table>

</body>
</html>