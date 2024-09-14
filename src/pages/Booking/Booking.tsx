import { useCheckAvailabilityQuery } from "@/redux/features/checkAvailability/checkAvailablityApi";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  // const { data, isFetching } = useGetSingleFacilityQuery(id);
  // const facility = data?.data as TFacility;

  const { data: availableSlots } = useCheckAvailabilityQuery({ id, date: "" });

  console.log(availableSlots);

  return <div></div>;
};

export default Booking;
