//var는 구형
//let은 업데이트 할때, const는 계속 유지할때.
const
let
var

//prompt입력받음
const age = prompt("How r u?");
console.log(age)

//prompt가 int형인지, type이 뭔지
const age_a=parseInt(age)
console.log(age_a, typeof age)

//nan 형인지, ex) age_a가 만약 int가 아니면 오류 출력해야함. 그때 자주 쓰임 if문도 함께
if(isNaN(age_a)){

}else if(age_a<2){

}else{
    
}

//작은 프로젝트

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


//제출할때 hidden class와 localstorage에 key와 value 값을 넣음
function onLoginSubmit(event) {
  //크롬에 내장되어 있는 기본 이벤트 없애기
  event.preventDefault();
  //hidden class 추가로 로그인 클릭 창 안보이게 하기
  loginForm.classList.add(HIDDEN_CLASSNAME);
  //입력한 이름 가져오는 명령어
  const username = loginInput.value;
  //localstorage라는 내부 저장소에 이름을 저장함, localstorage에는 key와  value 형식으로 되어있어서 이렇게 구성됨
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

// onLoginSubmit에서 이름 저장하고 hello+저장된 이름 출력 후 greeting에 hidden을 지워 텍스트가 보이게 한다.
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

//username_key 안에 들은 value를 가져온다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

//만약 저장된 이름이 없다면 loginform hidden을 지워 보이함. 만약 아니라면 paintgreetings를 실행해 이름을 보여준다.ㄴ
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}