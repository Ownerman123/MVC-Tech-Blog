function editPost(id) {

    window.location = `/editpost/${id}`;

 }

 function viewPost(id) {
    window.location = `/post/${id}`
 }

 function deletePost(id) {
   const confirmed = confirm('are you sure you want to delete this post?');

   if(confirmed){

    fetch(`/api/blog/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete post');
        }
        return response.json();
      })
      .then(data => {
        // Handle successful API response
        console.log('deleted post:', data);
        alert('Post deleted succesfully');
        window.location.reload();
        // Optionally, redirect to another page or perform additional actions
      })
      .catch(error => {
        // Handle errors
        console.error('Error deleting post:', error);
        alert('Failed to delete post. Please try again.');
      })
      .finally(() => {
        // Re-enable form elements after API call completes
        
      });

   }

 }