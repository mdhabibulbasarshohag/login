const validityEmail = document.getElementById('email-validity');
const validityPassword = document.getElementById('password-validity');

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const validatePassword = password => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
};

const logButton = () => {
    validityEmail.textContent = '';
    validityPassword.textContent = '';

    const inputEmail = document.getElementById('input-email');
    const inputPassword = document.getElementById('input-password');
    const inputEmailValue = inputEmail.value;
    const inputPasswordValue = inputPassword.value;

    if (validateEmail(inputEmailValue) && validatePassword(inputPasswordValue)) {
        window.location = 'https://www.google.com/';
    }
    else if (validateEmail(inputEmailValue) && !validatePassword(inputPasswordValue)) {
        validityEmail.innerHTML = `
        <div style="background-color: rgba(0, 128, 0, 0.178);">
            <p class="text-center text-success">Your email is correct</p>
        </div>
        `;
        validityPassword.innerHTML = `
        <div style="background-color: rgba(255, 0, 0, 0.26)">
            <p class="text-center text-danger">Enter a password containing atleast 8 letters(both lowercase & uppercase), 1 number & a special case </p>
        </div>
        `;
    }
    else if (!validateEmail(inputEmailValue) && validatePassword(inputPasswordValue)) {
        validityEmail.innerHTML = `
        <div style="background-color: rgba(255, 0, 0, 0.26)">
            <p class="text-center text-danger">Your email is incorrect</p>
        </div>
        `;
        validityPassword.innerHTML = `
        <div style="background-color: rgba(0, 128, 0, 0.178);">
            <p class="text-center text-success">Your password is correct</p>
        </div>
        `;
    }
    else if (!validateEmail(inputEmailValue) && !validatePassword(inputPasswordValue)) {
        validityEmail.innerHTML = `
        <div style="background-color: rgba(255, 0, 0, 0.26)">
            <p class="text-center text-danger">Your email is incorrect</p>
        </div>
        `;
        validityPassword.innerHTML = `
        <div style="background-color: rgba(255, 0, 0, 0.26)">
            <p class="text-center text-danger">Enter a password containing atleast 8 letters(both lowercase & uppercase), 1 number & a special case </p>
        </div>
        `;
    }
};