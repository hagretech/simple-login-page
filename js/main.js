let btn = document.getElementById('btn-login'),
    username = document.getElementById('username'),
    password = document.getElementById('password'),
    message_box = document.getElementById('message'),
    username_val = '',
    password_val = '',
    message = '';


//  Event listner for the login button

btn.addEventListener('click', function (e) {
    // Geting values form the inputs
    username_val = username.value
    password_val = password.value


    validator(username_val, password_val)

    // adding class to message box
    if (validator) {
        message_box.className = "success"
    } else {
        message_box.className = "error"
    }
    message_box.innerHTML = message
})


function validator(username_val, password_val) {
    // Checking if input is empity
    if (isEmpity(username_val)) {
        message = 'username can\'t be empity'

        // for the validator
        return false
    };
    if (isEmpity(password_val)) {
        message = 'password can\'t be empity'

        // for the validator
        return false
    };

    // checking for char length
    if (invalid_char_length(username_val)) {
        message = 'username must be between 8 and 25 character'

        // for the validator
        return false
    };
    if (invalid_char_length(password_val)) {
        message = 'password must be between 8 and 25 character'

        // for the validator
        return false
    };

    // checking for starting letter
    if (invalid_starting_char(username_val)) {
        message = 'username must starit with letter'

        // for the validator
        return false
    }

    // checking for invalid characters
    if (invalid_char(username_val)) {
        message = 'username can conatin letters, numbers and \'_ \' only'

        // for the validator
        return false
    }
    message = 'success'

    return true
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
