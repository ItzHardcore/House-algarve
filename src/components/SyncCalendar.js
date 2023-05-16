import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function SyncCalendar() {
  const [value, onChange] = useState(new Date());

  return <Calendar onChange={onChange} value={value} />;
}
export default SyncCalendar;

// import React from "react";

// function AirbnbCalendar() {
//   return (
//     <div>
//       <h2>My Airbnb Calendar</h2>
//       <div
//         dangerouslySetInnerHTML={{
//           __html: "<!-- Paste your Airbnb Calendar Widget code here -->",
//         }}
//       />
//     </div>
//   );
// }

// export default AirbnbCalendar;
