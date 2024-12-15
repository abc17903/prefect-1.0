import React from 'react';
import { Heart, Clock, Star } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  image: string;
  time: string;
  rating: number;
  author: string;
  likes: number;
}

export function RecipeCard({ title, image, time, rating, author, likes }: RecipeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span>{time}</span>
          <div className="flex items-center ml-4">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600">By {author}</span>
          <span className="text-gray-500">{likes} likes</span>
        </div>
      </div>
    </div>
  );
}