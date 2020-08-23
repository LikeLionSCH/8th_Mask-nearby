let booleanVal = true

let numberVal = 0

let nullVal = null

let undefined = undefined

let stringVal = ''

let person = {
    name : "홍길동",
    phoneNumber : "010-0000-0000",
    email : "hong@hong.com"
}

booleanVal
// true

typeof(booleanVal)
// "boolean"

typeof(numberVal)
// "number"

typeof(nullVal)
// "object"

typeof(undefined)
// "undefined"

null * 2
// 0

undefined * 2
// NaN

typeof(stringVal)
// "string"

// error: const는 값 변경 불가
for (const i = 0 ; i < 10 ; i++) {
    console.log(i);
}

for (let i = 0 ; i < 10 ; i++) {
    console.log(i);
}
/*
0
1
2
3
4
5
6
7
8
9
*/

const numInfo = { "one": "first", "two": "second", "three": "third" };

// formating
for (const i in numInfo) {
    console.log(`기수: ${i}, 서수: ${numInfo[i]}`);
}
/*
기수: one, 서수: first
기수: two, 서수: second
기수: three, 서수: third
*/

const oddNums = [1, 3, 5, 7, 9, 11];
for (const i of oddNums){
    console.log(i);
}
/*
1
3
5
7
9
11
*/

// while 문
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}
/*
0
1
2
3
4
5
6
7
8
9
9
*/

let score = prompt("점수를 입력하세요 1", 0);

// input = 100

score
// "100"

if (score >= 90) {
    console.log("A+");
} else if (score >= 80) {
    console.log("B+");
} else {
    console.log("C+");
}
// A+

score >= 90
// true

let score = prompt("점수를 입력하세요 1", 0);

// input = 80

if (score >= 90) {
    console.log("A+");
} else if (score >= 80) {
    console.log("B+");
} else {
    console.log("C+");
}
// B+

if (score >= 90) {
    console.log("A+");
} else {
    // 아래와 같이 실행할 문장이 한 문장이라면
    // 중괄호를 생략해도 된다.
    if (score >= 80)
        console.log("B+");
    else
        console.log("C+");
}

let idObj = document.getElementById("main");

idObj
// <div id="main">.../div>

let classObj = document.getElementsByClassName("sfbgx");

classObj
// HTMLCollextion [div.sfbgx]

classObj[0]
// <div class="sfbgx"></div>

let selectorObj = document.querySelector("#main");

selectorObj
// <div id="main">...</div>

let selectorObj = document.querySelectorAll(".sfbgx")

selectorObj
// NodeList [div.sfbgx]

/* 
1. 구글에 멋쟁이사자처럼 검색
2. 우측에 나오는 정보에서 개발자도구로 '이두희' 라는 글자 부분을 클릭
3. 태그부분을 오른쪽 마우스 클릭 - copy selector
4. console 창에서 붙여넣기
*/
#kp-wp-tab-overview > div.cLjAic.LMRCfc > div > div > div > div:nth-child(7) > div > div > div > span.LrzXr.kno-fv > a:nth-child(1)

let twoDohee = document.querySelector("#kp-wp-tab-overview > div.cLjAic.LMRCfc > div > div > div > div:nth-child(7) > div > div > div > span.LrzXr.kno-fv > a:nth-child(1)")

twoDohee
// <a class="fl" href="/search?sxsrf=ALeKk026CztJhe3axGj5hTX9I0w7hzccCw:1598076797641&amp;q=%EC%9D%B4%EB%91%90%ED%9D%AC&amp;stick=H4sIAAAAAAAAAOPgE-LVT9c3NEwyS08vzi3PU4Jx0wyNDCrLtFSzk63084vSE_MyqxJLMvPzUDhWafmleSmpRYtYOd_M3fJ64oS3c9fsYGUEAEcCp11WAAAA&amp;sa=X&amp;ved=2ahUKEwjBguP-k67rAhUVhZQKHU49BuAQmxMoATAgegQIDBAD" data-ved="2ahUKEwjBguP-k67rAhUVhZQKHU49BuAQmxMoATAgegQIDBAD">이두희</a>

twoDohee.style = "color:yellow; background-color:black;"
// "color:yellow; background-color:black;"

/*
1. 개발자도구로 '구글' 이라는 글자 부분을 클릭
2. 태그부분을 오른쪽 마우스 클릭 - copy selector
3. console 창에서 붙여넣기
*/
let google = document.querySelector("#kp-wp-tab-overview > div.cLjAic.LMRCfc > div > div > div > div:nth-child(5) > div > div > div > span.LrzXr.kno-fv > a")

google
// <a class="fl" href="/search?sxsrf=ALeKk026CztJhe3axGj5hTX9I0w7hzccCw:1598076797641&amp;q=%EA%B5%AC%EA%B8%80&amp;stick=H4sIAAAAAAAAAONgVuLUz9U3MDFNNk9axMr2auuaVzsaAN0gQDQWAAAA&amp;sa=X&amp;ved=2ahUKEwjBguP-k67rAhUVhZQKHU49BuAQmxMoATAeegQICxAD" data-ved="2ahUKEwjBguP-k67rAhUVhZQKHU49BuAQmxMoATAeegQICxAD">구글</a>

google.innerText = "허태정"
// "허태정"

let googleLogo = document.querySelector("#tsf > div:nth-child(2) > div.A8SBwf > div.logo")

googleLogo
// <div class="logo">...</div>

googleLogo.innerHTML = `<a href="https://naver.com">네이버</a>`

let aTag = document.querySelector('#tsf > div:nth-child(2) > div.A8SBwf > div.logo > a')

aTag.href = "https://naver.com"

let newNode = document.createElement("p");

newNode
// <p></p>

newNode.innerText = "new P tag";
// "new P tag"

newNode
// <p>new P tag</p>

let link = document.querySelector("#rso > div:nth-child(1) > div > div.r")

link.appendChild(newNode);
// <p>new P tag</p>

typeof(newNode)
// "object"


/* 기본적인 함수 형태 */
function ver1_appendNewNode(target, tag="p", text="기본값")
{
    let newTag = document.createElement(tag);
    newTag.innerText = text;
    
    target.appendChild(newTag);
}

let targetNode = document.querySelector("#rso > div:nth-child(1) > div > div.r")

targetNode
// <div class="r">...</div>

ver1_appendNewNode(targetNode)

ver1_appendNewNode(targetNode, "a")

ver1_appendNewNode(targetNode, "p", "나는 기본값이 아니야")

/* 익명함수의 형태 */
let ver2_appendNewNode = function(target, tag="p", text="기본값")
{
    let newTag = document.createElement(tag);
    newTag.innerText = text;
    
    target.appendChild(newTag);
}

ver2_appendNewNode(targetNode)

/* 익명함수 2 : 화살표 함수 형태 */
let ver3_appendNewNode = (target, tag="p", text="기본값") =>
{
    let newTag = document.createElement(tag);
    newTag.innerText = text;
    
    target.appendChild(newTag);
}

ver3_appendNewNode(targetNode)