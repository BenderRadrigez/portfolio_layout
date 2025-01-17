// --------- hamburger
const hamburgerMenu = document.querySelector('.header__hamburger__menu');
const hamburgerNav = document.querySelector('.header__burger__menu-nav');
const hamburgerOpenBtn = document.querySelector('.header__burger-btn');
const hamburgerCloseBtn = document.querySelector('.header__burger__menu_close');

hamburgerOpenBtn.addEventListener('click', () => {
  hamburgerMenu.classList.remove('burger_hide');
  hamburgerNav.classList.add('header__burger__menu-nav_open');
});

hamburgerCloseBtn.addEventListener('click', () => {
  hamburgerMenu.classList.add('burger_hide');
  hamburgerNav.classList.remove('header__burger__menu-nav_open');
});



// --------- form
const submit = document.querySelector('.footer__contacts__inpt-form__btn');
const nameInput = document.querySelector('.inpt_name');
const emailInput = document.querySelector('.inpt_email');
const messageInput = document.querySelector('.inpt_message');
const nameError = document.querySelector(
  '.footer__contacts__inpt-form__name_error'
);
const emailError = document.querySelector(
  '.footer__contacts__inpt-form__email_error'
);

submit.addEventListener('click', async (e) => {
  nameError.classList.add('hide');
  emailError.classList.add('hide');

  // Валидация
  const name = nameInput.value.trim();
  if (name.length < 3) {
    nameError.classList.remove('hide');
    return;
  }

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.classList.remove('hide');
    return;
  }

  // Сохранение и отправка формы
  const data = {
    name,
    email,
    message: messageInput.value.trim(),
    userId: Math.floor(Math.random() * 100) + 1,
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(`Успешно отправлено: ${JSON.stringify(result)}`);

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  } catch (error) {
    console.error('Ошибка: ', error);
  }
});




// --------- Fibonacci func
function fibbonacci(numberInList) {
  if (numberInList <= 0) return 0;
  if (numberInList === 1) return 1;
  let a = 0,
    b = 1;

  for (let i = 2; i <= numberInList; i++) {
    let digit = a + b;
    a = b;
    b = digit;
  }
  return b;
}
