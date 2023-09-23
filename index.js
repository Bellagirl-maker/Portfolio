function ReadElement(selector) {
  return document.querySelector(selector);
}
const emailer = ReadElement('#email');
const validator = ReadElement('.validator');
const submitbtn = ReadElement('#btn');
const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const closeNav = ReadElement('.close-button');
const choose = ReadElement('.mobile-nav');
const viewModal1 = ReadElement('.view-card-1');
const viewModal2 = ReadElement('.view-card-2');
const viewModal3 = ReadElement('.view-card-3');
const viewModal4 = ReadElement('.view-card-4');
const cardModal = ReadElement('.modal-section');
const resumeButton = ReadElement('.resumebtn');
const toggleArrows = Array.from(document.querySelectorAll('.toggle-arrow'));
function Add() {
  nav.classList.add('nav-toggle');
  document.body.classList.add('stop-scrolling');
}
function AddMenu(selected) {
  return selected.addEventListener('click', Add);
}
function Remove() {
  nav.classList.remove('nav-toggle');
  document.body.classList.remove('stop-scrolling');
}
function RemoveMenu(selected) {
  return selected.addEventListener('click', Remove);
}
AddMenu(menu);
RemoveMenu(closeNav);
RemoveMenu(choose);
const cardDetails = [
  {
    title: 'Musical Concert Website',
    name: 'Musical Concert',
    technology: 'Front End Dev',
    year: '2023',
    imageUrl: './images/music.PNG',
    description: "Global Musical Concert is a website about a musical concert held across the globe. It announces an upcoming musical concert and Musicians who will be peforming at the concert ",
    languages: ['html', 'css', 'javascript', 'github'],
    liveLink: 'https://bellagirl-maker.github.io/First-capstone-project/',
    sourceCode: 'https://github.com/Bellagirl-maker/First-capstone-project',
  }, {
    title: 'Budget App',
    name: 'Budget App',
    technology: 'Back End Dev',
    year: '2023',
    imageUrl: './images/budgetapp1.PNG',
    description: "Budget App is a Rails-built fully functional app that allows the user \nto register and log in,\nintroduce new transactions associated with a category,\nsee the money spent on each category",
    languages: ['ruby', 'rails', 'css', 'github'],
    liveLink: 'https://budget-app-r1qd.onrender.com/',
    sourceCode: 'https://github.com/Bellagirl-maker/budget_app',
  }, {
    title: 'Book Store',
    name: 'Book Store App',
    technology: 'Front End Dev',
    year: '2023',
    imageUrl: './images/bookstore.PNG',
    description: "Book store App is React and Redux app that allows a user to display a list of books, add a book and remove a selected book.",
    languages: ['react', 'redux', 'css', 'github'],
    liveLink: 'https://golden-horse-9c8110.netlify.app/',
    sourceCode: 'https://github.com/Bellagirl-maker/book-store',
  }, {
    title: 'Math Magicians',
    name: 'Math Magicians App',
    technology: 'Front End Dev',
    year: '2023',
    imageUrl: './images/math-magician.PNG',
    description: "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.",
    languages: ['React', 'css', 'github'],
    liveLink: 'https://math-magicians-app-6med.onrender.com/',
    sourceCode: 'https://github.com/Bellagirl-maker/math-magicians',
  },
];
function renderModal(number) {
  const card = cardDetails[number];
  const modalInstance = ` <div class=" card-modal">
      <div class="card-modal-head">
          <h1 class="card-title card-modal-head">${card.title}</h1>
          <span class="close-modal">&#10006;</span>
      </div>
      <div class="position card-desc">
         <h4 class="client-text">${card.name}</h4>
         <H5 class="role-text">&#x25cf; ${card.technology}</H5>
         <H5 class="year-text">&#x25cf; ${card.year}</H5>
      </div>
      <img class="card-modal-img" src=${card.imageUrl} alt="The Snapshoot-Portfolio image">
      <div class="card-modal-middle">
      <div class="card-modal-middle-group1"> <p class="card-info">
      ${card.description}
          </p>
          </div>
          <div class="card-modal-middle-group2">
              <div class="techs" id="techs">
                  ${card.languages.map((lang) => `<div class="tag-item" id="techs-item">${lang}</div>`).join('')}
                </div>
                <hr class="card-modal-hr">
                  <div class="card-modal-btn-grp">
                  <a href=${card.liveLink} target="_blank" id="btn-link" <button type="button" class="view-more card-modal-btn">See live <img class="btn-icon" src="./images/live.png" alt="icon img"></button></a>
                  <a href=${card.sourceCode} target="_blank" id="btn-link" <button type="button" class="view-more card-modal-btn">See Source <img class="btn-icon" src="./images/source.png" alt="icon img"></button></a>
                  </div>
                  </div> 
                  </div>
    </div>`;

  cardModal.innerHTML = modalInstance;
}
function Addwindow(selected, modalPart, opener, number) {
  return selected.addEventListener('click', () => {
    modalPart.classList.add(opener);
    modalPart.style.top = '0px';
    if (number) {
      renderModal(number - 1);
      document.body.classList.add('stop-scrolling');
    }
  });
}

function RemoveWindow(selected, modalPart, remover) {
  return selected.addEventListener('click', () => {
    modalPart.classList.remove(remover);
    document.body.classList.remove('stop-scrolling');
  });
}

Addwindow(menu, nav, 'nav-toggle');
Addwindow(viewModal1, cardModal, 'nav-toggle', 1);
Addwindow(viewModal2, cardModal, 'nav-toggle', 2);
Addwindow(viewModal3, cardModal, 'nav-toggle', 3);
Addwindow(viewModal4, cardModal, 'nav-toggle', 4);
RemoveWindow(cardModal, cardModal, 'nav-toggle');
RemoveWindow(closeNav, nav, 'nav-toggle');
RemoveWindow(nav, nav, 'nav-toggle');

RemoveWindow(nav, nav, 'nav-toggle');

function EmailValidation(e) {
  const email = emailer.value;
  let text;
  if (email === email.toLowerCase() && email !== '') {
    text = 'Email is inserted in lowercase as required';
    validator.innerHTML = text;
    validator.classList.add('validator-green');
    submitbtn.style.marginTop = '20px';
  } else {
    text = 'Email is required and has to be in lowercase';
    validator.innerHTML = text;
    validator.classList.remove('validator-green');
    validator.classList.add('validator-red');
    submitbtn.style.marginTop = '20px';
    e.preventDefault();
  }
}
const e = this;
submitbtn.addEventListener('click', () => EmailValidation(e));

resumeButton.addEventListener('click', function() {
  window.location.href = 'https://docs.google.com/document/d/1DlqT53liVnYZ-CKiOGUVNXCFN4ffxeb_1dK1KHIVDNg/edit?usp=sharing';
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleArrows = document.querySelectorAll(".lang");

  toggleArrows.forEach(function (dropdown) {
      const dropdownContent = dropdown.querySelector(".dropdown-content");

      dropdown.addEventListener("click", function () {
          if (dropdownContent.style.display === "block") {
              dropdownContent.style.display = "none";
          } else {
              dropdownContent.style.display = "block";
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const rightToggle = document.querySelectorAll(".frame-skill");

  rightToggle.forEach(function (dropdown) {
      const droprightContent = dropdown.querySelector(".skills");

      dropdown.addEventListener("click", function () {
          if (droprightContent.style.display === "block") {
              droprightContent.style.display = "none";
          } else {
              droprightContent.style.display = "block";
          }
      });
  });
});



 








