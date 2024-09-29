document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('username').addEventListener('input', validateUsername);
  document.getElementById('email').addEventListener('input', validateEmail);
  document.getElementById('password').addEventListener('input', validatePassword);
  document.getElementById('confirmPassword').addEventListener('input', validateConfirmPassword);
  document.getElementById('firstName').addEventListener('input', validateFirstName);
  document.getElementById('lastName').addEventListener('input', validateLastName);
  document.getElementById('mobileNumber').addEventListener('input', validateMobileNumber);
  document.getElementById('dob').addEventListener('input', validateDOB);
  document.getElementById('gender').addEventListener('change', validateGender);
  document.getElementById('address').addEventListener('input', validateAddress);

  function validateUsername() {
    const username = document.getElementById('username');
    const pattern = /^[a-zA-Z0-9]{1,10}$/;
    validateField(username, pattern, 'Username must be alphanumeric and 10 characters or fewer.');
  }

  function validateEmail() {
    const email = document.getElementById('email');
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    validateField(email, pattern, 'Please enter a valid email address.');
  }

  function validatePassword() {
    const password = document.getElementById('password');
    if (password.value.length > 10) {
      setError(password, 'Password must be less than or equal to 10 characters long.');
    } else {
      clearError(password);
    }
  }

  function validateConfirmPassword() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== password) {
      setError(confirmPassword, 'Passwords do not match.');
    } else {
      clearError(confirmPassword);
    }
  }

  function validateFirstName() {
    const firstName = document.getElementById('firstName');
    if (firstName.value.length > 10) {
      setError(firstName, 'First Name must be less than or equal to 10 characters.');
    } else {
      clearError(firstName);
    }
  }

  function validateLastName() {
    const lastName = document.getElementById('lastName');
    if (lastName.value.length > 10) {
      setError(lastName, 'Last Name must be less than or equal to 10 characters.');
    } else {
      clearError(lastName);
    }
  }

  function validateMobileNumber() {
    const mobileNumber = document.getElementById('mobileNumber');
    const pattern = /^[0-9]{10}$/;
    validateField(mobileNumber, pattern, 'Mobile number should be exactly 10 digits.');
  }

  function validateDOB() {
    const dob = document.getElementById('dob');
    if (dob.value === '') {
      setError(dob, 'Please select a valid date of birth.');
    } else {
      clearError(dob);
    }
  }

  function validateGender() {
    const gender = document.getElementById('gender');
    if (gender.value === '') {
      setError(gender, 'Please select your gender.');
    } else {
      clearError(gender);
    }
  }

  function validateAddress() {
    const address = document.getElementById('address');
    if (address.value.trim() === '') {
      setError(address, 'Please enter a valid address.');
    } else {
      clearError(address);
    }
  }

  function validateField(field, pattern, errorMessage) {
    if (!pattern.test(field.value)) {
      setError(field, errorMessage);
    } else {
      clearError(field);
    }
  }

  function setError(field, message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    field.style.borderColor = 'red';
  }

  function clearError(field) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';
    field.style.borderColor = '';
  }

  window.validateRegistrationForm = function () {
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    validateFirstName();
    validateLastName();
    validateMobileNumber();
    validateDOB();
    validateGender();
    validateAddress();

    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage.style.display === 'block') {
      return false;
    }
    return true;
  };
});
function togglePasswordVisibility() {
  const passwordField = document.getElementById('password');
  const confirmPasswordField = document.getElementById('confirmPassword');
  const showPassword = document.getElementById('showPassword');

  if (showPassword.checked) {
    passwordField.type = 'text';
    confirmPasswordField.type = 'text';
  } else {
    passwordField.type = 'password';
    confirmPasswordField.type = 'password';
  }
}

