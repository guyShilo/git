// Declerations
let postSection = document.getElementById("postSection")
let usersData = []

// Function that creates DOM Elements;
function createNode(element) {
    return document.createElement(element)
}

// Function that appends DOM element to their parent;
function append(parent, el) {
    return parent.appendChild(el)
}

// Function that gets userID from the posts and userID from the users and checking if they are the same,
// than returns the name and post.
function getPostsByUsers(data, users) {
    let usersPosts = []
    data.map(post => {
        users.map(user => {
            if (post.userId === user.id) {
                usersPosts.push({ post: post, userName: user.username });
            }
        })
    })
    return usersPosts
}


// Function that builds the DOM elements.
function BuildPostsList(e) {
    let postTitle = createNode('h1');
    let userId = createNode('div')
    let postBody = createNode('div')
    let id = createNode('div')
    let userName = createNode('h5')
    postBody.innerHTML = `${e.post.body}`
    userId.innerHTML = `User ID is: ${e.post.userId}`
    id.innerHTML = `This post ID is: ${e.post.id}`
    postTitle.innerHTML = `${e.post.title}`
    userName.innerHTML = `posted by: ${e.userName}`
    let postByPost = document.createElement('div')
    append(postByPost, postTitle)
    postTitle.className += 'text-primary text-center p-5'
    append(postByPost, postBody)
    postBody.className += 'text-dark m-5'
    append(postByPost, userId)
    userId.className += 'text-primary'
    append(postByPost, id)
    id.className += 'text-primary'
    append(postByPost, userName)
    userName.className += 'text-primary text-center p-2 m-2 border border-primary'
    append(postSection, postByPost)
    postByPost.className = 'border border-primary m-5 p-5 shadow-lg animated slideInLeft'
}

// One function to rule them all;
function displaySite() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then(posts => {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((response) => response.json())
                .then(users => {
                    usersData = users;
                    getPostsByUsers(posts, usersData).map(e => {
                        BuildPostsList(e)
                    })
                })
        }
        )
        .catch(error => console.error(error))
}
displaySite()
