import React, { useEffect, useState } from "react";

const Hours = () => {
  const [todayHours, setTodayHours] = useState(null);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const shelterHours = [
      { day: "Monday", open: "10:00", close: "16:00" },
      { day: "Tuesday", open: "10:00", close: "16:00" },
      { day: "Wednesday", open: "10:00", close: "16:00" },
      { day: "Thursday", open: "10:00", close: "16:00" },
      { day: "Friday", open: "10:00", close: "16:00" },
      { day: "Saturday", open: "10:00", close: "16:00" },
      { day: "Sunday", open: "Closed", close: "Closed" },
    ];

    const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

    const foundHours = shelterHours.find((day) => day.day === today);
    setTodayHours(foundHours);

    const updateCurrentTime = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(now);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!todayHours) {
    return <div id="hours">Cargando...</div>;
  }

  return (
    <div id="hours">
      <h2>Horas de hoy</h2>
      <p>
        {todayHours.day}: {todayHours.open} - {todayHours.close}
      </p>
      <h3>Hora local</h3>
      <p>{currentTime}</p>
    </div>
  );
};

export default Hours;