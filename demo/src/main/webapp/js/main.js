window.onload = () => {

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    if (!params.query) {
        return;
    }

    findLocation(params.query)
}


function enterkey(event) {

    if(event.code == 'Enter'){
        // if(location == "연세대학교"){
        //     window.location.href='main.html';
        // }
        // else{
        //     alert('not avaliable keyword');
        // }
        searchLocation();
    }
}

function searchLocation($e) {
    const searchText = document.getElementById('searchText').value;

    if ( searchText.trim().length == 0){
        //pass;
    } else {
        window.location.href = `main.html?query=${searchText.trim()}`;
        // window.location.href = ("main.html" + "/search/search_list.asp?q=" + encodeURIComponent(searchText));
    }
}

var mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.562800561415415, 126.93826918705246), // 지도의 중심좌표
        level: 5, // 지도의 확대 레벨
    };
    
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다


var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
    minLevel: 3, // 클러스터 할 최소 지도 레벨
    minClusterSize: 1,
    calculator: [10, 20],
  });
// map.setMaxLevel(5); //지도 축소 제한

// // 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();

function findLocation(location) {    
    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(location, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            // // 추출한 좌표를 통해 도로명 주소 추출
            // let lat = result[0].y;
            // let lng = result[0].x;
            // getAddr(lat,lng);
            // function getAddr(lat,lng){
            //     let geocoder = new kakao.maps.services.Geocoder();

            //     let coord = new kakao.maps.LatLng(lat, lng);
            //     let callback = function(result, status) {
            //         if (status === kakao.maps.services.Status.OK) {
            //         	// 추출한 도로명 주소를 해당 input의 value값으로 적용
            //             location(result[0].road_address.address_name);
            //         }
            //     }
            //     geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
            // }
            
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            if (location == '신촌로7안길 80'){
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;" >신촌로7안길 80</div>'
                });
                infowindow.open(map, marker);
            } else {
                var s = location
                var infowindow = new kakao.maps.InfoWindow({
                    // content: location
                    content: `<div style="width:150px;text-align:center;padding:6px 0;" >`+`${location}`+"</div>"
                });
                infowindow.open(map, marker);
            }

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);

            
            var clusterer = new kakao.maps.MarkerClusterer({
                map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
                minLevel: 3, // 클러스터 할 최소 지도 레벨
                minClusterSize: 1,
                calculator: [10, 20],
            });

                        
            var positions = [
                {
                title: "고촌학사",
                latlng: new kakao.maps.LatLng(37.5596800024977, 126.96320526047322),
                },
                {
                title: "승현하우스",
                latlng: new kakao.maps.LatLng(37.55981255697316, 126.93198450649717),
                },
                {
                title: "청원하숙",
                latlng: new kakao.maps.LatLng(37.562142999386545, 126.93046289995654),
                },
                {
                title: "세린하우스",
                address: "서울 서대문구 연희로28길 56",
                latlng: new kakao.maps.LatLng(37.575063362136866, 126.93875432907635),
                },
                {
                title: "청학빌라",
                address: "서울 서대문구 연희로28길 62",
                latlng: new kakao.maps.LatLng(37.57530448286913, 126.93895648265473),
                },
                {
                title: "화이트빌",
                address: "서울 서대문구 연희로28길 62",
                latlng: new kakao.maps.LatLng(37.5750270206945, 126.93817560867242),
                },
                {
                title: "대호빌라",
                address: "서울 서대문구 연희로28길 25",
                latlng: new kakao.maps.LatLng(37.57473584275181, 126.9370268437615),
                },
                {
                title: "화산아트빌",
                address: "서울 서대문구 연희로28길 33",
                latlng: new kakao.maps.LatLng(37.574810364447806, 126.93738336931811),
                },
                {
                title: "휴펠리스",
                address: "서울 서대문구 연희로26다길 51",
                latlng: new kakao.maps.LatLng(37.57451757435174, 126.93744587567987),
                },
                {
                title: "오성빌라",
                address: "서울 서대문구 연희로28길 35-7",
                latlng: new kakao.maps.LatLng(37.57522259626345, 126.93743396561634),
                },
                {
                title: "리원하우스",
                address: "서울 서대문구 연희로28길 23-9",
                latlng: new kakao.maps.LatLng(37.574994790888574, 126.93686248147638),
                },
                {
                title: "우진빌라",
                address: "서울 서대문구 연희로28길 23-19",
                latlng: new kakao.maps.LatLng(37.5752427333628, 126.93717924136044),
                },
                {
                title: "에덴쉐르빌",
                address: "서울 서대문구 연희로28길 62",
                latlng: new kakao.maps.LatLng(37.574332315618655, 126.93640740307907),
                },
                {
                title: "하임빌",
                address: "서울 서대문구 연희로26가길 19-6",
                latlng: new kakao.maps.LatLng(37.57419264855546, 126.93638346648233),
                },
                {
                title: "초원오피스텔",
                address: "서울 서대문구 연희동 76-24",
                latlng: new kakao.maps.LatLng(37.573892783136785, 126.93585733575961),
                },
                {
                title: "청솔빌리지",
                address: "서울 서대문구 연희로27길 7",
                latlng: new kakao.maps.LatLng(37.573554523748186, 126.93515012127803),
                },
                {
                title: "삼보월드빌",
                address: "서울 서대문구 연희로27길 11",
                latlng: new kakao.maps.LatLng(37.57341477934954, 126.9349861016946),
                },
                {
                title: "라임힐",
                address: "서울특별시 서대문구 연희로27길 23",
                latlng: new kakao.maps.LatLng(37.57315095059, 126.93446561047179),
                },
                {
                title: "연희아트빌",
                address: "서울특별시 서대문구 연희로25길 4-31",
            latlng: new kakao.maps.LatLng(37.57291208640111, 126.93428470016039),
                },
                {
                title: "낙원빌라",
                address: "서울특별시 서대문구 연희로27길 33",
            latlng: new kakao.maps.LatLng(37.57278583042679, 126.93407539189164),
                },
                {
                title: "노블힐스",
                address: "서울특별시 서대문구 연희로27길 38-22",
            latlng: new kakao.maps.LatLng(37.573450134738714, 126.93375501468024),
                },
                {
                title: "천지인빌리지",
                address: "서울특별시 서대문구 연희로27가길 20",
            latlng: new kakao.maps.LatLng(37.57334174927383, 126.93328249896274),
                },
                {
                title: "화인캐슬",
                address: "서울특별시 서대문구 연희로 189-47",
            latlng: new kakao.maps.LatLng(37.574189266269464, 126.93432036843603),
                },
                {
                title: "아마린스빌",
                address: "서울특별시 서대문구 연희로25길 39",
            latlng: new kakao.maps.LatLng(37.57160994560643, 126.93392078141727),
                },
                {
                title: "연희프라임빌",
                address: "서울특별시 서대문구 연희로25길 31-9",
            latlng: new kakao.maps.LatLng(37.57151317412657, 126.93407368373698),
                },
                {
                title: "라이프연희빌라",
                address: "서울특별시 서대문구 연희로25길 57",
            latlng: new kakao.maps.LatLng(37.570823519224106, 126.9333724727025),
                },
                {
                title: "그레이스빌라",
                address: "서울특별시 서대문구 연희로18길 8",
            latlng: new kakao.maps.LatLng(37.56876455870148, 126.93304321581978),
                },
                {
                title: "혜광역원룸",
                address: "서울특별시 서대문구 연희로16길 36-9",
            latlng: new kakao.maps.LatLng(37.568638565169856, 126.93330084334778),
                },
                {
                title: "화이트빌라",
                address: "서울특별시 서대문구 연희로16길 36-10",
            latlng: new kakao.maps.LatLng(37.56855081714798, 126.93347637099369),
                },
                {
                title: "연세빌리지",
                address: "서울특별시 서대문구 연희로20길 21",
            latlng: new kakao.maps.LatLng(37.56956281640248, 126.93460741788307),
                },
                {
                title: "정윤빌리지",
                address: "서울특별시 서대문구 연희로22길 34-6",
            latlng: new kakao.maps.LatLng(37.56945042951153, 126.9350376553303),
                },
                {
                title: "골든빌라",
                address: "서울특별시 서대문구 연희로20길 45",
            latlng: new kakao.maps.LatLng(37.568535493550954, 126.9342687365945),
                },
                {
                title: "정인빌라",
                address: "서울특별시 서대문구 연희로18길 35-5",
            latlng: new kakao.maps.LatLng(37.56849246870229, 126.93386127933671),
                },
                {
                title: "프린스빌라",
                address: "서울특별시 서대문구 연희로18길 27",
            latlng: new kakao.maps.LatLng(37.56828520018363, 126.93379071712873),
                },
                {
                title: "비전빌라",
                address: "서울특별시 서대문구 연희로18길 26",
            latlng: new kakao.maps.LatLng(37.56822200016524, 126.93355872810756),
                },
                {
                title: "쌍용빌라",
                address: "서울특별시 서대문구 연희로18안길 9",
            latlng: new kakao.maps.LatLng(37.567981460261805, 126.93441071382624),
                },
                {
                title: "다솜빌",
                address: "서울특별시 서대문구 연희로18안길 1",
            latlng: new kakao.maps.LatLng(37.56784618184714, 126.93417878864693),
                },
                {
                title: "코디골드하우스",
                address: "서울특별시 서대문구 연희로18안길 5",
            latlng: new kakao.maps.LatLng(37.567825992978555, 126.93432878589876),
                },
                {
                title: "삼우빌라",
                address: "서울특별시 서대문구 연희로14길 47",
            latlng: new kakao.maps.LatLng(37.56757345368201, 126.93386209191681),
                },
                {
                title: "에덴빌라",
                address: "서울특별시 서대문구 연희로16길 39",
            latlng: new kakao.maps.LatLng(37.568268890876084, 126.93283142313406),
                },
                {
                title: "스위스빌라",
                address: "서울특별시 서대문구 연희로18길 47",
            latlng: new kakao.maps.LatLng(37.56755330315516, 126.9340800036647),
                },
                {
                title: "효동빌라",
                address: "서울특별시 서대문구 연희로14길 65",
            latlng: new kakao.maps.LatLng(37.56731503532863, 126.93497442484828),
                },
                {
                title: "양지빌라",
                address: "서울특별시 서대문구 연희로14길 58",
            latlng: new kakao.maps.LatLng(37.56717516533156, 126.9345840372056),
                },
                {
                title: "신진빌라",
                address: "서울특별시 서대문구 연희로14길 50",
            latlng: new kakao.maps.LatLng(37.567260558626295, 126.93422175065682),
                },
                {
                title: "영지빌라",
                address: "서울특별시 서대문구 연희로14길 62-6",
            latlng: new kakao.maps.LatLng(37.56700399817383, 126.93462380367859),
                },
                {
                title: "로엠아트빌",
                address: "서울특별시 서대문구 연희로14길 62-19",
            latlng: new kakao.maps.LatLng(37.56695466526197, 126.93502567394698),
                },
                {
                title: "흥륜빌라",
                address: "서울특별시 서대문구 연희로12길 41",
            latlng: new kakao.maps.LatLng(37.56658875476461, 126.93322060818755),
                },
                {
                title: "연희파크빌",
                address: "서울특별시 서대문구 연희로12길 32",
            latlng: new kakao.maps.LatLng(37.56651185513898, 126.93266604546292),
                },
                {
                title: "현대빌라",
                address: "서울특별시 서대문구 연희로12길 38",
            latlng: new kakao.maps.LatLng(37.56637697601547, 126.93314156433289),
                },
                {
                title: "장성빌",
                address: "서울특별시 서대문구 연희로14길 32",
            latlng: new kakao.maps.LatLng(37.567187814046264, 126.93303896763497),
                },
                {
                title: "정다운집",
                address: "서울특별시 서대문구 연희로14길 20-9",
            latlng: new kakao.maps.LatLng(37.56691304739051, 126.9331042982356),
                },
                {
                title: "비젼빌라",
                address: "서울특별시 서대문구 연희로18길 26",
            latlng: new kakao.maps.LatLng(37.56822200335025, 126.93356438773795),
                },
                {
                title: "백산타운",
                address: "서울특별시 서대문구 연희로16길 32",
            latlng: new kakao.maps.LatLng(37.568107018034155, 126.9333720626302),
                },
                {
                title: "제니스빌",
                address: "서울특별시 서대문구 연희로14길 20-7",
            latlng: new kakao.maps.LatLng(37.56704360662739, 126.93295420356216),
                },
                {
                title: "송우빌라",
                address: "서울특별시 서대문구 연희로12길 21-4",
            latlng: new kakao.maps.LatLng(37.566901432175555, 126.93248458972846),
                },
                {
                title: "글랜우드",
                address: "서울특별시 서대문구 연희로12길 34",
            latlng: new kakao.maps.LatLng(37.566464665690916, 126.93286417044732),
                },
                {
                title: "연희하이빌",
                address: "서울특별시 서대문구 연희로10길 29-14",
            latlng: new kakao.maps.LatLng(37.56596018383304, 126.93299762055793),
                },
                {
                title: "라온제나",
                address: "서울특별시 서대문구 연희로10길 37",
            latlng: new kakao.maps.LatLng(37.565543131459386, 126.9323980944607),
                },
                {
                title: "원광빌라",
                address: "서울특별시 서대문구 연희로10길 23",
            latlng: new kakao.maps.LatLng(37.56606328581387, 126.93210050223905),
                },
                {
                title: "하나빌라",
                address: "서울특별시 서대문구 연희로12길 10-8",
            latlng: new kakao.maps.LatLng(37.56643010144286, 126.93151158154039),
                },
                {
                title: "해바라기하숙",
                address: "서울특별시 서대문구 연희로10길 51-6",
            latlng: new kakao.maps.LatLng(37.564791179077574, 126.93306375036704),
                },
                {
                title: "예국빌라",
                address: "서울특별시 서대문구 연희로10길 79-18",
            latlng: new kakao.maps.LatLng(37.56460897212976, 126.93349685442517),
                },
                {
                title: "풀하우스",
                address: "서울특별시 서대문구 연희로10길 79-31",
            latlng: new kakao.maps.LatLng(37.56436559955594, 126.9333131421733),
                },
                {
                title: "연궁빌라",
                address: "서울특별시 서대문구 연희로10길 65",
            latlng: new kakao.maps.LatLng(37.56430910146575, 126.93298495097955),
                },
                {
                title: "서문빌리지",
                address: "서울특별시 서대문구 연희로10길 72",
            latlng: new kakao.maps.LatLng(37.56408833342192, 126.93294270383583),
                },
                {
                title: "예지빌라드",
                address: "서울특별시 서대문구 연희로10가길 23-1",
            latlng: new kakao.maps.LatLng(37.56433559760306, 126.93205113628323),
                },
                {
                title: "아라하우스",
                address: "서울특별시 서대문구 연희로10가길 15-11",
            latlng: new kakao.maps.LatLng(37.56390086718577, 126.93205153113114),
                },
                {
                title: "기정빌라",
                address: "서울특별시 서대문구 연희로8길 28-49",
            latlng: new kakao.maps.LatLng(37.564725141168466, 126.93181308898784),
                },
                {
                title: "우정빌리지",
                address: "서울특별시 서대문구 연희로10가길 38",
            latlng: new kakao.maps.LatLng(37.5647969601061, 126.93136310329167),
                },
                {
                title: "써니빌",
                address: "서울특별시 서대문구 연희로8길 24-7",
            latlng: new kakao.maps.LatLng(37.56486896730208, 126.93123853087793),
                },
                {
                title: "순천하숙",
                address: "서울특별시 서대문구 연희로10가길 46",
            latlng: new kakao.maps.LatLng(37.56481022420539, 126.93093297862033),
                },
                {
                title: "베스트빌",
                address: "서울특별시 서대문구 연희로8길 16-6",
            latlng: new kakao.maps.LatLng(37.56517046152401, 126.93065816502519),
                },
                {
                title: "은진빌라",
                address: "서울특별시 서대문구 연희로8길 16-9",
            latlng: new kakao.maps.LatLng(37.564947513303, 126.93074043276671),
                },
                {
                title: "연세연립",
                address: "서울특별시 서대문구 성산로 365-10",
            latlng: new kakao.maps.LatLng(37.564424560661756, 126.93010424050962),
                },
                {
                title: "탑고시원",
                address: "서울특별시 서대문구 성산로 367",
            latlng: new kakao.maps.LatLng(37.564064239398576, 126.93023474148025),
                },
                {
                title: "하얀감나무집",
                address: "서울특별시 서대문구 성산로 367-27",
            latlng: new kakao.maps.LatLng(37.564132123908195, 126.9307609952798),
                },
                {
                title: "샬롬하우스",
                address: "서울특별시 서대문구 성산로 367-35",
            latlng: new kakao.maps.LatLng(37.564231494781275, 126.93120799047892),
                },
                {
                title: "노아스빌",
                address: "서울특별시 서대문구 성산로17길 21",
            latlng: new kakao.maps.LatLng(37.56356301331962, 126.93208579366835),
                },
                {
                title: "샘골리빙룸",
                address: "서울특별시 서대문구 성산로17길 7-29",
            latlng: new kakao.maps.LatLng(37.563677578149395, 126.93154522753433),
                },
                {
                title: "신혜하숙",
                address: "서울특별시 서대문구 성산로 384-4",
            latlng: new kakao.maps.LatLng(37.56267697589745, 126.93069443141783),
                },
                {
                title: "샬롬하숙",
                address: "서울특별시 서대문구 성산로 384-9",
            latlng: new kakao.maps.LatLng(37.562307550962394, 126.9306664777024),
                },
                {
                title: "미덕빌라",
                address: "서울특별시 서대문구 성산로18길 5",
            latlng: new kakao.maps.LatLng(37.56219969809872, 126.93112214144254),
                },
                {
                title: "한석빌라",
                address: "서울특별시 서대문구 성산로20길 22-6",
            latlng: new kakao.maps.LatLng(37.56143192941459, 126.93169158975714),
                },
                {
                title: "귀빈빌라",
                address: "서울특별시 서대문구 성산로20길 22",
            latlng: new kakao.maps.LatLng(37.56132388511637, 126.93182184795948),
                },
                {
                title: "세연빌",
                address: "서울특별시 서대문구 성산로18길 34",
            latlng: new kakao.maps.LatLng(37.56119513700831, 126.9312079527576),
                },
                {
                title: "연세하이츠빌라",
                address: "서울특별시 서대문구 성산로20길 26",
            latlng: new kakao.maps.LatLng(37.56116375189083, 126.9314654706277),
                },
                {
                title: "JK캠퍼스",
                address: "서울특별시 서대문구 성산로 394",
            latlng: new kakao.maps.LatLng(37.56179007371144, 126.93168843320274),
                },
                {
                title: "해명고시원",
                address: "서울특별시 서대문구 성산로 384-18",
            latlng: new kakao.maps.LatLng(37.562307279208774, 126.9302052543225),
                },
                {
                title: "훈이네하숙",
                address: "서울특별시 서대문구 성산로18길 24",
            latlng: new kakao.maps.LatLng(37.56164311790137, 126.930754810028),
                },
                {
                title: "언제나미소",
                address: "서울특별시 서대문구 신촌로7안길 54",
            latlng: new kakao.maps.LatLng(37.56023312857053, 126.93087495454157),
                },
                {
                title: "필하우스",
                address: "서울특별시 서대문구 신촌로7안길 72",
            latlng: new kakao.maps.LatLng(37.56005781516089, 126.93152873280056),
                },
                {
                title: "연세힐하우스",
                address: "서울특별시 서대문구 신촌로7안길 79",
            latlng: new kakao.maps.LatLng(37.560053645144116, 126.93210878567983),
                },
                {
                title: "삼영시티빌",
                address: "서울특별시 서대문구 신촌로7길 49-10",
            latlng: new kakao.maps.LatLng(37.5595513575747, 126.93214036580362),
                },
                {
                title: "청송빌",
                address: "서울특별시 서대문구 신촌로7길 49-6",
            latlng: new kakao.maps.LatLng(37.55944782746257, 126.93228759290237),
                },
                {
                title: "포맨스",
                address: "서울특별시 서대문구 신촌로7길 49-15",
            latlng: new kakao.maps.LatLng(37.55948127910883, 126.93170468851763),
                },
                {
                title: "스카이빌",
                address: "서울특별시 서대문구 신촌로7길 49-11",
            latlng: new kakao.maps.LatLng(37.559391284078245, 126.93188585754443),
                },
                {
                title: "소로빌",
                address: "서울특별시 서대문구 신촌로7길 49-25",
            latlng: new kakao.maps.LatLng(37.55976027743398, 126.93116965901972),
                },
                {
                title: "해피빌2",
                address: "서울특별시 서대문구 신촌로7안길 23",
            latlng: new kakao.maps.LatLng(37.559399789717766, 126.93101719855309),
                },
                {
                title: "그린빌",
                address: "서울특별시 서대문구 신촌로7안길 8",
            latlng: new kakao.maps.LatLng(37.559152524923135, 126.93189456330987),
                },
                {
                title: "화현주택",
                address: "서울특별시 서대문구 신촌로7길 45",
            latlng: new kakao.maps.LatLng(37.55916177894345, 126.93231897597254),
                },
                {
                title: "티파니",
                address: "서울특별시 서대문구 신촌로7길 50-7",
            latlng: new kakao.maps.LatLng(37.55908105730464, 126.93296416834264),
                },
                {
                title: "건영빌라",
                address: "서울특별시 서대문구 신촌로7길 50-19",
            latlng: new kakao.maps.LatLng(37.559018171848784, 126.93328961355749),
                },
                {
                title: "올리브하우스",
                address: "서울특별시 서대문구 신촌로7길 50-12",
            latlng: new kakao.maps.LatLng(37.5588602858452, 126.9329162652666),
                },
                {
                title: "정연드림빌",
                address: "서울특별시 서대문구 신촌로9길 37-4",
            latlng: new kakao.maps.LatLng(37.558671049237006, 126.93286833418043),
                },
                {
                title: "서윤하우스",
                address: "서울특별시 서대문구 신촌로9길 37-5",
            latlng: new kakao.maps.LatLng(37.55846592584457, 126.93261103847661),
                },
                {
                title: "오렌지빌",
                address: "서울특별시 서대문구 신촌로9길 37-7",
            latlng: new kakao.maps.LatLng(37.55854469839133, 126.9324977895114),
                },
                {
                title: "장미빌",
                address: "서울특별시 서대문구 신촌로9길 28",
            latlng: new kakao.maps.LatLng(37.55804026788492, 126.93272176964592),
                },
                {
                title: "삼영빌라",
                address: "서울특별시 서대문구 연세로7길 56",
            latlng: new kakao.maps.LatLng(37.558200859620946, 126.9338986712933),
                },
                {
                title: "백두주택",
                address: "서울특별시 서대문구 연세로9길 47",
            latlng: new kakao.maps.LatLng(37.55871455418397, 126.93412457406339),
                },
                {
                title: "연세오피스텔",
                address: "서울특별시 서대문구 연세로9길 37",
            latlng: new kakao.maps.LatLng(37.55853010474133, 126.93458310735552),
                },
                {
                title: "조은하숙",
                address: "서울특별시 서대문구 연세로7안길 48",
            latlng: new kakao.maps.LatLng(37.55846912564196, 126.93429172754787),
                },
                {
                title: "서울하숙",
                address: "서울특별시 서대문구 연세로11길 40",
            latlng: new kakao.maps.LatLng(37.559093290233896, 126.93469579384325),
                },
                {
                title: "이소빌",
                address: "서울특별시 서대문구 연세로9길 48",
            latlng: new kakao.maps.LatLng(37.55887006123618, 126.93427722815531),
                },
                {
                title: "지영하우스",
                address: "서울특별시 서대문구 연세로9길 38",
            latlng: new kakao.maps.LatLng(37.558723892610125, 126.93471592243455),
                },
                {
                title: "예스빌",
                address: "서울특별시 서대문구 연세로13길 21",
            latlng: new kakao.maps.LatLng(37.55915009829825, 126.93559834631264),
                },
                {
                title: "아블하우스",
                address: "서울특별시 서대문구 연세로13길 29",
            latlng: new kakao.maps.LatLng(37.55912734422512, 126.93517960394462),
                },
                {
                title: "스톤빌",
                address: "서울특별시 서대문구 신촌로11길 35",
            latlng: new kakao.maps.LatLng(37.558268068238526, 126.93324784069242),
                },
                {
                title: "장미빌라",
                address: "서울특별시 서대문구 신촌로9길 28",
            latlng: new kakao.maps.LatLng(37.558033510410226, 126.93272177572157),
                },
                {
                title: "문수주택",
                address: "서울특별시 서대문구 신촌로7안길 5",
            latlng: new kakao.maps.LatLng(37.558776249394256, 126.93170533201476),
                },
                {
                title: "탑팰리스",
                address: "서울특별시 서대문구 신촌로7안길 3",
            latlng: new kakao.maps.LatLng(37.55883949714047, 126.93201368561473),
                },
                {
                title: "심스빌",
                address: "서울특별시 서대문구 신촌로3나길 14",
            latlng: new kakao.maps.LatLng(37.558682990192914, 126.93015487536495),
                },
                {
                title: "연세하이빌",
                address: "서울특별시 서대문구 신촌로3나길 8-9",
            latlng: new kakao.maps.LatLng(37.55848460996829, 126.92988343350363),
                },
                {
                title: "창천네오빌",
                address: "서울특별시 서대문구 신촌로3나길 8-10",
            latlng: new kakao.maps.LatLng(37.55857005987898, 126.92964002060462),
                },
                {
                title: "정하우스",
                address: "서울특별시 서대문구 신촌로 11-4",
            latlng: new kakao.maps.LatLng(37.558519730864745, 126.92835266837135),
                },
                {
                title: "삼성아트빌",
                address: "서울특별시 서대문구 신촌로3나길 30",
            latlng: new kakao.maps.LatLng(37.558115695780366, 126.93072129174878),
                },
                {
                title: "힐탑하우스",
                address: "서울특별시 서대문구 신촌로3나길 33",
            latlng: new kakao.maps.LatLng(37.55812036313754, 126.93099857200909),
                },
                {
                title: "신촌빌라",
                address: "서울특별시 서대문구 신촌로3나길 38",
            latlng: new kakao.maps.LatLng(37.55786807912845, 126.93099031637162),
                },
                {
            title: "어스빌리지",
            address: "서울 서대문구 신촌역로 14",
            latlng: new kakao.maps.LatLng(37.55785423778351, 126.94304650706822),
            },
            {
            title: "신촌현대캠퍼빌오피스텔",
            address: "서울 서대문구 신촌역로 17",
            latlng: new kakao.maps.LatLng(37.55830217626139, 126.94241237122476),
            },
            {
            title: "이대역푸르지오시티오피스텔",
            address: "서울 마포구 신촌로 170",
            latlng: new kakao.maps.LatLng(37.55634569384767, 126.94436048176048),
            },
            {
            title: "퀸즈하우스",
            address: "서울 서대문구 이화여대2나길 23",
            latlng: new kakao.maps.LatLng(37.55849777673626, 126.9464187204243),
            },
            {
            title: "이화에코하우스",
            address: "서울 서대문구 이화여대2다길 29",
            latlng: new kakao.maps.LatLng(37.55860875987398, 126.94778243739258),
            },
            {
            title: "성산빌라",
            address: "서울 마포구 성미산로13길 41",
            latlng: new kakao.maps.LatLng(37.5591419562042, 126.95739661597247),
            },
            {
            title: "희원빌라",
            address: "서울 서대문구 북아현로4다길 10",
            latlng: new kakao.maps.LatLng(37.55882684937904, 126.95807303669496),
            },
            {
            title: "파인빌라",
            address: "서울 서대문구 북아현로6길 63",
            latlng: new kakao.maps.LatLng(37.56023924099756, 126.95829577695345),
            },
            {
            title: "충정맨션빌라",
            address: "서울 서대문구 북아현로6길 63",
            latlng: new kakao.maps.LatLng(37.563194990985494, 126.95968064648292),
            },
            {
            title: "바움하우스",
            address: "서울 마포구 신촌로24길 16-9",
            latlng: new kakao.maps.LatLng(37.5553349693096, 126.94104808855306),
            },
            {
            title: "바움하우스",
            address: "서울 마포구 신촌로24길 16-9",
            latlng: new kakao.maps.LatLng(37.5553349693096, 126.94104808855306),
            },
            {
            title: "북아현빌하우스",
            address: "서울 서대문구 북아현로 109",
            latlng: new kakao.maps.LatLng(37.564820314868776, 126.95113694184442),
            },
            {
            title: "한양홈타운",
            address: "서울 서대문구 북아현로25길 5",
            latlng: new kakao.maps.LatLng(37.56472146942056, 126.95177934476986),
            },
            {
            title: "충정오피스텔",
            address: "서울특별시 서대문구 경기대로9길 75",
            latlng: new kakao.maps.LatLng(37.56434161926847, 126.9600054405852),
            },
            {
            title: "정원빌라",
            address: "서울특별시 서대문구 북아현로20길 58",
            latlng: new kakao.maps.LatLng(37.56408806621135, 126.95640624793961),
            },
            {
            title: "건영빌라",
            address: "서울특별시 서대문구 경기대로 21-16",
            latlng: new kakao.maps.LatLng(37.561087194525506, 126.96128047645321),
            },
            {
            title: "충정빌라",
            address: "서울특별시 중구 중림로2길 16",
            latlng: new kakao.maps.LatLng(37.55849297429453, 126.96331902213664),
            },
            {
            title: "충정빌라",
            address: "서울특별시 중구 중림로2길 16",
            latlng: new kakao.maps.LatLng(37.55849297429453, 126.96331902213664),
            },
            {
            title: "대림그린빌",
            address: "서울특별시 서대문구 북아현로23길 11",
            latlng: new kakao.maps.LatLng(37.56461367426732, 126.95258021379087),
            },
            {
            title: "롯데빌리지",
            address: "서울특별시 서대문구 북아현로23길 20",
            latlng: new kakao.maps.LatLng(37.56428704958914, 126.95254646480883),
            },
            {
            title: "모인하우스",
            address: "서울특별시 서대문구 북아현로11가길 38",
            latlng: new kakao.maps.LatLng(37.56348798901222, 126.95399574619529),
            },
            {
            title: "금란빌라",
            address: "서울특별시 서대문구 연대동문길 128",
            latlng: new kakao.maps.LatLng(37.56759312067932, 126.94594812003288),
            },
            {
            title: "바우하우스",
            address: "서울특별시 서대문구 연대동문길 137",
            latlng: new kakao.maps.LatLng(37.567987086222026, 126.94546959782025),
            },
            {
            title: "혜성빌",
            address: "서울특별시 서대문구 연대동문1길 31",
            latlng: new kakao.maps.LatLng(37.56844187752014, 126.94501366443417),
            },
            {
            title: "송이빌",
            address: "서울특별시 서대문구 봉원사길 23",
            latlng: new kakao.maps.LatLng(37.567647301887455, 126.94621408161525),
            },
            {
            title: "현대빌리지",
            address: "서울특별시 서대문구 북아현로20길 59",
            latlng: new kakao.maps.LatLng(37.564295368274166, 126.9566042039269),
            },
            {
            title: "한양화이트빌",
            address: "서울특별시 서대문구 북아현로18길 44",
            latlng: new kakao.maps.LatLng(37.56362854356788, 126.95636690070117),
            },
            {
            title: "다나빌라",
            address: "서울특별시 서대문구 북아현로22길 58",
            latlng: new kakao.maps.LatLng(37.56464197267063, 126.95585130760169),
            },
            {
            title: "유전빌라",
            address: "서울특별시 서대문구 북아현로12길 26",
            latlng: new kakao.maps.LatLng(37.562615154341906, 126.95699849359372),
            },
            {
            title: "스위스그린빌",
            address: "서울특별시 서대문구 북아현로12길 30",
            latlng: new kakao.maps.LatLng(37.56266031404235, 126.95730123553524),
            },
            {
            title: "신촌아리움오피스텔",
            address: "서울특별시 서대문구 신촌역로 27",
            latlng: new kakao.maps.LatLng(37.55882466173777, 126.94222239520633),
            },
            {
            title: "세화하숙",
            address: "서울특별시 서대문구 연세로4길 81",
            latlng: new kakao.maps.LatLng(37.55870681720265, 126.94077946321569),
            },
            {
            title: "그린힐뤈룸신촌하숙",
            address: "서울특별시 서대문구 연세로4길 80",
            latlng: new kakao.maps.LatLng(37.55854462218581, 126.94074846762463),
            },
            {
            title: "이화인비따레오피스텔",
            address: "서울특별시 서대문구 신촌로 189",
            latlng: new kakao.maps.LatLng(37.55717806538695, 126.94697139821766),
            },
            {
            title: "이대포레스트오피스텔",
            address: "서울특별시 서대문구 신촌로 169-7",
            latlng: new kakao.maps.LatLng(37.55713638664598, 126.94450419312876),
            },
            {
            title: "JS 오피스텔",
            address: "서울특별시 서대문구 이화여대3길 23",
            latlng: new kakao.maps.LatLng(37.557884174150004, 126.94441875577438),
            },
            {
            title: "이대역서희스타힐스",
            address: "서울특별시 마포구 신촌로 160",
            latlng: new kakao.maps.LatLng(37.5563519248232, 126.94325419430972),
            },
            {
            title: "동보빌라",
            address: "서울특별시 서대문구 경기대로3길 26",
            latlng: new kakao.maps.LatLng(37.56256203626306, 126.9596668395781),
            },
            {
            title: "아현렉스빌",
            address: "서울특별시 서대문구 북아현로6길 65-12",
            latlng: new kakao.maps.LatLng(37.56077310247602, 126.95835489962663),
            },
            {
            title: "신촌가이아오피스텔",
            address: "서울특별시 서대문구 신촌역로 16",
            latlng: new kakao.maps.LatLng(37.55807052883399, 126.943153860891),
            },
            {
            title: "글로리하우스",
            address: "서울특별시 마포구 신촌로26길 30",
            latlng: new kakao.maps.LatLng(37.55532886414128, 126.94236939005862),
            },
            {
            title: "앰버하우스",
            address: "서울특별시 마포구 고산길 108",
            latlng: new kakao.maps.LatLng(37.55487406554447, 126.94279130777),
            },
            {
            title: "UCU이대오피스텔",
            address: "서울특별시 서대문구 이화여대1길 33",
            latlng: new kakao.maps.LatLng(37.55711577019661, 126.94377705346486),
            },
            {
            title: "파라타워오피스텔",
            address: "서울특별시 서대문구 신촌로 163",
            latlng: new kakao.maps.LatLng(37.5570190782279, 126.94412514145735),
            },
            {
            title: "우아시스쉐어하우스",
            address: "서울특별시 서대문구 신촌로27길 39-2",
            latlng: new kakao.maps.LatLng(37.557471836825414, 126.94912437121043),
            },
            {
            title: "스카이빌아현오피스텔",
            address: "서울특별시 마포구 신촌로 244",
            latlng: new kakao.maps.LatLng(37.55697106876618, 126.95282838490068),
            },
            {
            title: "진성빌라",
            address: "서울특별시 마포구 굴레방로 27-11",
            latlng: new kakao.maps.LatLng(37.5566002771387, 126.95505816796872),
            },
            {
            title: "아현시티오피스텔",
            address: "서울특별시 마포구 신촌로34길 11",
            latlng: new kakao.maps.LatLng(37.55665868943094, 126.9546591903724),
            },
            {
            title: "홍익오피스텔",
            address: "서울특별시 서대문구 성산로 573-74",
            latlng: new kakao.maps.LatLng(37.5675125806556, 126.9471621581172),
            },
            {
            title: "일양빌라",
            address: "서울특별시 서대문구 봉원사2길 52",
            latlng: new kakao.maps.LatLng(37.56939819276636, 126.94778905533735),
            },
            {
            title: "하임하우스",
            address: "서울특별시 서대문구 성산로24길 37",
            latlng: new kakao.maps.LatLng(37.568046963689866, 126.9483899182608),
            },
            {
            title: "화이트빌",
            address: "서울특별시 서대문구 성산로24길 22-8",
            latlng: new kakao.maps.LatLng(37.567229378285994, 126.94854612021119),
            },
            {
            title: "예스빌",
            address: "서울특별시 서대문구 연세로13길 21",
            latlng: new kakao.maps.LatLng(37.55914784889357, 126.93560400719556),
            },
            {
            title: "연세오피스텔",
            address: "서울특별시 서대문구 연세로9길 37",
            latlng: new kakao.maps.LatLng(37.558534614426975, 126.93459159176365),
            },
            {
            title: "삼영빌라",
            address: "서울특별시 서대문구 연세로7길 56",
            latlng: new kakao.maps.LatLng(37.5581873430875, 126.93389585379639),
            },
            {
            title: "갤럭시원룸텔",
            address: "서울특별시 서대문구 연세로7길 27",
            latlng: new kakao.maps.LatLng(37.55755512530269, 126.93521774825653),
            },
            {
            title: "심플하우스",
            address: "서울특별시 서대문구 연세로7안길 13",
            latlng: new kakao.maps.LatLng(37.557983550699596, 126.9360464001678),
            },
            {
            title: "하이레지던스",
            address: "서울특별시 서대문구 연세로7길 14",
            latlng: new kakao.maps.LatLng(37.557771801143424, 126.93601828692832),
            },
            {
            title: "스테이더디자이너스오피스텔",
            address: "서울특별시 서대문구 연세로2나길 16",
            latlng: new kakao.maps.LatLng(37.5567594259845, 126.93836188176469),
            },
            {
            title: "다정하숙",
            address: "서울특별시 서대문구 연세로4길 46-7",
            latlng: new kakao.maps.LatLng(37.55789515993406, 126.93928333915916),
            },
            {
            title: "건영빌",
            address: "서울특별시 서대문구 연세로2다길 28",
            latlng: new kakao.maps.LatLng(37.55693580855959, 126.93969437909205),
            },

            ];


            var imageSrc = "/villa.png";

            var imageSize = new kakao.maps.Size(30, 45);
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            for (var i = 0; i < positions.length; i++) {
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                  map: map, // 마커를 표시할 지도
                  position: positions[i].latlng, // 마커를 표시할 위치
                  title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                  //image: markerImage, // 마커 이미지
                });
                // 마커에 표시할 인포윈도우를 생성합니다
                var infowindow = new kakao.maps.InfoWindow({
                  content: positions[i].address,
                  removable: true, // 인포윈도우에 표시할 내용
                });
            
                // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다
                // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
                (function (marker, infowindow) {
                  // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다
                  kakao.maps.event.addListener(marker, "click", function () {
                    // infowindow.open(map, marker);
                    // alert('test');
                    window.location.href="review1.html";
                  });
                })(marker, infowindow);
                clusterer.addMarker(marker);
              }
            // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
            function zoomIn() {
                map.setLevel(map.getLevel() - 1);
            }

            // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
            function zoomOut() {
                map.setLevel(map.getLevel() + 1);
            }

            // 지도에 클릭 이벤트를 등록합니다
            // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
            // kakao.maps.event.addListener(map, "click", function (mouseEvent) {
            // // 클릭한 위도, 경도 정보를 가져옵니다
            //     var latlng = mouseEvent.latLng;

            //     var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            //     message += "경도는 " + latlng.getLng() + " 입니다";

            //     var resultDiv = document.getElementById("result");
            //     resultDiv.innerHTML = message;
            // });
        } else {
            window.location.href = `index.html`;
        }
    });  
};



var positions = [
    {
    title: "고촌학사",
    latlng: new kakao.maps.LatLng(37.5596800024977, 126.96320526047322),
    },
    {
    title: "승현하우스",
    latlng: new kakao.maps.LatLng(37.55981255697316, 126.93198450649717),
    },
    {
    title: "청원하숙",
    latlng: new kakao.maps.LatLng(37.562142999386545, 126.93046289995654),
    },
    {
    title: "세린하우스",
    address: "서울 서대문구 연희로28길 56",
    latlng: new kakao.maps.LatLng(37.575063362136866, 126.93875432907635),
    },
    {
    title: "청학빌라",
    address: "서울 서대문구 연희로28길 62",
    latlng: new kakao.maps.LatLng(37.57530448286913, 126.93895648265473),
    },
    {
    title: "화이트빌",
    address: "서울 서대문구 연희로28길 62",
    latlng: new kakao.maps.LatLng(37.5750270206945, 126.93817560867242),
    },
    {
    title: "대호빌라",
    address: "서울 서대문구 연희로28길 25",
    latlng: new kakao.maps.LatLng(37.57473584275181, 126.9370268437615),
    },
    {
    title: "화산아트빌",
    address: "서울 서대문구 연희로28길 33",
    latlng: new kakao.maps.LatLng(37.574810364447806, 126.93738336931811),
    },
    {
    title: "휴펠리스",
    address: "서울 서대문구 연희로26다길 51",
    latlng: new kakao.maps.LatLng(37.57451757435174, 126.93744587567987),
    },
    {
    title: "오성빌라",
    address: "서울 서대문구 연희로28길 35-7",
    latlng: new kakao.maps.LatLng(37.57522259626345, 126.93743396561634),
    },
    {
    title: "리원하우스",
    address: "서울 서대문구 연희로28길 23-9",
    latlng: new kakao.maps.LatLng(37.574994790888574, 126.93686248147638),
    },
    {
    title: "우진빌라",
    address: "서울 서대문구 연희로28길 23-19",
    latlng: new kakao.maps.LatLng(37.5752427333628, 126.93717924136044),
    },
    {
    title: "에덴쉐르빌",
    address: "서울 서대문구 연희로28길 62",
    latlng: new kakao.maps.LatLng(37.574332315618655, 126.93640740307907),
    },
    {
    title: "하임빌",
    address: "서울 서대문구 연희로26가길 19-6",
    latlng: new kakao.maps.LatLng(37.57419264855546, 126.93638346648233),
    },
    {
    title: "초원오피스텔",
    address: "서울 서대문구 연희동 76-24",
    latlng: new kakao.maps.LatLng(37.573892783136785, 126.93585733575961),
    },
    {
    title: "청솔빌리지",
    address: "서울 서대문구 연희로27길 7",
    latlng: new kakao.maps.LatLng(37.573554523748186, 126.93515012127803),
    },
    {
    title: "삼보월드빌",
    address: "서울 서대문구 연희로27길 11",
    latlng: new kakao.maps.LatLng(37.57341477934954, 126.9349861016946),
    },
    {
    title: "라임힐",
    address: "서울특별시 서대문구 연희로27길 23",
    latlng: new kakao.maps.LatLng(37.57315095059, 126.93446561047179),
    },
    {
    title: "연희아트빌",
    address: "서울특별시 서대문구 연희로25길 4-31",
latlng: new kakao.maps.LatLng(37.57291208640111, 126.93428470016039),
    },
    {
    title: "낙원빌라",
    address: "서울특별시 서대문구 연희로27길 33",
latlng: new kakao.maps.LatLng(37.57278583042679, 126.93407539189164),
    },
    {
    title: "노블힐스",
    address: "서울특별시 서대문구 연희로27길 38-22",
latlng: new kakao.maps.LatLng(37.573450134738714, 126.93375501468024),
    },
    {
    title: "천지인빌리지",
    address: "서울특별시 서대문구 연희로27가길 20",
latlng: new kakao.maps.LatLng(37.57334174927383, 126.93328249896274),
    },
    {
    title: "화인캐슬",
    address: "서울특별시 서대문구 연희로 189-47",
latlng: new kakao.maps.LatLng(37.574189266269464, 126.93432036843603),
    },
    {
    title: "아마린스빌",
    address: "서울특별시 서대문구 연희로25길 39",
latlng: new kakao.maps.LatLng(37.57160994560643, 126.93392078141727),
    },
    {
    title: "연희프라임빌",
    address: "서울특별시 서대문구 연희로25길 31-9",
latlng: new kakao.maps.LatLng(37.57151317412657, 126.93407368373698),
    },
    {
    title: "라이프연희빌라",
    address: "서울특별시 서대문구 연희로25길 57",
latlng: new kakao.maps.LatLng(37.570823519224106, 126.9333724727025),
    },
    {
    title: "그레이스빌라",
    address: "서울특별시 서대문구 연희로18길 8",
latlng: new kakao.maps.LatLng(37.56876455870148, 126.93304321581978),
    },
    {
    title: "혜광역원룸",
    address: "서울특별시 서대문구 연희로16길 36-9",
latlng: new kakao.maps.LatLng(37.568638565169856, 126.93330084334778),
    },
    {
    title: "화이트빌라",
    address: "서울특별시 서대문구 연희로16길 36-10",
latlng: new kakao.maps.LatLng(37.56855081714798, 126.93347637099369),
    },
    {
    title: "연세빌리지",
    address: "서울특별시 서대문구 연희로20길 21",
latlng: new kakao.maps.LatLng(37.56956281640248, 126.93460741788307),
    },
    {
    title: "정윤빌리지",
    address: "서울특별시 서대문구 연희로22길 34-6",
latlng: new kakao.maps.LatLng(37.56945042951153, 126.9350376553303),
    },
    {
    title: "골든빌라",
    address: "서울특별시 서대문구 연희로20길 45",
latlng: new kakao.maps.LatLng(37.568535493550954, 126.9342687365945),
    },
    {
    title: "정인빌라",
    address: "서울특별시 서대문구 연희로18길 35-5",
latlng: new kakao.maps.LatLng(37.56849246870229, 126.93386127933671),
    },
    {
    title: "프린스빌라",
    address: "서울특별시 서대문구 연희로18길 27",
latlng: new kakao.maps.LatLng(37.56828520018363, 126.93379071712873),
    },
    {
    title: "비전빌라",
    address: "서울특별시 서대문구 연희로18길 26",
latlng: new kakao.maps.LatLng(37.56822200016524, 126.93355872810756),
    },
    {
    title: "쌍용빌라",
    address: "서울특별시 서대문구 연희로18안길 9",
latlng: new kakao.maps.LatLng(37.567981460261805, 126.93441071382624),
    },
    {
    title: "다솜빌",
    address: "서울특별시 서대문구 연희로18안길 1",
latlng: new kakao.maps.LatLng(37.56784618184714, 126.93417878864693),
    },
    {
    title: "코디골드하우스",
    address: "서울특별시 서대문구 연희로18안길 5",
latlng: new kakao.maps.LatLng(37.567825992978555, 126.93432878589876),
    },
    {
    title: "삼우빌라",
    address: "서울특별시 서대문구 연희로14길 47",
latlng: new kakao.maps.LatLng(37.56757345368201, 126.93386209191681),
    },
    {
    title: "에덴빌라",
    address: "서울특별시 서대문구 연희로16길 39",
latlng: new kakao.maps.LatLng(37.568268890876084, 126.93283142313406),
    },
    {
    title: "스위스빌라",
    address: "서울특별시 서대문구 연희로18길 47",
latlng: new kakao.maps.LatLng(37.56755330315516, 126.9340800036647),
    },
    {
    title: "효동빌라",
    address: "서울특별시 서대문구 연희로14길 65",
latlng: new kakao.maps.LatLng(37.56731503532863, 126.93497442484828),
    },
    {
    title: "양지빌라",
    address: "서울특별시 서대문구 연희로14길 58",
latlng: new kakao.maps.LatLng(37.56717516533156, 126.9345840372056),
    },
    {
    title: "신진빌라",
    address: "서울특별시 서대문구 연희로14길 50",
latlng: new kakao.maps.LatLng(37.567260558626295, 126.93422175065682),
    },
    {
    title: "영지빌라",
    address: "서울특별시 서대문구 연희로14길 62-6",
latlng: new kakao.maps.LatLng(37.56700399817383, 126.93462380367859),
    },
    {
    title: "로엠아트빌",
    address: "서울특별시 서대문구 연희로14길 62-19",
latlng: new kakao.maps.LatLng(37.56695466526197, 126.93502567394698),
    },
    {
    title: "흥륜빌라",
    address: "서울특별시 서대문구 연희로12길 41",
latlng: new kakao.maps.LatLng(37.56658875476461, 126.93322060818755),
    },
    {
    title: "연희파크빌",
    address: "서울특별시 서대문구 연희로12길 32",
latlng: new kakao.maps.LatLng(37.56651185513898, 126.93266604546292),
    },
    {
    title: "현대빌라",
    address: "서울특별시 서대문구 연희로12길 38",
latlng: new kakao.maps.LatLng(37.56637697601547, 126.93314156433289),
    },
    {
    title: "장성빌",
    address: "서울특별시 서대문구 연희로14길 32",
latlng: new kakao.maps.LatLng(37.567187814046264, 126.93303896763497),
    },
    {
    title: "정다운집",
    address: "서울특별시 서대문구 연희로14길 20-9",
latlng: new kakao.maps.LatLng(37.56691304739051, 126.9331042982356),
    },
    {
    title: "비젼빌라",
    address: "서울특별시 서대문구 연희로18길 26",
latlng: new kakao.maps.LatLng(37.56822200335025, 126.93356438773795),
    },
    {
    title: "백산타운",
    address: "서울특별시 서대문구 연희로16길 32",
latlng: new kakao.maps.LatLng(37.568107018034155, 126.9333720626302),
    },
    {
    title: "제니스빌",
    address: "서울특별시 서대문구 연희로14길 20-7",
latlng: new kakao.maps.LatLng(37.56704360662739, 126.93295420356216),
    },
    {
    title: "송우빌라",
    address: "서울특별시 서대문구 연희로12길 21-4",
latlng: new kakao.maps.LatLng(37.566901432175555, 126.93248458972846),
    },
    {
    title: "글랜우드",
    address: "서울특별시 서대문구 연희로12길 34",
latlng: new kakao.maps.LatLng(37.566464665690916, 126.93286417044732),
    },
    {
    title: "연희하이빌",
    address: "서울특별시 서대문구 연희로10길 29-14",
latlng: new kakao.maps.LatLng(37.56596018383304, 126.93299762055793),
    },
    {
    title: "라온제나",
    address: "서울특별시 서대문구 연희로10길 37",
latlng: new kakao.maps.LatLng(37.565543131459386, 126.9323980944607),
    },
    {
    title: "원광빌라",
    address: "서울특별시 서대문구 연희로10길 23",
latlng: new kakao.maps.LatLng(37.56606328581387, 126.93210050223905),
    },
    {
    title: "하나빌라",
    address: "서울특별시 서대문구 연희로12길 10-8",
latlng: new kakao.maps.LatLng(37.56643010144286, 126.93151158154039),
    },
    {
    title: "해바라기하숙",
    address: "서울특별시 서대문구 연희로10길 51-6",
latlng: new kakao.maps.LatLng(37.564791179077574, 126.93306375036704),
    },
    {
    title: "예국빌라",
    address: "서울특별시 서대문구 연희로10길 79-18",
latlng: new kakao.maps.LatLng(37.56460897212976, 126.93349685442517),
    },
    {
    title: "풀하우스",
    address: "서울특별시 서대문구 연희로10길 79-31",
latlng: new kakao.maps.LatLng(37.56436559955594, 126.9333131421733),
    },
    {
    title: "연궁빌라",
    address: "서울특별시 서대문구 연희로10길 65",
latlng: new kakao.maps.LatLng(37.56430910146575, 126.93298495097955),
    },
    {
    title: "서문빌리지",
    address: "서울특별시 서대문구 연희로10길 72",
latlng: new kakao.maps.LatLng(37.56408833342192, 126.93294270383583),
    },
    {
    title: "예지빌라드",
    address: "서울특별시 서대문구 연희로10가길 23-1",
latlng: new kakao.maps.LatLng(37.56433559760306, 126.93205113628323),
    },
    {
    title: "아라하우스",
    address: "서울특별시 서대문구 연희로10가길 15-11",
latlng: new kakao.maps.LatLng(37.56390086718577, 126.93205153113114),
    },
    {
    title: "기정빌라",
    address: "서울특별시 서대문구 연희로8길 28-49",
latlng: new kakao.maps.LatLng(37.564725141168466, 126.93181308898784),
    },
    {
    title: "우정빌리지",
    address: "서울특별시 서대문구 연희로10가길 38",
latlng: new kakao.maps.LatLng(37.5647969601061, 126.93136310329167),
    },
    {
    title: "써니빌",
    address: "서울특별시 서대문구 연희로8길 24-7",
latlng: new kakao.maps.LatLng(37.56486896730208, 126.93123853087793),
    },
    {
    title: "순천하숙",
    address: "서울특별시 서대문구 연희로10가길 46",
latlng: new kakao.maps.LatLng(37.56481022420539, 126.93093297862033),
    },
    {
    title: "베스트빌",
    address: "서울특별시 서대문구 연희로8길 16-6",
latlng: new kakao.maps.LatLng(37.56517046152401, 126.93065816502519),
    },
    {
    title: "은진빌라",
    address: "서울특별시 서대문구 연희로8길 16-9",
latlng: new kakao.maps.LatLng(37.564947513303, 126.93074043276671),
    },
    {
    title: "연세연립",
    address: "서울특별시 서대문구 성산로 365-10",
latlng: new kakao.maps.LatLng(37.564424560661756, 126.93010424050962),
    },
    {
    title: "탑고시원",
    address: "서울특별시 서대문구 성산로 367",
latlng: new kakao.maps.LatLng(37.564064239398576, 126.93023474148025),
    },
    {
    title: "하얀감나무집",
    address: "서울특별시 서대문구 성산로 367-27",
latlng: new kakao.maps.LatLng(37.564132123908195, 126.9307609952798),
    },
    {
    title: "샬롬하우스",
    address: "서울특별시 서대문구 성산로 367-35",
latlng: new kakao.maps.LatLng(37.564231494781275, 126.93120799047892),
    },
    {
    title: "노아스빌",
    address: "서울특별시 서대문구 성산로17길 21",
latlng: new kakao.maps.LatLng(37.56356301331962, 126.93208579366835),
    },
    {
    title: "샘골리빙룸",
    address: "서울특별시 서대문구 성산로17길 7-29",
latlng: new kakao.maps.LatLng(37.563677578149395, 126.93154522753433),
    },
    {
    title: "신혜하숙",
    address: "서울특별시 서대문구 성산로 384-4",
latlng: new kakao.maps.LatLng(37.56267697589745, 126.93069443141783),
    },
    {
    title: "샬롬하숙",
    address: "서울특별시 서대문구 성산로 384-9",
latlng: new kakao.maps.LatLng(37.562307550962394, 126.9306664777024),
    },
    {
    title: "미덕빌라",
    address: "서울특별시 서대문구 성산로18길 5",
latlng: new kakao.maps.LatLng(37.56219969809872, 126.93112214144254),
    },
    {
    title: "한석빌라",
    address: "서울특별시 서대문구 성산로20길 22-6",
latlng: new kakao.maps.LatLng(37.56143192941459, 126.93169158975714),
    },
    {
    title: "귀빈빌라",
    address: "서울특별시 서대문구 성산로20길 22",
latlng: new kakao.maps.LatLng(37.56132388511637, 126.93182184795948),
    },
    {
    title: "세연빌",
    address: "서울특별시 서대문구 성산로18길 34",
latlng: new kakao.maps.LatLng(37.56119513700831, 126.9312079527576),
    },
    {
    title: "연세하이츠빌라",
    address: "서울특별시 서대문구 성산로20길 26",
latlng: new kakao.maps.LatLng(37.56116375189083, 126.9314654706277),
    },
    {
    title: "JK캠퍼스",
    address: "서울특별시 서대문구 성산로 394",
latlng: new kakao.maps.LatLng(37.56179007371144, 126.93168843320274),
    },
    {
    title: "해명고시원",
    address: "서울특별시 서대문구 성산로 384-18",
latlng: new kakao.maps.LatLng(37.562307279208774, 126.9302052543225),
    },
    {
    title: "훈이네하숙",
    address: "서울특별시 서대문구 성산로18길 24",
latlng: new kakao.maps.LatLng(37.56164311790137, 126.930754810028),
    },
    {
    title: "언제나미소",
    address: "서울특별시 서대문구 신촌로7안길 54",
latlng: new kakao.maps.LatLng(37.56023312857053, 126.93087495454157),
    },
    {
    title: "필하우스",
    address: "서울특별시 서대문구 신촌로7안길 72",
latlng: new kakao.maps.LatLng(37.56005781516089, 126.93152873280056),
    },
    {
    title: "연세힐하우스",
    address: "서울특별시 서대문구 신촌로7안길 79",
latlng: new kakao.maps.LatLng(37.560053645144116, 126.93210878567983),
    },
    {
    title: "삼영시티빌",
    address: "서울특별시 서대문구 신촌로7길 49-10",
latlng: new kakao.maps.LatLng(37.5595513575747, 126.93214036580362),
    },
    {
    title: "청송빌",
    address: "서울특별시 서대문구 신촌로7길 49-6",
latlng: new kakao.maps.LatLng(37.55944782746257, 126.93228759290237),
    },
    {
    title: "포맨스",
    address: "서울특별시 서대문구 신촌로7길 49-15",
latlng: new kakao.maps.LatLng(37.55948127910883, 126.93170468851763),
    },
    {
    title: "스카이빌",
    address: "서울특별시 서대문구 신촌로7길 49-11",
latlng: new kakao.maps.LatLng(37.559391284078245, 126.93188585754443),
    },
    {
    title: "소로빌",
    address: "서울특별시 서대문구 신촌로7길 49-25",
latlng: new kakao.maps.LatLng(37.55976027743398, 126.93116965901972),
    },
    {
    title: "해피빌2",
    address: "서울특별시 서대문구 신촌로7안길 23",
latlng: new kakao.maps.LatLng(37.559399789717766, 126.93101719855309),
    },
    {
    title: "그린빌",
    address: "서울특별시 서대문구 신촌로7안길 8",
latlng: new kakao.maps.LatLng(37.559152524923135, 126.93189456330987),
    },
    {
    title: "화현주택",
    address: "서울특별시 서대문구 신촌로7길 45",
latlng: new kakao.maps.LatLng(37.55916177894345, 126.93231897597254),
    },
    {
    title: "티파니",
    address: "서울특별시 서대문구 신촌로7길 50-7",
latlng: new kakao.maps.LatLng(37.55908105730464, 126.93296416834264),
    },
    {
    title: "건영빌라",
    address: "서울특별시 서대문구 신촌로7길 50-19",
latlng: new kakao.maps.LatLng(37.559018171848784, 126.93328961355749),
    },
    {
    title: "올리브하우스",
    address: "서울특별시 서대문구 신촌로7길 50-12",
latlng: new kakao.maps.LatLng(37.5588602858452, 126.9329162652666),
    },
    {
    title: "정연드림빌",
    address: "서울특별시 서대문구 신촌로9길 37-4",
latlng: new kakao.maps.LatLng(37.558671049237006, 126.93286833418043),
    },
    {
    title: "서윤하우스",
    address: "서울특별시 서대문구 신촌로9길 37-5",
latlng: new kakao.maps.LatLng(37.55846592584457, 126.93261103847661),
    },
    {
    title: "오렌지빌",
    address: "서울특별시 서대문구 신촌로9길 37-7",
latlng: new kakao.maps.LatLng(37.55854469839133, 126.9324977895114),
    },
    {
    title: "장미빌",
    address: "서울특별시 서대문구 신촌로9길 28",
latlng: new kakao.maps.LatLng(37.55804026788492, 126.93272176964592),
    },
    {
    title: "삼영빌라",
    address: "서울특별시 서대문구 연세로7길 56",
latlng: new kakao.maps.LatLng(37.558200859620946, 126.9338986712933),
    },
    {
    title: "백두주택",
    address: "서울특별시 서대문구 연세로9길 47",
latlng: new kakao.maps.LatLng(37.55871455418397, 126.93412457406339),
    },
    {
    title: "연세오피스텔",
    address: "서울특별시 서대문구 연세로9길 37",
latlng: new kakao.maps.LatLng(37.55853010474133, 126.93458310735552),
    },
    {
    title: "조은하숙",
    address: "서울특별시 서대문구 연세로7안길 48",
latlng: new kakao.maps.LatLng(37.55846912564196, 126.93429172754787),
    },
    {
    title: "서울하숙",
    address: "서울특별시 서대문구 연세로11길 40",
latlng: new kakao.maps.LatLng(37.559093290233896, 126.93469579384325),
    },
    {
    title: "이소빌",
    address: "서울특별시 서대문구 연세로9길 48",
latlng: new kakao.maps.LatLng(37.55887006123618, 126.93427722815531),
    },
    {
    title: "지영하우스",
    address: "서울특별시 서대문구 연세로9길 38",
latlng: new kakao.maps.LatLng(37.558723892610125, 126.93471592243455),
    },
    {
    title: "예스빌",
    address: "서울특별시 서대문구 연세로13길 21",
latlng: new kakao.maps.LatLng(37.55915009829825, 126.93559834631264),
    },
    {
    title: "아블하우스",
    address: "서울특별시 서대문구 연세로13길 29",
latlng: new kakao.maps.LatLng(37.55912734422512, 126.93517960394462),
    },
    {
    title: "스톤빌",
    address: "서울특별시 서대문구 신촌로11길 35",
latlng: new kakao.maps.LatLng(37.558268068238526, 126.93324784069242),
    },
    {
    title: "장미빌라",
    address: "서울특별시 서대문구 신촌로9길 28",
latlng: new kakao.maps.LatLng(37.558033510410226, 126.93272177572157),
    },
    {
    title: "문수주택",
    address: "서울특별시 서대문구 신촌로7안길 5",
latlng: new kakao.maps.LatLng(37.558776249394256, 126.93170533201476),
    },
    {
    title: "탑팰리스",
    address: "서울특별시 서대문구 신촌로7안길 3",
latlng: new kakao.maps.LatLng(37.55883949714047, 126.93201368561473),
    },
    {
    title: "심스빌",
    address: "서울특별시 서대문구 신촌로3나길 14",
latlng: new kakao.maps.LatLng(37.558682990192914, 126.93015487536495),
    },
    {
    title: "연세하이빌",
    address: "서울특별시 서대문구 신촌로3나길 8-9",
latlng: new kakao.maps.LatLng(37.55848460996829, 126.92988343350363),
    },
    {
    title: "창천네오빌",
    address: "서울특별시 서대문구 신촌로3나길 8-10",
latlng: new kakao.maps.LatLng(37.55857005987898, 126.92964002060462),
    },
    {
    title: "정하우스",
    address: "서울특별시 서대문구 신촌로 11-4",
latlng: new kakao.maps.LatLng(37.558519730864745, 126.92835266837135),
    },
    {
    title: "삼성아트빌",
    address: "서울특별시 서대문구 신촌로3나길 30",
latlng: new kakao.maps.LatLng(37.558115695780366, 126.93072129174878),
    },
    {
    title: "힐탑하우스",
    address: "서울특별시 서대문구 신촌로3나길 33",
latlng: new kakao.maps.LatLng(37.55812036313754, 126.93099857200909),
    },
    {
    title: "신촌빌라",
    address: "서울특별시 서대문구 신촌로3나길 38",
latlng: new kakao.maps.LatLng(37.55786807912845, 126.93099031637162),
    },
    {
title: "어스빌리지",
address: "서울 서대문구 신촌역로 14",
latlng: new kakao.maps.LatLng(37.55785423778351, 126.94304650706822),
},
{
title: "신촌현대캠퍼빌오피스텔",
address: "서울 서대문구 신촌역로 17",
latlng: new kakao.maps.LatLng(37.55830217626139, 126.94241237122476),
},
{
title: "이대역푸르지오시티오피스텔",
address: "서울 마포구 신촌로 170",
latlng: new kakao.maps.LatLng(37.55634569384767, 126.94436048176048),
},
{
title: "퀸즈하우스",
address: "서울 서대문구 이화여대2나길 23",
latlng: new kakao.maps.LatLng(37.55849777673626, 126.9464187204243),
},
{
title: "이화에코하우스",
address: "서울 서대문구 이화여대2다길 29",
latlng: new kakao.maps.LatLng(37.55860875987398, 126.94778243739258),
},
{
title: "성산빌라",
address: "서울 마포구 성미산로13길 41",
latlng: new kakao.maps.LatLng(37.5591419562042, 126.95739661597247),
},
{
title: "희원빌라",
address: "서울 서대문구 북아현로4다길 10",
latlng: new kakao.maps.LatLng(37.55882684937904, 126.95807303669496),
},
{
title: "파인빌라",
address: "서울 서대문구 북아현로6길 63",
latlng: new kakao.maps.LatLng(37.56023924099756, 126.95829577695345),
},
{
title: "충정맨션빌라",
address: "서울 서대문구 북아현로6길 63",
latlng: new kakao.maps.LatLng(37.563194990985494, 126.95968064648292),
},
{
title: "바움하우스",
address: "서울 마포구 신촌로24길 16-9",
latlng: new kakao.maps.LatLng(37.5553349693096, 126.94104808855306),
},
{
title: "바움하우스",
address: "서울 마포구 신촌로24길 16-9",
latlng: new kakao.maps.LatLng(37.5553349693096, 126.94104808855306),
},
{
title: "북아현빌하우스",
address: "서울 서대문구 북아현로 109",
latlng: new kakao.maps.LatLng(37.564820314868776, 126.95113694184442),
},
{
title: "한양홈타운",
address: "서울 서대문구 북아현로25길 5",
latlng: new kakao.maps.LatLng(37.56472146942056, 126.95177934476986),
},
{
title: "충정오피스텔",
address: "서울특별시 서대문구 경기대로9길 75",
latlng: new kakao.maps.LatLng(37.56434161926847, 126.9600054405852),
},
{
title: "정원빌라",
address: "서울특별시 서대문구 북아현로20길 58",
latlng: new kakao.maps.LatLng(37.56408806621135, 126.95640624793961),
},
{
title: "건영빌라",
address: "서울특별시 서대문구 경기대로 21-16",
latlng: new kakao.maps.LatLng(37.561087194525506, 126.96128047645321),
},
{
title: "충정빌라",
address: "서울특별시 중구 중림로2길 16",
latlng: new kakao.maps.LatLng(37.55849297429453, 126.96331902213664),
},
{
title: "충정빌라",
address: "서울특별시 중구 중림로2길 16",
latlng: new kakao.maps.LatLng(37.55849297429453, 126.96331902213664),
},
{
title: "대림그린빌",
address: "서울특별시 서대문구 북아현로23길 11",
latlng: new kakao.maps.LatLng(37.56461367426732, 126.95258021379087),
},
{
title: "롯데빌리지",
address: "서울특별시 서대문구 북아현로23길 20",
latlng: new kakao.maps.LatLng(37.56428704958914, 126.95254646480883),
},
{
title: "모인하우스",
address: "서울특별시 서대문구 북아현로11가길 38",
latlng: new kakao.maps.LatLng(37.56348798901222, 126.95399574619529),
},
{
title: "금란빌라",
address: "서울특별시 서대문구 연대동문길 128",
latlng: new kakao.maps.LatLng(37.56759312067932, 126.94594812003288),
},
{
title: "바우하우스",
address: "서울특별시 서대문구 연대동문길 137",
latlng: new kakao.maps.LatLng(37.567987086222026, 126.94546959782025),
},
{
title: "혜성빌",
address: "서울특별시 서대문구 연대동문1길 31",
latlng: new kakao.maps.LatLng(37.56844187752014, 126.94501366443417),
},
{
title: "송이빌",
address: "서울특별시 서대문구 봉원사길 23",
latlng: new kakao.maps.LatLng(37.567647301887455, 126.94621408161525),
},
{
title: "현대빌리지",
address: "서울특별시 서대문구 북아현로20길 59",
latlng: new kakao.maps.LatLng(37.564295368274166, 126.9566042039269),
},
{
title: "한양화이트빌",
address: "서울특별시 서대문구 북아현로18길 44",
latlng: new kakao.maps.LatLng(37.56362854356788, 126.95636690070117),
},
{
title: "다나빌라",
address: "서울특별시 서대문구 북아현로22길 58",
latlng: new kakao.maps.LatLng(37.56464197267063, 126.95585130760169),
},
{
title: "유전빌라",
address: "서울특별시 서대문구 북아현로12길 26",
latlng: new kakao.maps.LatLng(37.562615154341906, 126.95699849359372),
},
{
title: "스위스그린빌",
address: "서울특별시 서대문구 북아현로12길 30",
latlng: new kakao.maps.LatLng(37.56266031404235, 126.95730123553524),
},
{
title: "신촌아리움오피스텔",
address: "서울특별시 서대문구 신촌역로 27",
latlng: new kakao.maps.LatLng(37.55882466173777, 126.94222239520633),
},
{
title: "세화하숙",
address: "서울특별시 서대문구 연세로4길 81",
latlng: new kakao.maps.LatLng(37.55870681720265, 126.94077946321569),
},
{
title: "그린힐뤈룸신촌하숙",
address: "서울특별시 서대문구 연세로4길 80",
latlng: new kakao.maps.LatLng(37.55854462218581, 126.94074846762463),
},
{
title: "이화인비따레오피스텔",
address: "서울특별시 서대문구 신촌로 189",
latlng: new kakao.maps.LatLng(37.55717806538695, 126.94697139821766),
},
{
title: "이대포레스트오피스텔",
address: "서울특별시 서대문구 신촌로 169-7",
latlng: new kakao.maps.LatLng(37.55713638664598, 126.94450419312876),
},
{
title: "JS 오피스텔",
address: "서울특별시 서대문구 이화여대3길 23",
latlng: new kakao.maps.LatLng(37.557884174150004, 126.94441875577438),
},
{
title: "이대역서희스타힐스",
address: "서울특별시 마포구 신촌로 160",
latlng: new kakao.maps.LatLng(37.5563519248232, 126.94325419430972),
},
{
title: "동보빌라",
address: "서울특별시 서대문구 경기대로3길 26",
latlng: new kakao.maps.LatLng(37.56256203626306, 126.9596668395781),
},
{
title: "아현렉스빌",
address: "서울특별시 서대문구 북아현로6길 65-12",
latlng: new kakao.maps.LatLng(37.56077310247602, 126.95835489962663),
},
{
title: "신촌가이아오피스텔",
address: "서울특별시 서대문구 신촌역로 16",
latlng: new kakao.maps.LatLng(37.55807052883399, 126.943153860891),
},
{
title: "글로리하우스",
address: "서울특별시 마포구 신촌로26길 30",
latlng: new kakao.maps.LatLng(37.55532886414128, 126.94236939005862),
},
{
title: "앰버하우스",
address: "서울특별시 마포구 고산길 108",
latlng: new kakao.maps.LatLng(37.55487406554447, 126.94279130777),
},
{
title: "UCU이대오피스텔",
address: "서울특별시 서대문구 이화여대1길 33",
latlng: new kakao.maps.LatLng(37.55711577019661, 126.94377705346486),
},
{
title: "파라타워오피스텔",
address: "서울특별시 서대문구 신촌로 163",
latlng: new kakao.maps.LatLng(37.5570190782279, 126.94412514145735),
},
{
title: "우아시스쉐어하우스",
address: "서울특별시 서대문구 신촌로27길 39-2",
latlng: new kakao.maps.LatLng(37.557471836825414, 126.94912437121043),
},
{
title: "스카이빌아현오피스텔",
address: "서울특별시 마포구 신촌로 244",
latlng: new kakao.maps.LatLng(37.55697106876618, 126.95282838490068),
},
{
title: "진성빌라",
address: "서울특별시 마포구 굴레방로 27-11",
latlng: new kakao.maps.LatLng(37.5566002771387, 126.95505816796872),
},
{
title: "아현시티오피스텔",
address: "서울특별시 마포구 신촌로34길 11",
latlng: new kakao.maps.LatLng(37.55665868943094, 126.9546591903724),
},
{
title: "홍익오피스텔",
address: "서울특별시 서대문구 성산로 573-74",
latlng: new kakao.maps.LatLng(37.5675125806556, 126.9471621581172),
},
{
title: "일양빌라",
address: "서울특별시 서대문구 봉원사2길 52",
latlng: new kakao.maps.LatLng(37.56939819276636, 126.94778905533735),
},
{
title: "하임하우스",
address: "서울특별시 서대문구 성산로24길 37",
latlng: new kakao.maps.LatLng(37.568046963689866, 126.9483899182608),
},
{
title: "화이트빌",
address: "서울특별시 서대문구 성산로24길 22-8",
latlng: new kakao.maps.LatLng(37.567229378285994, 126.94854612021119),
},
{
title: "예스빌",
address: "서울특별시 서대문구 연세로13길 21",
latlng: new kakao.maps.LatLng(37.55914784889357, 126.93560400719556),
},
{
title: "연세오피스텔",
address: "서울특별시 서대문구 연세로9길 37",
latlng: new kakao.maps.LatLng(37.558534614426975, 126.93459159176365),
},
{
title: "삼영빌라",
address: "서울특별시 서대문구 연세로7길 56",
latlng: new kakao.maps.LatLng(37.5581873430875, 126.93389585379639),
},
{
title: "갤럭시원룸텔",
address: "서울특별시 서대문구 연세로7길 27",
latlng: new kakao.maps.LatLng(37.55755512530269, 126.93521774825653),
},
{
title: "심플하우스",
address: "서울특별시 서대문구 연세로7안길 13",
latlng: new kakao.maps.LatLng(37.557983550699596, 126.9360464001678),
},
{
title: "하이레지던스",
address: "서울특별시 서대문구 연세로7길 14",
latlng: new kakao.maps.LatLng(37.557771801143424, 126.93601828692832),
},
{
title: "스테이더디자이너스오피스텔",
address: "서울특별시 서대문구 연세로2나길 16",
latlng: new kakao.maps.LatLng(37.5567594259845, 126.93836188176469),
},
{
title: "다정하숙",
address: "서울특별시 서대문구 연세로4길 46-7",
latlng: new kakao.maps.LatLng(37.55789515993406, 126.93928333915916),
},
{
title: "건영빌",
address: "서울특별시 서대문구 연세로2다길 28",
latlng: new kakao.maps.LatLng(37.55693580855959, 126.93969437909205),
},

];


var imageSrc = "/villa.png";

var imageSize = new kakao.maps.Size(30, 45);
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

for (var i = 0; i < positions.length; i++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: positions[i].latlng, // 마커를 표시할 위치
      title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
      //image: markerImage, // 마커 이미지
    });
    // 마커에 표시할 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      content: positions[i].address,
      removable: true, // 인포윈도우에 표시할 내용
    });

    // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다
    // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    (function (marker, infowindow) {
      // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다
      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });
    })(marker, infowindow);
    clusterer.addMarker(marker);
  }

/*

clusterer.addMarkers(markers);
*/

// 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomIn() {
    console.log('test');
    map.setLevel(map.getLevel() - 1);
}

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}

// 지도에 클릭 이벤트를 등록합니다
// 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
kakao.maps.event.addListener(map, "click", function (mouseEvent) {
// 클릭한 위도, 경도 정보를 가져옵니다
    var latlng = mouseEvent.latLng;

    var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
    message += "경도는 " + latlng.getLng() + " 입니다";

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = message;
});


// (() => {
//     var mapContainer = document.getElementById('map'), // 지도를 표시할 div
//     mapOption = { 
//         center: new kakao.maps.LatLng(37.562800561415415, 126.93826918705246), // 지도의 중심좌표
//         level: 5 // 지도의 확대 레벨
//     };
    
//     var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
//     // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
//     function zoomIn() {
//         map.setLevel(map.getLevel() - 1);
//     }
    
//     // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
//     function zoomOut() {
//         map.setLevel(map.getLevel() + 1);
//     }
    
//     // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
//     kakao.maps.event.addListener(map, 'center_changed', function() {
    
//     // 지도의  레벨을 얻어옵니다
//     var level = map.getLevel();
    
//     // 지도의 중심좌표를 얻어옵니다 
//     var latlng = map.getCenter(); 
    
//     var message = '<p>지도 레벨은 ' + level + ' 이고</p>';
//     message += '<p>중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다</p>';
    
//     var resultDiv = document.getElementById('result');
//     resultDiv.innerHTML = message;
//     });
//     // 지도에 클릭 이벤트를 등록합니다
//     // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
//     kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
//         // 클릭한 위도, 경도 정보를 가져옵니다 
//         var latlng = mouseEvent.latLng;
        
//         var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
//         message += '경도는 ' + latlng.getLng() + ' 입니다';
        
//         var resultDiv = document.getElementById('result'); 
//         resultDiv.innerHTML = message;
//     });
// })