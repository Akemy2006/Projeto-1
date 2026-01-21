// src/app/models/user.ts
export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  avatar?: string;
  preferences?: UserPreferences;
  createdAt?: Date;
  lastLogin?: Date;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  notifications: boolean;
  defaultView: 'projects' | 'rpg';
  rpgSystem?: 'dnd5e' | 'pathfinder' | 'custom';
}
