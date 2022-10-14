//Form
const postBtn = document.querySelector(`button`);
const postForm = document.querySelector(`#formForPost`)

postForm.addEventListener(`submit`, function(postSubmit) {
    postSubmit.preventDefault();
    // const usernameInput = document.querySelector(`#usernameInput`);
    // const postInput = document.querySelector(`#postInput`);
    const usernameInput = postForm.elements.username;
    const postInput = postForm.elements.new;
    addPost(usernameInput.value, postInput.value);
    usernameInput.value = "";
    postInput.value = "";

})

const addPost = (usernameInput, postInput) => {
    const newPost = document.createElement(`li`);
    const bTag = document.createElement(`b`);
    const posts = document.querySelector(`#posts`);
    bTag.append(usernameInput);
    newPost.append(bTag);
    newPost.append(`- ${postInput}`);
    posts.append(newPost);
}


//change, input
const iInput = document.querySelector(`input`);

//change - blur 일때만
input.addEventListener(`change`, function(e){
    console.log(iInput.value);
})

//input - 즉시 반환
input.addEventListener(`input`, function(e){
    console.log(iInput.value);
})

//stopPropagation();

//event Delegation .target , nodeName