// import { useState, useEffect } from "react";
// import "./App.css";

// export default function App() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = () => {
//     let hours = time.getHours();
//     let minutes = time.getMinutes();
//     let seconds = time.getSeconds();
//     let ampm = hours >= 12 ? "PM" : "AM";

//     hours = hours % 12 || 12;
//     hours = String(hours).padStart(2, "0");
//     minutes = String(minutes).padStart(2, "0");
//     seconds = String(seconds).padStart(2, "0");

//     return `${hours}:${minutes}:${seconds} ${ampm}`;
//   };

//   const formatDate = () => {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const months = [
//       "January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"
//     ];

//     const dayName = days[time.getDay()];
//     const monthName = months[time.getMonth()];
//     const dayNumber = time.getDate();
//     const year = time.getFullYear();

//     return `${dayName}, ${dayNumber} ${monthName} ${year}`;
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.clock}>{formatTime()}</div>
//       <div style={styles.date}>{formatDate()}</div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     background: "linear-gradient(135deg, #1e3c72, #2a5298)",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     color: "white",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//   },
//   clock: {
//     fontSize: "60px",
//     fontWeight: "bold",
//     marginBottom: "10px"
//   },
//   date: {
//     fontSize: "24px",
//     opacity: 0.8
//   }
// };

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
        <div style={styles.clock} className="glow">{formatTime()}</div>
        <div style={styles.date}>{formatDate()}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Orbitron', sans-serif" // futuristic digital font
  },
  watchFace: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(12px)",
    border: "2px solid rgba(255,255,255,0.2)",
    borderRadius: "20px",
    padding: "40px 60px",
    textAlign: "center",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    color: "white",
    minWidth: "400px"
  },
  clock: {
    fontSize: "64px",
    fontWeight: "bold",
    marginBottom: "15px",
    letterSpacing: "2px"
  },
  date: {
    fontSize: "22px",
    opacity: 0.9,
    fontWeight: "300"
  }
};
