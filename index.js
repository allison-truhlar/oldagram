const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const bodyEl = document.getElementById("body-el")
let heartEl = []

function render() {
    
    heartEl=[]
    bodyEl.innerHTML=""
    
    for (let i=0; i<posts.length; i++){
        
        heartEl[i]= `heart${i}-el`
        
        bodyEl.innerHTML+=`<div class="container">
            
                <header>
                    <img src="images/logo.png" class="logo">
                    <img src="images/user-avatar.png" class="avatar">
                </header>
                
                <section class="post-author">
                    <img src=${posts[i].avatar} class="avatar">
                    <p><span class="accent-text">${posts[i].name}</span> <span class="location">${posts[i].location}</span></p>
                </section>
                
                <section>
                    <img class="post" src=${posts[i].post}>
                </section>
                
                <section>
                    <img src="images/icon-heart.png" class="icon" id=heart${i}-el onClick="addLikes(this.id)">
                    <img src="images/icon-comment.png" class="icon">
                    <img src="images/icon-dm.png" class="icon">
                    <p class="post-description"><span class="accent-text">${posts[i].likes} likes</span>
                    <p class="post-description"><span class="accent-text">${posts[i].username}</span> ${posts[i].comment}</p>
                </section>
                
            </div>`
    }
}

render()

function addLikes(clickedId){
    for(i=0; i<posts.length; i++){
        if(clickedId==heartEl[i]){
          posts[i].likes+=1
          render()
        }
    }
}
 





