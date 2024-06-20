import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUser, updateUserXP } from "../src/features/Grades/Handlers/UserFunctions";

export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: fakeBaseQuery(),
   tagTypes: ["User", "Completions", "Classroom"],
   endpoints: (builder) => ({

      getUser: builder.query({
         async queryFn({ userEmail }) {
            try {
               console.log("\t\t\trunning getUser in apiSlice.js . . .");
               const userData = await getUser(userEmail);
               return { data: userData };
            } catch(error) {
               console.error("ERROR with getUser():", error);
               return { error: error.message };
            }
         },
         providesTags: ["User"],
      }),

      updateUserXP: builder.mutation({
         async queryFn({ newXP, oldXP, email, classCode }) {
            try {
               console.log("\t\t\trunning updateUserXP in apiSlice.js . . . [User cache is now invalid!]");
               await updateUserXP(newXP, oldXP, email, classCode);
               return { data: "updated" };
            } catch(error) {
               console.error("ERROR with updateUserXP():", error);
               return { error: error.message };
            }
         },
         invalidatesTags: ["User"],
      }),

   }),
});

export const { useGetUserQuery, useUpdateUserXPMutation } = apiSlice;