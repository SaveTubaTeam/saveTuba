import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getUser, updateUserXP, getCompletionsArray, postCompletion, getClassroom } from "../src/features/Grades/Handlers/UserFunctions";

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
         async queryFn({ newXP, oldXP, email }) {
            try {
               console.log("\t\t\trunning updateUserXP in apiSlice.js . . . ['User' query cache invalidated]");
               await updateUserXP(newXP, oldXP, email);
               return { data: "updated" };
            } catch(error) {
               console.error("ERROR with updateUserXP():", error);
               return { error: error.message };
            }
         },
         invalidatesTags: ["User"],
      }),

      getCompletionsArray: builder.query({
         async queryFn({ userEmail }) {
            try {
               console.log("\t\t\trunning getCompletionsArray in apiSlice.js . . .");
               const completionsArray = await getCompletionsArray(userEmail);
               return { data: completionsArray };
            } catch(error) {
               return { error: error.message };
            }
         },
         providesTags: ["Completions"],
      }),

      postCompletion: builder.mutation({
         async queryFn({ userEmail, completionID, content }) {
            try {
               console.log("\t\t\trunning postCompletion in apiSlice.js . . . ['Completion' query cache invalidated]");
               await postCompletion(userEmail, completionID, content);
               return { data: "posted" };
            } catch(error) {
               return { error: error.message };
            }
         },
         invalidatesTags: ["Completions"],
      }),

      getClassroom: builder.query({
         async queryFn({ classCode }) {
            try {
               console.log("\t\t\trunning getClassroom in apiSlice.js . . .");
               const classroomObject = await getClassroom(classCode);
               return { data: classroomObject };
            } catch(error) {
               return { error: error.message };
            }
         },
         providesTags: ["Classroom"]
      }),

   })
});

export const { useGetUserQuery, 
               useUpdateUserXPMutation, 
               useGetCompletionsArrayQuery, 
               usePostCompletionMutation,
               useGetClassroomQuery } = apiSlice;