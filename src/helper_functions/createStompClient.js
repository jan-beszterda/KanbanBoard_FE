import { Client } from "@stomp/stompjs";

export const createStompClient = (topicAddress, onMessage) => {
  const client = new Client({
    brokerURL: "ws://localhost:8080/ws",
    /* connectHeaders: {
      login: "user",
      passcode: "password",
    },
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000, */
  });
  client.onConnect = function (frame) {
    const subscription = client.subscribe(topicAddress, function (message) {
      onMessage();
    });
  };

  client.onStompError = function (frame) {
    // Will be invoked in case of error encountered at Broker
    // Bad login/passcode typically will cause an error
    // Complaint brokers will set `message` header with a brief message. Body may contain details.
    // Compliant brokers will terminate the connection after any error
    console.log("Broker reported error: " + frame.headers["message"]);
    console.log("Additional details: " + frame.body);
  };

  return client;
};
