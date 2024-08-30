import React, { useEffect, useState } from "react";

const Hours = () => {
  const [todayHours, setTodayHours] = useState(null);

  useEffect(() => {
    const shelterHours = [
      { day: 'Monday', open: '10:00', close: '16:00' },
      { day: 'Tuesday', open: '10:00', close: '16:00' },
      { day: 'Wednesday', open: '10:00', close: '16:00' },
      { day: 'Thursday', open: '10:00', close: '16:00' },
      { day: 'Friday', open: '10:00', close: '16:00' },
      { day: 'Saturday', open: '10:00', close: '16:00' },
      { day: 'Sunday', open: 'Closed', close: 'Closed' },
    ];

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

    const foundHours = shelterHours.find((day) => day.day === today);
    setTodayHours(foundHours);
  }, []);

  if (!todayHours) {
    return <div id="hours">Loading...</div>;
  }

  return (
    <div id="hours">
      <h2>Today's Hours</h2>
      <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
    </div>
  );
};

export default Hours;