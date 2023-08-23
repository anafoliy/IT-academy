// Получаем форму и все ее поля
const form = document.getElementById('myForm');
const developers = document.getElementById('developers');
const sitename = document.getElementById('sitename');
const siteurl = document.getElementById('siteurl');
const date = document.getElementById('date');
const visitors = document.getElementById('visitors');
const email = document.getElementById('email');
const division = document.getElementById('division');
const payment = document.getElementsByName('payment');
const votes = document.getElementById('votes');
const description = document.getElementById('description');

// Обработчики событий для валидации полей
developers.addEventListener('blur', validateDevelopers);
sitename.addEventListener('blur', validateSitename);
siteurl.addEventListener('blur', validateSiteurl);
date.addEventListener('blur', validateDate);
visitors.addEventListener('blur', validateVisitors);
email.addEventListener('blur', validateEmail);
division.addEventListener('blur', validateDivision);
votes.addEventListener('change', validateVotes);

// Функции валидации каждого поля
function validateDevelopers() {
  // Проверяем, что поле заполнено
  if (developers.value === '') {
    setErrorFor(developers, 'Введите имя разработчика');
  } else {
    setSuccessFor(developers);
  }
}

function validateSitename() {
  // Проверяем, что поле заполнено
  if (sitename.value === '') {
    setErrorFor(sitename, 'Введите название сайта');
  } else {
    setSuccessFor(sitename);
  }
}

function validateSiteurl() {
  // Проверяем, что поле заполнено
  if (siteurl.value === '') {
    setErrorFor(siteurl, 'Введите URL сайта');
  } else {
    setSuccessFor(siteurl);
  }
  // Проверяем, что URL начинается с http:// или https://
  if (!siteurl.value.startsWith('http://') && !siteurl.value.startsWith('https://')) {
    setErrorFor(siteurl, 'Некорректный URL. Должен начинаться с http:// или https://');
  }
}

function validateDate() {
  // Проверяем, что поле заполнено
  if (date.value === '') {
    setErrorFor(date, 'Введите дату запуска сайта');
  } else {
    setSuccessFor(date);
  }
}

function validateVisitors() {
  // Проверяем, что поле заполнено
  if (visitors.value === '') {
    setErrorFor(visitors, 'Введите количество посетителей в сутки');
  } else {
    setSuccessFor(visitors);
  }
  // Проверяем, что количество посетителей является положительным целым числом
  if (visitors.value < 1 || isNaN(visitors.value) || !Number.isInteger(Number(visitors.value))) {
    setErrorFor(visitors, 'Некорректное количество посетителей. Должно быть положительным целым числом');
  }
}

function validateEmail() {
  // Проверяем, что поле заполнено
  if (email.value === '') {
    setErrorFor(email, 'Введите E-mail для связи');
  } else {
    setSuccessFor(email);
  }
  // Проверяем, что E-mail валидный
  if (!isEmail(email.value)) {
    setErrorFor(email, 'Некорректный E-mail');
  }
}

function validateDivision() {
  // Проверяем, что поле заполнено
  if (division.value === '') {
    setErrorFor(division, 'Выберите рубрику каталога');
  } else {
    setSuccessFor(division);
  }
}

function validateVotes() {
  // Нет необходимости валидировать чекбокс, так как он может быть не выбран
  setSuccessFor(votes);
}

// Функции установки сообщений об ошибках и успешной валидации
function setErrorFor(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.innerText = message;
  errorSpan.style.display = 'inline';
  input.classList.add('error');
}

function setSuccessFor(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.innerText = '';
  errorSpan.style.display = 'none';
  input.classList.remove('error');
}

// Функция проверки валидности E-mail
function isEmail(email) {
  return /^[^s@]+@[^s@]+.[^s@]+$/.test(email);
}

// Обработчик события отправки формы
form.addEventListener('submit', (e) => {
  // Проверяем каждое поле на валидность
  validateDevelopers();
  validateSitename();
  validateSiteurl();
  validateDate();
  validateVisitors();
  validateEmail();
  validateDivision();
  validateVotes();

  // Если есть хотя бы одно поле с ошибкой, отменяем отправку формы
  if (form.querySelectorAll('.error').length > 0) {
    e.preventDefault();

    // Перемещаем фокус на первое поле с ошибкой и скроллируем до него
    const firstError = form.querySelector('.error');
    firstError.focus();
    const firstErrorRect = firstError.getBoundingClientRect();
    window.scrollTo({
      top: firstErrorRect.top - 50,
      behavior: 'smooth'
    });
  }
});