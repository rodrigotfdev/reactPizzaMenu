import React from "react";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

    if(!isOpen) return (
        <p>
        We're happy to welcome you between {openHour}:00 and {closeHour}:00
      </p>
    )

  return (
    <footer className="footer">
      {isOpen ? 
       <Order openHour={openHour} closeHour={closeHour} />
       : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({closeHour, openHour}) {
    return (
        <div className="order">
        <p>We're open until {closeHour}:00. Come visit us or order on-line</p>
        <button className="btn">Order</button>
      </div>
    )
}
