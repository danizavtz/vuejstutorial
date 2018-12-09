(function() {
  'use strict';
  const Todo = require('../../models/Todo.js')
  
  exports.createTodoItem = (req, res) => {
    const todo = new Todo(req.body);
    todo.save().then(todo => {
        res.status(200).json({ 'message': 'Todo successfully added ' });
      })
      .catch(err => {
        res.status(400).send("Error when saving to database");
      });
  }

  exports.listTodos = (req, res) => {
    Todo.find((err, todos) => {
      if (err) {
        console.log(err);
      } else {
        res.json(todos);
      }
    });
  }

  exports.getTodoItemById = (req, res) => {
    var id = req.params.id;
    Todo.findById(id, (err, todo) => {
      res.json(todo);
    });
  }

  exports.updateTodoItem = (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
      if (!todo)
        return next(new Error('Error getting the todo!'));
      else {
        todo.name = req.body.name;
        todo.save().then(todo => {
            res.json('Todo updated successfully');
          })
          .catch(err => {
            res.status(400).send("Error when updating the todo");
          });
      }
    });
  }

  exports.deleteTodoItem = (req, res) => {
    Todo.findByIdAndRemove({ _id: req.params.id }, (err, todo) => {
      if (err) res.json(err);
      else res.json('Todo successfully removed');
    });
  }
}());