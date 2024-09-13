import { baseApi } from "../../api/baseApi";

const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createFacility: builder.mutation({
      query: (payload) => {
        return {
          url: `/facility`,
          method: "POST",
          body: payload,
        };
      },
    }),
    updateFacility: builder.mutation({
      query: ({ payload, id }) => {
        return {
          url: `/facility/${id}`,
          method: "PUT",
          body: payload,
        };
      },
    }),
    deleteFacility: builder.mutation({
      query: (id) => {
        return {
          url: `/facility/${id}`,
          method: "DELETE",
        };
      },
    }),
    getSingleFacility: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
    }),
    getAllFacilities: builder.query({
      query: () => ({
        url: `/facility`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
  useGetSingleFacilityQuery,
  useGetAllFacilitiesQuery,
} = facilityApi;
