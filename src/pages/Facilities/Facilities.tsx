import Container from "@/components/shared/Container";
import { useGetAllFacilitiesQuery } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/TFacility";
import FacilityCard from "./FacilitiesUtils/FacilityCard";
import { Skeleton } from "@/components/ui/skeleton";

const Facilities = () => {
  const { data, isFetching } = useGetAllFacilitiesQuery(undefined);
  console.log(data?.data);

  return (
    <Container>
      <div>
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center py-6 mt-10 pb-10">
          Our Facilities
        </h1>

        {/* facility listing */}
        <div>
          {isFetching ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6 justify-between items-center mb-16">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="space-y-4">
                  <Skeleton className="h-52 w-full rounded-xl" />
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-8/12" />
                    <Skeleton className="h-6 w-4/12" />
                    <Skeleton className="h-10 w-12/12" />
                  </div>
                </div>
              ))}
            </div>
          ) : data?.data?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
              {data?.data?.map((item: TFacility) => (
                <FacilityCard key={item._id} facility={item} />
              ))}
            </div>
          ) : (
            <h1 className="text-center text-lg text-gray-500 my-10">
              No Data Found
            </h1>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Facilities;
