import React from 'react';
import { type DiyGuide } from '../types';
import { Sparkles, ChevronRight } from 'lucide-react';
import { DIFFICULTY_COLORS } from '../utils/constants';

interface DiyCardProps {
  guide: DiyGuide;
}

export function DiyCard({ guide }: DiyCardProps) {
  const difficultyStyle = DIFFICULTY_COLORS[guide.difficulty];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={guide.image}
          alt={guide.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-white rounded-full text-sm font-medium text-indigo-600">
          {guide.category}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{guide.title}</h3>
          <span className={`px-2 py-1 rounded text-sm ${difficultyStyle.bg} ${difficultyStyle.text}`}>
            {guide.difficulty}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-indigo-600">
            <Sparkles className="h-4 w-4 mr-1" />
            <span>{guide.ingredients.length} ingredients</span>
          </div>
          <button className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View Recipe
            <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}