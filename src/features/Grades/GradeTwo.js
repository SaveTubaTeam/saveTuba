import Test from "./Test";

export const Grade2 = {
  chapters: [
    {
      navigation: "Chapter1", // you need to specify name or key when calling navigate
      title: "Chapter One",
      key: "C1",
      component: Test,
    },
    {
      navigation: "Chapter2",
      title: "Chapter Two",
      key: "C2",
      component: Test,
    },
    {
      navigation: "Chapter3",
      title: "Chapter Three",
      key: "C3",
      component: Test,
    },
    {
      navigation: "Chapter4",
      title: "Chapter Four",
      key: "C4",
      component: Test,
    },
  ],
};
