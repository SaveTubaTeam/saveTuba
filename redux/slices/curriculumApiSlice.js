import { apiSlice } from "./apiSlice"
import { getGradeData, getLessonsData, getIndividualLessonData, getActivitiesData } from "../../src/CurriculumStack/Handlers/Database"

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

      getLessonsData: builder.query({ //numLessons is an int
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

      //this is not used in the curriculum stack. It is instead used to render assignment cards.
      getIndividualLessonData: builder.query({ 
         async queryFn({ grade, chpt, lesson, languageCode }) {
            try {
               //console.log("\t\t\trunning getIndividualLessonData in curriculumApiSlice.js . . .");
               const individualLessonData = await getIndividualLessonData(grade, chpt, lesson, languageCode);
               return { data: individualLessonData };
            } catch(error) {
               console.error("ERROR with getIndividualLessonData():", error);
               return { error: error.message };
            }
         },
         providesTags: (result, error, { lesson }) => 
               result ? [{ type: "IndividualLessonData", id: lesson }] : [{ type: "IndividualLessonData" }],
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
               useGetIndividualLessonDataQuery,
               useGetActivitiesDataQuery } = curriculumApiSlice;