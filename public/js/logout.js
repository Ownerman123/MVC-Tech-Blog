const loginform = document.querySelector("#logout");

loginform.addEventListener('click' , logoutUser);

function logoutUser(e){
    e.preventDefault();

      fetch('/api/user/logout', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
       
      })
      .then(() => {
        // Handle successful API response
        
        alert('User logged out successfully');
        window.location = '/';
        // Optionally, redirect to another page or perform additional actions
      })
      .catch(error => {
        // Handle errors
        console.error('Error logging out:', error);
        alert('Failed to log out. Please try again.');
      })
      .finally(() => {
        // Re-enable form elements after API call completes
        
      });

    }
