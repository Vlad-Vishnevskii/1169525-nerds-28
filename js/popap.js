var buttonWrite = document.querySelector(".btn-write");
var popupWrite = document.querySelector(".popap");
var popupClose = popupWrite.querySelector(".modal-close");
var popapForm = popupWrite.querySelector(".popap-form");
var userName = popupWrite.querySelector(".user-name");
var email = popupWrite.querySelector(".email-field");
var popapMessage = popupWrite.querySelector(".message");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

buttonWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("popap-show");

  if (storage) {
    userName.value = storage;
    email.value = localStorage.getItem("email");
    popapMessage.focus();
  }
  else {
    userName.focus();
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.remove("popap-show");
  popupWrite.classList.remove("popap-error");
});

popapForm.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !popapMessage.value) {
    evt.preventDefault();
    popupWrite.classList.remove("popap-error");
    popupWrite.offsetWidth = popupWrite.offsetWidth;
    popupWrite.classList.add("popap-error");
  }
  else {
    if (isStorageSupport) {
    localStorage.setItem("login", userName.value);
    localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupWrite.classList.contains("popap-show")) {
      evt.preventDefault();
      popupWrite.classList.remove("popap-show");
      popupWrite.classList.remove("popap-error");
    }
  }
});
