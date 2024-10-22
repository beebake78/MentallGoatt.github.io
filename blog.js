document.getElementById('blogCommentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const commentText = document.getElementById('blogCommentText').value;
    if (commentText) {
        const commentList = document.getElementById('blogCommentList');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p>${commentText}</p>`;
        commentList.appendChild(newComment);

        
        document.getElementById('blogCommentText').value = '';
    }
});