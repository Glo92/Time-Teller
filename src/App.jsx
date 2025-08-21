import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  const formatDate = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const dayName = days[time.getDay()];
    const monthName = months[time.getMonth()];
    const dayNumber = time.getDate();
    const year = time.getFullYear();

    return `${dayName}, ${dayNumber} ${monthName} ${year}`;
  };

  return (
    <div style={styles.container}>
      <div style={styles.watchFace}>
        <div style={styles.clock}>{formatTime()}</div>
        <div style={styles.date}>{formatDate()}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #1f4037, #99f2c8)", 
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Orbitron', sans-serif",
    padding: "20px"
  },
  watchFace: {
    width: "80vw", 
    maxWidth: "500px",   // slightly smaller so circle feels compact
    aspectRatio: "1/1", 
    background: "rgba(255, 255, 255, 0.12)",
    backdropFilter: "blur(15px)",
    border: "3px solid rgba(255,255,255,0.3)",
    borderRadius: "50%", // true circle
    boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    textAlign: "center"
  },
  clock: {
    fontSize: "6.5vw", // reduced from 8vw so digits don’t spill
    fontWeight: "bold",
    marginBottom: "10px",
    letterSpacing: "1.5px",
    textShadow: "0 0 8px rgba(0,0,0,0.5)"
  },
  date: {
    fontSize: "3.2vw", // slightly smaller to balance
    opacity: 0.85,
    fontWeight: "300"
  }
};
