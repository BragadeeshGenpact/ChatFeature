import React from "react";

import {
  ChatEngineWrapper,
  Socket,
  ChatList,
  ChatFeed,
  ChatSettings,
} from "react-chat-engine";

import { Col } from "react-grid-system";

const ChatEngine = () => {
  return (
    <ChatEngineWrapper>
      <Socket
        projectID="0c8866b8-ed45-46a5-99dc-a9332d51b4fb"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
      />

      <Col xs={0} sm={3}>
        <ChatList />
      </Col>

      <Col xs={12} sm={6}>
        <ChatFeed />
      </Col>

      <Col xs={0} sm={3}>
        <ChatSettings />
      </Col>
    </ChatEngineWrapper>
  );
};

export default ChatEngine;
