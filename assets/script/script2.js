const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email'); 
const password = document.getElementById('password');
 

form.addEventListener('submit', e => { 
  e.preventDefault();

  inputValidation();
}); 

function inputValidation() { 
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(usernameValue == '') { 
    setError(username, "Username is required!");
  } else { 
    setSuccess(username);
  }

  if (emailValue == '') { 
    setError(email, "Email is required!");
  } else if (!isValidEmail(emailValue)) { 
    setError(email, 'Email is invalid');
  } else {
    setSuccess(email);
  }

  if (passwordValue == '') { 
    setError(password, "Password is Required");
  } else { 
    setSuccess(password);
  }
}

function setError(element, message) { 
  const parentElement = element.parentElement;

  parentElement.querySelector('.error').innerText = message;

  parentElement.classList.remove('success');
  parentElement.classList.add('error');  
}

function setSuccess(element) { 
  const parentElement = element.parentElement;

  parentElement.querySelector('.error').innerText = '';

  parentElement.classList.remove('error');
  parentElement.classList.add('success');
}


const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  return email.match(re);
}