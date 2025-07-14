import { Post } from '../models/Post';
import { posts } from '../data/storage';
import { v4 as uuidv4 } from 'uuid';

export const findPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};

export const getAllPosts = (): Post[] => {
  return posts;
};

export const getPostsByUserId = (userId: string): Post[] => {
  return posts.filter(post => post.authorId === userId);
};

export const createPost = (postData: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Post => {
  const newPost: Post = {
    id: uuidv4(),
    ...postData,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  posts.push(newPost);
  return newPost;
};

export const updatePost = (id: string, postData: Partial<Post>): Post | null => {
  const postIndex = posts.findIndex(post => post.id === id);
  
  if (postIndex === -1) return null;
  
  posts[postIndex] = { 
    ...posts[postIndex], 
    ...postData, 
    updatedAt: new Date() 
  };
  return posts[postIndex];
};

export const deletePost = (id: string): boolean => {
  const postIndex = posts.findIndex(post => post.id === id);
  
  if (postIndex === -1) return false;
  
  posts.splice(postIndex, 1);
  return true;
};