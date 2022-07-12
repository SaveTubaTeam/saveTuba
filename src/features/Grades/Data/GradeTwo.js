import { Translation } from "react-i18next";
import {
  SortingImages,
  QuizImages,
  TestImages,
} from "../../../components/Grades/minigames/IMAGES";

export const Grade2 = {
  chapters: [
    {
      navigation: "Chapter1", // you need to specify name or key when calling navigate
      title: <Translation>{(t) => t("common:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradetwo:iamanexplorer")}</Translation>, // I am an explorer
      icon: require("../../../../assets/chapter-icons/explore.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch1.jpg"),
      colorOne: "darkorange",
      colorTwo: "goldenrod",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 1 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", //History of scientific discovery
          title: <Translation>{(t) => t("gradetwo:c1l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c1l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/search-object.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l1_card2")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 1 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", //sources of information
          title: <Translation>{(t) => t("gradetwo:c1l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/read.png"),
          backgroundColor: "#004AAD",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c1l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/eco-light.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l2_card2")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 1 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // part 1, getting supplies and creating hypothesis
          title: <Translation>{(t) => t("gradetwo:c1l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/air-pollution.png"),
          backgroundColor: "#545454",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/scientist.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/air-pollution.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/reuse.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/ask-question.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 1 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", //part 2, conducting expirement
          title: <Translation>{(t) => t("gradetwo:c1l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/air-pollution.png"),
          backgroundColor: "#545454",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/girl-scientist.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/petroleum-jelly.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/window.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/alarm-clock.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/paper.png"),
              },
            ],
          },
        },
      ],
    },
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("common:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradetwo:wildlife")}</Translation>, // Wildlife
      backgroundImage: require("../../../../assets/mastery/bg/ch2.jpg"),
      icon: require("../../../../assets/chapter-icons/butterfly.png"),
      colorOne: "darkolivegreen",
      colorTwo: "darkgreen",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradetwo:c2l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/leaf.png"),
          backgroundColor: "#008036",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradetwo:c2l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wilted.png"),
          backgroundColor: "#7ED957",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradetwo:c2l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wilted.png"),
          backgroundColor: "#7ED957",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradetwo:c2l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/jungle.png"),
          backgroundColor: "#C0F0F7",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradetwo:c2l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/gardening.png"),
          backgroundColor: "#04A7A8",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c2l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/red-book.png"),
          backgroundColor: "#44312B",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c2l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/red-book.png"),
          backgroundColor: "#44312B",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c2l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/spine.png"),
          backgroundColor: "#EE3A5D",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradetwo:c2l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/habitat.png"),
          backgroundColor: "#7B3B16",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c2l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/dog-cat.png"),
          backgroundColor: "#37B5FF",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 11 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c2l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/dog-cat.png"),
          backgroundColor: "#37B5FF",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 12 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c2l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/desert.png"),
          backgroundColor: "#FFF9E3",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 13 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c2l13")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/desert.png"),
          backgroundColor: "#FFF9E3",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 14 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson14",
          title: <Translation>{(t) => t("gradetwo:c2l14")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/fishing.png"),
          backgroundColor: "#004AAD",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 15 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson15",
          title: <Translation>{(t) => t("gradetwo:c2l15")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/magnifying-glass.png"),
          backgroundColor: "#FFBD58",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 16 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson16",
          title: <Translation>{(t) => t("gradetwo:c2l16")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/apple.png"),
          backgroundColor: "#56C34D",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 17 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson17",
          title: <Translation>{(t) => t("gradetwo:c2l17")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/apple.png"),
          backgroundColor: "#56C34D",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 18 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson18",
          title: <Translation>{(t) => t("gradetwo:c2l18")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/breathing.png"),
          backgroundColor: "#FF904D",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 19 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson19",
          title: <Translation>{(t) => t("gradetwo:c2l19")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/circulation.png"),
          backgroundColor: "#C0F0F7",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 20 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson20",
          title: <Translation>{(t) => t("gradetwo:c2l20")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/mask.png"),
          backgroundColor: "#80B673",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 21 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson21",
          title: <Translation>{(t) => t("gradetwo:c2l21")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/mask.png"),
          backgroundColor: "#80B673",
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradetwo:substances")}</Translation>, // Substances and their properties
      icon: require("../../../../assets/chapter-icons/water-cycle.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch3.jpg"),
      colorOne: "tomato",
      colorTwo: "firebrick",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradetwo:c3l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradetwo:c3l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradetwo:c3l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradetwo:c3l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradetwo:c3l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c3l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c3l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c3l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradetwo:c3l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c3l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 11 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c3l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 12 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c3l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 13 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c3l13")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 14 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson14",
          title: <Translation>{(t) => t("gradetwo:c3l14")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 15 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson15",
          title: <Translation>{(t) => t("gradetwo:c3l15")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 16 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson16",
          title: <Translation>{(t) => t("gradetwo:c3l16")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 17 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson17",
          title: <Translation>{(t) => t("gradetwo:c3l17")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 18 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson18",
          title: <Translation>{(t) => t("gradetwo:c3l18")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 19 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson19",
          title: <Translation>{(t) => t("gradetwo:c3l19")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 20 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson20",
          title: <Translation>{(t) => t("gradetwo:c3l20")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 21 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson21",
          title: <Translation>{(t) => t("gradetwo:c3l21")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("common:chapterfour")}</Translation>, // Chapter 6
      name: <Translation>{(t) => t("gradetwo:physics")}</Translation>, // Physics of nature
      backgroundImage: require("../../../../assets/mastery/bg/ch4.jpg"),
      icon: require("../../../../assets/chapter-icons/book.png"),
      colorOne: "mediumturquoise",
      colorTwo: "royalblue",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradetwo:c4l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradetwo:c4l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradetwo:c4l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradetwo:c4l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradetwo:c4l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c4l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c4l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c4l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradetwo:c4l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c4l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 11 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c4l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 12 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c4l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 13 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c4l13")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 14 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson14",
          title: <Translation>{(t) => t("gradetwo:c4l14")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 15 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson15",
          title: <Translation>{(t) => t("gradetwo:c4l15")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 16 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson16",
          title: <Translation>{(t) => t("gradetwo:c4l16")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 17 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson17",
          title: <Translation>{(t) => t("gradetwo:c4l17")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 18 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson18",
          title: <Translation>{(t) => t("gradetwo:c4l18")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 19 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson19",
          title: <Translation>{(t) => t("gradetwo:c4l19")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 20 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson20",
          title: <Translation>{(t) => t("gradetwo:c4l20")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 21 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson21",
          title: <Translation>{(t) => t("gradetwo:c4l21")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 22 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson22",
          title: <Translation>{(t) => t("gradetwo:c4l22")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
          backgroundColor: "#87CB28",
          minigames: {},
        },
      ],
    },
  ],
};
