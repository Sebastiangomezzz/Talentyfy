document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('form').addEventListener('submit', validateForm);
});

const validateForm = function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repPassword = document.getElementById('repPassword').value;
    const splitName = name.toLowerCase().split(' ');
    let surname = ''

    //test name
    let splitNameString = splitName.join('')
    const letterRange = new RegExp('^[A-Z]+$', 'i')

    
    if (!letterRange.test(splitNameString)) { 
        console.log('Your name and surname can only contain letters and special characters are not allowed.');
        return
    } else if(name.length === 0 || splitName.length < 2 || splitName.length > 3) {
        console.log('Please enter a name and at least one surname with a maximum of two surnames.');
        return
    } else {
         if (splitName.length > 2){
            name = splitName[0];
            surname = splitName[1] + ' ' + splitName[2];
        }else{
            name = splitName[0];
            surname = splitName[1];
        }
    }

    //test phone
    if (phone.length < 9 || phone.length > 9) {console.log('Please, provide a valid phone number, it must be 9 characters long.')
        return
    }


    //test email
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(mailFormat)) console.log("Invalid email") 


    //test passwords

    if ( password.length<6 || !password || !repPassword || password !== repPassword  ) {
        console.log('Please, provide a valid password, 6 characters minimum, or check they are the same')
    }
    
    //create a user object

    const user = {
        name:name,
        surname:surname,
        phone:phone,
        email:email,
        password:password
    }
    console.log(user)
}