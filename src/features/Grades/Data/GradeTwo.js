import { Translation } from "react-i18next";

export const Grade2 = {
  chapters: [
    {
      navigation: "Chapter1", // you need to specify name or key when calling navigate
      title: <Translation>{(t) => t("common:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradetwo:iamanexplorer")}</Translation>, // I am an explorer
      icon: require("../../../../assets/explore.png"),
      colorOne: "darkorange",
      colorTwo: "goldenrod",
      key: "C1",
    },
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("common:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradetwo:wildlife")}</Translation>, // Wildlife
      icon: require("../../../../assets/butterfly.png"),
      colorOne: "darkolivegreen",
      colorTwo: "darkgreen",
      key: "C2",
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradetwo:substances")}</Translation>, // Substances and their properties
      icon: require("../../../../assets/water-cycle.png"),
      colorOne: "tomato",
      colorTwo: "firebrick",
      key: "C3",
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("common:chapterfour")}</Translation>, // Chapter 4
      name: <Translation>{(t) => t("gradetwo:naturalresources")}</Translation>, // Natural resources
      icon: require("../../../../assets/soil.png"),
      colorOne: "sandybrown",
      colorTwo: "peachpuff",
      key: "C4",
    },
    {
      navigation: "Chapter5",
      title: <Translation>{(t) => t("common:chapterfive")}</Translation>, // Chapter 5
      name: <Translation>{(t) => t("gradetwo:cosmos")}</Translation>, // Earth and space
      icon: require("../../../../assets/astronaut.png"),
      colorOne: "navy",
      colorTwo: "dodgerblue",
      key: "C5",
    },
    {
      navigation: "Chapter6",
      title: <Translation>{(t) => t("common:chaptersix")}</Translation>, // Chapter 6
      name: <Translation>{(t) => t("gradetwo:physics")}</Translation>, // Physics of nature
      icon: require("../../../../assets/book.png"),
      colorOne: "mediumturquoise",
      colorTwo: "royalblue",
      key: "C6",
    },
  ],
};
