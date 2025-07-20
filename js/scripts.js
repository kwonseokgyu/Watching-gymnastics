const get = (selector) => document.querySelector(selector);
const getAll = (selector) => document.querySelectorAll(selector);

const btns = getAll('.btn_box li');
const rythm = get('.rythm');

btns.forEach((item) => {
  item.addEventListener('click', () => {
    btns.forEach((btn) => btn.classList.remove('on'));

    switch(item.textContent.trim()) {
      case '리듬체조':
        rythm.style.display = 'block';  // 보이게
        item.classList.add('on');
        break;

      case '기계체조(남)':
        rythm.style.display = 'none';  // 숨기기
        item.classList.add('on');
        break;

      case '기계체조(여)':
        rythm.style.display = 'none';  // 숨기기
        item.classList.add('on');
        break;

      default:
        break;
    }
  });
});
