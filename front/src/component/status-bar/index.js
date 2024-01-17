import "./index.css";

export default function StatusBar({ welcome }) {
  const currentDate = new Date();

  return (
    <div className="status_bar">
      <div className={`${welcome ? "time" : ""}`}>
        {currentDate.getHours()}:{currentDate.getMinutes()}
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
