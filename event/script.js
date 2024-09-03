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

const submitBtn = document.querySelector(".submit-btn");
const title = document.querySelector("h2");
const form = document.querySelector("form");
const emailInput = document.getElementById("email");

// CLICK EVENT
submitBtn.addEventListener("click", handleEvent);
submitBtn.addEventListener("dblclick", handleEvent);
submitBtn.addEventListener("mousedown", handleEvent); // 요소를 클릭했을 때
submitBtn.addEventListener("mouseup", handleEvent); // 요소를 클릭했다가 마우스를 뗄 때
submitBtn.addEventListener("mouseenter", handleEvent); // 요소 위에 마우스가 올라갔을 때
submitBtn.addEventListener("mouseleave", handleEvent); // 요소 위에서 마우스가 벗어났을 때

// FORM EVENT
form.addEventListener("submit", handleEvent);
emailInput.addEventListener("keydown", handleEvent);
emailInput.addEventListener("keyup", handleEvent);
emailInput.addEventListener("keypress", handleEvent); // 사용자가 눌렀던 키의 문자가 입력되었을 때 발생
emailInput.addEventListener("focus", handleEvent); // input에 focus(마우스로 클릭했을 때)
emailInput.addEventListener("blur", handleEvent); // input에 focus를 풀었을 때(마우스로 클릭했다가 input 외를 클릭했을 때)
emailInput.addEventListener("cut", handleEvent); // input에 입력한 문자를 잘라냈을 때
emailInput.addEventListener("paste", handleEvent); // input에 문자를 붙여넣기 했을 때
emailInput.addEventListener("input", handleEvent); // input 요소 값이 달라질 때

function handleEvent(e) {
  // submit 이벤트가 발생했을 때만 원래 기본 동작을 방지
  if (e.type === "submit") {
    e.preventDefault();
  }

  console.log(`Event Type: ${e.type}`);
  // Event Type: click, dblclick, mousedown....

  //title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  // MouseX: 34 MouseY: 15

  title.textContent = e.target.value;
}
