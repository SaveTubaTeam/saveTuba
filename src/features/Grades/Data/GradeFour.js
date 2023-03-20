import { Translation } from "react-i18next";
import { React } from 'react';

export const Grade4 = {
  chapters: [
    {
      navigation: "Chapter1",
      title: <Translation>{(t) => t("common:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradefour:worldofscience")}</Translation>, // World of science
      icon:  "../../../../assets/chapter-icons/atom. png",
      colorOne: "chocolate",
      colorTwo: "burlywood",
      key: "C1",
    },
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("common:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradefour:universe")}</Translation>, // Universe. Earth. Human
      icon:  "../../../../assets/chapter-icons/planet. png",
      colorOne: "darkolivegreen",
      colorTwo: "darkkhaki",
      key: "C2",
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradefour:substances")}</Translation>, // Substances and materials
      icon:  "../../../../assets/chapter-icons/chemistry. png",
      colorOne: "mediumorchid",
      colorTwo: "lightpink",
      key: "C3",
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("common:chapterfour")}</Translation>, // Chapter 4
      name: <Translation>{(t) => t("gradefour:processes")}</Translation>, // Processes in animate and inanimate nature
      icon:  "../../../../assets/chapter-icons/rock-garden. png",
      colorOne: "seagreen",
      colorTwo: "yellowgreen",
      key: "C4",
    },
    {
      navigation: "Chapter5",
      title: <Translation>{(t) => t("common:chapterfive")}</Translation>, // Chapter 5
      name: <Translation>{(t) => t("gradefour:energy")}</Translation>, // Energy and movement
      icon:  "../../../../assets/chapter-icons/renewable-energy. png",
      colorOne: "navy",
      colorTwo: "cornflowerblue",
      key: "C5",
    },
    {
      navigation: "Chapter6",
      title: <Translation>{(t) => t("common:chaptersix")}</Translation>, // Chapter 6
      name: <Translation>{(t) => t("gradefour:ecology")}</Translation>, // Ecology and sustainable development
      icon:  "../../../../assets/chapter-icons/eco-friendly. png",
      colorOne: "purple",
      colorTwo: "indigo",
      key: "C6",
    },
    {
      navigation: "Chapter7",
      title: <Translation>{(t) => t("common:chapterseven")}</Translation>, // Chapter 7
      name: <Translation>{(t) => t("gradefour:discoveries")}</Translation>, // Discoveries that changed the world
      icon:  "../../../../assets/chapter-icons/discovery. png",
      colorOne: "darkorange",
      colorTwo: "goldenrod",
      key: "C7",
    },
  ],
};
