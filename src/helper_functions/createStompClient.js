import { Client } from "@stomp/stompjs";

export const createStompClient = (topicAddress, onMessage) => {
  let client = new Client({
    brokerURL: "ws://localhost:8080/ws",
    debug: function (str) {
      console.log(str);
    },
  });
  return client;
};
