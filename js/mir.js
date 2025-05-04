//задание 1
const p = document.querySelector(".test-text");
console.log(p);
p.textContent = "Привет, мир! Меня зовут Даша";
p.innerHTML = "Привет, <b>мир</b>! Меня зовут <i>Даша</i>!";
p.style.backgroundColor = "lightblue";
p.style.color = "blue";
p.style.border = "2px solid blue";

//задание 2
const textEmail = document.getElementById("email");
textEmail.value = "mail@mail.ru";
textEmail.disabled = true;

const checkbox = document.getElementById('remember');
checkbox.checked = true;

const button = document.getElementById('btn');
button.textContent = 'Ткни сюда';


//задание 3
const firstLink = document.createElement('a');
firstLink.textContent = 'ссылка на сайт';
firstLink.href = 'https://midis.ru/';
firstLink.target = '_blank';
document.body.appendChild(firstLink);
firstLink.addEventListener('mouseenter', () => {
    firstLink.style.color = 'red';               //  цвет на красный
    firstLink.style.fontWeight = 'bold';         //  текст жирный
    firstLink.style.textShadow = '1px 1px 2px gray'; //  тень
});
firstLink.addEventListener('mouseleave', () => {
    firstLink.style.color = 'blue';              //  цвет
    firstLink.style.fontWeight = 'normal';       //  размер 
    firstLink.style.textShadow = 'none';         //  тень
});

//задание 4


