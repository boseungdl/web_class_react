import React from 'react'


const refertxt = [
    //a
       {num:1, name:"all", desc:"all 속성은 CSS 속성을 재설정하는데 사용할 수 있는 약식 속성입니다."},
       {num:2, name:"animation", desc:"animation 속성은 애니메이션 속성을 설정하기 위한 약식 속성입니다."},
       {num:3, name:"animation-delay", desc:"animation-delay 속성은 애니메이션이 시작되는 시간을 설정합니다."},
       {num:4, name:"animation-direction", desc:"animation-direction 속성은 애니메이션이 움직이는 방향을 설정합니다."},
       {num:5, name:"animation-duration", desc:"animation-duration 속성은 애니메이션이 움직이는 시간을 설정합니다."},
       {num:6, name:"animation-fill-mode", desc:"animation-fill-mode 속성은 애니메이션이 끝난 후의 상태를 설정합니다."},
       {num:7, name:"animation-iteration-count", desc:"animation-iteration-count 속성은 애니메이션 반복 횟수를 설정합니다."},
       {num:8, name:"animation-name", desc:"animation-name 속성은 애니메이션 키프레임 이름을 설정합니다."},
       {num:9, name:"animation-play-state", desc:"animation-play-state 속성은 애니메이션의 진행상태를 설정합니다."},
       {num:10, name:"animation-timing-function", desc:"animation-timing-function 속성은 애니메이션 움직임의 속도를        설정합니다."},
       {num:11, name:"appearance", desc:"appearance 속성은 기본 양식 컨트롤이 렌더링되는 방식을 제어합니다."},

       //b
       {num:12, name:"backdrop-filter", desc: "backdrop-filter 속성은 요소 뒤에 필터효과를 설정합니다."},
       {num:13, name:"backface-visibility", desc: "backdrop-visibility 속성은 요소 뒷면 출력 여부 설정합니다."},
       {num:14, name:"background", desc: "background 속성은 배경 속성 값을 정의합니다."},
       {num:15, name:"background-attachment", desc:"background-attachment : background-attachment 속성은 배경이미지의      고정여부를 설정하기 위한 속성입니다."},
       {num:16, name:"background-blend-mode", desc:"background-blend-mode : background-blend-mode 속성은 배경을 혼합했을 때의      상태를 설정합니다."},
       {num:17, name:"background-clip", desc:"background-clip : background-clip 속성은 백그라운드 이미지의 위치 기준점을       설정하기 위한 속성입니다"},
       {num:18, name:"background-color", desc:"background-color : background-color 속성은 백그라운드 색을 설정합니다"},
       {num:19, name:"background-image", desc:"background-image : background-image 속성은 백그라운드 이미지 및 배경 속성을         설정합니다"},
       {num:20, name:"background-origin", desc:"background-origin : background-origin 속성은 백그라운드 이미지의 위치      기준점을 설정하기 위한 속성입니다"},
       {num:21, name:"background-position", desc:"background-position : background-position 속성은 백그라운드 이미지의 위치        영역을 설정합니다"},
       {num:22, name:"background-repeat", desc:"background-repeat : background-repeat 속성은 백그라운드 이미지 반복 여부를         설정합니다"},
       {num:23, name:"background-repeat", desc:"background-repeat : background-repeat 속성은 백그라운드 이미지 반복 여부를         설정합니다"},
       {num:24, name:"background-size", desc:"background-size : background-size 속성은 백그라운드 이미지 사이즈를 설정합니다"}     ,
       {num:25, name:"border", desc:"border : border 속성은 테두리 속성을 일괄적으로 설정합니다"},
       {num:26, name:"border-bottom", desc:"border-bottom : border-bottom 속성은 테두리 아래쪽 속성을 일괄적으로 설정합니다"},
       {num:27, name:"border-bottom-color", desc:"border-bottom-color : border-bottom-color 속성은 테두리 아래쪽 색 속성을         설정합니다"},
       {num:28, name:"border-bottom-left-radius", desc:"border-bottom-left-radius : border-bottom-left-radius 속성은       아래부분 왼쪽 모서리 굴곡을 설정합니다"},
       {num:29, name:"border-bottom-right-radius", desc:"border-bottom-right-radius : border-bottom-right-radius 속성은        아래부분 오른쪽 모서리 굴곡을 설정합니다"},
       {num:30, name:"border-bottom-style", desc:"border-bottom-style : border-bottom-style 속성은 테두리 아래쪽 스타일        속성을 설정합니다"},
       {num:31, name:"border-bottom-width", desc:"border-bottom-width : border-bottom-width 속성은 테두리 아래쪽 두께 속성을       설정합니다"},
       {num:32, name:"border-collapse", desc:"border-collapse : border-collapse 속성은 테이블의 테두리 분리 여부를         설정합니다"},
       {num:33, name:"border-color", desc:"border-color : border-color 속성은 테두리 색 속성을 설정합니다"},
       {num:34, name:"border-image", desc:"border-image : border-image 속성은 테두리 이미지 속성을 설정합니다"},
       {num:35, name:"border-image-outset", desc:"border-image-outset : border-image-outset 속성은 테두리 이미지 간격 속성을       설정합니다"},
       {num:36, name:"border-image-repeat", desc:"border-image-repeat : border-image-repeat 속성은 테두리 이미지 반복 속성을       설정합니다"},
       {num:37, name:"border-image-slice", desc:"border-image-slice : border-image-slice 속성은 테두리 이미지 크기 속성을      설정합니다"},
       {num:38, name:"border-image-source", desc:"border-image-source : border-image-source 속성은 테두리 이미지 경로 속성을       설정합니다"},
       {num:39, name:"border-image-width", desc:"border-image-width : border-image-width 속성은 테두리 이미지 두께 속성을      설정합니다"},
       {num:40, name:"border-image-left", desc:"border-image-left : border-image-left 속성은 테두리 왼쪽 속성을 일괄적으로         설정합니다"},
       {num:41, name:"border-image-left-color", desc:"border-image-left-color : border-image-left-color 속성은 테두리 왼쪽         색 속성을 설정합니다"},
       {num:42, name:"border-image-left-style", desc:"border-image-left-style : border-image-left-style 속성은 테두리 왼쪽         스타일 속성을 설정합니다"},
       {num:43, name:"border-image-left-width", desc:"border-image-left-width  : border-image-left-width 속성은 테두리 왼쪽        두께 속성을 설정합니다"},
       {num:44, name:"border-radius", desc:"border-radius : border-radius 속성은 모서리 굴곡을 설정합니다"},
       {num:45, name:"border-image-right", desc:"border-image-right : border-image-right 속성은 테두리 오른쪽 속성을       일괄적으로 설정합니다"},
       {num:46, name:"border-image-right-color", desc:"border-image-right-color : border-image-right-color 속성은 테두리       오른쪽 색 속성을 설정합니다"},
       {num:47, name:"border-image-right-style", desc:"border-image-right-style : border-image-right-style 속성은 테두리       오른쪽 스타일 속성을 설정합니다"},
       {num:48, name:"border-image-right-width", desc:"border-image-right-width  : border-image-right-width 속성은 테두리      오른쪽 두께 속성을 설정합니다"},
       {num:49, name:"border-spacing", desc:"border-spacing : border-spacing 속성은 테이블의 테두리 간격을 설정합니다"},
       {num:50, name:"border-style", desc:"border-style  : border-style 속성은 테두리 스타일 속성을 설정합니다"},
       {num:51, name:"border-top", desc:"border-top  : border-top 속성은 위쪽 속성을 일괄적으로 설정합니다"},
       {num:52, name:"border-top-color", desc:"border-top-color  : border-top-color 속성은 위쪽 색 속성을 설정합니다"},
       {num:53, name:"border-top-color", desc:"border-top-color  : border-top-color 속성은 위쪽 색 속성을 설정합니다"},
       {num:54, name:"border-top-left-radius", desc:"border-top-left-radius  : border-top-left-radius 속성은 윗부분 왼쪽       모서리 굴곡을 설정합니다"},
       {num:55, name:"border-top-rigth-radius", desc:"border-top-rigth-radius  : border-top-rigth-radius 속성은 윗부분         오른쪽 모서리 굴곡을 설정합니다"},
       {num:56, name:"border-top-style", desc:"border-top-style  : border-top-style 테두리 위쪽 스타일 속성을 설정합니다"},
       {num:57, name:"border-top-width", desc:"border-top-width  : border-top-width 테두리 위쪽 두께 속성을 설정합니다"},
       {num:58, name:"bottom", desc:"bottom  : bottom 속성은 위치 요소의 아래쪽 속성을 설정합니다"},
       {num:59, name:"box-decoration-break", desc:"box-decoration-break  : box-decoration-break 속성은 컬럼 및 줄바꿈시        테두리와 패딩의 방식을 설정합니다"},
       {num:60, name:"box-shadow", desc:"box-shadow  : box-shadow 속성은 박스 요소의 그림자를 설정합니다"},
       {num:61, name:"box-sizing", desc:"box-sizing  : box-sizing 속성은 요소 크기에 패딩 포함 여부를 설정합니다"},
       //c
       {num:62, name:"caption-side", desc:"caption-side 속성은 테이블 caption의 위치를 설정합니다."},
       {num:63, name:"caret-color", desc:"caret-color 속성은 input의 커서 색을 정의합니다."},
       {num:64, name:"clear", desc:"clear 속성은 float 요소의 성질을 차단합니다."},
       {num:65, name:"clip", desc:"clip 속성은 보이는 영역을 설정합니다."},
       {num:66, name:"color", desc:"color 속성은 글씨 색을 설정합니다."},
       {num:67, name:"column-count", desc:" column-count 속성은 컬럼의 수를 정의합니다."},
       {num:68, name:"column-fill", desc:"column-fill 속성은 열의 지정방법을 정의합니다."},
       {num:69, name:"column-gap", desc:"column-gap 속성은 컬럼의 간격을 정의합니다."},
       {num:70, name:"column-rule", desc:"column-rule 속성은 컬럼 라인의 가로값, 스타일, 컬러를 정의합니다."},
       {num:71, name:"column-rule-color", desc:"column-rule-color 속성은 컬럼의 라인 색을 정의합니다."},
       {num:72, name:"column-rule-style", desc:"column-rule-style 속성은 컬럼 라인의 스타일을 정의합니다."},
       {num:73, name:"column-rule-width", desc:"column-rule-width 속성은 컬럼 라인의 가로값을 정의합니다."},
       {num:74, name:"column-span", desc:"column-span 속성은 열의 속성을 정의합니다."},
       {num:75, name:"column-width", desc:"column-width 속성은 컬럼의 가로 값을 정의합니다."},
       {num:76, name:"columns", desc:"columns 속성은 컬럼의 열의 폭과 열의 수를 정의합니다."},
       {num:77, name:"content", desc:"content 속성은 콘텐츠 내용을 설정합니다."},
       {num:78, name:"counter-increment", desc:"counter-increment 속성은 콘텐츠의 순서 상태를 정의합니다."},
       {num:79, name:"counter-reset", desc:"counter-reset 속성은 콘텐츠의 숫자를 초기화합니다."},
       {num:80, name:"cursor", desc:"cursor 속성은 마우스 오버시 마우스 포인터를 정의합니다."},
       //d
       {num:81, name:"direction", desc:"direction 속성은 문장의 방향을 설정합니다."},
       {num:82, name:"display", desc:"display 해당 요소를 어떻게 보여줄지를 지정할수있습니다."},
       //e
       {num:83, name:"empty-cells", desc:"empty-cells 속성은 테이블의 빈요소의 속성을 설정합니다."},
       //f
       {num:84, name:"filter", desc:"filter 속성은 그래픽 효과를 설정합니다."},
       {num:85, name:"flex", desc:"flex 속성은 콘텐츠의 성질을 flex로 정의합니다."},
       {num:86, name:"flex-basis", desc:"flex-basis 속성은 요소의 기본 단위를 정의합니다."},
       {num:87, name:"flex-direction", desc:"flex-direction 속성은 요소의 정렬 방향을 정의합니다."},
       {num:88, name:"flex-flow", desc:"flex-flow 속성은 요소의 정렬 방향 flex-direction와 줄 속성 flex-wrap을 같이        설정합니다."},
       {num:89, name:"flex-grow", desc:"flex-grow 속성은 요소의 크기를 숫자를 통해 정의합니다."},
       {num:90, name:"flex-shrink", desc:"flex-shrink 속성은 요소의 크기를 숫자를 통해 줄여줍니다."},
       {num:91, name:"flex-wrap", desc:"flex-wrap 속성은 요소의 줄 속성을 설정합니다."},
       {num:92, name:"float", desc:"flex-grow 속성은 블록요소의 정렬 상태를 설정합니다."},
       {num:93, name:"font", desc:"font 속성은 폰트에 관한 설정을 정의합니다."},
       {num:94, name:"font-family", desc:"font-family 속성은 폰트 종류를 설정합니다."},
       {num:95, name:"font-size", desc:"font-size 속성은 폰트의 크기를 조절할수 있습니다."},
       {num:96, name:"font-size-adjust", desc:"font-size-adjust 속성은 소문자를 기준으로 폰트 크기를 설정합니다."},
       {num:97, name:"font-stretch", desc:"font-stretch 속성은 폰트의 굵기를 정의합니다."},
       {num:98, name:"font-style", desc:"font-style 속성은 폰트의 스타일을 정의합니다."},
       {num:99, name:"font-variant", desc:"font-variant 속성은 글꼴의 변형을 정의합니다."},
       {num:100, name:"font-weight", desc:"font-weight 속성은 폰트의 가중치나 굵기를 명시할수있다."},
       //g
       {num:101, name:"grid", desc:"grid 속성은 flex와 달리 가로세로(2방향)설정이 가능한 2차원 레이아웃 시스템입니다."},
       {num:102, name:"grid-area", desc:"grid-area 속성은 영역(Area) 이름을 설정하거나, grid-row와 grid-column의 단축 속성"},
       {num:103, name:"grid-auto-columns", desc:"grid-auto-columns 속성은 암시적인 열(Track)의 크기를 정의"},
       {num:104, name:"grid-auto-flow", desc:"grid-auto-flow 속성은 자동 배치 알고리즘 방식을 정의"},
       {num:105, name:"grid-auto-rows", desc:"grid-auto-rows 속성은 암시적인 행(Track)의 크기를 정의"},
       {num:106, name:"grid-column", desc:"grid-column 속성은 grid-column-xxx의 단축 속성(열 시작/끝 위치)"},
       {num:107, name:"grid-column-end", desc:"grid-column-end 속성은 그리드 아이템의 열 끝 위치 지정"},
       {num:108, name:"grid-column-gap", desc:"grid-column-gap 속성은 열과 열 사이의 간격(Line)을 정의"},
       {num:109, name:"grid-column-start", desc:"grid-column-start 속성은 그리드 아이템의 열 시작 위치 지정"},
       {num:110, name:"grid-gap", desc:"grid-gap 속성은 행과 열 사이의 간격을 설정합니다."},
       {num:111, name:"grid-row", desc:"grid-row 속성은 grid-row-xxx의 단축 속성(행 시작/끝 위치)"},
       {num:112, name:"grid-row-end", desc:"grid-row-end 속성은 그리드 아이템의 행 끝 위치 지정"},
       {num:113, name:"grid-row-gap", desc:"grid-row-gap 속성은 행과 행 사이의 간격(Line)을 정의"},
       {num:114, name:"grid-row-start", desc:"grid-row-start 그리드 아이템(Item)의 행 시작 위치 지정"},
       {num:115, name:"grid-template", desc:"grid-template 속성은 grid-template-xxx의 단축 속성"},
       {num:116, name:"grid-template-areas", desc:"grid-template-areas 속성은 영역(Area) 이름을 참조해 템플릿 생성"},
       {num:117, name:"grid-template-columns", desc:"grid-template-columns 명시적 열(Track)의 크기를 정의"},
       {num:118, name:"grid-template-rows", desc:"grid-template-rows 명시적 행(Track)의 크기를 정의"},
       //h
       {num:119, name:"hanging-punctuation", desc:"hanging-punctuation 속성은 글씨의 시작 및 끝의 위치 정의합니다."},
       {num:120, name:"height", desc:"height 속성은 콘텐츠 요소의 세로값을 설정합니다."},
       {num:121, name:"hyphens", desc:"hyphens 속성은 텍스트의 하이픈 영역을 설정합니다."},
       //i
       {num:122, name:"isolation", desc:"isolation 속성은 stacking context을 설정합니다."},
       //l
       {num:123, name:"left", desc:"left 속성은 위치 요소의 왼쪽 속성을 설정합니다."},
       {num:124, name:"letter-spacing", desc:"letter-spacing 속성은 글자 사이의 간격을 설정합니다."},
       {num:125, name:"line-height", desc:"line-height 속성은 문장과 문장 사이의 간격을 설정합니다."},
       {num:126, name:"list-style", desc:"list-style 속성은 목록 스타일 속성을 설정합니다."},
       {num:127, name:"list-style-image", desc:"list-style-image 속성은 목록 마커의 이미지를 설정합니다."},
       {num:128, name:"list-style-position", desc:"list-style-position 속성은 목록 마커의 위치 속성을 설정합니다."},
       {num:129, name:"list-style-type", desc:"list-style-type 속성은 목록 마커의 유형을 설정합니다."},
       //m
       {num:130, name:"margin", desc:"margin 속성은 요소의 네 방향 바깥 여백 영역을 설정합니다."},
       {num:131, name:"margin-bottom", desc:"margin-bottom 속성은 요소의 아래쪽에 바깥 여백 영역을 설정합니다."},
       {num:132, name:"margin-left", desc:"margin-left 속성은 요소의 왼쪽에 바깥 여백 영역을 설정합니다."},
       {num:133, name:"margin-right", desc:"margin-right 속성은 요소의 오른쪽에 바깥 여백 영역을 설정합니다."},
       {num:134, name:"margin-top", desc:"margin-top 속성은 요소의 위쪽에 바깥 여백 영역을 설정합니다."},
       {num:135, name:"mask", desc:"mask 속성은 아이템이 부분적으로만 보여지게 하거나 혹은 완전히 가려서 보여지지 않게 할 수        있는 기능을 가지고 있습니다. 이 속성은 마스킹 혹은 특정한 점을 기준으로 이미지를 잘라내는 기능을 함께 제공합니다.   "},
       {num:136, name:"mask-border", desc:"mask-border 속성은 요소의 경계의 가장자리를 따라 마스크를 만들 수 있습니다."},
       {num:137, name:"mask-border-mode", desc:"mask-border-mode 속성은 마스크 테두리에 사용되는 혼합(blending) 모드를      지정합니다."},
       {num:138, name:"mask-border-outset", desc:"mask-border-outset 요소의 마스크 테두리가 테두리 상자에서 설정되는 거리를         지정합니다."},
       {num:139, name:"mask-border-repeat", desc:"mask-border-repeat 속성은 소스 이미지의 가장자리 영역이 요소의 마스크 테두리      크기에 맞게 조정되는 방식을 설정합니다."},
       {num:140, name:"mask-border-slice", desc:"mask-border-slice 속성은 mask-border-source로 설정된 이미지를 영역으로         나눕니다. 이 영역은 요소의 마스크 테두리 구성 요소를 형성하는 데 사용됩니다."},
       {num:141, name:"mask-border-source", desc:"mask-border-source 속성은 요소의 마스크 테두리를 만드는 데 사용되는 소스      이미지를 설정합니다."},
       {num:142, name:"mask-border-width", desc:"mask-border-width 속성은 요소의 마스크 테두리 너비를 설정합니다."},
       {num:143, name:"mask-clip", desc:"mask-clip 속성은 마스크의 영향을 받는 영역을 결정합니다. 요소의 칠해진 콘텐츠는 이         영역으로 제한되어야 합니다."},
       {num:144, name:"mask-composite", desc:"mask-composite 속성은 현재 마스크 레이어 아래에 마스크 레이어가 있는 합성 작업을      나타냅니다."},
       {num:145, name:"mask-image", desc:"mask-image 속성은 요소를 url에 지정된 이미지 만큼만 보이게 처리합니다."},
       {num:146, name:"mask-mode", desc:"mask-mode 속성은 mask-image에 의해 정의된 마스크 참조가 광도 또는 알파 마스크로        처리되는지 여부를 설정합니다."},
       {num:147, name:"mask-origin", desc:"mask-origin 속성은 마스크의 원점을 설정합니다."},
       {num:148, name:"mask-position", desc:"mask-position 속성은 background-position처럼 마스크에 보일 요소위치를 지정합니다.      "},
       {num:149, name:"mask-repeat", desc:"mask-repeat 속성은 마스크 이미지가 반복되는 방식을 설정합니다. 마스크 이미지는       가로축, 세로축, 양축을 따라 반복하거나, 반복하지 않을 수 있습니다."},
       {num:150, name:"mask-size", desc:"mask-size 속성은 background-size처럼 보일 요소의 크기를 지정합니다."},
       {num:151, name:"mask-type", desc:"mask-type 속성은 SVG mask 요소를 밝기 또는 알파 마스크로 사용할지 여부를 설정합니다.       mask 요소 자체에 적용됩니다."},
       {num:152, name:"max-height", desc:"max-height 속성은 요소의 최대 세로값을 설정합니다."},
       {num:153, name:"max-width", desc:"max-width 속성은 요소의 최대 가로 값을 설정합니다."},
       {num:154, name:"min-height", desc:"min-height 속성은 요소의 최소 세로 값을 설정합니다."},
       {num:155, name:"min-width", desc:"min-width 속성은 요소의 최소 가로 값을 설정합니다."},
       {num:156, name:"mix-blend-mode", desc:"mix-blend-mode 속성은 배경의 혼합 상태를 정의합니다."},
       //o
       {num:157, name:"object-fit", desc:"대체되는 요소의 내용(&lt;img&gt;, &lt;video&gt;, &lt;object&gt;, &lt;svg&gt; 등과         같은)이 지정된 너비와 높이에 맞게 장착되는 방식을 지정한다."},
       {num:158, name:"object-position", desc:"기본적으로 요소의 가운데로 화상을 이동시킨다. 이 위치를 원하는 값으로 변경한다."},
       {num:159, name:"opacity", desc:"요소의 투명도를 제어하는데 사용됩니다."},
       {num:160, name:"orphans", desc:"페이지, 영역 또는 열의 맨 아래에 표시되어야 하는 블록 컨테이너의 최소 줄 수를 설정합니다.        "},
       {num:161, name:"outline", desc:"요소 주위에 윤곽선을 그리는 데 사용됩니다."},
       {num:162, name:"outline-color", desc:"요소의 윤곽선 색상을 설정하는 데 사용됩니다."},
       {num:163, name:"outline-offset", desc:"요소 윤곽선의 가장자리 또는 테두리 사이의 간격을 설정합니다."},
       {num:164, name:"outline-style", desc:"요소의 윤곽선 스타일을 설정하는 데 사용됩니다."},
       {num:165, name:"outline-width", desc:"요소의 윤곽선 너비를 설정하는 데 사용됩니다."},
       {num:166, name:"overflow", desc:"요소의 경계를 넘은 콘텐츠를 표시할지 여부를 지정합니다."},
       {num:167, name:"overflow-x", desc:"요소의 콘텐츠를 표시할지, 잘릴지(숨겨야 하는지) 또는 콘텐츠가 요소의 왼쪽 및 오른쪽       가장자리를 넘을 때 수평 스크롤 막대를 추가할지 여부를 지정하는 데 사용됩니다."},
       {num:168, name:"overflow-y", desc:"요소의 콘텐츠를 표시할지, 잘릴지(숨겨야 하는지) 또는 콘텐츠가 요소의 위쪽 및 아래쪽       가장자리를 넘을 때 세로 스크롤 막대를 추가할지 여부를 지정하는 데 사용됩니다."},    
       //p
       {num:169, name:"padding", desc:"한 번에 요소의 네 면에 패딩 영역(내용(content)과 테두리(border) 사이의 간격)을       설정합니다."},
       {num:170, name:"padding-bottom", desc:"요소의 아래쪽 패딩 영역(내용(content)과 테두리(border) 사이의 간격)을 설정"},
       {num:171, name:"padding-left", desc:"요소의 왼쪽 패딩 영역(내용(content)과 테두리(border) 사이의 간격)을 설정"},
       {num:172, name:"padding-right", desc:"요소의 오른쪽 패딩 영역(내용(content)과 테두리(border) 사이의 간격)을 설정"},
       {num:173, name:"padding-top", desc:"요소의 위쪽 패딩 영역(내용(content)과 테두리(border) 사이의 간격)을 설정"},
       {num:174, name:"page-break-after", desc:"페이지 인쇄시 적용된 요소 뒤부터 페이지 분리에 관한 설정을 정의합니다."},
       {num:175, name:"page-break-before", desc:"페이지 인쇄시 적용된 요소 앞부터 페이지 분리에 관한 설정을 정의합니다."},
       {num:176, name:"page-break-inside", desc:"요소 내부에서 페이지 넘김을 지정합니다"},
       {num:177, name:"perspective", desc:"perspective 속성은 3차원 공간을 활성화하여 해당 요소의 자식이 해당 공간에 배치될 수      있도록 하는 데 사용됩니다."},
       {num:178, name:"perspective-origin", desc:"perspective-origin 속성은 뷰어가 3차원 공간을 바라보는 위치를 선택하는 데         사용됩니다."},
       {num:179, name:"pointer-events", desc:"pointer-events 속성은 특정 그래픽 요소가 포인터 이벤트의 대상이 될 수 있는 조건을         제어하는 ​​데 사용됩니다 ."},
       {num:180, name:"position", desc:"position 속성은 페이지에서 요소의 위치를 ​​설정하는 데 사용됩니다 ."},
       //q
       {num:181, name:"quotes", desc: "quotes 속성은 속성을 사용하여 삽입할 때 사용할 따옴표를 지정하는 데 사용됩니다"},
       //r
       {num:182, name:"resize", desc: "resize 속성은 사용자가 요소의 크기를 조정할 수 있는지 여부와 가능한 경우 방향을 지정할 수        있습니다."},
       {num:183, name:"right", desc: "right 속성은 위치 지정 요소의 오른쪽 오프셋을 지정하는 데 사용되는 오프셋 속성입니다 ."},
       //s
       {num:184, name:"shape-image-threshold", desc: "shape-image-threshold 속성은 css모양 외부에 이미지를 사용할 때 모양을         추출하는 데 사용되는 알파 채널의 임계값을 설정하는 데 사용됩니다."},
       {num:185, name:"shape-margin", desc: "shape-margin 속성은 css모양에 여백을 추가하는 데 사용됩니다."},
       {num:186, name:"shape-outside", desc: "shape-outside 속성은 float된 요소의 경계를 감싸는 방식을 제어하는 데 사용됩니다."}        ,
       //t
       {num:187, name:"tab-size", desc: "tab-size 속성은 속성은 페이지에 표시되는 탭 문자의 너비를 결정하는 데 사용됩니다."},
       {num:188, name:"table-layout", desc: "table-layout 속성은 테이블 열, 행 및 셀의 레이아웃을 지정합니다."},
       {num:189, name:"text-align", desc: "text-align 속성은 블록 요소 내부의 인라인 요소가 정렬되는 방식을 제어하는 데         사용됩니다."},
       {num:190, name:"text-align-last", desc: "text-align-last 속성은 강제 줄 바꿈 직전의 블록이나 줄의 마지막 줄을 정렬하는       방법을 설정하는 데 사용됩니다."},
       {num:191, name:"text-decoration", desc: "text-decoration 속성은 텍스트 위, 텍스트 아래 또는 텍스트 위에 선 형태로 장식을         추가하거나 기존 장식을 제거하는 데 사용됩니다."},
       {num:192, name:"text-decoration-color", desc: "text-decoration-color 속성은 요소에 설정된 텍스트 장식(밑줄, 윗줄 및 선       통과)의 색상을 지정합니다"},
       {num:193, name:"text-decoration-line", desc: "text-decoration-line 속성은 글자 라인 스타일을 설정합니다."},
       {num:194, name:"text-decoration-style", desc: "text-decoration-style 속성은 text-decoration-line이 있는 요소에 설정된 선     (밑줄, 윗줄 및 선 통과)의 스타일을 설정합니다."},
       {num:195, name:"text-indent", desc: "text-indent 속성은 텍스트를 담고있는 블록 컨테이너에 적용되며 문단의 첫줄을         들여쓰기 할 때 사용합니다."},
       {num:196, name:"text-justify", desc: "text-justify 속성은 텍스트의 간격을 정의합니다."},
       {num:197, name:"text-orientation", desc: "text-orientation 속성은 콘텐츠 줄 내에서 문자의 방향을 설정합니다."},
       {num:198, name:"text-overflow", desc: "text-overflow 속성은 박스 안에 내용이 넘칠 때 텍스트를 어떻게 처리할지 지정하는       속성입니다."},
       {num:199, name:"text-rendering", desc: "text-rendering 속성은 텍스트를 렌더링할 때 최적화할 항목을 선택할 수 있는        속성입니다."},
       {num:200, name:"text-shadow", desc:"text-shadow 속성은 텍스트에 그림자를 추가할 때 설정합니다."},
       {num:201, name:"text-transform", desc:"text-transform 속성은 대문자로 또는 소문자로 바꾸는 속성입니다."},
       {num:202, name:"top", desc:"top 속성은 각 옵션 속성들의 부모 태그를 기준으로 수직으로 위치를 설정합니다."},
       {num:203, name:"touch-action", desc:"touch-action 속성은 어떤 요소 내에서 브라우저가 처리할 터치 액션의 목록을       설정합니다."},
       {num:204, name:"transform", desc:"transform 속성은 요소에 회전, 크기 조절, 기울이기, 이동 효과를 설정합니다."},
       {num:205, name:"transform-origin", desc:"transform-origin 속성은 transform 속성과 함께 사용되는 속성으로, 회전 중심      (원점·기준점)을 설정합니다."},
       {num:206, name:"transform-style", desc:"transform-style 속성은 자식 요소를 3D 공간에 배치하거나 2D 평면에 평평하게 배치      할지 설정합니다."},
       {num:207, name:"transition", desc:"transition 속성은 특정 조건 하에서 변화하는 과정을 애니메이션으로 보여주고자 할 때        설정합니다."},
       {num:208, name:"transition-delay", desc:"transition-delay 속성은 프로퍼티가 변화한 시점과 트랜지션이 실제로 시작하는         사이에 대기하는 시간을 초 단위(s) 또는 밀리 초 단위(ms)로 설정합니다."},
       {num:209, name:"transition-duration", desc:"transition-duration 속성은 애니메이션 소요 시간을 설정합니다."},
       {num:210, name:"transition-property", desc:"transition-property 속성은 transition의 적용 여부를 정의합니다."},
       {num:211, name:"transition-timing-function", desc:"transition-timing-function 속성은 요소의 움직임 기능을 정의합니다."},
       //u
       {num:212, name:"unicode-bidi", desc:"unicode-bidi 속성은 글자의 방향 속성을 설정합니다."},
       //v
       {num:213, name:"vertical-align", desc:"vertical-align 속성은 텍스트의 상하 정렬 방식을 설정합니다."},
       {num:214, name:"visibility", desc:"visibility 속성은 요소를 보이지 않게 정의합니다."},
       //w
       {num:215, name:"white-space", desc:"white-space 속성은 줄바꿈, 공백, 줄 속성을 설정합니다."},
       {num:216, name:"widows", desc:"widows CSS 속성은 페이지, 영역 또는 열의 맨 위에 표시되어야 하는 블록 컨테이너의 최소 줄      수를 설정합니다."},
       {num:217, name:"width", desc: "width 속성은 요소의 가로 값을 정의합니다."},
       {num:218, name:"will-change", desc:"will-change속승은 값이 변경될 속성에 대한 힌트를 미리 지정합니다."},
       {num:219, name:"word-break", desc:" word-break 속성은 줄바꿈 속성을 설정합니다."},
       {num:220, name:"word-spacing", desc:"word-spacing 속성은 단어 사이의 간격을 정의합니다."},
       {num:221, name:"word-wrap", desc:"word-wrap 속성은 줄바꿈을 설정합니다."},
       {num:222, name:"writing-mode", desc:"텍스트의 방향(가로/세로)를 설정합니다."},
       //z
       {num:223, name:"z-index", desc:"z-index 속성은 요소의 위치가 겹칠 경우 순서를 정의합니다."}
     ];

function ReferInfo({name, desc}){
    return (
        <>
            <ul>
                <li><span>{name}</span> <em>{desc}</em></li>
            </ul>
        </>
    )   
}
    



function ReferCont(props) {
  return (
        <section className={`reference__cont ${props.color}`}>
            <div className="reference__inner container">
                {refertxt.map(txt => (
                    <ReferInfo 
                    key={txt.name}
                    name = {txt.name}
                    desc = {txt.desc}
                    />
                ))}
            </div>
        </section>
  )
}

export default ReferCont;