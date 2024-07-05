const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector('.fruits');
const fruitInput = document.querySelector('.inputFruit');
const addFruitButton = document.querySelector('.addFruitButton');

theMessageButton.addEventListener('click', function () {
    setTimeout(function () {
        myMessage.innerText = inputBox.value;
    }, 3000);
});
clearMessageButton.addEventListener('click', function () {
    myMessage.innerText = '';
});
myMessage.addEventListener('click', function () {
    myMessage.classList.toggle('darkmode')
    // myMessage.classList.add('darkmode')
})
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];

    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
}
addFruitButton.addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = fruitInput.value;
    fruitList.appendChild(li);
})