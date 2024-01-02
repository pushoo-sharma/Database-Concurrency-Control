# Database Concurrency Control Example

This project demonstrates a simple example of implementing database concurrency control using Sequelize in a Node.js/Express application with a MySQL database.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Understanding Database Concurrency Control](#understanding-database-concurrency-control)
- [Executing the Script](#executing-the-script)
- [Additional Notes](#additional-notes)

## Introduction

This project showcases a Node.js/Express application that interacts with a MySQL database using Sequelize. The application includes a basic API endpoint (`POST /`) that increments a counter in the database.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MySQL
- Sequelize

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. Install dependencies:

    ```bash
    cd your-repo
    npm install
    ```

3. Configure the database credentials:

    Open `TSroute.ts` and replace the placeholder values with your actual database credentials:

    ```javascript
    const sequelize = new Sequelize('your-database', 'your-username', 'your-password', {
        host: 'localhost',
        dialect: 'mysql',
    });
    ```

4. Sync the model with the database:

    ```bash
    npm run sync
    ```

## Understanding Database Concurrency Control

The main file `TSroute.ts` includes a `POST` endpoint that increments a counter in the database. It uses Sequelize for database interactions.

1. The `Count` model is defined with two columns: `id` (primary key) and `count`.
2. The `POST` endpoint finds the row with `id = 1`, increments the `count` value, and updates the database.

## Executing the Script

To execute the script that simulates 1000 POST requests:

```bash
chmod +x execute_1000_times.sh
./execute_1000_times.sh
