let val;

val = document;

val = document.baseURI; // 웹 페이지의 절대 URI 반환, http://192.168.0.4:5500/document/index.html

val = document.head; // <head> 태그 반환
val = document.body; // <body> 태그 반환

val = document.forms; // <form> 태그 반환, TMLCollection [form#form-id.form-container, form-id: form#form-id.form-container]
val = document.forms[0].id;
val = document.forms[0].classList;
val = document.forms[0].className;

val = document.scripts;
val = document.scripts[0].getAttribute("src"); // 실제로 사용되는 script(src 속성을 가져오는 것), https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js
val = document.scripts[1].getAttribute("src"); // script.js

const headerContainer = document.getElementById("header-container");
// headerContainer.style.display = "none";
headerContainer.textContent = "Hello";
headerContainer.innerText = "Inner Text";
headerContainer.innerHTML = "<span>Inner Text</span>";

const items = document.getElementsByClassName("list-group-item");
items[0].style.color = "blue";
items[0].style.textContent = "Hi!";

let lists = document.getElementsByTagName("li");
// lists 값들 배열로 만들어보기.
lists = Array.from(lists);
// [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]
// 배열 lists 순회해보기.
lists.forEach((list, index) => {
  console.log(list);
  // li.list-group-item
  list.textContent = `${index}. List`;
});

// 홀수인 li의 nth만
const liOdd = document.querySelectorAll("li:nth-child(odd)");
// [li.list-group-item, li.list-group-item, li.list-group-item]
liOdd.forEach((li) => {
  li.style.background = "gray";
});

console.log(liOdd);
