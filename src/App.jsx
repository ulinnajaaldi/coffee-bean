import React, { Suspense, useState } from "react";
import HomePage from "./pages/home-page";
import LoadingScreen from "./pages/loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <Suspense
        fallback={<LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      >
        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <HomePage />
        )}
      </Suspense>
    </div>
  );
}
