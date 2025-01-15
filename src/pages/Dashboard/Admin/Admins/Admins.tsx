import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { TUser } from "@/types/TAuth";
import { MoreHorizontal } from "lucide-react";
import { useGetAdminsQuery } from "@/redux/features/user/userApi";

const Admins = () => {
  // get admins data
  const { data, isFetching } = useGetAdminsQuery(undefined);
  const admins = data?.data;

  return (
    <div className="flex flex-1 flex-col gap-4 lg:gap-6">
      <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-6">
        {/* admins table */}
        <Card className="grid flex-1 h-full shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Admins</CardTitle>
            <CardDescription>
              Manage your admins and view their activities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] table-cell">
                    <span className="md:sr-only">Image</span>
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Email</TableHead>
                  <TableHead className="hidden md:table-cell">Phone</TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* show skeleton when fetching */}
                {isFetching
                  ? Array.from({ length: 5 })?.map((_, index) => (
                      <TableRow key={index}>
                        <TableCell className="hidden sm:table-cell">
                          <Skeleton className="w-full h-16" />
                        </TableCell>
                        <TableCell className="font-medium">
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                      </TableRow>
                    ))
                  : // display date when fetching completed
                    admins?.map((item: TUser, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="table-cell">
                          <Link to={``}>
                            <img
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src={
                                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                              }
                              width="64"
                            />
                          </Link>
                        </TableCell>
                        <TableCell className="font-medium">
                          {item?.name}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {item?.email}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {item?.phone}
                        </TableCell>
                        <TableCell>
                          {/* data action */}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="space-y-1"
                            >
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              {/* edit button */}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
              {admins?.length < 1 && (
                <TableCaption>
                  {/* show no data found message if admins is empty */}
                  <div className="text-center w-full mt-14">
                    <h3 className="text-2xl font-bold tracking-tight">
                      You have no admins
                    </h3>
                    {/* <p className="text-sm text-muted-foreground">
                      You can start selling as soon as you add a facility.
                    </p>
                    <Link to={"/admins"}>
                      <Button className="mt-4">Add Now</Button>
                    </Link> */}
                  </div>
                </TableCaption>
              )}
            </Table>
          </CardContent>
          {/* showing range of pagination */}
          {admins?.length > 0 && (
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-{admins?.length}</strong> of{" "}
                <strong>{admins?.length}</strong> admins
              </div>
            </CardFooter>
          )}
        </Card>
      </main>
    </div>
  );
};

export default Admins;
