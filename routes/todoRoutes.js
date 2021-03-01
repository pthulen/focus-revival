const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');
const Todo = mongoose.model('todos');
module.exports = (app) => {
    app.get('/api/todos', async (req, res) => {
       // const todos = await Todo.find({ _user: req.user.id });

        try {
            const todos = await Todo.find({ _user: req.user.id });

            res.send(todos);
            
        } catch (err) {
            res.status(400).send(err);
        }
    });
    app.post('/api/todos', async (req,res) => {
        const { id, text, completed, type } = req.body; 
        
        const todo = new Todo({
            id,
            text,
            completed,
            type,
            _user: req.user.id,
        })

        try {
            await todo.save();
            
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.put('/api/todos', async (req, res) => {
        const currentId = req.body._id
        const todoCurrent = await Todo.findOne({ _id: currentId })
        todoCurrent.completed = true;
        try {
            await todoCurrent.save();
            
        } catch (err) {
            res.status(422).send(err);
        }
    })
    
  };