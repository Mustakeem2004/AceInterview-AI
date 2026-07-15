# ACE Interview - AI Powered Interview Preparation Platform

ACE Interview is a full-stack AI-powered interview preparation platform that helps users practice technical interviews through AI-generated questions, voice-based interaction, and detailed performance analytics.

The platform enables users to upload resumes, participate in AI-driven mock interviews, receive instant feedback, and track their progress through an interactive dashboard.

---

## Features

- Secure authentication using Google OAuth and JWT
- Resume upload for personalized interview questions
- AI-generated interview questions
- Voice-based interviews using Speech Recognition API
- AI interviewer using Speech Synthesis API
- Detailed AI-generated feedback after every interview
- Performance analytics dashboard
- Credit-based interview system with Razorpay integration
- Responsive design for desktop and mobile devices
- Clean and reusable component architecture

---

## 🛠 Tech Stack

### Frontend

- React.js
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios
- Recharts

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Google OAuth

### APIs

- OpenRouter API (LLM-powered interview generation and feedback)
- Browser Speech Recognition API
- Browser Speech Synthesis API
- Razorpay Payment Gateway

---

## 📂 Project Architecture

```
Client
│
├── Components
├── Pages
├── Store
├── Hooks
├── Services
└── Utils

Server
│
├── Controllers
├── Routes
├── Models
├── Middleware
├── Services
└── Config
```

---



## Live Demo

Frontend: https://aceinterview-ai.onrender.com/

> **Note:** The application is hosted on Render. The first request may take 30–60 seconds if the server is waking up from inactivity.



## Key Responsibilities

- Developed responsive user interfaces using React.js and Tailwind CSS.
- Built reusable React components to improve maintainability.
- Integrated REST APIs for authentication, interviews, feedback, and payment.
- Designed scalable backend services using Node.js and Express.js.
- Implemented secure authentication using JWT and Google OAuth.
- Managed application state using Redux Toolkit.
- Built modular REST APIs following clean architecture.
- Stored and managed application data using MongoDB.
- Optimized application performance and API response times.
- Used Git and GitHub for version control.
- Followed component-based architecture and clean coding practices.

---


## Performance Optimizations

- Reduced unnecessary API requests
- Efficient MongoDB data retrieval
- Reusable React components
- Optimized state management using Redux Toolkit
- Backend validation and error handling

---

## Skills Demonstrated

- React.js
- JavaScript (ES6+)
- Node.js
- Express.js
- MongoDB
- REST API Development
- Authentication & Authorization
- Responsive Web Design
- State Management
- Performance Optimization
- Object-Oriented Programming
- Data Structures & Algorithms
- Git & GitHub

---

## Future Improvements

- Video interview support
- AI emotion detection
- Interview scheduling
- Multi-language support
- Team interview mode
- Recruiter dashboard

---

## Screenshots


###  Home Page

The landing page introduces the AI-powered interview platform, highlighting its key features and providing quick access to start interviews or view interview history.

<img width="1470" height="801" alt="Screenshot 2026-07-15 at 10 44 42 AM" src="https://github.com/user-attachments/assets/7f450894-64df-4999-8e4d-ea654b3d9005" />
---




###  Google Authentication

Secure authentication using Google OAuth and JWT for seamless user login.

<img width="1470" height="804" alt="Screenshot 2026-07-15 at 10 49 58 AM" src="https://github.com/user-attachments/assets/f2e67aef-1b30-40e7-8f98-b52c880c0ea1" />



---



###  Interview Setup

Configure the interview by selecting the role, experience level, interview type, and optionally uploading a resume for personalized questions.

<img width="1470" height="801" alt="Screenshot 2026-07-15 at 10 45 48 AM" src="https://github.com/user-attachments/assets/eddf85a5-ec09-4a3a-aac8-a81c9e279503" />




###  AI Smart Interview

Real-time AI-powered voice interview with speech synthesis, speech recognition, timer-based questions, and answer submission.

<img width="1470" height="802" alt="Screenshot 2026-07-15 at 10 47 13 AM" src="https://github.com/user-attachments/assets/26b7e9ae-1888-40fc-b810-c735734faa82" />


---

###  Interview History & Analytics

Track previous interviews, completion status, and performance reports through an interactive dashboard.

<img width="1470" height="800" alt="Screenshot 2026-07-15 at 10 48 55 AM" src="https://github.com/user-attachments/assets/9bf974a9-1a27-4937-9080-96f87e02e5a4" />


---

## Installation

```bash
git clone https://github.com/Mustakeem2004/AceInterview-AI.git

cd AceInterview-AI
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

### Install Backend

```bash
cd server
npm install
npm start
```
---


## Environment Variables

### Client (.env)

```env
VITE_FIREBASE_APIKEY=
VITE_RAZORPAY_KEY_ID=
```

### Server (.env)

```env
MONGO_URI=
JWT_SECRET=
OPENROUTER_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_SECRET=
```

## License

This project is intended for educational and portfolio purposes.


## Author

Mustakeem Malik
