const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Task = require('../models/Task');

// Add category
router.post('/', async (req, res) => {
  const category = new Category({ name: req.body.name });
  await category.save();
  res.json(category);
});

// Get all categories
router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// Delete category (with cascade delete)
router.delete('/:id', async (req, res) => {
  const categoryId = req.params.id;
  await Task.deleteMany({ category: categoryId });
  await Category.findByIdAndDelete(categoryId);
  res.json({ message: 'Deleted category and related tasks' });
});

module.exports = router;
