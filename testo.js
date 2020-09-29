// import supertest, { SuperTest } from 'supertest';
// import app from '../../../app';
// import { after, before, describe } from 'mocha';
// import { EmptyCollections } from '../../../util';
// import { createEvent } from '../../../_seeds/event/event.factory';
// import { EVENT_URL, TEST_TOKEN } from '../routes';
// import { BAD_REQUEST, CREATED, NOT_FOUND, OK } from '../../../../src/utils/codes';
// import { expect } from 'chai';
// import  mongoose from 'mongoose';
// let server: SuperTest<any>;
// let event: any;
// const ObjectId = mongoose.Types.ObjectId;
// // Parent block
// describe('Setup For Event test', () => {
//     before(async () => {
//         server = supertest(await app);
//         await EmptyCollections();
//         event = await createEvent();
//     });
//     after(async () => {
//         await EmptyCollections();
//     });
//     describe('EVENT Endpoint Test ' + EVENT_URL, () => {
//         it('Should test create event', async () => {
//             const response:any = await server.post(EVENT_URL)
//                 .send({ ...createEvent()})
//                 .set('x-access-token', TEST_TOKEN)
//                 .expect('Content-type', 'application/json; charset=utf-8')
//                 .expect(CREATED);
//             console.log('response:', response);
//             expect(response).instanceOf(Object);
//             expect(response.body).instanceof(Object);
//             expect(response.body._meta).instanceof(Object);
//             expect(response.body._meta).have.property('status_code');
//             expect(response.body._meta).have.property('success');
//             expect(response.body.data).instanceof(Object);
//             expect(response.body.data).have.property('_id');
//             expect(response.body.data).have.property('status');
//             expect(response.body.data).have.property('title');
//             expect(response.body.data).have.property('description');
//             expect(response.body.data).have.property('uuid');
//             expect(response.body.data.attendees).instanceof(Array);
//             expect(response.body.data.invitees).instanceof(Array);
//             expect(response.body.data.attachments).instanceof(Array);
//         });
//         it('Should error out for incomplete inputs', async () => {
//             let response = await server.post(EVENT_URL)
//                 .send({})
//                 .set('x-access-token', TEST_TOKEN)
//                 .set('Accept', 'application/json; charset=utf-8')
//                 .expect('Content-type', 'application/json; charset=utf-8')
//                 .expect(BAD_REQUEST);
//             expect(response).instanceof(Object);
//             expect(response.body).instanceof(Object);
//             expect(response.body).have.property('_meta');
//             expect(response.body._meta).instanceof(Object);
//             expect(response.body._meta).have.property('status_code');
//             expect(response.body._meta.status_code).instanceof(Boolean);
//             expect(response.body._meta).have.property('message');
//             expect(response.body._meta.message).instanceof(String);
//             expect(response.body._meta.messages).have.property('messages');
//             expect(response.body._meta.messages).instanceof(Array);
//         });
//         it('Should test GET All EVENTS ', async () => {
//             const response: any = await server.get(EVENT_URL)
//                 .set('x-access-token', TEST_TOKEN)
//                 .expect('Content-type', 'application/json; charset=utf-8')
//                 .expect(OK);
//             expect(response).instanceof(Object);
//             expect(response.body).instanceof(Object);
//             expect(response.body._meta).instanceof(Object);
//             expect(response.body._meta).have.property('status_code');
//             expect(response.body.data).instanceof(Array);
//         });
//         it(`Should return a single event if exist `, async () => {
//             const response: any = await server.get(`${EVENT_URL}/${event._id}`)
//                 .set('x-access-token', TEST_TOKEN)
//                 .expect('Content-type', 'application/json; charset=utf-8')
//                 .expect(OK);
//             expect(response).instanceof(Object);
//             expect(response.body).instanceof(Object);
//             expect(response.body._meta).instanceof(Object);
//             expect(response.body._meta).have.property('status_code');
//             expect(response.body.data).instanceof(Object);
//         });
//         it(`/GET ${EVENT_URL}/:id `, async () => {
//             const wrongObjectId = new ObjectId();
//             const response: any = await server.get(`${EVENT_URL}/${wrongObjectId}`)
//                 .set('x-access-token', TEST_TOKEN)
//                 .expect('Content-type', 'application/json; charset=utf-8')
//                 .expect(NOT_FOUND);
//             expect(response).instanceof(Object);
//             expect(response.body).instanceof(Object);
//             expect(response.body._meta).instanceof(Object);
//             expect(response.body._meta).have.property('status_code');
//             expect(response.body.data).instanceof(Object);
//         });
//         it('Should test UPDATE EVENTS ', async () => {
//             const response: any = await server.put(`${EVENT_URL}/${event._id}`)
//                 .send({title: 'changed title'})
//                 .set('x-access-token', TEST_TOKEN)
//                 .expect('Content-type', 'application/json; charset=utf-8')
//                 .expect(OK);
//             expect(response).instanceof(Object);
//             expect(response.body).instanceof(Object);
//             expect(response.body._meta).instanceof(Object);
//             expect(response.body._meta).have.property('status_code');
//             expect(response.body.data).instanceof(Array);
//         });
//         it('Should test DELETE EVENTS ', async () => {
//             const response: any = await server.delete(`${EVENT_URL}/${event._id}`)
//                 .send({...createEvent()})
//                 .set('x-access-token', TEST_TOKEN)
//                 .expect('Content-type', 'application/json; charset=utf-8')
//                 .expect(OK);
//             expect(response).instanceof(Object);
//             expect(response.body).instanceof(Object);
//             expect(response.body).have.property('_meta');
//             expect(response.body._meta).instanceof(Object);
//             expect(response.body._meta).have.property('status_code');
//             expect(response.body.data).instanceof(Object);
//         });
//     })
// });