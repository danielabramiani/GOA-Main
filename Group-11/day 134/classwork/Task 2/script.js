const signUpForm = document.getElementById('sign-up');
const signInForm = document.getElementById('sign-in');

const users = JSON.parse(localStorage.getItem('users')) || [];

const validateForm = (email) => {
    for(const user of users) {
        if(user.email === email) {
            return true;
        }
    }

    return false;
}

const SignUp = () => {
    const email = signUpForm.email.value;
    const password = signUpForm.pass.value;

    if(email === '' || password === '') {
        alert('Please fill out all fields!');
        return;
    } else if (validateForm(email)) {
        alert("The email address is already in use.");
        return;
    }
    alert("Sign up successful!");
    users.push({email, password})

    localStorage.setItem('users', JSON.stringify(users));
}

const SignIn = () => {
    const email = signInForm.email.value;
    const password = signInForm.pass.value;

    if(email === '' || password === '') {
        alert('Please fill out all fields!');
        return;
    }

    const getUsers = JSON.parse(localStorage.getItem('users'));

    for(const user of getUsers) {
        if(user.email === email && user.password === password) {
            alert("Login successful!");
            return;
        }
    }
    alert("Incorrect email or password!");
}

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    SignUp();
})

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    SignIn();
})