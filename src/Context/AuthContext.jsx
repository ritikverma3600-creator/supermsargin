// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Test users — replace with API call later
const TEST_USERS = [
  { id: 1, name: "Kumar Ashish", email: "kumar@test.com", password: "test123", role: "buyer" },
  { id: 2, name: "Mahesh Kumar", email: "mahesh@test.com", password: "test123", role: "buyer" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Later: replace this block with → const res = await fetch("/api/auth/login", ...)
    const found = TEST_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (found) {
      const userData = { id: found.id, name: found.name, email: found.email, role: found.role };
      setUser(userData);
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(userData));
      return { success: true };
    }

    return { success: false, error: "Invalid email or password" };
  };

  const logout = () => {
    // Later: add → await fetch("/api/auth/logout")
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}