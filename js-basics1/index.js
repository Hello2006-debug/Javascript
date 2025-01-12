/*const todos = [
    {
        id: 1,
        title: 'Learn Javascript',
        isCompleted: true
    },
    {
        id: 2,
        title: 'Learn React',
        isCompleted: true
    },
    {
        id: 3,
        title: 'Learn Redux',
        isCompleted: false}
];

//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON); //sending data to a server

for (let i=0;i< todos.length;i++){
    console.log(todos[i].title);
}
for (let todo of todos){
    console.log(todo.title);
}
//foreach
todos.forEach(function (todo){
    console.log(todo.title);
});
//map
const todoText= todos.map(function (todo){
    return todo.title;
});
console.log(todoText);
//filter
const todoCompleted= todos.filter(function (todo){
    return  todo.isCompleted === true;
});
console.log(todoCompleted);
 */
/*
class person{
    constructor(firstName, lastName , dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new person('Mugen', 'Khan','1999-01-01');
const person2 = new person('Aloo', 'Jon','1997-01-04');

console.log(person1);
console.log(person2.getFullName());*/

//single selector
/*console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//multiple selector
console.log(document.querySelectorAll('.item'));
*/

/*
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerHTML = 'Brad';
ul.lastElementChild.innerHTML = '<h4>Hello</h4>';
*/
/*const btn = document.querySelector('.btn');
//btn.style.backgroundColor = 'red';
btn.addEventListener('mouseout', (e) => {
    e.preventDefault()
    console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h4>Hello</h4>';
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all the fields';
        setTimeout(() => msg.remove(), 3000)
    }else{
        const li = document.createElement('li');//creates element
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        //clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}