# 🏢 Employee Management System

A modern, responsive Employee Management System built with React.js, featuring task assignment, progress tracking, and role-based dashboards. Perfect for organizations looking to streamline their employee task management workflow.

![Employee Management System](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## ✨ Features

### 👨‍💼 Admin Dashboard
- **Task Creation & Assignment** - Create tasks and assign them to specific employees
- **Employee Overview** - View all employees and their task statistics
- **Real-time Updates** - See task status changes in real-time
- **Task Categories** - Organize tasks by departments (Development, Design, Marketing, etc.)

### 👩‍💻 Employee Dashboard  
- **Personal Task View** - See all assigned tasks in an organized layout
- **Task Status Management** - Accept, complete, or mark tasks as failed
- **Progress Tracking** - Visual statistics showing task completion rates
- **Interactive Task Cards** - Modern card-based interface for task management

### 🎨 Modern UI/UX
- **Glass Morphism Design** - Beautiful backdrop blur effects and transparency
- **Responsive Layout** - Works perfectly on desktop, tablet, and mobile devices
- **Dark Theme** - Professional dark theme with gradient backgrounds
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Custom Components** - Reusable, well-designed UI components

## 🚀 Demo

### Admin Login
- **Email:** `admin@me.com`
- **Password:** `admin`

### Employee Login
- **Email:** `employee2@example.com`  
- **Email:** `employee3@example.com`  
- **Email:** `employee4@example.com`  
- **Password:** `123`

## 📸 Screenshots

### Login Page
[![employee1.png](https://i.postimg.cc/j2R6GhQx/employee1.png)](https://postimg.cc/BLw1FHVk)

### Admin Dashboard
[![employee2.png](https://i.postimg.cc/tTQNzbsV/employee2.png)](https://postimg.cc/bGgnzKHz)
[![employee3.png](https://i.postimg.cc/763MsRzt/employee3.png)](https://postimg.cc/1nzq4JJD)

### Employee Dashboard
[![employee4.png](https://i.postimg.cc/9QkprZVb/employee4.png)](https://postimg.cc/DSqsNWS4)

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend framework for building user interfaces |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Vite** | Fast build tool and development server |
| **Context API** | State management for user authentication and data |
| **Local Storage** | Client-side data persistence |
| **ESLint** | Code linting and formatting |

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/AliAbdullahpgr/Employee-Management-System.git
cd Employee-Management-System
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Start Development Server
```bash
npm run dev
# or
yarn dev
```

### 4. Build for Production
```bash
npm run build
# or
yarn build
```

### 5. Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   └── Dashboard/
│       ├── AdminDashboard.jsx
│       └── EmployeeDashboard.jsx
├── context/
│   └── AuthProvider.jsx
├── subComponents/
│   ├── Header.jsx
│   ├── TaskList.jsx
│   ├── TaskListNumber.jsx
│   ├── CreateTask.jsx
│   └── AllTask.jsx
├── TaskList/
│   ├── NewTask.jsx
│   ├── AcceptTask.jsx
│   ├── CompleteTask.jsx
│   └── FailedTask.jsx
├── utils/
│   └── localStorage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Employee Management System
VITE_API_URL=http://localhost:3000
```

### Tailwind Configuration
The project uses a custom Tailwind configuration with:
- Custom color palette
- Glass morphism utilities
- Responsive breakpoints
- Custom animations

## 🎯 Usage Guide

### For Administrators
1. **Login** with admin credentials
2. **Create Tasks** using the task creation form
3. **Assign Tasks** to specific employees from the dropdown
4. **Monitor Progress** through the all tasks overview
5. **Track Statistics** via the dashboard metrics

### For Employees
1. **Login** with employee credentials
2. **View Tasks** assigned to you on the dashboard
3. **Accept New Tasks** by clicking the accept button
4. **Update Status** by marking tasks as completed or failed
5. **Monitor Progress** through personal statistics

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy automatically on push

### Deploy to GitHub Pages
```bash
npm run build
npm run gh-pages
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow React best practices
- Use Tailwind CSS for styling
- Maintain consistent code formatting
- Write meaningful commit messages
- Test your changes thoroughly

## 📋 Roadmap

- [ ] **Database Integration** - Replace localStorage with a proper database
- [ ] **Real-time Notifications** - WebSocket integration for live updates
- [ ] **Email Notifications** - Send email alerts for task assignments
- [ ] **File Attachments** - Allow file uploads for tasks
- [ ] **Advanced Analytics** - Detailed reporting and analytics
- [ ] **Mobile App** - React Native mobile application
- [ ] **API Documentation** - Comprehensive API documentation
- [ ] **Unit Testing** - Complete test coverage

## 🐛 Known Issues

- [ ] Task persistence relies on localStorage (cleared on browser reset)
- [ ] No real-time synchronization between multiple sessions
- [ ] Limited to predefined employee accounts

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Employee Management System

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👨‍💻 Author

**Ali Abdullah**
- GitHub: [@AliAbdullahpgr](https://github.com/AliAbdullahpgr)
- LinkedIn: [Connect with me](https://linkedin.com/in/aliabdullahpgr)
- Email: aliabdullahpgr@gmail.com

## ⭐ Show your support

Give a ⭐️ if this project helped you!

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the lightning-fast build tool
- **Heroicons** for the beautiful SVG icons
- **Community** for inspiration and feedback

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/AliAbdullahpgr">Ali Abdullah</a></p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
