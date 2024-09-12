import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    checkAvailability: builder.mutation({
      query: (date) => {
        return {
          url: `/check-availability?date=${date}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCheckAvailabilityMutation } = bookingApi;
