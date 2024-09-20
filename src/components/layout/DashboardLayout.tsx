import {
  Bell,
  Home,
  LineChart,
  Menu,
  Package,
  Search,
  ShoppingCart,
  Ticket,
  User,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logOut, selectAuth } from "@/redux/features/auth/AuthSlice";
import { NavLink } from "react-router-dom";

const DashboardLayout = () => {
  const auth = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] gap-2">
        {/* sidebar for large screen */}
        <div className="hidden shadow-md lg:block">
          <div className="flex h-full max-h-screen flex-col gap-2 p-4">
            <div className="flex h-14 items-center lg:h-[60px] border-b">
              <Link to="/" className="flex items-center gap-2">
                <h1 className="text-xl font-extrabold">
                  <span className="text-primary">Game</span>Spaces
                </h1>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            {/* nav menu */}
            <div className="flex-1">
              <nav className="grid items-start text-sm font-medium">
                <NavLink
                  to="/dashboard/index"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-primary transition-all hover:text-primary"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="/dashboard/bookings"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-primary transition-all hover:text-primary"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <Ticket className="h-4 w-4" />
                  {auth?.user?.role === "admin" ? "Bookings" : "My Bookings"}
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </NavLink>
                <NavLink
                  to="/dashboard/facilities"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-primary transition-all hover:text-primary"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <Package className="h-4 w-4" />
                  Facilities{" "}
                </NavLink>
                <NavLink
                  to="/dashboard/admins"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "flex items-center gap-3 rounded-lg px-3 py-2 bg-muted text-primary transition-all hover:text-primary"
                      : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  }
                >
                  <Users className="h-4 w-4" />
                  Admins
                </NavLink>
              </nav>
            </div>
            <div className="mt-auto">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* main ui */}
        <div className="flex flex-col w-full gap-2 p-4">
          <header className="flex h-14 items-center gap-4 lg:h-[60px] pb-2 shadow-sm">
            {/* sidebar toggle menu icon for small screen */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 lg:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                {/* nav menus */}
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <h1 className="text-xl font-extrabold">
                      <span className="text-primary">Game</span>Spaces
                    </h1>
                  </Link>
                  <Link
                    to="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    to="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Orders
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge>
                  </Link>
                  <Link
                    to="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    Products
                  </Link>
                  <Link
                    to="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Users className="h-5 w-5" />
                    Customers
                  </Link>
                  <Link
                    to="#"
                    className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <LineChart className="h-5 w-5" />
                    Analytics
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            {/* search field */}
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
            </div>
            {/* user profile in the right side */}
            {auth.accessToken ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="overflow-hidden rounded-full size-10 p-2"
                  >
                    <User size={24} className="overflow-hidden rounded-full" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <p>{auth?.user?.name}</p>
                    <p className="font-normal text-xs text-zinc-600">
                      {auth?.user?.email}
                    </p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to={"/dashboard"}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => dispatch(logOut())}
                    className="text-destructive"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
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
            )}
          </header>
          {/* main content body */}
          <main className="flex flex-1 flex-col">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
