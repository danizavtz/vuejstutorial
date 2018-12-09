(function() {
  'use strict';
  const express = require('express');
  const router = express.Router();
  
  const todoController = require('../controllers/todo.controller')


  router.post('/todos', todoController.createTodoItem)
  router.get('/todos', todoController.listTodos)
  router.get('/todos/:id', todoController.getTodoItemById)
  router.put('/todos/:id', todoController.updateTodoItem)
  router.delete('/todos/:id', todoController.deleteTodoItem)

  module.exports = router;
}());