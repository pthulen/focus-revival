const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');
const Todo = mongoose.model('todos');
module.exports = (app) => {
    app.get('/api/todos', async (req, res) => {
        const todos = await Todo.find({ _user: req.user.id });

        try {
            res.send(todos);
            
        } catch (err) {
            res.status(418).send(err);
        }
    });
    app.post('/api/todos', async (req,res) => {
        const { id, text, completed } = req.body; 
        
        const todo = new Todo({
            id,
            text,
            completed,
            _user: req.user.id,
        })

        try {
            await todo.save();
            
        } catch (err) {
            res.status(422).send(err);
        }
    });
    
  };