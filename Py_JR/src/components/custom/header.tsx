import { Button } from "../ui/button";
import { NavLink, useNavigate } from "react-router";
import { Menu, Moon, Sun, House, Calendar, ClipboardCheck, CircleDollarSign, UserCheck, Medal } from "lucide-react";
import { cn } from "../../lib/utils";
import { useState } from "react";
import { useTheme } from "../../context/theme-context";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4">

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full hover:bg-accent/90 transition-all"
          >
            <img
              src="/Logo.png"
              alt="Logo academia"
              className="hover:scale-105 transition-transform"
            /> TKD
          </Button>
        </div>

        <nav className={cn(
          "md:flex md:justify-end md:items-center md:gap-1",
          "fixed md:static inset-x-0 top-[3.5rem] p-4 border-b md:border-none bg-background/95 backdrop-blur md:backdrop-blur-none md:bg-transparent",
          "flex-col md:flex-row gap-2 md:gap-1",
          !isMenuOpen && "hidden"
        )}>

          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <House className="h-4 w-4" />
            <span>Inicio</span>
          </NavLink>

          <NavLink
            to="/cinturon"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <Medal className="h-4 w-4" />
            <span>Cinturones</span>
          </NavLink>

          <NavLink
            to="/horario"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <Calendar className="h-4 w-4" />
            <span>Horarios</span>
          </NavLink>

          <NavLink
            to="/asistencia"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <ClipboardCheck className="h-4 w-4" />
            <span>Asistencia</span>
          </NavLink>

          <NavLink
            to="/pagos"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <CircleDollarSign className="h-4 w-4" />
            <span>Pagos</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <UserCheck className="h-4 w-4" />
            <span>Login</span>
          </NavLink>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="md:hidden flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium"
          >
            {theme === "light" ? (
              <>
                <Moon className="h-4 w-4" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <Sun className="h-4 w-4" />
                <span>Light Mode</span>
              </>
            )}
          </Button>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full hidden md:flex"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

      </div>

    </header>
  );
};

export default Header;
