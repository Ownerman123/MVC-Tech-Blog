const signupform = document.querySelector("#signupform");

signupform.addEventListener('submit' , createUser);

function createUser(e){
    e.preventDefault();

    const formData = {
        email: document.getElementById('email').value,
        name: document.getElementById('username').value,
        password: document.getElementById('password').value,
        repeatPassword: document.getElementById('repeat-password').value
      };

      if (formData.password !== formData.repeatPassword) {
        alert('Passwords do not match');
        return;
      }

      disableFormElements(true);
    
      fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create user');
        }
        return response.json();
      })
      .then(data => {
        // Handle successful API response
        console.log('User created:', data);
        alert('User created successfully');
        window.location = '/';
        // Optionally, redirect to another page or perform additional actions
      })
      .catch(error => {
        // Handle errors
        console.error('Error creating user:', error);
        alert('Failed to create user. Please try again.');
      })
      .finally(() => {
        // Re-enable form elements after API call completes
        disableFormElements(false);
      });


      function disableFormElements(disabled) {
        const formElements = signupform.elements;
        for (let i = 0; i < formElements.length; i++) {
          formElements[i].disabled = disabled;
        } 
    }
}