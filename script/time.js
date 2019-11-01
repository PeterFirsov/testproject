var buttonForm = document.querySelector(".registration-button");
var formMain = document.querySelector(".popup");
var buttonClose = document.querySelector(".registration-form__close");
var buttonRegistration = document.querySelector('.registration-form__button');


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

function CustomValidation() {
  this.invalidities = [];
}

CustomValidation.prototype = {
  addInvalidity: function(message) {
    this.invalidities.push(message);
  },
  getInvalidities: function() {
    return this.invalidities.join('. \n');
  },
  checkValidity: function(input) {

    if (input.value.length < 6 || input.value.length > 32) {
      this.addInvalidity('Пароль не должен быть меньше 6 символов');

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

    if (input.value.match(/(?=.*\d)/g)) {
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

    if (input.value.match(/(?=.*[A-Z])(?=.*[a-z]).*/g)) {
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

    var form = document.forms.registr;
    var passwordInput = form.elements.password;
    var nicInput = form.elements.nic;
    var mailInput = form.elements.mail;

    var errorMessege = document.querySelector('.registration-form__check-nic');


    if (input.value.match(/(?=^.{6,32}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/g)) {
      passwordInput.classList.remove('registration-form__pole--invalid');
    } else {
      passwordInput.classList.add('registration-form__pole--invalid');
    }

    if (input.value != 0) {
      if (input.value === nicInput.value || input.value === mailInput.value) {
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
  }
};


var passwordInput = document.getElementById('parole');

passwordInput.CustomValidation = new CustomValidation();

passwordInput.addEventListener('keyup', function() {

  passwordInput.CustomValidation.checkValidity(this);

  if (passwordInput.value != 0 && passwordRepeat.value != 0) {
    checkPassword();
  }
})

var form = document.forms.registr;
var passwordRepeat = document.getElementById('repeat');
var mailInput = document.getElementById('your-mail');
var nameInput = document.getElementById('your-name');
var errorMessege = document.querySelector('.registration-form__check-fail');

var checkName = function () {
  if (nameInput.value.match(/[A-Za-z]+[0-9a-zA-Z\;\_]{3,40}/g) || nameInput.value == 0) {
    nameInput.classList.remove('registration-form__pole--invalid');
  } else {
    nameInput.classList.add('registration-form__pole--invalid');
  }
};

nameInput.addEventListener('keyup', function() {
  checkName();
});

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

passwordRepeat.addEventListener('keyup', function() {
  checkPassword();
});

var checkMail = function () {
  if (mailInput.validity.valid || mailInput.value == 0) {
    mailInput.classList.remove('registration-form__pole--invalid');
  } else {
    mailInput.classList.add('registration-form__pole--invalid');
  }
};

mailInput.addEventListener('keyup', function() {
  checkMail();
});

form.addEventListener('change', function() {
  checkMail();
  checkName();
  checkPassword();
});

