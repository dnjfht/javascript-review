window.onload = function () {
  // 문서가 load 될 때 이 함수를 실행

  let text = document.getElementById("text");
  // 아이디가 "text"인 요소를 return

  text.innerText = "HTML 문서 loaded";
};

const aElement = document.querySelector("a");
aElement.addEventListener("click", () => {
  alert("a element clicked!");
});

const buttonElement = document.querySelector(".btn2");
buttonElement.addEventListener("click", (e) => {
  // 이벤트 객체 가져오기
  // PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
  console.log(e);

  let val;
  val = e.target; // <button class="btn2">버튼</button>
  val = e.target.id; // btn2
  val = e.target.className; // btn2 btn3 btn4
  val = e.target.classList; // ['btn2', 'btn3', 'btn4', value: 'btn2 btn3 btn4']

  val = e.type; // click
  val = e.clientY; // 이벤트가 트리거될 때마다 마우스 좌표를 표시(윈도우로부터의 거리 좌표). 81...
  val = e.offsetY; // 이벤트가 트리거될 때마다 마우스 좌표를 표시(요소로부터의 거리 좌표). 12...
  console.log(val);
});
