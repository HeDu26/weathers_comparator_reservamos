const getNext7Days = () => {
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const today = new Date(); // Get the current date
  const next7Days = [];

  for (let i = 0; i < 7; i++) {
    const nextDay = new Date(today); // Create a new date object for the next day
    nextDay.setDate(today.getDate() + i); // Add 'i' days to the current date
    const dayName = daysOfWeek[nextDay.getDay()]; // Get the day name (e.g., "Monday")
    next7Days.push(dayName); // Add the day name to the array
  }

  return next7Days;
};

export default getNext7Days;
