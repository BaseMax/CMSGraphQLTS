# GraphQL CMS Project

This is a GraphQL-based project developed in TypeScript. It aims to provide a full-featured Content Management System (CMS) with various functionalities including categories, posts, sliders, FAQs, contact us responses, authentication, and more.

## Features

The CMS includes the following features:

- Categories: Allows managing different categories for organizing posts.
- Posts: Enables creating, reading, updating, and deleting posts.
- Posts in a Category: Provides the ability to retrieve posts belonging to a specific category.
- Slider: Offers functionality to create and manage image sliders for the website.
- FAQ: Allows creating and managing frequently asked questions.
- Contact Us Response: Provides a mechanism for handling and responding to contact form submissions.
- Authentication: Enables user authentication for secure access to the CMS.
- Check Auth: Allows verifying the authentication status of a user.
- Logout: Provides the ability to log out from the CMS.
- Create New Admin: Allows creating new administrators for the CMS.

## Technologies Used

The project utilizes the following technologies and tools:

- GraphQL: A query language for APIs used to define the schema and interact with the CMS.
- TypeScript: A statically typed superset of JavaScript used for writing the server-side code.
- Node.js: A JavaScript runtime used as the server environment.
- Express: A web application framework for Node.js used to handle HTTP requests.
- MongoDB: A NoSQL database used for storing CMS data.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB used to interact with the database.
- Apollo Server: A GraphQL server library for Node.js used to create the GraphQL server.
- JWT: JSON Web Tokens used for authentication and authorization.

## Setup Instructions

To set up and run the GraphQL CMS project locally, follow these steps:

- Clone the repository: git clone https://github.com/BaseMax/CMSGraphQLTS.git
- Navigate to the project directory: `cd CMSGraphQLTS`
- Install dependencies: `npm install`
- Configure the database connection in the `.env` file.
- Start the development server: `npm run dev`
- Access the GraphQL playground at http://localhost:3000/graphql in your browser.

## Project Structure

The project's file structure is organized as follows:

- src/
- controllers/: Contains the controllers responsible for handling GraphQL operations.
- models/: Includes the Mongoose models for interacting with the database.
- resolvers/: Contains the GraphQL resolvers that define how to handle GraphQL queries and mutations.
- schemas/: Includes the GraphQL schemas that define the types and operations supported by the CMS.
- utils/: Contains utility functions and modules used throughout the project.
- index.ts: The entry point of the server.

## License

The GraphQL CMS project is licensed under the GPL-3.0 License. You can find the license information in the LICENSE file.

Copyright 2023, Max Base
