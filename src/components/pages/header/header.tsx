import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import { ThemeToggle } from "../../theme/themeToggle";
import { Separator } from "../../ui/separator";
import AccountMenu from "./account-menu";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:spa">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Perdidos
          </NavLink>
        </nav>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
        <div>
          <AccountMenu />
        </div>
      </div>

    </div>
  )
}
