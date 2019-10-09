import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import "./TextContainer.css";

const TextContainer = ({ users }) => {
  return (
    <div className="textContainer">
      <div>
        <h1>
          Chatify{" "}
          <span role="img" aria-label="emoji">
            💬
          </span>
        </h1>
        <h2>
          Developed by @7RajatGupta using MERN Stack and Socket.io with{" "}
          <span role="img" aria-label="emoji">
            ❤️
          </span>
        </h2>
        <h2>
          Try it out right now!{" "}
          <span role="img" aria-label="emoji">
            ⬅️
          </span>
        </h2>
      </div>
      {users ? (
        <div>
          <h1>People Online:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TextContainer;
