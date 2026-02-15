import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, onSnapshot } from "firebase/firestore";

interface GalleryImage {
  src: string;
  title: string;
}

interface SiteSettings {
  youtubeUrl: string;
  bookingPrice: string;
  description: string;
  gallery: GalleryImage[];
  adminPassword: string;
}

interface AdminContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: SiteSettings) => Promise<void>;
  loading: boolean;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const defaultSettings: SiteSettings = {
  youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  bookingPrice: "Contact for Pricing",
  description: "Official website of Griha Lakshmi Marriage Hall. The perfect venue for your sacred celebrations.",
  adminPassword: "admin123",
  gallery: [
    { src: "/placeholder.svg", title: "Grand Shaadi" },
    { src: "/placeholder.svg", title: "Engagement Ceremony" },
    { src: "/placeholder.svg", title: "Traditional Haldi" },
    { src: "/placeholder.svg", title: "Elegant Mehendi" },
    { src: "/placeholder.svg", title: "Royal Reception" },
    { src: "/placeholder.svg", title: "Vibrant Sangeet" },
  ],
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const settingsRef = useRef<SiteSettings>(defaultSettings);

  useEffect(() => {
    // Check if user is authenticated in sessionStorage
    const authStatus = sessionStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    const unsub = onSnapshot(doc(db, "settings", "main"), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as Partial<SiteSettings>;
        // Merge with defaults to ensure all fields are present
        const mergedSettings = { ...defaultSettings, ...data };
        setSettings(mergedSettings);
        settingsRef.current = mergedSettings;
      } else {
        // Initialize with defaults if doesn't exist
        setDoc(doc(db, "settings", "main"), defaultSettings);
        setSettings(defaultSettings);
        settingsRef.current = defaultSettings;
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching settings:", error);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // Keep ref in sync with settings state
  useEffect(() => {
    settingsRef.current = settings;
  }, [settings]);

  const login = useCallback((password: string): boolean => {
    // Use ref to get the latest settings value
    const currentSettings = settingsRef.current;
    
    // Safety check for undefined settings or adminPassword
    if (!currentSettings || !currentSettings.adminPassword) {
      return false;
    }
    
    // Trim whitespace and compare
    const trimmedPassword = (password || "").trim();
    const storedPassword = (currentSettings.adminPassword || "").trim();
    
    if (trimmedPassword === storedPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuthenticated', 'true');
      return true;
    }
    return false;
  }, []);

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuthenticated');
  };

  const updateSettings = async (newSettings: SiteSettings) => {
    try {
      await setDoc(doc(db, "settings", "main"), newSettings);
    } catch (error) {
      console.error("Error updating settings:", error);
      throw error;
    }
  };

  return (
    <AdminContext.Provider value={{ settings, updateSettings, loading, isAuthenticated, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};