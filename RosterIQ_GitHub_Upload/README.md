# RosterIQ – Smart Roster Management System

**Built for: DataStraw Tech Internship Assessment**

RosterIQ is a smart workforce and roster management application designed to help operations managers manage employees, brands, operational processes, pods, and monthly work schedules.

The application focuses on simplifying roster planning, managing employee availability, identifying scheduling conflicts, and maintaining minimum operational coverage across multiple brands.

## Live Application

- **Live Demo:** https://roster-iq-qv7p.vercel.app/
- **GitHub Repository:** https://github.com/Yaqub100/RosterIQ
- **Developer:** Mohd Yaqub Shaikh
- **LinkedIn:** https://www.linkedin.com/in/yaqub-shaikh-843b383b7 

---

## 1. Project Overview

Companies managing multiple D2C brands often face challenges when preparing monthly employee rosters.

Different brands may have different operational requirements. Some processes operate seven days a week, while others have Sundays or public holidays off.

RosterIQ aims to solve these challenges through a centralized roster management system.

### Main Objectives

- Manage employees across multiple brands.
- Organize employees into operational pods.
- Manage multiple processes such as Customer Support, Abandoned Cart Conversion, Retention, and NDR.
- Configure employee availability and weekly offs.
- Generate monthly rosters.
- Identify coverage gaps and scheduling conflicts.
- Support roster modifications and revalidation.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend application |
| Vite | Development and build tool |
| JavaScript | Application logic |
| HTML5 | Application structure |
| CSS3 | Styling and responsive interface |
| Vercel | Application deployment |
| GitHub | Source code management |

## 3. Core Features

### Employee Management
- Manage employee information.
- Organize employees into operational pods.
- Assign employees to brands and processes.
- Support employees working across multiple assignments.

### Brand Management
- Manage multiple brands.
- Support dedicated single-employee brands.
- Support brands with multiple employees.
- Configure brand-specific operational requirements.

### Process Management

The system is designed around operational processes including:

- Customer Support (CS)
- Abandoned Cart Conversion (ACC)
- Retention
- Non-Delivery Report (NDR)
- Other brand-specific operations.

### Pod Management
- Organize employees into operational pods.
- Associate pod leads with teams.
- View employees according to their operational pods.

### Roster Management
- Prepare monthly employee schedules.
- Display working days and weekly offs.
- Account for employee availability and leave information.
- View schedules across operational teams.

### Conflict Detection

The system is intended to identify:

- Insufficient employee coverage.
- Employee unavailability.
- Weekly-off conflicts.
- Planned leave conflicts.
- Scheduling issues affecting brand operations.

### Roster Modification

Roster changes should be validated after modifications to employee availability, assignments, or scheduling requirements.

## 4. Sample Dataset and Assumptions

The assignment requires a realistic sample dataset containing at least 30 employees.

The sample data is designed around:

- 30 employees.
- 20 fictional brands.
- 4 operational pods.
- 5 operational processes.

The staffing model represents both dedicated-resource brands and brands with multiple employees.

### Scheduling Assumptions

1. Some brands operate throughout the year, including Sundays and public holidays.
2. Some brands operate every day except public holidays.
3. Some brands have Sundays and public holidays off.
4. Employees may work across multiple brands and processes.
5. Employee availability and leave must be considered during roster planning.
6. Required operational coverage takes priority over preferred weekly-off arrangements.

These assumptions can be adjusted as operational requirements change.

## 5. Application Architecture

RosterIQ uses a React-based frontend built with Vite.

The application separates its user interface, application entry point, styling, and sample data.

### Project Structure

```text
RosterIQ/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── style.css
│   │
│   └── data/
│       └── seedData.js
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

### Architecture Explanation

- `App.jsx`: Main application interface and components.
- `main.jsx`: React application entry point.
- `style.css`: Application styling.
- `seedData.js`: Sample application data.
- `index.html`: Main HTML entry point.
- `package.json`: Project dependencies and scripts.

**Note:** This version uses a frontend-based architecture. A production backend, centralized database, and authentication system would be important future improvements if they are not already implemented.

## 6. Scheduling Approach

The scheduling problem involves matching employee availability with brand and process operating requirements.

A valid roster must consider:

1. Employee assignments.
2. Brand operating calendars.
3. Process-specific working rules.
4. Employee weekly offs.
5. Planned leaves and approved comp-offs.
6. Minimum staffing requirements.
7. Employees assigned to multiple responsibilities.

The scheduling process should validate coverage after generating or modifying a roster.

If a required process does not have sufficient available employees, the system should report a coverage gap rather than treating the roster as valid.

## 7. Technical Assessment Questions

### Q1. How did you model employees, brands, processes, pods, and their relationships?

Employees are associated with operational pods and can be assigned to one or multiple brands and processes.

Brands contain their respective operational processes, and employees can be allocated according to process-specific requirements.

This structure supports both dedicated employee assignments and shared resource allocation.

### Q2. How does your system generate a roster and determine whether it satisfies the required constraints?

Roster planning considers employee assignments, working calendars, weekly offs, leaves, availability, and minimum coverage requirements.

The generated schedule should be checked against mandatory constraints to identify unavailable employees and insufficient staffing.

### Q3. How did you handle the difference between single-resource brands and brands with multiple employees?

Single-resource brands are managed through one dedicated employee responsible for their assigned processes.

For multi-resource brands, employees can be assigned to different processes, while multiple employees can also share the same process when additional coverage is required.

### Q4. What happens when an employee manages all processes for a brand but is unavailable on a required working day?

The system should identify the employee's unavailability and flag the affected brand and processes as having a coverage gap.

An operations manager can then review backup resources or manually adjust assignments before approving the roster.

### Q5. How does the system handle conflicting requirements or insufficient staffing?

Mandatory scheduling requirements should take priority over employee preferences.

If no valid assignment is possible, the conflict should be presented to the operations manager for manual resolution.

### Q6. Which parts of the process did you automate, and which did you leave under human control? Why?

Roster preparation, schedule organization, and validation are intended to be assisted by the application.

Final decisions involving unresolved staffing conflicts, employee reassignment, and roster approval remain under human control.

This ensures that operational decisions can be reviewed by the responsible manager.

### Q7. If the company doubled its team and brand count, what would you change about your solution?

I would introduce a centralized backend and relational database, optimize the scheduling algorithm, and use more efficient data retrieval and validation.

I would also implement role-based access, API-based integrations, and scalable deployment infrastructure.

### Q8. If you had one additional week to work on this, what would you improve first?

I would prioritize:

1. Improving scheduling and coverage validation.
2. Implementing a persistent database.
3. Adding automated backup resource recommendations.
4. Introducing roster approval workflows.
5. Adding Excel and CSV exports.
6. Improving reporting and notification functionality.

## 8. Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### Clone the Repository

```bash
git clone https://github.com/Yaqub100/RosterIQ.git
```

### Navigate to the Project

```bash
cd RosterIQ
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

The production build will be generated inside the `dist` directory.

## 9. Deployment

The application is deployed using Vercel.

**Live URL:** https://roster-iq-qv7p.vercel.app/

Deployment workflow:

1. Source code is maintained on GitHub.
2. GitHub repository is connected to Vercel.
3. Vercel installs project dependencies.
4. Vite builds the production application.
5. Vercel hosts the generated production files.

## 10. Future Improvements

Potential improvements include:

- Persistent database integration.
- Secure user authentication.
- Role-based permissions for managers and pod leads.
- Advanced scheduling optimization.
- Fair distribution of weekly offs.
- Automatic roster regeneration after approved leave.
- Backup employee recommendations.
- Roster approval workflows.
- Email notifications.
- Excel and Google Sheets integration.
- AI-assisted explanations of scheduling conflicts.

## 11. Conclusion

RosterIQ is designed to address the operational challenges of managing employees and monthly rosters across multiple brands and processes.

The main focus is to make workforce planning more organized, improve resource allocation, identify coverage gaps, and support better scheduling decisions.

The project demonstrates an approach to solving a real-world workforce management problem through a centralized roster management application.

---

**Project:** RosterIQ – Smart Roster Management System  
**Assessment:** DataStraw Tech Internship  
**Developer:** [Your Full Name]  
**GitHub:** https://github.com/Yaqub100/RosterIQ  
**Live Application:** https://roster-iq-qv7p.vercel.app/
