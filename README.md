# HireSphere Job Portal

Welcome to HireSphere, a job portal built with Next.js! This platform allows users to register as candidates or recruiters, post and apply for jobs, manage activities, and update personal information. It integrates user authentication using Clerk and stores data in MongoDB.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication using Clerk
- Role-based access for candidates and recruiters
- Post and apply for jobs
- Manage personal information and activities
- Search and filter functionalities
- Responsive design

## Technologies Used

- **Next.js:** React framework for server-side rendering and static site generation.
- **React.js:** JavaScript library for building user interfaces.
- **MongoDB:** NoSQL database for storing user and job data.
- **Clerk:** User authentication and management.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **Node.js:** JavaScript runtime for server-side development.
- **Vercel:** Platform for deploying Next.js applications.

## Project Structure

```bash
├── actions
│   └── index.js
├── components
│   ├── account-info
│   ├── activity-activity
│   ├── candidate-job-activity
│   ├── candidate-list
│   ├── common-card
│   ├── common-form
│   ├── common-layout
│   ├── companies
│   ├── feed
│   ├── header
│   ├── job-applicants
│   ├── job-icon
│   ├── job-listing
│   ├── membership
│   ├── post-new-job
│   ├── recruiter-job-card
│   └── ui
├── app
│   ├── account
│   ├── activity
│   ├── companies
│   ├── feed
│   ├── page.js
│   ├── layout.js
│   ├── jobs
│   ├── membership
│   ├── onboard
│   ├── signin
│   └── signup
├── database
│   └── index.js
├── lib
│   └── Utils.js
├── models
│   ├── Application.js
│   ├── Job.js
│   ├── profile.js
│   └── User.js
├── utils
│   └── index.js
├── middleware.js
├── public
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── tailwind.config.js
```

## Installation

1. **Clone the repository:**

```
git clone <https://github.com/yourusername/hireSphere.git>

cd hireSphere
```

1. **Install dependencies:**

```
npm install
```

1. **Set up environment variables:**

Create a .env.local file in the root directory and add your environment variables:

```
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
URL=http://localhost:3000
MONGODB_URL=
```

1. **Run the development server:**

```
npm run dev

Open <http://localhost:3000> with your browser to see the result.
```

## Configuration

Update the next.config.js file to configure your project settings. You can also customize the Tailwind CSS configuration in the tailwind.config.js file.

## Usage

- **Home:** Visit the home page to see an overview of the job portal.
- **Feed:** Explore the latest job listings and updates.
- **Login:** Sign in to your account.
- **Register:** Create a new account.
- **Activity:** View your application history and activities.
- **Companies:** Browse through registered companies.
- **Jobs:** Search and apply for jobs.
- **Membership:** Manage your membership and subscriptions.
- **Account:** Update your profile and manage account settings.

## API Endpoints

- **GET /api/jobs:** Retrieve a list of job postings.
- **POST /api/jobs:** Create a new job posting.
- **GET /api/jobs/:id:** Retrieve details of a specific job.
- **PUT /api/jobs/:id:** Update a specific job posting.
- **DELETE /api/jobs/:id:** Delete a specific job posting.
- **GET /api/users:** Retrieve a list of users.
- **POST /api/users:** Create a new user.
- **GET /api/users/:id:** Retrieve details of a specific user.
- **PUT /api/users/:id:** Update a specific user.
- **DELETE /api/users/:id:** Delete a specific user.
- **GET /api/applications:** Retrieve a list of job applications.
- **POST /api/applications:** Submit a new job application.
- **GET /api/applications/:id:** Retrieve details of a specific application.
- **PUT /api/applications/:id:** Update a specific application.
- **DELETE /api/applications/:id:** Delete a specific application.


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.