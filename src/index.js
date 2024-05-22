import express from 'express';

const app = express();

app.use((reg, res, next) => {
reg.someId = Math.random();
next();
});

app.get('/', (reg, res, next) => {
    res.send('hello word');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


