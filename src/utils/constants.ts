export const WELLNESS_GOALS = {
  WATER_INTAKE: 1000, // ml
  ACTIVITY: 60, // minutes
  SLEEP: 12, // hours
};

export const DIFFICULTY_COLORS = {
  Easy: {
    bg: 'bg-green-100',
    text: 'text-green-800'
  },
  Medium: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800'
  },
  Hard: {
    bg: 'bg-red-100',
    text: 'text-red-800'
  }
} as const;