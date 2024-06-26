import { apiSlice } from "./apiSlice"
import { getGradeData, getLessonsData, getActivitiesData } from "../src/features/Grades/Handlers/Database"

const curriculumApiSlice = apiSlice.injectEndpoints({
   endpoints: (builder) => ({

      getGradeData: builder.query({
         async queryFn({ grade }) {
            try {
               console.log("\t\t\trunning getGradeData in curriculumApiSlice.js . . .");
               const gradeData = await getGradeData(grade);
               return { data: gradeData };
            } catch(error) {
               console.error("ERROR with getGradeData():", error);
               return { error: error.message };
            }
         },
         providesTags: (result, error, { grade }) => 
               result ? [{ type: "GradeData", id: grade }] : [{ type: "GradeData" }],
      }),

      getLessonsData: builder.query({
         async queryFn({ grade, chpt, numLessons, languageCode }) {
            try {
               console.log("\t\t\trunning getLessonsData in curriculumApiSlice.js . . .");
               const lessonsData = await getLessonsData(grade, chpt, numLessons, languageCode);
               return { data: lessonsData };
            } catch(error) {
               console.error("ERROR with getLessonsData():", error);
               return { error: error.message };
            }
         },
         providesTags: (result, error, { chpt }) => 
               result ? [{ type: "LessonsData", id: chpt }] : [{ type: "LessonsData" }],
      }),

      getActivitiesData: builder.query({
         async queryFn({ grade, chpt, lesson, languageCode }) { //this lesson param is a string
            try {
               console.log("\t\t\trunning getActivitiesData in curriculumApiSlice.js . . .");
               const activitiesData = await getActivitiesData(grade, chpt, lesson, languageCode);
               return { data: activitiesData };
            } catch(error) {
               console.error("ERROR with getActivitiesData():", error);
               return { error: error.message };
            }
         },
         providesTags: (result, error, { lesson }) => 
               result ? [{ type: "ActivitiesData", id: lesson }] : [{ type: "ActivitiesData" }],
      }),

   }),
   overrideExisting: true,
})

export const { useGetGradeDataQuery,
               useGetLessonsDataQuery,
               useGetActivitiesDataQuery } = curriculumApiSlice;