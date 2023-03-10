const posts = [
    {
        "id": '01',
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": '02',
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": '03',
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": '04',
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": '05',
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const postsList = document.querySelector('.posts-list');

let postsId = [];

for (let i = 0; i < posts.length; i++) {

    let authorImage;

    if (posts[i].author.image != null) {
        authorImage = `<img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">`;
    }
    else {
        let imageFallback = '';
        const authorNameSplitted = posts[i].author.name.split(' ');
        imageFallback += authorNameSplitted[0].charAt(0) + authorNameSplitted[1].charAt(0);
        authorImage = `<span class="image-fallback">${imageFallback}</span>`;
    }

    const post = document.createElement('div');
    post.classList.add('post');
    post.innerHTML = `<div class="post__header">
                            <div class="post-meta">                    
                                <div class="post-meta__icon">
                                    ${authorImage}                 
                                </div>
                                <div class="post-meta__data">
                                    <div class="post-meta__author">${posts[i].author.name}</div>
                                    <div class="post-meta__time">${dateConversion(posts[i].created)}</div>
                                </div>                    
                            </div>
                            </div>
                            <div class="post__text">${posts[i].content}</div>
                            <div class="post__image">
                            <img src="${posts[i].media}" alt="">
                            </div>
                            <div class="post__footer">
                            <div class="likes js-likes">
                                <div class="likes__cta">
                                    <a class="like-button js-like-button" href="#nogo" data-postid="1">
                                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                        <span class="like-button__label">Mi Piace</span>
                                    </a>
                                </div>
                                <div class="likes__counter">
                                    Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
                                </div>
                            </div> 
                        </div> `
    postsList.append(post);
};    

const likeButton = document.querySelectorAll('.like-button');
const likesCounterDom = document.querySelectorAll('.js-likes-counter');



for (let i = 0; i < likeButton.length; i++) {   
    
    let likeCounter = posts[i].likes;

    likeButton[i].addEventListener('click',
    function () {
        // se e' gia' presente il like lo rimuovo altrimenti lo aggiungo
        if (this.classList.contains('like-button--liked')) {

            this.classList.remove('like-button--liked');
            likeCounter--;
            
        }
        else {

            this.classList.add('like-button--liked');
            likeCounter++;
            postsId.push(posts[i].id);

        }   

        // stampo in pagina il numero aggiornato di like
        likesCounterDom[i].innerHTML = likeCounter;

    });  
    
}

// Funzione per formattare le date
function dateConversion(date) {

let usDate = date;
usDate = usDate.split('-');
let euroDate = usDate.reverse().join('/');
return euroDate;

}




