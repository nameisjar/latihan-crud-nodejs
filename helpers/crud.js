const fs = require('fs');
const posts = require('../database/posts');
const PostModel = require('../models/post');

function create(title, body) {
    let newPost = new PostModel(posts.id++, title, body);
    posts.data.push(newPost);

    fs.writeFileSync('./database/posts.json', JSON.stringify(posts, null, 4));
}

function index() {
    let posts = JSON.parse(fs.readFileSync('./database/posts.json'));
    posts.data.forEach((post) => {
        console.log("nomor = " + post.id, ", title = " + post.title, ", konten = " + post.body);
    })
}
function show(id) {
    const postsData = JSON.parse(fs.readFileSync('./database/posts.json'));
    const post = postsData.data.find((p) => p.id === id);
    if (post) {
        console.log("nomor = " + post.id, ", title = " + post.title, ", konten = " + post.body);
    } else {
        console.log("Post dengan ID " + id + " tidak ditemukan.");
    }
}
function update(id, title, body) { }
function destroy(id) { }

module.exports = { create, index, show, update, destroy };