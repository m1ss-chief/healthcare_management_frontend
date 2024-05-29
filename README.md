```markdown
# Healthcare Management System Frontend

This repository contains the frontend code for the Healthcare Management System.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Directory Structure](#directory-structure)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)


## Introduction

The Healthcare Management System frontend is built using modern web technologies to provide a user-friendly interface for managing patient appointments, querying doctor's available slots, booking and canceling appointments, and accessing first aid advice and medicine information.

## Features

- User registration
- Query available slots for doctors
- Book and cancel appointments
- First aid advice
- Medicine information

## Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/healthcare_management_frontend.git
cd healthcare_management_frontend
```

2. Install the required Node.js packages:

```sh
npm install
```

## Configuration

```plaintext
# .env.development
VITE_BACKEND_URL=http://localhost:8000  # or your backend URL for development

# .env.production
VITE_BACKEND_URL=https://your-production-backend-url  # or your backend URL for production
```

## Usage

### Running the Development Server

To run the frontend development server, execute:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To create a production build, execute:

```sh
npm run build
```

The build artifacts will be stored in the `dist` directory.

 
