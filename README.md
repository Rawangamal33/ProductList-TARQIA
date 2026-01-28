# Product List Dashboard

A React application that displays a list of products, allows searching, and shows product details in a modal.  
This project demonstrates React fundamentals, component structure, state management, API handling, and attention to UI/UX details.

---

## Features

- **Fetch Products**: Uses Axios to fetch products from [FakeStore API](https://fakestoreapi.com/products) on page load.
- **AbortController**: Cancels in-flight requests when components unmount to prevent memory leaks and unnecessary network calls.
- **Display Products**: Products are displayed in a responsive grid using a reusable `ProductCard` component.
- **Search Functionality**: Includes a debounced search input to filter products by title efficiently.
- **Product Details Modal**: Clicking a product opens a modal with detailed information, including description, category, and rating. Built with a reusable dialog system.
- **Loading States**: Shows a spinner while fetching data.
- **Error Handling**: 
  - API errors are displayed using a reusable `ErrorScope` component.
  - Runtime errors are caught with an `ErrorBoundary` to prevent the app from crashing.
- **Empty State Handling**: Gracefully informs the user when no products match the search criteria.

---

## Tech Stack

- **React** (functional components, hooks: `useState`, `useEffect`, `useMemo`)  
- **TypeScript** for type safety  
- **Axios** for API requests  
- **Tailwind CSS** for styling  
- **Material UI** for Dialogs and Rating components  
- **Vite** as the build tool  

---

## Project Structure (Simplified)

+---public
|       vite.svg
|       
\---src
    |   App.tsx
    |   index.css
    |   main.tsx
    |   
    +---assets
    |       react.svg
    |       shopIcon.png
    |       
    +---components
    |   +---Dialogs
    |   |       DialogCom.tsx
    |   |       DialogHeader.tsx
    |   |       DialogTrigger.tsx
    |   |       
    |   +---ErrorHandlers
    |   |       ErrorBoundaryFallback.tsx
    |   |       ErrorScope.tsx
    |   |       
    |   +---Loaders
    |   |       CircularProgress.tsx
    |   |       
    |   \---ui
    |       |   Header.tsx
    |       |   
    |       \---ProductList
    |               ProductCard.tsx
    |               ProductDetailsDialog.tsx
    |               ProductList.tsx
    |               
    +---context
    |       DialogProvider.tsx
    |       
    +---hooks
    |       useDebounce.ts
    |       useProducts.ts
    |       
    +---pages
    |       Home.tsx
    |       
    +---services
    |       api.ts
    |       
    \---types
            error.ts
            product.ts
            

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>


2. Install dependencies:
   npm install

3. Create a .env file:
   VITE_BASE_URL=https://fakestoreapi.com

4.  Run the project:
   npm run dev


