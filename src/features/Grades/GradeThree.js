import { Translation } from "react-i18next";

import Test from "./Test";

export const Grade3 = {
  chapters: [
    {
      navigation: "Chapter1",
      title: <Translation>{(t) => t("gradethree:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradethree:plants")}</Translation>, // Plants
      icon: require("../../../assets/watering-plants.png"),
      colorOne: "palevioletred",
      colorTwo: "pink",
      key: "C1",
      component: Test,
    },
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("gradethree:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradethree:animals")}</Translation>, // Animals
      icon: require("../../../assets/antelope.png"),
      colorOne: "mediumturquoise",
      colorTwo: "powderblue",
      key: "C2",
      component: Test,
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("gradethree:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradethree:human")}</Translation>, // Human
      icon: require("../../../assets/brain.png"),
      colorOne: "plum",
      colorTwo: "thistle",
      key: "C3",
      component: Test,
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("gradethree:chapterfour")}</Translation>, // Chapter 4
      name: <Translation>{(t) => t("gradethree:airwater")}</Translation>, // Substances and their properties. Air and water
      icon: require("../../../assets/wind.png"),
      colorOne: "coral",
      colorTwo: "darksalmon",
      key: "C4",
      component: Test,
    },
    {
      navigation: "Chapter5",
      title: <Translation>{(t) => t("gradethree:chapterfive")}</Translation>, // Chapter 5
      name: <Translation>{(t) => t("gradethree:physics")}</Translation>, // Physics of nature
      icon: require("../../../assets/sound-wave.png"),
      colorOne: "indigo",
      colorTwo: "darkmagenta",
      key: "C5",
      component: Test,
    },
    {
      navigation: "Chapter6",
      title: <Translation>{(t) => t("gradethree:chaptersix")}</Translation>, // Chapter 6
      name: (
        <Translation>{(t) => t("gradethree:naturalresources")}</Translation>
      ), // Substances and their properties. Natural resources
      icon: require("../../../assets/log.png"),
      colorOne: "darkgreen",
      colorTwo: "darkolivegreen",
      key: "C6",
      component: Test,
    },
    {
      navigation: "Chapter7",
      title: <Translation>{(t) => t("gradethree:chapterseven")}</Translation>, // Chapter 7
      name: <Translation>{(t) => t("gradethree:cosmos")}</Translation>, // Earth and space
      icon: require("../../../assets/constellation.png"),
      colorOne: "midnightblue",
      colorTwo: "mediumblue",
      key: "C7",
      component: Test,
    },
    {
      navigation: "Chapter8",
      title: <Translation>{(t) => t("gradethree:chaptereight")}</Translation>, // Chapter 8
      name: <Translation>{(t) => t("gradethree:forces")}</Translation>, // Forces and movement
      icon: require("../../../assets/swim-ring.png"),
      colorOne: "mediumvioletred",
      colorTwo: "hotpink",
      key: "C8",
      component: Test,
    },
  ],
};
