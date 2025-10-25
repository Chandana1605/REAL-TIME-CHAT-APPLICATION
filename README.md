# REAL-TIME-CHAT-APPLICATION

*COMPANY*:CODETECH IT SOLUTIONS

*NAME*:CHANDANA V

*INTERN ID*:CT04DR507

*DOMAIN*:FRONTEND WEB DEVELOPMENT

*DURATION*:4 WEEKS

*MENTOR*:NEELA SANTHOSH

*PROJECT DESCRIPTION*:This project is a Real-Time Chat Application built using modern web technologies to enable instant messaging between users. The application demonstrates the integration of WebSockets for real-time communication and React.js for building a responsive front-end interface. The core functionality allows multiple users to send and receive messages simultaneously, with each message instantly appearing on all connected clients. Additionally, the application preserves message history even after refreshing the browser, providing a persistent and user-friendly chat experience.

The interface features two separate chat windows representing different users, namely Alice and Bob. Messages are visually distinguished by alignment: messages sent by the current user appear on the right, while messages received appear on the left. Each message includes a timestamp and sender information, making it clear who sent each message and when. To enhance user interaction and make the conversation more expressive, an emoji picker is integrated, allowing users to insert emojis directly into their messages.

The project uses WebSockets, a protocol that enables full-duplex communication channels over a single TCP connection, ensuring low-latency message transmission. The WebSocket server is implemented using Node.js with the ws package, handling connections, broadcasting messages, and maintaining real-time communication between clients. The server runs locally on a specified port (ws://localhost:8080) and ensures that every message sent by any user is instantly broadcasted to all connected users.

The front-end is built entirely with React.js, a popular JavaScript library for building user interfaces. The application leverages React’s state management to maintain both the current input value and the list of messages. By using React hooks like useState, useEffect, and useRef, the application ensures smooth UI updates and automatic scrolling to the latest messages. Additionally, the application uses localStorage to store message history, allowing users to see previous messages even after closing and reopening the browser. The layout is fully responsive, utilizing CSS Flexbox for arranging chat windows side by side and adjusting the layout based on screen size.

For development, the application was created using Visual Studio Code, a versatile and widely used code editor that provides integrated support for JavaScript, Node.js, and React development. The project uses npm (Node Package Manager) for managing dependencies such as React, WebSocket packages, and development tools like Vite. Vite is used as the build tool and development server for fast compilation and hot-reloading during development. The styling is applied using inline CSS with a gradient-themed modern design, providing a visually appealing and user-friendly interface.

*APPLICABILITY*:This real-time chat application has multiple practical use cases. It can be used as a foundation for customer support systems, allowing support agents to communicate instantly with customers on websites or applications. It can also serve as the base for team collaboration tools, enabling real-time messaging among team members in professional environments. Additionally, the app can be extended into social networking platforms or integrated with gaming applications where live communication is essential. Due to its lightweight design, the system can also be deployed in educational platforms for instant communication between teachers and students. The modular architecture ensures that the application can be scaled and customized to support multiple users, rooms, and enhanced features such as file sharing, notifications, or chat encryption.

*TOOLS AND TECHNOLOGIES*:

React.js: Front-end UI framework for building interactive and responsive components

Node.js: Server-side runtime environment for building the WebSocket server

ws package: WebSocket library for Node.js to manage real-time communication

LocalStorage: Browser storage for maintaining message history across sessions

Visual Studio Code: Code editor for development

Vite: Fast development server and build tool for React projects

HTML/CSS: For layout, styling, and responsive design

JavaScript (ES6+): For dynamic functionality, state management, and event handling

This project demonstrates practical implementation of real-time applications and showcases the combination of modern front-end and back-end technologies to create a functional, responsive, and interactive chat interface. It can serve as a starting point for more complex messaging systems and real-time collaborative applications.

*OUTPUT*:

<img width="1895" height="1053" alt="Image" src="https://github.com/user-attachments/assets/ff6be96a-f62e-45c6-b3bb-88d0d1264290" />
