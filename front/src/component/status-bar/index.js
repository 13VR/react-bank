import "./index.css";
import { useState } from "react";

export default function StatusBar({ welcome }) {
  const [time, setTime] = useState(new Date());
  setInterval(() => setTime(new Date()), 10000);

  return (
    <div className="status_bar">
      <div className={`${welcome ? "time" : ""}`}>
        {time.getHours().toString().padStart(2, "0")}:
        {time.getMinutes().toString().padStart(2, "0")}
      </div>

      <div className="bar">
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/sf-ultralight-filled/25/high-connection.png"
          alt="high-connection"
        />
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/android/24/wifi.png"
          alt="wifi"
        />
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/ios-glyphs/30/full-battery.png"
          alt="full-battery"
        />
      </div>
    </div>
  );
}
