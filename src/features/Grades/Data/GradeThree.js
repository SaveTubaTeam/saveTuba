import { Translation } from "react-i18next";

export const Grade3 = {
  chapters: [
    {
      navigation: "Chapter1",
      title: <Translation>{(t) => t("common:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradethree:plants")}</Translation>, // Plants
      icon: require("../../../../assets/chapter-icons/watering-plants.png"),
      colorOne: "palevioletred",
      colorTwo: "pink",
     // key: "C1", //wtf is this
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", // What are lower and higher plants
          title: <Translation>{(t) => t("gradethree:c1l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/jungle.png"),
          backgroundColor: "#C0F0F7",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", // Lower plants
          title: <Translation>{(t) => t("gradethree:c1l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/spider-plant.png"),
          backgroundColor: "#76B9F0",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // What stages of development do plants have
          title: <Translation>{(t) => t("gradethree:c1l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/plant-development.png"),
          backgroundColor: "#CA6CE5",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", // Why does a plant need flowers
          title: <Translation>{(t) => t("gradethree:c1l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/flowers.png"),
          backgroundColor: "#43B14B",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", // How seeds are formed
          title: <Translation>{(t) => t("gradethree:c1l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/seed.png"),
          backgroundColor: "#AB653E",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6", // How plants develop
          title: <Translation>{(t) => t("gradethree:c1l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/plant-water.png"),
          backgroundColor: "#F9F0D7",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", // How plant seeds spread
          title: <Translation>{(t) => t("gradethree:c1l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/spring.png"),
          backgroundColor: "#065D40",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8", // How to protect plants from extinction
          title: <Translation>{(t) => t("gradethree:c1l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/plant-hand.png"),
          backgroundColor: "#B25C3E",
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("common:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradethree:animals")}</Translation>, // Animals
      icon: require("../../../../assets/chapter-icons/antelope.png"),
      colorOne: "mediumturquoise",
      colorTwo: "powderblue",
      key: "C2",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", // What is symbiosis
          title: <Translation>{(t) => t("gradethree:c2l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/symbiosis.png"),
          backgroundColor: "#04A7A8",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", // How insects develop
          title: <Translation>{(t) => t("gradethree:c2l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/insect.png"),
          backgroundColor: "#5AA3F7",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // Why animals eat different foods
          title: <Translation>{(t) => t("gradethree:c2l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/bear.png"),
          backgroundColor: "#80B673",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", // How do animals get energy
          title: <Translation>{(t) => t("gradethree:c2l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/sleepy.png"),
          backgroundColor: "#AB653E",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", // How food chains form
          title: <Translation>{(t) => t("gradethree:c2l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/dinosaur.png"),
          backgroundColor: "#135DA0",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6", // What animals live in your area
          title: <Translation>{(t) => t("gradethree:c2l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/fox.png"),
          backgroundColor: "#80B673",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", // Rare and endangered animals
          title: <Translation>{(t) => t("gradethree:c2l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/flamingo.png"),
          backgroundColor: "#75B1A6",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8", // How to protect animals
          title: <Translation>{(t) => t("gradethree:c2l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/pet.png"),
          backgroundColor: "#0D524B",
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradethree:human")}</Translation>, // Human
      icon: require("../../../../assets/chapter-icons/brain.png"),
      colorOne: "plum",
      colorTwo: "thistle",
      key: "C3",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", // How the excretory system works
          title: <Translation>{(t) => t("gradethree:c3l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/bladder.png"),
          backgroundColor: "#5D5391",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", // What are the functions of the nervous system
          title: <Translation>{(t) => t("gradethree:c3l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/brain.png"),
          backgroundColor: "#38B6FF",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // Meaning of the nervous system
          title: <Translation>{(t) => t("gradethree:c3l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/nerve.png"),
          backgroundColor: "#00C2CB",
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("common:chapterfour")}</Translation>, // Chapter 4
      name: <Translation>{(t) => t("gradethree:airwater")}</Translation>, // Substances and their properties. Air and water
      icon: require("../../../../assets/chapter-icons/wind.png"),
      colorOne: "coral",
      colorTwo: "darksalmon",
      key: "C4",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", // Properties of substances
          title: <Translation>{(t) => t("gradethree:c4l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/mystery-box.png"),
          backgroundColor: "#FF66C3",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", // What are the substances
          title: <Translation>{(t) => t("gradethree:c4l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/molecules.png"),
          backgroundColor: "#2EA6FF",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // Do the properties of substances change
          title: <Translation>{(t) => t("gradethree:c4l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/boil.png"),
          backgroundColor: "#EF5140",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", // How the properties of substances change
          title: <Translation>{(t) => t("gradethree:c4l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/match.png"),
          backgroundColor: "#7BB6E0",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", // How air moves
          title: <Translation>{(t) => t("gradethree:c4l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wind.png"),
          backgroundColor: "#ADD8E6",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6", // What benefit and harm does the wind bring
          title: <Translation>{(t) => t("gradethree:c4l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/mill.png"),
          backgroundColor: "#16A537",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", // Why does air matter
          title: <Translation>{(t) => t("gradethree:c4l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/diving.png"),
          backgroundColor: "#000935",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8", // How the air gets polluted
          title: <Translation>{(t) => t("gradethree:c4l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/traffic.png"),
          backgroundColor: "#302E2D",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9", // The water cycle in nature
          title: <Translation>{(t) => t("gradethree:c4l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-cycle.png"),
          backgroundColor: "#43B14B",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10", // What is precipitation and how does it happen
          title: <Translation>{(t) => t("gradethree:c4l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/rain.png"),
          backgroundColor: "#5171FE",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 11 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11", // What does water dissolve
          title: <Translation>{(t) => t("gradethree:c4l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/watercolors.png"),
          backgroundColor: "#693E8A",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 12 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12", // How water gets polluted
          title: <Translation>{(t) => t("gradethree:c4l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/ocean-pollution.png"),
          backgroundColor: "#486BDB",
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter5",
      title: <Translation>{(t) => t("common:chapterfive")}</Translation>, // Chapter 5
      name: <Translation>{(t) => t("gradethree:physics")}</Translation>, // Physics of nature
      icon: require("../../../../assets/chapter-icons/sound-wave.png"),
      colorOne: "indigo",
      colorTwo: "darkmagenta",
      key: "C5",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 5 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", // Properties of substances
          title: <Translation>{(t) => t("gradethree:c5l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/mirror.png"),
          backgroundColor: "#930D31",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 5 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", // What are the substances
          title: <Translation>{(t) => t("gradethree:c5l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/prism.png"),
          backgroundColor: "#800080",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 5 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // Do the properties of substances change
          title: <Translation>{(t) => t("gradethree:c5l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/shadow.png"),
          backgroundColor: "#159D52",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 5 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", // How the properties of substances change
          title: <Translation>{(t) => t("gradethree:c5l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/bass.png"),
          backgroundColor: "#5BE1E6",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 5 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", // How air moves
          title: <Translation>{(t) => t("gradethree:c5l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/alarm-crazy.png"),
          backgroundColor: "#32620F",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 5 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6", // What benefit and harm does the wind bring
          title: <Translation>{(t) => t("gradethree:c5l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/coffee.png"),
          backgroundColor: "#AC795B",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 5 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", // Why does air matter
          title: <Translation>{(t) => t("gradethree:c5l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/polar-bear.png"),
          backgroundColor: "#0E6880",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 5 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8", // How the air gets polluted
          title: <Translation>{(t) => t("gradethree:c5l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/balloons.png"),
          backgroundColor: "#7ED957",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 5 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9", // The water cycle in nature
          title: <Translation>{(t) => t("gradethree:c5l9")}</Translation>,
          backgroundColor: "#8C52FF",
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter6",
      title: <Translation>{(t) => t("common:chaptersix")}</Translation>, // Chapter 6
      name: (
        <Translation>{(t) => t("gradethree:naturalresources")}</Translation>
      ), // Substances and their properties. Natural resources
      icon: require("../../../../assets/chapter-icons/log.png"),
      colorOne: "darkgreen",
      colorTwo: "darkolivegreen",
      key: "C6",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", // Properties of substances
          title: <Translation>{(t) => t("gradethree:c6l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/ore.png"),
          backgroundColor: "#5171FE",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", // What are the substances
          title: <Translation>{(t) => t("gradethree:c6l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/diamond.png"),
          backgroundColor: "#004AAD",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // Do the properties of substances change
          title: <Translation>{(t) => t("gradethree:c6l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/stove.png"),
          backgroundColor: "#FF5757",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", // How the properties of substances change
          title: <Translation>{(t) => t("gradethree:c6l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/mining.png"),
          backgroundColor: "#F8D23C",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", // How air moves
          title: <Translation>{(t) => t("gradethree:c6l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/steel.png"),
          backgroundColor: "#737373",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6", // What benefit and harm does the wind bring
          title: <Translation>{(t) => t("gradethree:c6l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/metal.png"),
          backgroundColor: "#1F628D",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", // Why does air matter
          title: <Translation>{(t) => t("gradethree:c6l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/pottery.png"),
          backgroundColor: "#00C2CB",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8", // How the air gets polluted
          title: <Translation>{(t) => t("gradethree:c6l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/cargo.png"),
          backgroundColor: "#004AAD",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9", // The water cycle in nature
          title: <Translation>{(t) => t("gradethree:c6l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/electric-car.png"),
          backgroundColor: "#C9E265",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10", // What is precipitation and how does it happen
          title: <Translation>{(t) => t("gradethree:c6l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/crack.png"),
          backgroundColor: "#5DE1E6",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 6 Lesson 11 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11", // What does water dissolve
          title: <Translation>{(t) => t("gradethree:c6l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/oil.png"),
          backgroundColor: "#5271FE",
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter7",
      title: <Translation>{(t) => t("common:chapterseven")}</Translation>, // Chapter 7
      name: <Translation>{(t) => t("gradethree:cosmos")}</Translation>, // Earth and space
      icon: require("../../../../assets/chapter-icons/constellation.png"),
      colorOne: "midnightblue",
      colorTwo: "mediumblue",
      key: "C7",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 7 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", // Properties of substances
          title: <Translation>{(t) => t("gradethree:c7l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/planet-earth.png"),
          backgroundColor: "#38B6FF",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 7 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", // What are the substances
          title: <Translation>{(t) => t("gradethree:c7l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/plains.png"),
          backgroundColor: "#5BE1E6",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 7 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // Do the properties of substances change
          title: <Translation>{(t) => t("gradethree:c7l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/relief.png"),
          backgroundColor: "#7ED957",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 7 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", // How the properties of substances change
          title: <Translation>{(t) => t("gradethree:c7l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/space.png"),
          backgroundColor: "#004889",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 7 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", // How air moves
          title: <Translation>{(t) => t("gradethree:c7l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/shooting-star.png"),
          backgroundColor: "#003060",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 7 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6", // What benefit and harm does the wind bring
          title: <Translation>{(t) => t("gradethree:c7l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/moon.png"),
          backgroundColor: "#65C6F3",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 7 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", // Why does air matter
          title: <Translation>{(t) => t("gradethree:c7l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/earth-sun.png"),
          backgroundColor: "#135DA0",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 7 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8", // How the air gets polluted
          title: <Translation>{(t) => t("gradethree:c7l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/sunshine.png"),
          backgroundColor: "#76B9F0",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 7 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9", // The water cycle in nature
          title: <Translation>{(t) => t("gradethree:c7l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/seasons.png"),
          backgroundColor: "#9DCD5A",
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter8",
      title: <Translation>{(t) => t("common:chaptereight")}</Translation>, // Chapter 8
      name: <Translation>{(t) => t("gradethree:forces")}</Translation>, // Forces and movement
      icon: require("../../../../assets/chapter-icons/swim-ring.png"),
      colorOne: "mediumvioletred",
      colorTwo: "hotpink",
      key: "C8",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 8 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", // Properties of substances
          title: <Translation>{(t) => t("gradethree:c8l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/bath.png"),
          backgroundColor: "#67BBE3",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 8 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", // What are the substances
          title: <Translation>{(t) => t("gradethree:c8l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/float.png"),
          backgroundColor: "#56AEFE",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 8 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // Do the properties of substances change
          title: <Translation>{(t) => t("gradethree:c8l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/feather.png"),
          backgroundColor: "#74D481",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 8 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", // How the properties of substances change
          title: <Translation>{(t) => t("gradethree:c8l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/hot-air-balloon.png"),
          backgroundColor: "#A4E8D3",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 8 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", // How air moves
          title: <Translation>{(t) => t("gradethree:c8l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/rubber-duck.png"),
          backgroundColor: "#56AEFE",
          minigames: {},
        },
      ],
    },
  ],
};
