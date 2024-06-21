const loginform = document.querySelector("#loginform");

loginform.addEventListener('submit' , loginUser);

function loginUser(e){
    e.preventDefault();

    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
      };



      disableFormElements(true);
    
      fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to login');
        }
        return response.json();
      })
      .then(data => {
        // Handle successful API response
        console.log('logged in:', data);
        alert('User logged in successfully');
        window.location = '/';
        // Optionally, redirect to another page or perform additional actions
      })
      .catch(error => {
        // Handle errors
        console.error('Error logging in :', error);
        alert('Failed to log in. Please try again.');
      })
      .finally(() => {
        // Re-enable form elements after API call completes
        disableFormElements(false);
      });


      function disableFormElements(disabled) {
        const formElements = loginform.elements;
        for (let i = 0; i < formElements.length; i++) {
          formElements[i].disabled = disabled;
        } 
    }
}