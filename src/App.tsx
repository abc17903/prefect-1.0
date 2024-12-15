import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RecipeCard } from './components/RecipeCard';
import { DiyCard } from './components/DiyCard';
import { WellnessTracker } from './components/WellnessTracker';
import { FilterBar } from './components/FilterBar';
import { diyGuides } from './data/diyGuides';
import { type Recipe } from './types';

const featuredRecipes: Recipe[] = [
  {
    title: "Homemade Salmon & Sweet Potato Dog Food",
    image: "https://images.unsplash.com/photo-1548946526-f69e2424cf45?auto=format&fit=crop&q=80&w=1600",
    time: "45 mins",
    rating: 4.8,
    author: "Dr. Sarah Wilson",
    likes: 342
  },
  {
    title: "Grain-Free Turkey & Vegetable Mix",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239cc?auto=format&fit=crop&q=80&w=1600",
    time: "30 mins",
    rating: 4.6,
    author: "Chef Mike Peters",
    likes: 289
  },
  {
    title: "Fresh Chicken & Rice Bowl",
    image: "https://images.unsplash.com/photo-1548946522-4a73412d9b37?auto=format&fit=crop&q=80&w=1600",
    time: "35 mins",
    rating: 4.9,
    author: "Pet Nutritionist Amy",
    likes: 456
  }
];

const recipeCategories = ['Dog Food', 'Cat Food', 'Treats', 'Special Diet'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-[#e4e2dd]">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Featured Recipes</h2>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                  View All
                </button>
              </div>
              <FilterBar
                categories={recipeCategories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredRecipes.map((recipe, index) => (
                <RecipeCard key={index} {...recipe} />
              ))}
            </div>

            <div className="mt-12 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">DIY Pet Care Supplies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {diyGuides.map((guide, index) => (
                  <DiyCard key={index} guide={guide} />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <WellnessTracker />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;