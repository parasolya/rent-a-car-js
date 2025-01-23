const filterItems = document.querySelectorAll('.cars-filter li');
const carItems = document.querySelectorAll('.car');
const carsContent = document.getElementById('cars-content');

filterItems.forEach((item) => {
  item.onclick = () => {
    filterItems.forEach((el) => el.classList.remove('active'));

    item.classList.add('active');

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
      if (
        filterText === 'все марки' ||
        car.querySelector('h4').textContent.toLowerCase().includes(filterText)
      ) {
        car.style.display = 'flex';
      } else {
        car.style.display = 'none';
      }
    });
    carsContent.scrollIntoView({ behavior: 'instant' });
  };
});

const formFields = [
  {
    element: document.getElementById('car'),
    regex: /.+/,
  },
  {
    element: document.getElementById('name'),
    regex: /^[А-Яа-яЁёІіЇїЄєA-Za-z\s]+$/,
  },
  {
    element: document.getElementById('phone'),
    regex: /^[\d\+\(\)\s-]+$/,
  },
];

document
  .querySelector('.order-form .button')
  .addEventListener('click', function () {
    let isValid = true;

    formFields.forEach((field) => {
      if (!field.regex.test(field.element.value.trim())) {
        field.element.style.border = '1px solid red';
        isValid = false;
      } else {
        field.element.style.border = '1px solid #ccc';
      }
    });

    if (isValid) {
      alert('Спасибо за заявку, ми скоро свяжимся с вами!');

      formFields.forEach((field) => {
        field.element.value = '';
      });
    }
  });
