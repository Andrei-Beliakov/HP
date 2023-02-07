// import { data } from "./data.js";
const response = await fetch("https://hp-api.onrender.com/api/characters");
const data = await response.json();

const wrap = document.querySelector(".cards__wrapper");
const inputSearch = document.querySelector(".form__input");
const selectSearch = document.querySelector(".select");
let selectArr = data;

//ФУНКЦИЯ ОТРИСОВКИ КАРТОЧЕК
function createCard(obj) {
  const newCard = document.createElement("div");
  newCard.className = "cards__item";
  newCard.innerHTML = `<img src="${
    obj.image ? obj.image : "./images/empty_img.png"
  }" />`;
  const text = document.createElement("div");
  text.className = "item__text";
  text.innerHTML = `<p class="item__title">${obj.name}</p>
  <p class="item__data">Actor: ${obj.actor}</p>
  <p class="item__data">Gender: ${obj.gender}</p>
  <p class="item__data">House: ${obj.house}</p>
  <p class="item__data">Wand core: ${obj.wand.core}</p>
  <p class="item__data">Alive: ${obj.alive ? "yes" : "no"}</p>`;
  newCard.append(text);
  return newCard;
}

//ФУНКЦИЯ ОТРИСОВКИ ПО РЕЗУЛЬТАТУ ДВУХ ПОИСКОВ
function callCreateCard(selectArr) {
  wrap.innerHTML = "";
  selectArr.forEach((card) => {
    wrap.append(createCard(card));
  });
}

//ПОИСК ПО SELECT , ЗАТЕМ ПО INPUT И ВЫЗОВ ОТРИСОВКИ
function allSearchFunction(event) {
  let valueInput = inputSearch.value.trim().toLowerCase();
  let valueSelect = selectSearch.value.trim().toLowerCase();
  selectArr = data.filter((elem) =>
    elem.house.trim().toLowerCase().includes(valueSelect)
  );
  selectArr = selectArr.filter((elem) =>
    elem.name.trim().toLowerCase().includes(valueInput)
  );

  callCreateCard(selectArr);
}
inputSearch.addEventListener("input", allSearchFunction);
selectSearch.addEventListener("change", allSearchFunction);

callCreateCard(selectArr);
