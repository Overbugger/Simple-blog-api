import { User } from '../models/User';
import { Post } from '../models/Post'
import { Comment } from '../models/Comment';
import { v4 as uuidv4 } from 'uuid';

export let users: User[] = [];
export let posts: Post[] = [];
export let comments: Comment[] = [];

export const initializeData = () => {
  const user1: User = {
    id: uuidv4(),
    username: 'john_doe',
    email: 'john@example.com',
    createdAt: new Date()
  };
  
  const user2: User = {
    id: uuidv4(),
    username: 'jane_smith',
    email: 'jane@example.com',
    createdAt: new Date()
  };
  
  users.push(user1, user2);
  
  const post1: Post = {
    id: uuidv4(),
    title: 'Getting Started with TypeScript',
    content: 'TypeScript is a powerful superset of JavaScript...',
    authorId: user1.id,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  const post2: Post = {
    id: uuidv4(),
    title: 'Building RESTful APIs',
    content: 'REST APIs are fundamental in modern web development...',
    authorId: user2.id,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  posts.push(post1, post2);
  
  const comment1: Comment = {
    id: uuidv4(),
    content: 'Great introduction to TypeScript!',
    postId: post1.id,
    authorId: user2.id,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  comments.push(comment1);
};