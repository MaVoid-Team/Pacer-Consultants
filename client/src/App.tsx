import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { useEffect } from "react";

// Get the base path from Vite's PUBLIC_URL or default to /Pacer-Consultants/
const BASE_PATH = import.meta.env.BASE_URL || '/Pacer-Consultants/';

function Router() {
  const [location, navigate] = useLocation();

  // Handle base path routing
  useEffect(() => {
    const basePath = BASE_PATH.replace(/\/$/, ''); // Remove trailing slash
    if (location.startsWith(basePath)) {
      const path = location.slice(basePath.length) || '/';
      if (path !== location) {
        navigate(path);
      }
    }
  }, [location, navigate]);

  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
