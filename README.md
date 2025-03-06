# Portfolio Backend

This portfolio project consists of a Frontend and Backend system to showcase personal projects, blogs, and provide a contact form. The application uses Next.js with TypeScript for the frontend and Express.js for the backend. It includes user authentication using NextAuth and stores data in MongoDB.

---

## Live Links

- **Frontend (Live)**: [Portfolio Frontend](https://portfoliofontend5.vercel.app/)
- **Backend (Live)**: [Portfolio Backend](https://portfolio-backend5.vercel.app/)

## Source Code

- **Frontend Source Code**: [Portfolio Frontend GitHub](https://github.com/Md-sakib-al-hasan/portfoliofontend5)
- **Backend Source Code**: [Portfolio Backend GitHub](https://github.com/Md-sakib-al-hasan/PortfolioBackend5)

---

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)

---

## Features

- **Project Management**: CRUD operations for projects (Create, Read, Update, Delete).
- **Blog Management**:CRUD operations for blog posts.
- **Contact Form Submission**: Store messages in MongoDB or any database.
- **Security**: Input validation.

---

## Technologies

- TypeScript
- Express js
- Zod
- Mongoose

---

## Installation

### Prerequisites

1. Node.js (v14 or later)
2. npm

### Steps

1. Clone the repository:

   ```bash
   https://github.com/Md-sakib-al-hasan/portfoliofontend5

   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following environment variables:

   ```plaintext
    NODE_ENV=development
    PORT=5000
    DATABASE_URL
    BCRYPT_SALT_ROUNDS =10
    DEFAULT_PASS= sakib!123
    SUPER_ADMIN_PASSWORD= sakib!123
    SUPER_ADMIN_EMAIL=sakib@gmil.com
    SUPER_ADMIN_NAME=sakib
    DOMAIN_FONTEND=http://localhost:3000
    DOMAIN_SERVER=http://localhost:5000

   ```

4. Start the server:
   ```bash
      npm run start
   ```

---

## Contributing

1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Push to the branch
5. Open a pull request

## Contact

For any questions or support, reach out at [mdsakibalhasanprogrammer1@gmail.com](mailto:mdsakibalhasanprogrammer1@gmail.com).
