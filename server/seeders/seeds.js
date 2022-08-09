const faker = require('faker');

const db = require('../config/connection');
const { Message, User } = require('../models');

db.once('open', async() => {
    await User.deletemany({});
    await Message.deletemany({});

    // create user data
    const userData = [];

    for (let i = 0; i < 25; i += 1) {
        const email = faker.internet.email();
        const password = faker.internet.password();

        userData.push({ email, password });
    }

    await User.collection.insertMany(userData);

    const messageData = [];

    for (let i = 0; i < 25; i += 1) {
        const name = faker.name.name();
        const email = faker.internet.email();
        const message = faker.lorem.words(Math.round(Math.random() * 20) + 1);

        messageData.push({ name, email, message });
    }

    await Message.collection.insertMany(messageData);

    console.log('All Done!');
    process.exit(0);
});