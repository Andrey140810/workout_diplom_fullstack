const Workout = require("../models/Workout");

const calculateStreak = (workouts) => {
  if (!workouts.length) return 0;
  const sorted = [...workouts].sort(
    (a, b) => new Date(b.completedAt) - new Date(a.completedAt),
  );
  let streak = 1;
  let lastDate = new Date(sorted[0].completedAt);
  lastDate.setHours(0, 0, 0, 0);

  for (let i = 1; i < sorted.length; i++) {
    const currentDate = new Date(sorted[i].completedAt);
    currentDate.setHours(0, 0, 0, 0);
    const expectedDate = new Date(lastDate);
    expectedDate.setDate(expectedDate.getDate() - 1);

    if (currentDate.getTime() === lastDate.getTime()) continue;
    if (currentDate.getTime() === expectedDate.getTime()) {
      streak++;
      lastDate = currentDate;
    } else break;
  }
  return streak;
};

const getMondayOfDate = (date) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  d.setDate(diff);
  return d;
};

const generateWeekFromMonday = (monday) => {
  const dayNames = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return {
      date: date.toISOString().split("T")[0],
      dayName: dayNames[i],
      workouts: 0,
    };
  });
};

const calculateWeeklyProgress = (workouts) => {
  let monday;

  if (!workouts.length) {
    monday = getMondayOfDate(today);
  } else {
    const sorted = [...workouts]
      .filter((workout) => workout.completedAt || workout.createdAt)
      .sort(
        (a, b) =>
          new Date(b.completedAt || b.createdAt) -
          new Date(a.completedAt || a.createdAt),
      );

    const lastWorkoutDate = new Date(
      sorted[0].completedAt || sorted[0].createdAt,
    );
    monday = getMondayOfDate(lastWorkoutDate);
  }

  const weekDays = generateWeekFromMonday(monday);

  workouts.forEach((w) => {
    const completedDate = new Date(w.completedAt || w.createdAt);
    const workoutDay = completedDate.toISOString().split("T")[0];
    const dayEntry = weekDays.find((d) => d.date === workoutDay);
    if (dayEntry) {
      dayEntry.workouts += 1;
    }
  });

  return weekDays;
};

const getStatsByUserId = async (userId) => {
  const workouts = await Workout.find({ userId });
  const totalWorkouts = workouts.length;
  const totalTime = workouts.reduce((sum, w) => sum + w.duration, 0);
  const totalExercises = workouts.reduce(
    (sum, w) => sum + (w.exercises?.length || 0),
    0,
  );
  const totalReps = workouts.reduce((sum, w) => {
    return (
      sum +
      (w.exercises?.reduce((exSum, ex) => {
        return exSum + (ex.sets?.reduce((r, s) => r + s, 0) || 0);
      }, 0) || 0)
    );
  }, 0);

  const streak = calculateStreak(workouts);

  const weeklyProgress = calculateWeeklyProgress(workouts);

  return {
    totalWorkouts,
    totalTime,
    totalExercises,
    totalRepeads: totalReps,
    streak,
    weeklyProgress,
  };
};

module.exports = { getStatsByUserId };
