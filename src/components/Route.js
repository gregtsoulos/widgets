import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  //state to update the route
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    //we defined the callback function as a seperate function just so
    // we could easily to remove it
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
