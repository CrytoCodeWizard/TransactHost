import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./common/SideBar";
import useIsCollapsed from "@/hooks/use-is-collapsed";
import { isTokenValid, refreshToken } from "@/api/authService";

const AppShell = () => {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('accessToken');
      if (!token || !isTokenValid(token)) {
        const refreshed = await refreshToken();
        if (!refreshed) {
          navigate('/sign-in');
        }
      }
    };
    checkAuth();
  }, [navigate]);

  return (
    <div className="relative h-full overflow-hidden bg-background">
      <SideBar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed} />
      <main
        id="content"
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}>
        <Outlet />
      </main>
    </div>
  )
}

export default AppShell;