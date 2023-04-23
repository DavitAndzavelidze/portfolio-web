let nameError = document.querySelector(".name-error");
let phoneError = document.querySelector(".phone-error");
let emailError = document.querySelector(".email-error");
let subjectError = document.querySelector(".subject-error");
let submitError = document.querySelector(".submit-error");
let submitSuccess = document.querySelector(".submit-success");
let validateCheck = document.querySelector("#validateCheck");
let inputSuccess = document.querySelector(".input");
let userColor = document.querySelector(".user");
let phoneColor = document.querySelector(".phone");
let emailColor = document.querySelector(".email");

// -----------------Name Validation-----------------
const nameValidation = function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "სახელის ჩაწერა აუცილებელია";
    return false;
  }
  if (!name.match(/^[ა-ჰა-ჰ]+ [ა-ჰა-ჰ]+$/)) {
    nameError.innerHTML = "ჩაწერეთ სრულად ქართული ასოებით";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check checkmark"></i>';
  userColor.style.color = "#1e90ff";

  return true;
};

// -----------------Phone Validation-----------------
const phoneValidation = function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "მობილურის ნომერი აუცილებელია";
    return false;
  }
  if (phone.length !== 9) {
    phoneError.innerHTML = "მობილურის ნომერი უნდა იყოს 9 ციფრი";
    return false;
  }
  if (!phone.match(/^[0-9]{9}$/)) {
    phoneError.innerHTML = "მხოლოდ რიცხვები";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check checkmark"></i>';
  phoneColor.style.color = "#1e90ff";
  return true;
};

// -----------------Email Validation-----------------
const emailValidation = function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "მეილი აუცილებელია";
    return false;
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "მეილი არასწორია";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check checkmark"></i>';
  emailColor.style.color = "#1e90ff";
  return true;
};

// --------------- CheckBox validation ---------------
const checkCheckbox = function validateCheck() {
  let checkboxValidate = document.querySelector(".checkbox").checked;
  if (checkboxValidate === true) {
    return (checkboxValidate = true);
  } else {
    return false;
  }
};

// Check input if there are unfill fields appear message to fix

const checkValidate = validateCheck.addEventListener("click", function () {
  if (
    !nameValidation() ||
    !phoneValidation() ||
    !emailValidation() ||
    !checkCheckbox()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "გთხოვთ შეავსეთ სრულად";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  } else {
    submitSuccess.innerHTML = "წარმატებით გაიგზავნა";
    setTimeout(function () {
      submitSuccess.style.display = "none";
    }, 3000);
  }
});
