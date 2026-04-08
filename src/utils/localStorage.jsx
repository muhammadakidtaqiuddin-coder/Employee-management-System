const employees = [
  {
    "id": 1,
    "name": "John Smith",
    "email": "employee@me.com",
    "password": "employee",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile Q2 sales data and summarize key trends for management, including charts and actionable insights.",
        "date": "2025-08-20",
        "category": "Reporting",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client Follow-up",
        "description": "Email top-tier clients for feedback and satisfaction, aiming to identify upselling opportunities.",
        "date": "2025-08-22",
        "category": "Communication",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Inventory Check",
        "description": "Verify warehouse stock levels, update system records, and report discrepancies.",
        "date": "2025-08-18",
        "category": "Inventory",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "name": "Sarah Johnson",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Website Content",
        "description": "Replace outdated product info with SEO-optimized content and review for accuracy.",
        "date": "2025-08-15",
        "category": "Web",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Discuss feature rollout plan, assign responsibilities, and set timeline expectations.",
        "date": "2025-08-21",
        "category": "Meetings",
        "active": false,
        "new_task": true,
        "completed": true,
        "failed": false
      },
      {
        "title": "Market Research",
        "description": "Analyze competitor pricing and market trends to inform our pricing strategy.",
        "date": "2025-08-19",
        "category": "Research",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Prepare Presentation",
        "description": "Design slides for quarterly review, including metrics, updates, and recommendations.",
        "date": "2025-08-25",
        "category": "Design",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "name": "Michael Davis",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Social Media Campaign",
        "description": "Plan September schedule with engaging content and monitor analytics for optimization.",
        "date": "2025-08-28",
        "category": "Marketing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Code Review",
        "description": "Review backend pull requests for code quality and provide feedback to developers.",
        "date": "2025-08-17",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Bug Fixing",
        "description": "Resolve UI glitches, test fixes, and update documentation for improved stability.",
        "date": "2025-08-16",
        "category": "Development",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "name": "Emily Wilson",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Onboarding New Staff",
        "description": "Train new hires on company policies and job skills, and organize welcome sessions.",
        "date": "2025-08-26",
        "category": "HR",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Data Backup",
        "description": "Backup company files to cloud, verify integrity, and maintain documentation.",
        "date": "2025-08-14",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Vendor Meeting",
        "description": "Negotiate contract renewal terms and review supplier performance for improvements.",
        "date": "2025-08-18",
        "category": "Procurement",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Security Audit",
        "description": "Audit network systems for vulnerabilities and prepare a report with recommendations.",
        "date": "2025-08-24",
        "category": "Security",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Policy Update",
        "description": "Revise HR policy documents and communicate changes to staff after legal review.",
        "date": "2025-08-20",
        "category": "HR",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "name": "David Brown",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Budget Plan",
        "description": "Draft budget plan for next quarter, analyze data, and consult department heads.",
        "date": "2025-08-30",
        "category": "Finance",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "System Upgrade",
        "description": "Upgrade workstations to latest OS, plan rollout, and provide user training.",
        "date": "2025-08-15",
        "category": "IT",
        "active": false,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Customer Feedback",
        "description": "Collect and analyze survey data to identify satisfaction trends and improvements.",
        "date": "2025-08-19",
        "category": "Customer Service",
        "active": false,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Newsletter Draft",
        "description": "Write September newsletter with company updates and product highlights for clients.",
        "date": "2025-08-27",
        "category": "Marketing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "admin",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
  try {
    const employeesData = JSON.parse(localStorage.getItem('employees'));
    const adminData = JSON.parse(localStorage.getItem('admin'));
    
    return {
      employees: employeesData || employees,
      admin: adminData || admin
    };
  } catch (error) {
    console.error('Error parsing localStorage data:', error);
    return {employees: employees, admin: admin};
  }
}

setLocalStorage();
