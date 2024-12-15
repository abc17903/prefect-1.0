import { useState, useEffect } from 'react';

interface WellnessData {
  activity: {
    duration: number;
    type: string;
  };
  waterIntake: {
    amount: number;
    goal: number;
  };
  sleep: {
    duration: number;
    quality: string;
  };
  weight: {
    current: number;
    unit: string;
  };
}

export function useWellnessData() {
  const [data, setData] = useState<WellnessData>({
    activity: {
      duration: 45,
      type: 'Daily walk & play'
    },
    waterIntake: {
      amount: 800,
      goal: 1000
    },
    sleep: {
      duration: 8.5,
      quality: 'Good'
    },
    weight: {
      current: 12.5,
      unit: 'kg'
    }
  });

  // In a real app, we would fetch this data from an API
  useEffect(() => {
    // Simulated API call
    const fetchData = async () => {
      // Fetch wellness data
    };

    fetchData();
  }, []);

  return data;
}