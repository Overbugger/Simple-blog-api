import { Router, Request, Response } from 'express';
import { findUserById } from '../services/userService';
import { getPostsByUserId } from '../services/postService';

const router = Router();

router.get('/:id/posts', (req: Request, res: Response) => {
  const user = findUserById(req.params.id);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }
  
  const userPosts = getPostsByUserId(req.params.id);
  
  res.json({
    success: true,
    data: userPosts,
    count: userPosts.length
  });
});

export default router;