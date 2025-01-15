import { baseApi } from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => {
        return {
          url: `/users?role=user`,
          method: "GET",
        };
      },
    }),
    getAllAdmins: builder.query({
      query: () => {
        return {
          url: `/users?role=admin`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetAllAdminsQuery } = userApi;
