import express from 'express';
import { createTodo, getTodos, updateTodo, deleteTodo } from '../controllers/todoController';
import { protect } from '../middleware/auth';

const router = express.Router();

router.use(protect);

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
