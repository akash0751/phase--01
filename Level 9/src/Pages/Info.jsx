import React, { useState } from "react";

import User from "../Component/User";
import FeedbackForm from "../Component/Help";

const Info = () => {
  
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false); // Control feedback form visibility

  return (
    <>
      <div>
        <button onClick={() => setIsFeedbackOpen(true)}
          className="login-btn1"
          >
          Send Feedback
        </button>
      </div>
      

      {isFeedbackOpen && <FeedbackForm onClose={() => setIsFeedbackOpen(false)} />} 
      {/* Open feedback form only when isFeedbackOpen is true */}

      <div>
        <User />
      </div>
    </>
  );
};

export default Info;
