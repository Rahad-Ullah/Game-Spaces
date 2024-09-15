import Container from "@/components/shared/Container";
import { DatePicker } from "@/components/shared/DatePicker";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCheckAvailabilityQuery } from "@/redux/features/checkAvailability/checkAvailablityApi";
import { useGetSingleFacilityQuery } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/TFacility";
import { TSlot } from "@/types/TSlot";
import { formatDate } from "@/utils/formatDate";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { z } from "zod";

// form validation shema
const formValidationSchema = z.object({
  date: z.string(),
  startTime: z.string().min(1, {
    message: "Start time must be a valid time.",
  }),
  endTime: z.string().min(1, {
    message: "End time must be a valid time.",
  }),
});

const Booking = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, isFetching } = useGetSingleFacilityQuery(id);
  const facility = data?.data as TFacility;

  const [date, setDate] = useState<Date>();
  const formatedDate = formatDate(date || new Date());

  const { data: availableSlots } = useCheckAvailabilityQuery({ id, date });

  // define form
  const form = useForm<z.infer<typeof formValidationSchema>>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      date: "",
      startTime: "",
      endTime: "",
    },
  });

  const handlePlaceBooking = async (
    values: z.infer<typeof formValidationSchema>
  ) => {
    console.log(values);
  };

  return (
    <div className="bg-gray-50">
      <Container>
        <div className="flex flex-wrap w-full justify-between gap-10 py-12">
          {/* left section */}
          <div className="w-full md:w-7/12 p-8">
            {/* Facility key details */}
            <div className="flex gap-6 bg-white rounded-3xl p-6">
              <img
                src={facility?.image}
                alt="facility image"
                className="w-full md:size-36 object-cover rounded-xl"
              />
              <div className="space-y-2">
                <h1 className="text-2xl font-bold">{facility?.name}</h1>
                <p className="font-medium flex items-center gap-2">
                  <MapPin size={20} /> {facility?.location}
                </p>
                <p className="text-xl md:text-2xl font-semibold">
                  $ {facility?.pricePerHour}{" "}
                  <span className="text-base">/ hour</span>
                </p>
              </div>
            </div>
            {/* check availability */}
            <div className="bg-white rounded-3xl p-6 mt-6">
              <h1 className="text-lg font-semibold mb-4">Check Availability</h1>
              <div className="flex gap-6">
                <DatePicker date={date} setDate={setDate} />
                <Button className="md:text-base md:py-6 flex-1">
                  Check Availability
                </Button>
              </div>
            </div>

            {/* available slots */}
            <div className="bg-white rounded-3xl p-6 mt-6">
              <h1 className="text-lg font-semibold mb-4">Available Slots</h1>
              {availableSlots?.data?.length < 1 && (
                <div className="text-center text-gray-400">
                  No slot is available
                </div>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {availableSlots?.data?.map((item: TSlot, index: number) => (
                  <Button
                    variant={"secondary"}
                    key={index}
                    className="md:text-base"
                  >
                    {item.startTime} - {item.endTime}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* booking details */}
          <div className="border p-8 flex-1">
            <CardTitle className="mb-8 text-lg font-semibold">
              Booking Details
            </CardTitle>
            <Form {...form}>
              <form className="space-y-8 px-1">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter a date`"
                          {...field}
                          type="date"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Time</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter start time" {...field} type="time"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Time</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter end time"
                          {...field}
                          type="time"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
                <div className="mt-8">  
                  <Button
                    className="w-full text-base py-6 rounded-full"
                    onClick={form.handleSubmit(handlePlaceBooking)}
                  >
                    CHECKOUT
                  </Button>
                </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Booking;
