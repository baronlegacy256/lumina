import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end ">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="rounded-full bg-green-700 p-3 w-10 h-10 flex items-center justify-center text-white font-bold uppercase">
              B
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="capitalize">Baraka</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to="/settings">
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </Link>
            <Link to="/">
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
