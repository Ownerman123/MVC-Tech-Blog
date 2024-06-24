const postform = document.querySelector("#postform");

postform.addEventListener('submit' , editPost);

function editPost(e){
    e.preventDefault();

    const formData = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
        user_id: document.getElementById('userid').value
      };
      console.log(formData);



      disableFormElements(true);
    
      fetch(`/api/blog/${formData.user_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create post');
        }
        return response.json();
      })
      .then(data => {
        // Handle successful API response
        console.log('posted:', data);
        alert('post Edited!');
        window.location = '/';
        //! load new page with new post 
        // Optionally, redirect to another page or perform additional actions
      })
      .catch(error => {
        // Handle errors
        console.error('Error Editing post :', error);
        alert('Failed to save post');
      })
      .finally(() => {
        // Re-enable form elements after API call completes
        disableFormElements(false);
      });


      function disableFormElements(disabled) {
        const formElements = postform.elements;
        for (let i = 0; i < formElements.length; i++) {
          formElements[i].disabled = disabled;
        } 
    }
}