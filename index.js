const express = require('express');
const morgann = require("morgan");
const app = express();

app.use(express.json());
app.use(morgan('dev'));

// app.all('/user', (req, res, next) => {
//    console.log('por aqui paso');
//    next();
// });

app.get('/user', (req, res) => {
    res.json({
      id: '1',
      username: 'pablito',
      lastname: 'fuentez'
    });
});

app.post('/user/:id', (req, res) => {
   console.log(req.body);
   console.log(req.params);
   res.send('agregado ');
});

app.put('/user/:id', (req, res) => {
   console.log(req.body);
   res.send('User ${req.params.id} updated');
});

app.delete('/user/:id', (req, res) => {
   res.send('User ${req.params.id} deleted');
});

app.listen(5000, () => {
   console.log('Se escucha en el puerto 5000');
});