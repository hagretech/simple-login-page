let btn = document.getElementById('btn-login'),
    username = document.getElementById('username'),
    password = document.getElementById('password'),
    username_val = '',
    password_val = '';


//  Event listner for the login button

btn.addEventListener('click', function (e) {
    // Geting values form the inputs
    username_val = username.value
    password_val = password.value

    validator(username_val, password_val)
})


function validator(username_val, password_val) {
    // Checking if input is empity
    if (isEmpity(username_val)) {
        console.log('username can\'t be empity')

        // for the validator
        return false
    };
    if (isEmpity(password_val)) {
        console.log('password can\'t be empity')

        // for the validator
        return false
    };

    // checking for char length
    if (invalid_char_length(username_val)) {
        console.log('username must be between 8 and 25 character')

        // for the validator
        return false
    };
    if (invalid_char_length(password_val)) {
        console.log('password must be between 8 and 25 character')

        // for the validator
        return false
    };

    // checking for starting letter
    if (invalid_starting_char(username_val)) {
        console.log('username must starit with letter')

        // for the validator
        return false
    }

    // checking for invalid characters
    if (invalid_char(username_val)) {
        console.log('con conatin letters no and _ onley')

        // for the validator
        return false
    }
};

// function to check if it is empity
function isEmpity(val) {
    if (val.trim() === '') {
        return true
    } else {
        return false
    }
};


// function to check the length
function invalid_char_length(val) {
    if (8 < val.length && val.length < 25) {
        return false
    } else {
        return true
    }
}


// function to check it did not start with letter
function invalid_starting_char(val) {
    if (val[0].match('^[A-Za-z]') == null) {
        return true
    } else {
        return false
    }
}


// function to check if it conatin invalid characters
function invalid_char(val) {
    if (val.match('^[a-zA-z0-9_]+$') == null) {
        return true
    } else {
        return false
    }
}
