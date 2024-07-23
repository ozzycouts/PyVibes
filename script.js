document.addEventListener('DOMContentLoaded', () => {
    let likeCount = 0;
    let dislikeCount = 0;

    document.getElementById('likeButton').addEventListener('click', () => {
        likeCount++;
        document.getElementById('likeCount').textContent = likeCount;
    });

    document.getElementById('dislikeButton').addEventListener('click', () => {
        dislikeCount++;
        document.getElementById('dislikeCount').textContent = dislikeCount;
    });

    document.getElementById('commentForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const commentInput = document.getElementById('commentInput');
        const newComment = commentInput.value.trim();

        if (newComment) {
            const commentList = document.getElementById('commentsList');
            const newCommentElement = document.createElement('li');
            newCommentElement.textContent = newComment;
            commentList.appendChild(newCommentElement);
            commentInput.value = '';
        }
    });
});
