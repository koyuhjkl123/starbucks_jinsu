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



const badgeEl = document.querySelector('header .badges');
// 클래스 badges라는 것을 찾는다, document = html 자체다 쉽게
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll',_.throttle(function() { // throttle라는 메소드 html(lodash.js이용)
    console.log(window.scrollY); // 스크롤y 위치 숫자값
    if (window.scrollY > 500) { // 스크롤이 500이상이 커지면
        // 배지 숨기기
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        // 버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        });
    } else {
        // 500 이하인 경우 / 배지 보이기
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl, .6, {
            opacity: 1, // 투명도
            display: 'block' // 보이기
        });
        // 버튼 숨기기
        gsap.to(toTopEl, .2, {
            x: 100
        });
    }
    // 화면 자체에 스크롤 이벤트를 추가해서 스크롤되면 익명함수 실행
}, 300)); // 300 = 0.3초 / 0.3초 마다 부하 지연을 시켜준다.
// window 브라우저 창이라고 쉽게 생각

//_.throttle(함수, 시간)


toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

// * 순서대로 나타나는 기능
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})

new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true, // 반복재생 여부
    autoplay: {
        delay: 5000 // 0.5초
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    },
});

new Swiper('.awards .swiper-container',{
    autoplay: true,
    // loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;


promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion) {
        // 숨김 처리
        promotionEl.classList.add('hide');
    }else {
        // 보이기 처리
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector,delay, size) {
    gsap.to(selector, // 선택자
        random(1.5,2.5), { // 애니메이션 동작 시간
        y: size, // 옵션
        repeat: -1,
        yoyo: true, 
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl, // 보여짐 여뷰를 감시할 요소를 지정
        triggerHook: .8 // 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 2023