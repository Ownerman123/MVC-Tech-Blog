








function addComment() {
    const comment = document.getElementById('comment');
    const data = {user_id: user, blog_id: post, content: comment.value || "I think im funny and made an empty comment."};
    const jsonData = JSON.stringify(data)

if(comment.value)
    fetch('/api/comment',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: jsonData
    }).then(response => {
        if (!response.ok) {
          throw new Error('Failed to create post');
        }
        return response.json();
      })
      .then(data => {
        // Handle successful API response
        console.log('posted:', data);
        alert('post created!');
        window.location.reload();
        //! load new page with new post 
        // Optionally, redirect to another page or perform additional actions
      })
      .catch(error => {
        // Handle errors
        console.error('Error creating post :', error);
        alert('Failed to create post');
      })
   


}