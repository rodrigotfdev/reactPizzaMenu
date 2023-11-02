# Fast React Pizza Co.

The code provided is a React-based application representing a menu for a pizza restaurant. It is structured into different components to manage the header, menu items, and footer.

## Summary
The application has the following key components:

1. **`App` Component**: 
   - Wraps the entire application, containing the `Header`, `Menu`, and `Footer` components.
  
2. **`Header` Component**: 
   - Contains the company name styled with an optional CSS-in-JS object.
  
3. **`Menu` Component**: 
   - Displays the restaurant's menu. It checks the number of available pizzas and, if present, maps through the list to display individual `Pizza` components.
  
4. **`Pizza` Component**: 
   - Renders each pizza item. It checks for the availability of the pizza and renders details such as name, ingredients, image, and price.
  
5. **`Footer` Component**: 
   - Determines the restaurant's operating hours and displays an order button if the restaurant is open.

6. **`Order` Component**: 
   - Appears in the footer when the restaurant is open. It displays operating hours and an order button for online orders.

## Key Concepts used

✅ **Component Structure**: The application follows a structured component-based architecture, enabling modularity and reusability.
  
✅ **Conditional Rendering**: Conditional rendering is used to display components based on factors like the availability of menu items and the restaurant's opening hours.
  
✅ **Props and Data Mapping**: Props are used to pass data between components. The list of pizzas is mapped to render individual `Pizza` components.

✅ **Component Styling**: Inline styling is used within the `Header` component to apply CSS properties.

✅ **React Lifecycle Methods**: The code contains commented-out lifecycle method checks, such as operating hours, which can affect the display.

## See it in practice

You can preview the application at the following link: [VERCEL LIVE APP PREVIEW](https://pizza-menu-iota.vercel.app/)

or clone the repository to your computer and run 'npm install' and 'npm run dev' in the terminal to open it.

## Project Images

![image](https://github.com/rodrigotfdev/reactPizzaMenu/assets/52326702/2f2a9c8e-47f6-4c25-9dcf-97f3e8487823)





