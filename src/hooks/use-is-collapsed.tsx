import { useEffect } from "react";
import useLocalState from "./use-local-storage";
import { DEFAULT_WINDOW_COLLAPSED_WIDTH } from "@/data/constants";

const useIsCollapsed = () => {
  const [isCollapsed, setIsCollapsed] = useLocalState({
    key: "collapsed-sidebar",
    defaultValue: false
  });

  useEffect(() => {
    const handleResize = () => {
        setIsCollapsed(window.innerWidth < DEFAULT_WINDOW_COLLAPSED_WIDTH ? false : isCollapsed);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [isCollapsed, setIsCollapsed]);

  return [isCollapsed, setIsCollapsed] as const
}

export default useIsCollapsed;