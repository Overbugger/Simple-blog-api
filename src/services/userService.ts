import { User } from '../models/User';
import { users } from '../data/storage';

export const findUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};

export const getAllUsers = (): User[] => {
  return users;
};

export const createUser = (userData: Omit<User, 'id' | 'createdAt'>): User => {
  const newUser: User = {
    id: require('uuid').v4(),
    ...userData,
    createdAt: new Date()
  };
  
  users.push(newUser);
  return newUser;
};

export const updateUser = (id: string, userData: Partial<User>): User | null => {
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) return null;
  
  users[userIndex] = { ...users[userIndex], ...userData };
  return users[userIndex];
};

export const deleteUser = (id: string): boolean => {
  const userIndex = users.findIndex(user => user.id === id);
  
  if (userIndex === -1) return false;
  
  users.splice(userIndex, 1);
  return true;
};