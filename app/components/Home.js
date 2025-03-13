"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

export default function Home() {
  const [permission, setPermission] = useState("default");

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      const result = await Notification.requestPermission();
      setPermission(result);
    }
  };

  const sendNotification = async () => {
    if (permission === "granted") {
      new Notification("Hello!", {
        body: "This is a test notification!",
        icon: "/android-chrome-192x192.png",
      });
    } else {
      toast.error("Please enable notifications!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <div className="container">
      <h1 className="title">Hola!</h1>

      <div className="notification-container">
        <Image
          src="/circle-1.png"
          width={100}
          height={100}
          alt="Ring"
          className="glow-ring first"
        />
        <Image
          src="/circle-2.png"
          width={100}
          height={100}
          className="glow-ring second"
          alt="Ring"
        />

        <Image
          src="/circle-3.png"
          width={100}
          height={100}
          className="glow-ring third"
          alt="Ring"
        />

        <Image
          src="/circle-4.png"
          width={100}
          height={100}
          className="glow-ring fourth"
          alt="Ring"
        />
        <Image
          src="/bell.png"
          width={50}
          height={50}
          className="bell-icon"
          alt="Bell"
        />
      </div>

      <div className="btn-container">
        <div className="btn-text-container">
          <h2 className="btn-text-1">Lorem Ipsum...</h2>
          <p className="btn-text-2">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="btn-button-container">
          <button className="notification-btn" onClick={sendNotification}>
            Send Notification
          </button>
          {permission !== "granted" && (
            <button
              className="enable-btn"
              onClick={requestNotificationPermission}
            >
              Enable Notifications
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
