# Findash
Findash is a personal finance management application designed to help users track their spending, manage budgets, and connect their financial data seamlessly. Built using the MERN stack (MongoDB, Express, React, Node.js), Findash allows users to securely connect to their financial accounts using Plaid API and provides intuitive insights into their financial health.


## Features
- **Secure Account Connection**: Connect your bank accounts securely using Plaid.
- **Budget Management**: Set and track budgets for different categories.
- **Spending Insights**: Visualise your spending patterns and receive insights to help manage your finances.
- **Transaction Tracking**: Keep track of all your transactions in one place.
- **User-Friendly Dashboard**: Interactive and easy-to-navigate dashboard with real-time updates.

## Project planning
- **[Miro](https://miro.com/app/board/uXjVKkSWbho=/)**
- **[Excalidraw]()**
- **[Trello]()**

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed
- [MongoDB](https://www.mongodb.com/) installed and running
- [Plaid Account](https://plaid.com/) for connecting financial accounts (Sandpit for development)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Seyi-Toluhi/FinDash.git
   cd findash

2. **Install frontend dependencies:**
- cd frontend
- npm install

3. **Install backend dependencies:**
- cd ./backend
- npm install

### Environment Variables
**Create a .env file in the backend directory with the following keys:**
- PORT=5000
- MONGODB_URI=your_mongodb_connection_string
- PLAID_CLIENT_ID=your_plaid_client_id
- PLAID_SECRET=your_plaid_secret

### Running this Application
- From the frontend directory, run:
  - npm run dev 

- From the backend directory, run:
  - npm run dev 

- Open your browser and go to http://localhost:5173 (or the port Vite is running on)

### Usage
- Create an account and log in.
- Connect your financial accounts using Plaid to view your dashboard.
- Set budgets and track your spending to manage your finances better.

### Contributing
- Contributions are welcome! Please fork the repository and create a pull request with your feature or fix.

### Fork the project
- Create your feature branch (git checkout -b feature/amazing-feature)
- Commit your changes (git commit -m 'Add some amazing feature')
- Push to the branch (git push origin feature/amazing-feature)
- Open a pull request

### **Key Sections Explained:**
1. **Introduction**: A brief overview of what Findash does and the tech stack it uses.
2. **Features**: Highlights the key functionalities of your app.
3. **Project Structure**: Shows how the project is organised.
4. **Getting Started**: Step-by-step guide on how to set up the project locally.
5. **Environment Variables**: Instructions on setting up critical `.env` variables.
6. **Usage**: Quick guide on how to use the app.
7. **Contributing**: Encourages collaboration with clear instructions on how to contribute.
8. **License and Contact**: Basic info on the project's licensing and how to get in touch.


This project is licensed under the MIT License. If you have any questions or suggestions, feel free to reach out.

Thank you for checking out Findash! We hope this tool helps you take control of your financial future.