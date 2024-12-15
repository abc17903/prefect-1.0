export interface Recipe {
  title: string;
  image: string;
  time: string;
  rating: number;
  author: string;
  likes: number;
}

export interface DiyGuide {
  title: string;
  image: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
  ingredients: string[];
}

export interface PetProfile {
  name: string;
  species: 'Dog' | 'Cat' | 'Other';
  age: number;
  weight: number;
  dietaryRestrictions?: string[];
}