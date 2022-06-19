import { Translation } from "react-i18next";

import Test from "./Test";

export const Grade2 = {
  chapters: [
    {
      navigation: "Chapter1", // you need to specify name or key when calling navigate
      title: <Translation>{(t) => t("gradetwo:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradetwo:iamanexplorer")}</Translation>, // I am an explorer
      icon: require("../../../assets/explore.png"),
      colorOne: "darkorange",
      colorTwo: "goldenrod",
      key: "C1",
      component: Test,
    },
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("gradetwo:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradetwo:wildlife")}</Translation>, // Wildlife
      icon: require("../../../assets/butterfly.png"),
      colorOne: "darkolivegreen",
      colorTwo: "darkgreen",
      key: "C2",
      component: Test,
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("gradetwo:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradetwo:substances")}</Translation>, // Substances and their properties
      icon: require("../../../assets/water-cycle.png"),
      colorOne: "tomato",
      colorTwo: "firebrick",
      key: "C3",
      component: Test,
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("gradetwo:chapterfour")}</Translation>, // Chapter 4
      name: <Translation>{(t) => t("gradetwo:naturalresources")}</Translation>, // Natural resources
      icon: require("../../../assets/soil.png"),
      colorOne: "sandybrown",
      colorTwo: "peachpuff",
      key: "C4",
      component: Test,
    },
    {
      navigation: "Chapter5",
      title: <Translation>{(t) => t("gradetwo:chapterfive")}</Translation>, // Chapter 5
      name: <Translation>{(t) => t("gradetwo:cosmos")}</Translation>, // Earth and space
      icon: require("../../../assets/astronaut.png"),
      colorOne: "navy",
      colorTwo: "dodgerblue",
      key: "C5",
      component: Test,
    },
    {
      navigation: "Chapter6",
      title: <Translation>{(t) => t("gradetwo:chaptersix")}</Translation>, // Chapter 6
      name: <Translation>{(t) => t("gradetwo:physics")}</Translation>, // Physics of nature
      icon: require("../../../assets/book.png"),
      colorOne: "mediumturquoise",
      colorTwo: "royalblue",
      key: "C6",
      component: Test,
    },
  ],
};
