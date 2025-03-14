self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker Activated");
  event.waitUntil(self.clients.claim());
});

self.addEventListener("push", (event) => {
  const data = event.data ? event.data.json() : {};
  self.registration.showNotification(data.title || "Notification", {
    body: data.message || "You have a new message!",
    icon: "/android-chrome-192x192.png",
  });
});
