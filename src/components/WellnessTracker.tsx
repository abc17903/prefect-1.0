import React from 'react';
import { Activity, Droplets, Moon, Scale } from 'lucide-react';
import { useWellnessData } from '../hooks/useWellnessData';
import { formatDate } from '../utils/dateUtils';

export function WellnessTracker() {
  const data = useWellnessData();
  const today = new Date();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Daily Wellness Tracker</h2>
      <div className="text-sm text-gray-600 mb-6">
        {formatDate(today)}
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Activity className="h-5 w-5 text-blue-600 mr-2" />
            <span className="font-medium text-blue-900">Activity</span>
          </div>
          <div className="text-2xl font-bold text-blue-700">{data.activity.duration} min</div>
          <div className="text-sm text-blue-600">{data.activity.type}</div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Droplets className="h-5 w-5 text-green-600 mr-2" />
            <span className="font-medium text-green-900">Water Intake</span>
          </div>
          <div className="text-2xl font-bold text-green-700">{data.waterIntake.amount} ml</div>
          <div className="text-sm text-green-600">of {data.waterIntake.goal} ml goal</div>
        </div>
        
        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Moon className="h-5 w-5 text-purple-600 mr-2" />
            <span className="font-medium text-purple-900">Sleep</span>
          </div>
          <div className="text-2xl font-bold text-purple-700">{data.sleep.duration} hrs</div>
          <div className="text-sm text-purple-600">Quality: {data.sleep.quality}</div>
        </div>
        
        <div className="p-4 bg-orange-50 rounded-lg">
          <div className="flex items-center mb-2">
            <Scale className="h-5 w-5 text-orange-600 mr-2" />
            <span className="font-medium text-orange-900">Weight</span>
          </div>
          <div className="text-2xl font-bold text-orange-700">{data.weight.current} {data.weight.unit}</div>
          <div className="text-sm text-orange-600">Healthy range</div>
        </div>
      </div>
    </div>
  );
}