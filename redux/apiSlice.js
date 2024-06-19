import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUser } from "../src/features/Grades/Handlers/UserFunctions";

export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: fakeBaseQuery(),
   tagTypes: ["User", "Completions", "Classroom"],
   endpoints: (builder) => ({

      getUser: builder.query({
         async queryFn({loginType, input}) {
            try {
               const userData = await getUser(loginType, input);
               return { data: userData };
            } catch(error) {
               console.log("ERROR with getUser():", error);
               return { error: error.message };
            }
         },
         invalidatesTags: ["User"],
      }),

   }),
});

export const { useGetUserQuery } = apiSlice;