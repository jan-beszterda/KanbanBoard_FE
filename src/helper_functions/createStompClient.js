import { Client } from "@stomp/stompjs";

export const createStompClient = (topicAddress, onMessage) => {
  let stompClient = new Client();
  stompClient.configure({
    brokerURL: "ws://127.0.0.1:8080/ws",
    onConnect: () => {
      stompClient.subscribe(topicAddress, (message) => {
        onMessage();
      });
    },
    debug: (str) => {
      console.log(str);
    },
  });
  stompClient.activate();
  return stompClient;
};
