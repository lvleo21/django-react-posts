const baseURL = "http://127.0.0.1:8000/api/v1/posts/";

export const createPost = (data) => {
    fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getPosts = async (page) => {
    let response = await fetch(baseURL + `?page=${page}`);
    response = await response.json();
    return response;
}
