import '../styles/style.css';
import icon from '../../img/icon.svg';
import * as add from './add';
import * as store from './store';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const container = document.querySelector('.task_list');

const list = [];

for (let i = 0; i < list.length; i++) {
  list[i].index = i;
}

const generateMarkup = (list, i) => {
  return `
  <li class="task_item" id="${i}" draggable="true">
  <div class="item_name">
    <input type="checkbox" class="check" id='item-${i}' />
    <label class="task_name">${list.name}</label>
  </div>

  <svg class="icon dot">
    <use href="${icon}#icon-dots-horizontal-triple"></use>
  </svg>
</li>`;
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const listName = input.value;
  if (listName === null || listName === '') return;

  let obj = {
    name: listName,
    completed: false,
    index: list.length,
  };

  input.value = null;
  list.push(obj);
  document.querySelector('.list_num').textContent = list.length;

  add.addToLocale(list);

  const render = list.map(generateMarkup).join('');
  container.innerHTML = render;
});

window.addEventListener('load', (e) => {
  const locale = store.getList();
  list.push(...locale);

  const renderLocale = list.map(generateMarkup).join('');
  document.querySelector('.list_num').textContent = locale.length;
  container.innerHTML = renderLocale;

  document.addEventListener('click', (e) => {
    const clicked = e.target.closest('.task_item');
    const listContaniner = clicked.firstElementChild;
    const class1 = clicked.firstElementChild.firstElementChild;
    const class2 = clicked.firstElementChild.lastElementChild;
    const markupCheck = () => {
      return ` <svg class="icon-2">
  <use href="${icon}#icon-check"></use>
  </svg>`;
    };

    if (e.target.classList.contains('check')) {
      e.target.classList.toggle('hidden');
      class2.classList.toggle('strike');
      listContaniner.insertAdjacentHTML('afterbegin', markupCheck());
      clicked.classList.toggle('done');
      for (let i = 0; i < list.length; i++) {
        if (list[i].completed === false && clicked.id == i) {
          list[i].completed = true;
          localStorage.setItem('List', JSON.stringify(list));
        } else if (list[i].completed === true && clicked.id == i) {
          list[i].completed = false;
          localStorage.setItem('List', JSON.stringify(list));
        }
      }
    }

    document.querySelector('.btn').addEventListener('click', (e) => {
      e.preventDefault();
      if (clicked.classList.contains('done')) {
        const listArr2 = store.getList();
        clicked.remove();
        for (let i = 0; i < list.length; i++) {
          list[i].description = true;
          if (clicked.id == i) {
            listArr2.splice(i, 1);
            localStorage.setItem('List', JSON.stringify(listArr2));
          }
        }
      }
    });

    const class3 = clicked.firstElementChild.firstElementChild;

    class3.addEventListener('click', (e) => {
      class1.checked = false;
      class3.classList.toggle('hidden');
      class1.classList.toggle('hidden');
      class2.classList.toggle('strike');
    });

    const class4 = clicked.lastElementChild;
    class4.addEventListener('click', () => {
      clicked.classList.toggle('yellow-1');
      class4.innerHTML = `<use href="${icon}#icon-trash-2"></use>`;
      class4.addEventListener('click', () => {
        clicked.remove();
        const listArr = store.getList();
        for (let i = 0; i < list.length; i++) {
          if (clicked.id == i) {
            listArr.splice(i, 1);
            localStorage.setItem('List', JSON.stringify(listArr));
          }
        }
      });
    });
  });
});

const dragEle = new Sortable(container, { animation: 350 });
dragEle();
