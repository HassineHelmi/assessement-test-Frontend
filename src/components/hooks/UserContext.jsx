import React, { createContext, useState, useContext } from "react";

// Create a context to manage user authentication state
const UserContext = createContext();

// UserProvider component: Provides user authentication state to its children
export function UserProvider({ children }) {
  // Initialize the user state with null (not authenticated)
  const [user, setUser] = useState(null);

  // Provide the user state and setUser function to its children via context
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook: useUser
// This hook allows components to easily access the user context
export function useUser() {
  // Use the useContext hook to access the UserContext and retrieve user information
  return useContext(UserContext);
}
