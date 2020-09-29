const request = require('supertest');
const postApi = require("../server");

// console.log("postapi",postApi)
describe('Post Endpoint', () => {
    it('should create post', async function () {
        const res = await request(postApi)
            .post('/api/create/post')
            .send({
                postId: 1234,
                name: 'testuser',
                title: 'test post'
            })
            .expect('Content-type', 'application/json; charset=utf-8')
        expect(res.statusCode).toEqual(201)
        // expect(res.body).toHaveProperty('post');
        // done();
        // expect(true).toBe(true)

    });

    it('should find one post', async () => {
        const postId = 1234;
        const res = await request(postApi)
            .get(`/api/post/one?post_id=${postId}`)
        expect(res.statusCode).toEqual(200);

    });

    it('should update post', async () => {
        const postId = 1234;
        const res = await request(postApi)
            .put(`/api/post/edit?post_id=${postId}`);
        expect(res.statusCode).toEqual(200)
    });
    it('should delete post', async () => {
        const postId = 1234;
        // const res = await request(postApi)
        const res = await request(postApi).delete(`/api/post/delete?post_id=${postId}`);
        expect(res.statusCode).toEqual(200)
    });
    afterAll(done => {
        postApi.close();
        done();
    });

});
