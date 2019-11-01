var buttonForm = document.querySelector(".registration-button");
var formMain = document.querySelector(".popup");
var buttonClose = document.querySelector(".registration-form__close");
var buttonRegistration = document.querySelector('.registration-form__button');
var passwordInput = document.getElementById('parole');
var passwordRepeat = document.getElementById('repeat');
var errorMessege = document.querySelector('.registration-form__check-fail');
var form = document.forms.registr;
var nicInput = form.elements.nic;
var mailInput = form.elements.mail;
var checkBox = document.querySelector('.registration-form__checkbox');

var isStorageSupport = true;
var storage = "";

try {
storage = localStorage.getItem("name");
} catch (err) {
isStorageSupport = false;
}

buttonForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  formMain.classList.add("popup--show");
  });

buttonClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formMain.classList.remove("popup--show");
  });

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
  if (formMain.classList.contains("popup--show")) {
  evt.preventDefault();
  formMain.classList.remove("popup--show");
  }
}
});

var checkMail = function () {
  if (mailInput.validity.valid || mailInput.value == 0) {
    mailInput.classList.remove('registration-form__pole--invalid');
  } else {
    mailInput.classList.add('registration-form__pole--invalid');
  }
};

var checkName = function () {
  if (nicInput.value.match(/[A-Za-z]+[0-9a-zA-Z\;\_]{3,40}/g) || nicInput.value == 0) {
    nicInput.classList.remove('registration-form__pole--invalid');
  } else {
    nicInput.classList.add('registration-form__pole--invalid');
  }
};

var checkValidity = function () {
  var passwordInput = document.getElementById('parole');
  if (passwordInput.value.length < 6 || passwordInput.value.length > 32) {
    var element = document.querySelector('.registration-form__check-simbol');
    var elementSign = document.querySelector('.registration-form__check-simbol .registration-form__sign');

    if (element.classList.contains("registration-form__check--good")) {
      element.classList.add('registration-form__check--bad');
      element.classList.remove('registration-form__check--good');
      elementSign.classList.add('registration-form__sign--bad');
      elementSign.classList.remove('registration-form__sign--good');
    }
  } else {
    var element = document.querySelector('.registration-form__check-simbol');
    var elementSign = document.querySelector('.registration-form__check-simbol .registration-form__sign');

    element.classList.remove('registration-form__check--bad');
    element.classList.add('registration-form__check--good');
    elementSign.classList.remove('registration-form__sign--bad');
    elementSign.classList.add('registration-form__sign--good');
  }

  if (passwordInput.value.match(/(?=.*\d)/g)) {
    var elementNumber = document.querySelector('.registration-form__check-number');
    var elementNumberSign = document.querySelector('.registration-form__check-number .registration-form__sign');

    elementNumber.classList.remove('registration-form__check--bad');
    elementNumber.classList.add('registration-form__check--good');
    elementNumberSign.classList.remove('registration-form__sign--bad');
    elementNumberSign.classList.add('registration-form__sign--good');

  } else {
    var elementNumber = document.querySelector('.registration-form__check-number');
    var elementNumberSign = document.querySelector('.registration-form__check-number .registration-form__sign');
    if (elementNumber.classList.contains("registration-form__check--good")) {
      elementNumber.classList.add('registration-form__check--bad');
      elementNumber.classList.remove('registration-form__check--good');
      elementNumberSign.classList.add('registration-form__sign--bad');
      elementNumberSign.classList.remove('registration-form__sign--good');
    }
  }

  if (passwordInput.value.match(/(?=.*[A-Z])(?=.*[a-z]).*/g)) {
    var elementLetter = document.querySelector('.registration-form__check-letter');
    var elementLetterSign = document.querySelector('.registration-form__check-letter .registration-form__sign');

    elementLetter.classList.remove('registration-form__check--bad');
    elementLetter.classList.add('registration-form__check--good');
    elementLetterSign.classList.remove('registration-form__sign--bad');
    elementLetterSign.classList.add('registration-form__sign--good');

  } else {
    var elementLetter = document.querySelector('.registration-form__check-letter');
    var elementLetterSign = document.querySelector('.registration-form__check-letter .registration-form__sign');

    if (elementLetter.classList.contains("registration-form__check--good")) {
      elementLetter.classList.add('registration-form__check--bad');
      elementLetter.classList.remove('registration-form__check--good');
      elementLetterSign.classList.add('registration-form__sign--bad');
      elementLetterSign.classList.remove('registration-form__sign--good');
    }
  }

  var errorMessege = document.querySelector('.registration-form__check-nic');

  if (passwordInput.value.match(/(?=^.{6,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/g)) {
    passwordInput.classList.remove('registration-form__pole--invalid');
  } else {
    passwordInput.classList.add('registration-form__pole--invalid');
  }

  if (passwordInput.value != 0) {
    if (passwordInput.value === nicInput.value || passwordInput.value === mailInput.value) {
    errorMessege.classList.add('registration-form__check-nic--show');
    passwordInput.classList.add('registration-form__pole--invalid');
    } else {
      errorMessege.classList.remove('registration-form__check-nic--show');
      passwordInput.classList.remove('registration-form__pole--invalid');
    }
  } else {
    errorMessege.classList.remove('registration-form__check-nic--show');
    passwordInput.classList.remove('registration-form__pole--invalid');
  }
};

var checkPassword = function () {
  if (passwordRepeat.value != 0) {
    if (passwordRepeat.value !== passwordInput.value) {
      errorMessege.classList.add('registration-form__check-fail--show');
      passwordRepeat.classList.add('registration-form__pole--invalid');
    } else {
      errorMessege.classList.remove('registration-form__check-fail--show');
      passwordRepeat.classList.remove('registration-form__pole--invalid');
    }
  } else {
    errorMessege.classList.remove('registration-form__check-fail--show');
    passwordRepeat.classList.remove('registration-form__pole--invalid');
  }
};

form.addEventListener('keyup', function() {
  checkMail();
  checkName();
  checkValidity();
  checkPassword();
  if (mailInput.validity.valid && nicInput.value.match(/[A-Za-z]+[0-9a-zA-Z\;\_]{3,40}/g)
    && passwordInput.value.match(/(?=^.{6,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/g)
    && passwordRepeat.value === passwordInput.value && checkBox.validity.valid) {
    buttonRegistration.removeAttribute('disabled');
  } else {
    buttonRegistration.setAttribute('disabled', 'disabled');
  }
});
