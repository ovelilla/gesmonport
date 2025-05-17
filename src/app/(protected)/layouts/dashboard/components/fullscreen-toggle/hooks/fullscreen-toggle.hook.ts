// Vendors
import { useEffect, useState } from "react";
// Handlers
import { FullscreenToggleHandlers } from "../handlers/fullscreen-toggle.handlers";

const FullscreenToggleHook = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { handleFullscreenChange, handleToggleFullscreen } =
    FullscreenToggleHandlers({
      setIsFullscreen,
    });

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return {
    handleToggleFullscreen,
    isFullscreen,
  };
};

export { FullscreenToggleHook };
