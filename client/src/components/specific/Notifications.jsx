import React, { memo, useState } from "react";
import { sampleNotifications } from "../../constants/sampleData";
import Dialog from "../../utils/Dialog";

const Notifications = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);

  const friendRequestHandler = (id, accept) => {
    console.log(id);
  };

  return (
    <>
      <Dialog onClose={() => {}} open={true}>
        <div className="flex flex-col w-96 h-96">
          <div className="text-3xl">Notificatons</div>
          <div className="overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification, index) => {
                return (
                  <NotificationItem
                    key={index}
                    notification={notification}
                    handler={friendRequestHandler}
                  />
                );
              })
            ) : (
              <div className="text-center">No notifications</div>
            )}
          </div>
        </div>
      </Dialog>
    </>
  );
};

const NotificationItem = memo(({ notification, handler }) => {
  const { sender, _id, text } = notification;

  return (
    <div className="flex justify-between items-center">
      <img src={sender.avatar} className="w-8 h-8 rounded-full" />
      <span className="line-clamp-1 font-sans">
        {sender.name} {text}
      </span>
      <div className="flex flex-col">
        <button onClick={() => handler(_id, true)}>Accept</button>
        <button className="text-red-800" onClick={() => handler(_id, false)}>
          Reject
        </button>
      </div>
    </div>
  );
});

export default Notifications;
