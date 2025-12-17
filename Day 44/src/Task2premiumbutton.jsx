import React from "react";

function Task2PremiumButton() {
  const isPremiumUser = true; // change to false to hide button

  return (
    <div>
      {isPremiumUser && <button>Premium Access</button>}
    </div>
  );
}

export default Task2PremiumButton;