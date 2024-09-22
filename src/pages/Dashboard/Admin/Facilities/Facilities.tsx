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
  DropdownMenuItem,
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
import { MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { roundNumber } from "@/utils/roundNumber";
import {
  useDeleteFacilityMutation,
  useGetAllFacilitiesQuery,
  useUpdateFacilityMutation,
} from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/TFacility";
import { toast } from "sonner";

const AdminFacilities = () => {
  // get facilities data
  const { data, isFetching } = useGetAllFacilitiesQuery(undefined);
  const facilities = data?.data;

  // edit facility
  const [updateFacility] = useUpdateFacilityMutation();
  const handleUpdateFacility = async (id: string) => {
    toast.loading("Updating...", { id: "update" });
    try {
      const res = await updateFacility(id).unwrap();
      if (res.success) {
        toast.success("Successfully Edited", { id: "update" });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message, { id: "update" });
      console.log(error);
    }
  };

  // delete facility
  const [deleteFacility] = useDeleteFacilityMutation();
  const handleDeleteFacility = async (id: string) => {
    toast.loading("Deleting...", { id: "delete" });
    try {
      console.log(id);
      //   const res = await deleteFacility(id).unwrap();
      //   if (res.success) {
      //     toast.success("Successfully Deleted", { id: "delete" });
      //   }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message, { id: "delete" });
      console.log(error);
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-4 lg:gap-6">
      <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
        <Card className="grid flex-1 h-full shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Facilities</CardTitle>
            <CardDescription>
              Manage your facilities and view their features.
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
                  <TableHead className="hidden md:table-cell">Price</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Location
                  </TableHead>
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
                        <TableCell className="hidden md:table-cell">
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
                    facilities?.map((item: TFacility, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="table-cell">
                          <Link to={`/facilities/${item?._id}`}>
                            <img
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src={item?.image}
                              width="64"
                            />
                          </Link>
                        </TableCell>
                        <TableCell className="font-medium">
                          <Link
                            to={`/facilities/${item?._id}`}
                            className="hover:text-primary"
                          >
                            {item?.name}
                          </Link>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $ {roundNumber(item?.pricePerHour)} / hour
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {item?.location}
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
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleDeleteFacility(item?._id)}
                                className="text-red-500"
                              >
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
              {facilities?.length < 1 && (
                <TableCaption>
                  {/* show no data found message if facilities is empty */}
                  <div className="text-center w-full mt-14">
                    <h3 className="text-2xl font-bold tracking-tight">
                      You have no facilities
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You can start selling as soon as you add a facility.
                    </p>
                    <Link to={"/facilities"}>
                      <Button className="mt-4">Add Now</Button>
                    </Link>
                  </div>
                </TableCaption>
              )}
            </Table>
          </CardContent>
          {/* showing range of pagination */}
          {facilities?.length > 0 && (
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-{facilities?.length}</strong> of{" "}
                <strong>{facilities?.length}</strong> facilities
              </div>
            </CardFooter>
          )}
        </Card>
      </main>
    </div>
  );
};

export default AdminFacilities;
