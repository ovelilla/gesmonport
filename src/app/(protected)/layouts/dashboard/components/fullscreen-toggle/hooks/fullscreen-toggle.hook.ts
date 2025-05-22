// Vendors
import { useEffect, useMemo, useState } from "react";
// Handlers
import { FullscreenToggleHandlers } from "../handlers/fullscreen-toggle.handlers";

const FullscreenToggleHook = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const { handleFullscreenChange, handleToggleFullscreen } = useMemo(
    () => FullscreenToggleHandlers({ setIsFullscreen }),
    [setIsFullscreen],
  );

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  return {
    handleToggleFullscreen,
    isFullscreen,
  };
};

export { FullscreenToggleHook };
