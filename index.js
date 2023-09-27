const { create, index, show, update, destroy } = require('./helpers/crud');


async function main() {
    try {
        // test create post
        // let newPost = await create('test data1 1', 'test data 1');
        // console.log(newPost);

        // // test show all post
        let posts = await index();
        console.log(posts);

        // // test show detail post by id
        let post = await show(5);
        console.log(post);

        // // test update post by id
        // let updatedPost = await update(1, 'title baru dua');
        // console.log(updatedPost);

        // // test delete post by id
        // let deletedPost = await destroy(1);
        // console.log(deletedPost);
    } catch (err) {
        console.log(err);
    }
}
main();