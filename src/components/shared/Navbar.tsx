import { Link } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="flex h-16 md:h-20 w-full shrink-0 justify-between items-center px-4 md:px-6 shadow-sm sticky z-50 backdrop-blur-3xl bg-white/50">
      {/* sidebar for small screen */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={toggleSidebar}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link to="/" className="flex items-center gap-2 group">
            <h1 className="text-xl font-extrabold">
              <span className="text-primary">Game</span>Space
            </h1>
          </Link>
          <nav className="mt-6 grid gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
              onClick={closeSidebar}
            >
              Home
            </Link>
            <Link
              to="/facilities"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Facilities
            </Link>
            <Link
              to="/products"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Contact
            </Link>
            <Link
              to="/blogs"
              className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Blogs
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Navbar for large screen */}
      <div className="hidden lg:flex">
        <Link to="/" className="flex items-center gap-2 group">
          <h1 className="text-2xl font-extrabold">
            <span className="text-primary">Game</span>Space
          </h1>
        </Link>
      </div>

      {/* Nav menus */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              to="/"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Home
            </Link>
          </NavigationMenuLink>

          {/* Facilities */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-base z-50">
              Facilities
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {/* {categories?.map((item: TCategory) => (
                  <ListItem key={item._id} category={item}></ListItem>
                ))} */}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuLink asChild>
            <Link
              to="/about-us"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              About Us
            </Link>
          </NavigationMenuLink>

          {/* contact */}
          <NavigationMenuLink asChild>
            <HashLink
              to="/contact"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Contact
            </HashLink>
          </NavigationMenuLink>

          {/* blogs */}
          <NavigationMenuLink asChild>
            <HashLink
              to="/blogs"
              className="inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-base font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
              Blogs
            </HashLink>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
      {/* Right side menu items */}
      <div className="flex items-center gap-1">
        <Link to={"/login"}>
          <Button
            variant={"ghost"}
            className="text-base relative flex items-center gap-2"
          >
            Login
          </Button>
        </Link>
        <Link to={"/sign-up"}>
          <Button className="text-base relative flex items-center gap-2">
            Sign up
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;