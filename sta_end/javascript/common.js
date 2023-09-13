const searchEl = document.querySelector('.search'); 
// search 라는 클래스 변수를 찾아서 "searchEl"라는 변수를 넣는다.
const searchInputEl = searchEl.querySelector('input');
// document라는 것도 요소이기때문에 searchEl라는 변수 값에 있는 .search값 통해 input를 넣는다.

searchEl.addEventListener('click', function () {
    //logic..
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused'); // searchEl라는 변수 요소에 클래스를 추가하겠다.
    searchInputEl.setAttribute('placeholder','통합검색') // html지정할때
})

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused'); // searchEl라는 변수 요소에 클래스를 추가하겠다.
    searchInputEl.setAttribute('placeholder',''); // html지정할때
})

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 2023