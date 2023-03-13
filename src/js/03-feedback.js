import throttle from  'lodash.throttle';

const STORAGE_KEY ='feedback-form-state';
let formData = getData() || {};

const formEl = document.querySelector('.feedback-form');
const textareaEl = formEl.querySelector('textarea');
const inputEl = formEl.querySelector('input');

formEl.addEventListener('input', throttle(onFormInput,500));
formEl.addEventListener('submit', onFormSubmit);

onPageLoad();

function onFormInput(e) {
formData[e.target.name] =  e.target.value;
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

};

function onPageLoad() {
const savedData= getData();
if (savedData) {
const {email, message} = savedData;
if (email) {
    inputEl.value = email;
};
if (message) {
    textareaEl.value = message;
}

}

};

function onFormSubmit(e) {
e.preventDefault();
console.log(formData);
e.currentTarget.reset();
localStorage.removeItem(STORAGE_KEY);
};

function getData(){
    try{
       const savedData  = localStorage.getItem(STORAGE_KEY);
        return savedData === null ? undefined : JSON.parse(localStorage.getItem(STORAGE_KEY)) 
    } catch(error) {
        console.log(error.message);
    }
}