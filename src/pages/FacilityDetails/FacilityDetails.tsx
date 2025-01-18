import { Button } from "@/components/ui/button";
import {
  useGetAllFacilitiesQuery,
  useGetSingleFacilityQuery,
} from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/TFacility";
import { BookmarkPlus, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import RelatedFacilityCard from "./FacilityDetailsUtils/RelatedFacilityCard";
import { Skeleton } from "@/components/ui/skeleton";

const FacilityDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, isFetching } = useGetSingleFacilityQuery(id);
  const facility = data?.data as TFacility;

  const { data: facilities } = useGetAllFacilitiesQuery(undefined);
  const relatedFacilities = facilities?.data?.slice(11, 15);

  return (
    <div className="bg-slate-50 py-10 min-h-screen">
      <div className="w-11/12 lg:w-10/12 max-w-screen-xl mx-auto">
        {!isFetching && facility && (
          <div className="space-y-8">
            <section className="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-lg">
              <div className="md:max-w-xs lg:max-w-sm xl:max-w-md">
                <img
                  src={facility?.image}
                  alt="product-image"
                  className="rounded w-full"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  {facility?.name}
                </h1>
                <h1 className="font-medium mb-4 flex items-center gap-2">
                  <MapPin size={20} /> {facility?.location}
                </h1>
                <span className="font-medium my-2 inline-flex items-center gap-2 p-4 py-2 bg-green-100 rounded-full">
                  Status: <span className="font-bold">Active</span>
                </span>
                <h2 className="text-2xl md:text-3xl font-bold py-6">
                  $ {facility?.pricePerHour}{" "}
                  <span className="text-base">/ Hour</span>
                </h2>
                <Link to={`/booking/${id}`}>
                  <Button className="md:text-base px-6 h-12 gap-2 rounded-full">
                    Book Now <BookmarkPlus className="size-5" />
                  </Button>
                </Link>
              </div>
            </section>
            <div className="flex flex-col md:flex-row gap-6">
              <section className="bg-white p-6 rounded-lg max-h-fit">
                <h3 className="text-xl font-bold mb-4">Description</h3>
                <p>{facility?.description}</p>
              </section>
              <section>
                {relatedFacilities?.length > 0 && (
                  <div className="bg-white p-6 rounded-lg w-full lg:max-w-[420px]">
                    <h1 className="text-xl font-semibold text-center text-primary pb-4">
                      More Facilities
                    </h1>
                    <div>
                      {relatedFacilities.map((item: TFacility) => (
                        <RelatedFacilityCard key={item._id} facility={item} />
                      ))}
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        )}
        {/* show skeleton when loading */}
        {isFetching && (
          <div className="space-y-8">
            <section className="flex flex-col md:flex-row gap-10 bg-white p-6 rounded-lg">
              <div className="md:max-w-xs lg:max-w-sm xl:max-w-md">
                <Skeleton className="w-[420px] h-80" />
              </div>
              <div className="flex-1 space-y-6">
                <Skeleton className="h-10" />
                <Skeleton className="w-96 h-10" />
                <Skeleton className="w-36 h-10 rounded-full" />
                <Skeleton className="w-40 h-12" />
                <Skeleton className="w-48 h-12 rounded-full" />
              </div>
            </section>
            <div className="flex flex-col md:flex-row gap-6">
              <section className="bg-white p-6 rounded-lg flex-1 max-h-fit space-y-6">
                <Skeleton className="w-40 h-10" />
                <Skeleton className="w-full h-48" />
              </section>
              <section>
                <div className="bg-white p-6 rounded-lg w-full lg:min-w-[310px] space-y-6">
                  <Skeleton className="w-full h-10" />
                  <div className="space-y-6">
                    <Skeleton className="w-full h-28" />
                    <Skeleton className="w-full h-28" />
                    <Skeleton className="w-full h-28" />
                    <Skeleton className="w-full h-28" />
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilityDetails;
