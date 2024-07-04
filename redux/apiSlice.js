import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { 
   getUser, 
   updateXP, 
   updateClassCode,
   getCompletionsArray, 
   postCompletion, 
   getClassroom 
} from "../src/features/Grades/Handlers/UserFunctions";

//this file contains all the user queries/mutations
export const apiSlice = createApi({
   reducerPath: "api",
   baseQuery: fakeBaseQuery(),
   tagTypes: ["User", "Completions", "Classroom", "GradeData", "LessonsData", "ActivitiesData"],
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

      updateXP: builder.mutation({
         async queryFn({ newXP, oldXP, email }) {
            try {
               console.log("\t\t\trunning updateXP in apiSlice.js . . . ['User' query cache invalidated]");
               await updateXP(newXP, oldXP, email);
               return { data: "updated" };
            } catch(error) {
               console.error("ERROR with updateXP():", error);
               return { error: error.message };
            }
         },
         invalidatesTags: ["User"],
      }),

      updateClassCode: builder.mutation({
         async queryFn({ classCode, email }) {
            try {
               console.log("\t\t\trunning updateClassCode in apiSlice.js . . . ['User' and 'Classroom' query caches invalidated]");
               await updateClassCode(classCode, email);
               return { data: "updated" };
            } catch(error) {
               console.error("ERROR with updateClassCode():", error);
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
               useUpdateXPMutation,
               useUpdateClassCodeMutation, 
               useGetCompletionsArrayQuery, 
               usePostCompletionMutation,
               useGetClassroomQuery } = apiSlice;