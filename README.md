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

## GraphQL

Here's a list of the queries and mutations available in the GraphQL CMS project:

### Queries

- `categories`: Retrieve a list of all categories.
- `category(id: ID!)`: Retrieve a specific category by ID.
- `posts`: Retrieve a list of all posts.
- `post(id: ID!)`: Retrieve a specific post by ID.
- `postsByCategory(categoryId: ID!)`: Retrieve all posts belonging to a specific category.
- `sliders`: Retrieve a list of all sliders.
- `slider(id: ID!)`: Retrieve a specific slider by ID.
- `faqs`: Retrieve a list of all frequently asked questions.
- `faq(id: ID!)`: Retrieve a specific FAQ by ID.
- `contactUsResponses`: Retrieve a list of all contact form responses.
- `contactUsResponse(id: ID!)`: Retrieve a specific contact form response by ID.
- `checkAuth`: Check if the user is authenticated.
- `admin(id: ID!)`: Retrieve a specific administrator by ID.

### Mutations

- `createCategory(input: CategoryInput!)`: Create a new category.
- `updateCategory(id: ID!, input: CategoryInput!)`: Update an existing category.
- `deleteCategory(id: ID!)`: Delete a category.
- `createPost(input: PostInput!)`: Create a new post.
- `updatePost(id: ID!, input: PostInput!)`: Update an existing post.
- `deletePost(id: ID!)`: Delete a post.
- `createSlider(input: SliderInput!)`: Create a new slider.
- `updateSlider(id: ID!, input: SliderInput!)`: Update an existing slider.
- `deleteSlider(id: ID!)`: Delete a slider.
- `createFAQ(input: FAQInput!)`: Create a new frequently asked question.
- `updateFAQ(id: ID!, input: FAQInput!)`: Update an existing frequently asked question.
- `deleteFAQ(id: ID!)`: Delete a frequently asked question.
- `createContactUsResponse(input: ContactUsResponseInput!)`: Create a new contact form response.
- `deleteContactUsResponse(id: ID!)`: Delete a contact form response.
- `login(input: LoginInput!)`: Log in and generate an authentication token.
- `logout`: Log out and invalidate the authentication token.
- `createAdmin(input: AdminInput!)`: Create a new administrator.

## License

The GraphQL CMS project is licensed under the GPL-3.0 License. You can find the license information in the LICENSE file.

Copyright 2023, Max Base
