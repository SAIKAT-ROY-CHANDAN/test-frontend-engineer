# E-Commerce Web Application

## Overview

This project is a fully functional, responsive e-commerce web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It provides a platform for users to browse products, view product details, and manage a shopping cart. The app integrates with a mock API (Fake Store API) to fetch product data and provides basic cart functionality, including adding/removing products and displaying the total quantity and price.

## Features

- **Product Listing Page**: Displays a list of products with images, names, and prices. It supports pagination for better browsing experience.
- **Product Detail Page**: Shows detailed information about a selected product and includes an "Add to Cart" button.
- **Shopping Cart**: Allows users to view the products they have added, remove products, and view the total price and quantity of items.
- **Responsive Design**: The app is optimized for desktop, tablet, and mobile devices using Tailwind CSS.

## How to Run the Application

### Steps to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/SAIKAT-ROY-CHANDAN/test-frontend-engineer.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd test-frontend-engineer
    ```

3. **Install dependencies**:
    ```bash
    yarn install
    ```

4. **Run the development server**:
    ```bash
    yarn dev
    ```

5. **Open the application in your browser**:
    - Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Available Scripts

- **`dev`**: Starts the development server using `turbopack` for faster builds.
    ```bash
    yarn dev
    ```
- **`build`**: Builds the production version of the application.
    ```bash
    yarn build
    ```
- **`start`**: Starts the production server after building the app.
    ```bash
    yarn start
    ```
- **`lint`**: Runs the linting process to ensure code quality.
    ```bash
    yarn lint
    ```

## Architectural Decisions

- **Next.js**: The app uses Next.js for server-side rendering and routing. It ensures fast page loads and optimized performance.
- **TypeScript**: TypeScript is used to enhance code quality by providing strong typing, reducing runtime errors, and improving developer experience.
- **Tailwind CSS**: Tailwind CSS is used for styling because it promotes rapid development with utility-first classes. It allows for a highly customizable design system.
- **Redux Toolkit**: Redux Toolkit is used for state management, which provides a clean and efficient way to manage the application state. It also includes **redux-persist** to ensure that the cart data is persisted across browser sessions.
- **Sonner**: Sonner is used to show notifications when an item is added or removed from the cart. It provides a sleek and customizable toast notification system.
- **Fake Store API**: A mock API is used for fetching product data. In a production environment, this would be replaced by a real e-commerce backend.

## Trade-offs and Assumptions

- **API Integration**: The app uses a mock API (Fake Store API) for fetching product data. This was a trade-off made for simplicity and to meet the project requirements within the timebox. In a real-world scenario, a custom API or a third-party e-commerce service would be used.

- **Performance**: The app implements infinite scrolling on the product listing page, which allows products to load dynamically as the user scrolls down the page. This approach provides a more seamless user experience compared to traditional pagination, but it can introduce performance challenges with large datasets. However, for simplicity, the mock API was used and the app doesn't implement any complex lazy loading or performance optimizations for the product images.

- **Cart Management**: The cart supports adding and removing items. The assumption is that a user would have a limited number of items in the cart, and the cart is stored in memory.

- **Responsive Design**: The app is designed to be responsive across all devices, but due to time constraints, only essential responsive adjustments were made using Tailwind CSS. More complex layout changes could be added as needed.

## Code Quality and Structure

- **SOLID Principles**: The code adheres to basic SOLID principles by separating concerns into smaller, reusable components. Although components are not reused in this particular implementation, the structure remains modular and maintainable.

- **Clean Code**: Throughout the application, the code is kept simple and clean to ensure that it is easy to read, maintain, and extend.

- **TypeScript**: The app uses TypeScript for strong typing, which helps catch potential bugs early and improves code maintainability.

- **Reusability**: The app does not have components reused across multiple pages. However, the UI components are designed to be self-contained and modular, making them easier to maintain in the future.



## Conclusion

This project demonstrates how to build a basic e-commerce application with essential features like browsing products, viewing product details, and managing a shopping cart. It showcases the use of modern front-end technologies such as Next.js, TypeScript, Tailwind CSS, Redux, and Sonner for a responsive and smooth user experience.

## Deployment

The application is deployed on Vercel and can be accessed via the following link:

[Live Demo](https://test-frontend-engineer.vercel.app/)
