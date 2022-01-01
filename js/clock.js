const clock = document.querySelector("h2#clock");
//시간 받는 ㅎ마수
function getClock() {
//date형 선언
  const date = new Date();
//시간 표현. 그러나 1:20:1로 표현됨. 우리가 원하는건 01:20:02임. 그래서 pad start를 사용하여 0추가
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  //2개의 글자로 부족하여 앞에 0 넣기 만약에 end면 뒤에 0넣음
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// 1초 간격으로 다시 부른다.
setInterval(getClock, 1000);