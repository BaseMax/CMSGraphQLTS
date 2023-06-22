# GraphQL CMS Project

This is a GraphQL-based project developed in TypeScript. It aims to provide a full-featured Content Management System (CMS) with various functionalities including categories, posts, sliders, FAQs, contact us responses, authentication, and more.

## Features

The CMS includes the following features:

- Categories: Allows managing different categories for organizing posts.
- Posts: Enables creating, reading, updating, and deleting posts.
- Posts in a Category: Provides the ability to retrieve posts belonging to a specific category.
- FAQ: Allows creating and managing frequently asked questions.
- Slider: Offers functionality to create and manage image sliders for the website.
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
- Postgresql: A SQL database used for storing CMS data.
- Prisma : Prisma is an open-source database toolkit and Object-Relational Mapping (ORM) tool..
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

## GraphQL Examples

**Retrieve a list of all categories:**

```graphql
query {
  categories {
    id
    name
  }
}
```

**Retrieve a specific category by ID:**

```graphql
query {
  category(id: "CATEGORY_ID") {
    id
    name
  }
}
```

**Retrieve a list of all posts:**

```graphql
query {
  posts {
    id
    title
    content
  }
}
```

**Retrieve a specific post by ID:**

```graphql
query {
  post(id: "POST_ID") {
    id
    title
    content
  }
}
```

**Retrieve all posts belonging to a specific category:**

```graphql
query {
  postsByCategory(categoryId: "CATEGORY_ID") {
    id
    title
    content
  }
}
```

**Retrieve a list of all sliders:**

```graphql
query {
  sliders {
    id
    title
    images
  }
}
```

**Retrieve a specific slider by ID:**

```graphql
query {
  slider(id: "SLIDER_ID") {
    id
    title
    images
  }
}
```

**Retrieve a list of all frequently asked questions:**

```graphql
query {
  faqs {
    id
    question
    answer
  }
}
```

**Retrieve a specific FAQ by ID:**

```graphql
query {
  faq(id: "FAQ_ID") {
    id
    question
    answer
  }
}
```

**Retrieve a list of all contact form responses:**

```graphql
query {
  contactUsResponses {
    id
    name
    email
    message
  }
}
```

**Retrieve a specific contact form response by ID:**

```graphql
query {
  contactUsResponse(id: "RESPONSE_ID") {
    id
    name
    email
    message
  }
}
```

**Check if the user is authenticated:**

```graphql
query {
  checkAuth
}
```

**Retrieve a specific administrator by ID:**

```graphql
query {
  admin(id: "ADMIN_ID") {
    id
    username
    email
  }
}
```

**Create a new category:**

```graphql
mutation {
  createCategory(input: { name: "New Category" }) {
    id
    name
  }
}
```

**Update an existing category:**

```graphql
mutation {
  updateCategory(id: "CATEGORY_ID", input: { name: "Updated Category" }) {
    id
    name
  }
}
```

**Delete a category:**

```graphql
mutation {
  deleteCategory(id: "CATEGORY_ID")
}
```

**Create a new post:**

```graphql
mutation {
  createPost(
    input: { title: "New Post", content: "Lorem ipsum dolor sit amet." }
  ) {
    id
    title
    content
  }
}
```

**Update an existing post:**

```graphql
mutation {
  updatePost(
    id: "POST_ID"
    input: { title: "Updated Post", content: "Lorem ipsum dolor sit amet." }
  ) {
    id
    title
    content
  }
}
```

**Delete a post:**

```graphql
mutation {
  deletePost(id: "POST_ID")
}
```

**Create a new slider:**

```graphql
mutation {
  createSlider(
    input: { title: "New Slider", images: ["image1.jpg", "image2.jpg"] }
  ) {
    id
    title
    images
  }
}
```

**Update an existing slider:**

```graphql
mutation {
  updateSlider(
    id: "SLIDER_ID"
    input: { title: "Updated Slider", images: ["image3.jpg", "image4.jpg"] }
  ) {
    id
    title
    images
  }
}
```

**Delete a slider:**

```graphql
mutation {
  deleteSlider(id: "SLIDER_ID")
}
```

**Create a new frequently asked question:**

```graphql
mutation {
  createFAQ(
    input: {
      question: "What is GraphQL?"
      answer: "GraphQL is a query language for APIs."
    }
  ) {
    id
    question
    answer
  }
}
```

**Update an existing frequently asked question:**

```graphql
mutation {
  updateFAQ(
    id: "FAQ_ID"
    input: {
      question: "What is GraphQL?"
      answer: "GraphQL is a powerful query language for APIs."
    }
  ) {
    id
    question
    answer
  }
}
```

**Delete a frequently asked question:**

```graphql
mutation {
  deleteFAQ(id: "FAQ_ID")
}
```

**Create a new contact form response:**

```graphql
mutation {
  createContactUsResponse(
    input: {
      name: "John Doe"
      email: "johndoe@example.com"
      message: "Hello, I have a question."
    }
  ) {
    id
    name
    email
    message
  }
}
```

**Delete a contact form response:**

```graphql
mutation {
  deleteContactUsResponse(id: "RESPONSE_ID")
}
```

**Log in and generate an authentication token:**

```graphql
mutation {
  login(input: { username: "admin", password: "password" }) {
    token
  }
}
```

**Log out and invalidate the authentication token:**

```graphql
mutation {
  logout
}
```

**Create a new administrator:**

```graphql
mutation {
  createAdmin(
    input: {
      username: "newadmin"
      email: "newadmin@example.com"
      password: "password"
    }
  ) {
    id
    username
    email
  }
}
```

Please note that you need to replace the placeholder values like CATEGORY_ID, POST_ID, etc., with actual IDs or data when making requests to the GraphQL API.

## License

The GraphQL CMS project is licensed under the GPL-3.0 License. You can find the license information in the LICENSE file.

Copyright 2023, Max Base
