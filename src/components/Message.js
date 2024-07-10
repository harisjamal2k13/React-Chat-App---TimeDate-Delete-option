import React from "react";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { format } from "date-fns";
import { doc, deleteDoc } from "firebase/firestore";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      await deleteDoc(doc(db, "messages", message.id));
    }
  };

  // Convert Firestore timestamp to JavaScript Date object
  const timestamp = message.createdAt ? message.createdAt.toDate() : new Date();
  const formattedTime = format(timestamp, "Pp");

  return (
    <div className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
      <img className="chat-bubble__left" src={message.avatar} alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}</p>
        <p className="message-time">{formattedTime}</p>
        {message.uid === user.uid && (
          <button onClick={handleDelete} className="delete-button">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Message;
