import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatIntro() {
  const navigate = useNavigate();

  const [sent, setSent] = useState(false);
  const [showFollowUp, setShowFollowUp] = useState(false);

  // Trigger follow-up after he clicks send
  useEffect(() => {
    let timer;
    if (sent) {
      // show your follow-up bubble after 400ms
      timer = setTimeout(() => setShowFollowUp(true), 400);
    }
    return () => clearTimeout(timer);
  }, [sent]);

  return (
    <div className="chat-page">
      <div className="chat-container">
        {/* Your first message (grey, appears immediately) */}
        <div className="bubble bubble-received animated">
          Holaaa, straight white guy ✋
        </div>

        {/* Input area before he sends reply */}
        {!sent && (
          <div className="input-area">
            <div className="fake-input">Halo funny athletic Indian girl👋</div>
            <button className="send-btn" onClick={() => setSent(true)}>
              Send
            </button>
          </div>
        )}

        {/* After he clicks Send */}
        {sent && (
          <>
            {/* His reply (blue) */}
            <div className="bubble bubble-sent animated">
              Halo funny athletic Indian girl👋
            </div>

            {/* Your follow-up (grey) with delay animation */}
            {showFollowUp && (
              <>
                <div className="bubble bubble-received animated">
                  i’ve got a question for you 👀
                </div>
                <button
                  className="next-btn animated"
                  onClick={() => navigate("/question")}
                >
                  Tap to continue
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
