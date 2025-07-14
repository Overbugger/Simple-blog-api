import { Router, Request, Response } from 'express';
import { 
  getAllPosts, 
  findPostById, 
  createPost, 
  updatePost, 
  deletePost 
} from '../services/postService';
import { findUserById } from '../services/userService';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const allPosts = getAllPosts();
  const postsWithAuthors = allPosts.map(post => {
    const author = findUserById(post.authorId);
    return {
      ...post,
      author: author ? { id: author.id, username: author.username } : null
    };
  });
  
  res.json({
    success: true,
    data: postsWithAuthors,
    count: postsWithAuthors.length
  });
});

router.get('/:id', (req: Request, res: Response) => {
  const post = findPostById(req.params.id);
  
  if (!post) {
    return res.status(404).json({
      success: false,
      message: 'Post not found'
    });
  }
  
  const author = findUserById(post.authorId);
  
  res.json({
    success: true,
    data: {
      ...post,
      author: author ? { id: author.id, username: author.username } : null
    }
  });
});

router.post('/', (req: Request, res: Response) => {
  const { title, content, authorId } = req.body;
  
  if (!title || !content || !authorId) {
    return res.status(400).json({
      success: false,
      message: 'Title, content, and authorId are required'
    });
  }
  
  const author = findUserById(authorId);
  if (!author) {
    return res.status(404).json({
      success: false,
      message: 'Author not found'
    });
  }
  
  const newPost = createPost({ title, content, authorId });
  
  res.status(201).json({
    success: true,
    data: newPost
  });
});

// PUT /api/posts/:id - Update post
router.put('/:id', (req: Request, res: Response) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: 'Title and content are required'
    });
  }
  
  const updatedPost = updatePost(req.params.id, { title, content });
  
  if (!updatedPost) {
    return res.status(404).json({
      success: false,
      message: 'Post not found'
    });
  }
  
  res.json({
    success: true,
    data: updatedPost
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const deleted = deletePost(req.params.id);
  
  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: 'Post not found'
    });
  }
  
  res.json({
    success: true,
    message: 'Post deleted successfully'
  });
});

export default router;