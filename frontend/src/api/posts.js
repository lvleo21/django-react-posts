const baseURL = "http://127.0.0.1:8000/api/v1/posts/";

const createPost = (data) => {
    fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default createPost;
