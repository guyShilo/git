let mainDiv = document.getElementById("mainDiv")
let postSection = document.getElementById("postSection")
let post = document.getElementById("post")

function createNode(element) {
    return document.createElement(element)
}

function append(parent, el) {
    return parent.appendChild(el)
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(data => {
        let postsData = data;
        console.log(data)
        postsData.map(function (e) {
            let postTitle = createNode('h1');
            let userId = createNode('div')
            let postBody = createNode('div')
            let id = createNode('div')
            postBody.innerHTML = `${e.body}</br>`
            userId.innerHTML = `User ID is: ${e.userId}</br>`
            id.innerHTML = `This post ID is: ${e.id}</br>`
            postTitle.innerHTML = `${e.title}`
            function eachDiv(){
            let postByPost = document.createElement('div')
                append(postByPost, postTitle)
                postTitle.className += 'text-primary text-center p-5' 
                append(postByPost, postBody)
                postBody.className += 'text-danger m-5'
                append(postByPost, userId)
                userId.className += 'text-primary'
                append(postByPost, id)
                id.className += 'text-primary'
                append(postSection, postByPost)
                postByPost.className = 'border border-primary m-5 p-5 shadow-lg animated slideInLeft'
            }
            eachDiv()
        })
    }
    )
