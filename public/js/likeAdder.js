let hasliked = false
const user = document.getElementById('userid').value;
const post = document.getElementById('postid').value;
const liketext = document.getElementById('likes')

const data = {user_id: user, post_id: post};
const jsonData = JSON.stringify(data);


function addLike() {
liketext.innerText++;
if(!hasliked){

    fetch('/api/blog/like',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
          },
        body: jsonData
    })
    hasliked = true;
}

}