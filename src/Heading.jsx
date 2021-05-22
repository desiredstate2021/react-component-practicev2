import React from "react";

const date = new Date();
const currentTime = date.getHours();
const customStyle = {
  color: ""
};
let greeting;
function Header() {
  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Header;
