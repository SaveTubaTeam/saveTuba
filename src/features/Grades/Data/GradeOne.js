import { Translation } from "react-i18next";

import {
  SortingImages,
  QuizImages,
  TestImages,
} from "../../../components/Grades/minigames/IMAGES";

export const Grade1 = {
  numChapter: 3,
  chapters: [
    {
      navigation: "Chapter1", // name of the Stack Screen
      title: <Translation>{(t) => t("common:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradeone:iamanexplorer")}</Translation>, // I am an explorer
      icon: require("../../../../assets/chapter-icons/location.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch1.jpg"),
      colorOne: "indianred",
      colorTwo: "firebrick",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 1 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c1l1")}</Translation>, // Where to find out about everything in the world?
          thumbnail: require("../../../../assets/lesson-icons/globe.png"),
          backgroundColor: "#2C3653",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c1l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/earth-globe.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l1_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Choose the image which represents the object below.",
                num: 3,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  {
                    name: "Electron microscope",
                    image: require("../../../../assets/sorting/microscope.png"),
                  },
                  {
                    name: "Optical microscope",
                    image: require("../../../../assets/sorting/optical.png"),
                  },
                  {
                    name: "Beaker",
                    image: require("../../../../assets/sorting/beaker.png"),
                  },
                  {
                    name: "Ruler",
                    image: require("../../../../assets/sorting/ruler.png"),
                  },
                ],
                options: [
                  {
                    title: "Ruler",
                    name: "Ruler",
                  },
                  {
                    title: "Beaker",
                    name: "Beaker",
                  },
                  {
                    title: "Optical microscope",
                    name: "Optical microscope",
                  },
                  { title: "Electron microscope", name: "Electron microscope" },
                ],
              },
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the different sources of information.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Observation",
                  image: require("../../../../assets/memory/laboratory.png"),
                },
                {
                  name: "Observation",
                },
                {
                  type: "image",
                  name: "Other people",
                  image: require("../../../../assets/memory/people.png"),
                },
                {
                  name: "Other people",
                },
                {
                  type: "image",
                  name: "Internet",
                  image: require("../../../../assets/memory/world-grid.png"),
                },
                {
                  name: "Internet",
                },
                {
                  type: "image",
                  name: "Books",
                  image: require("../../../../assets/memory/book.png"),
                },
                {
                  name: "Books",
                },
                {
                  type: "image",
                  name: "Experiments",
                  image: require("../../../../assets/memory/experiment.png"),
                },
                {
                  name: "Experiments",
                },
                {
                  type: "image",
                  name: "Yourself",
                  image: require("../../../../assets/memory/girl.png"),
                },
                {
                  name: "Yourself",
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Using one of the sources of information, find out about a sustainable invention. Which scientist contributed the most in its development?",
                    placeholder: "This invention is important because..",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Upload a picture of the sustainable invention that you described in the Open Response mini-game.",
            },
            /*
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt: (
                <Translation>{(t) => t("mastery:g1c1l2_prompt")}</Translation>
              ),
              data: [
                {
                  text: "first item",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "second item",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "third item",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
              ],
            } /*
            drawing: {
              navigation: "Drawing",
              icon: require("../../../../assets/drawing.png"),
              backgroundColor: "skyblue",
              prompt: (
                <Translation>{(t) => t("mastery:g1c1l2_prompt")}</Translation>
              ),
            },
            flashcards: {
              navigation: "Flashcards",
              icon: require("../../../../assets/flash-card.png"),
              backgroundColor: "seagreen",
              data: [
                {
                  word: "word 1",
                  definition: "definition 1",
                },
                {
                  word: "word 2",
                  definition: "definition 2",
                },
                {
                  word: "word 3",
                  definition: "definition 3",
                },
              ],
            },*/
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 1 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c1l2")}</Translation>, // Why does the dandelion look like a parachute?
          thumbnail: require("../../../../assets/lesson-icons/dandelion.png"),
          backgroundColor: "#87CEFA",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c1l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/golden-ratio.png"),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 4,
              content: [
                {
                  prompt:
                    "Astronomers use what kind of building to observe objects through powerful telescopes?",
                  answers: [
                    {
                      text: "Planetarium",
                    },
                    {
                      text: "Observatory",
                    },
                    {
                      text: "Museum",
                    },
                    { text: "Tower" },
                  ],
                  answer: "Observatory",
                },
                {
                  prompt: "What is not a human sense?",
                  answers: [
                    {
                      text: "Sight",
                    },
                    {
                      text: "Hearing",
                    },
                    {
                      text: "Smell",
                    },
                    { text: "Intuition" },

                    { text: "Taste" },

                    { text: "Touch" },
                  ],
                  answer: "Intuition",
                },
                {
                  prompt:
                    "Observation is the main method of learning about nature.",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "True",
                },
                {
                  prompt: "What is not a type of natural scientist?",
                  answers: [
                    {
                      text: "Biologist",
                    },
                    {
                      text: "Chemist",
                    },
                    {
                      text: "Physicist",
                    },
                    {
                      text: "Astronomer",
                    },
                    {
                      text: "Economist",
                    },
                  ],
                  answer: "Economist",
                },
              ],
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Reorder the below items to show which steps you need to take when designing an experiment.",
              data: [
                {
                  text: "	Think about the necessary equipment",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Think about the stages of observation",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Choose the timeframe of observation",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Choose an object for observation",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Write down or draw the observation",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Create a goal of observation",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Make a conclusion",
                  dormant: "#6e57d2",
                  active: "#634ebd",
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Pick a random object \naround you. Complete the sentence.",
                    placeholder: "Observing this object, I noticed..",
                    image: require("../../../../assets/openresponse/observing.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/feild-bg.jpg"),
              prompt:
                "Take a walk and take a picture of a dandelion. Upload your photo below.",
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 1 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c1l3")}</Translation>, // What is an experiment?
          thumbnail: require("../../../../assets/lesson-icons/experiment.png"),
          backgroundColor: "#8C77AA",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c1l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/chemistry.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/bowl.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/milk.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/colorant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/dish-soap.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c1l3_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/splash.png"),
              },
            ],
          },
          minigames: {
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Reorder the below items to show which steps you need to take when conducting an experiment.",
              data: [
                {
                  text: "Hypothesis",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Resources",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Notes",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Goal",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Plan",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Conclusion",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Design an experiment connected to analyzing something in nature.",
                    placeholder: "My plan is to..",
                    image: require("../../../../assets/openresponse/scientist.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of the item you designed an expirement for in the Open Resoponse mini-game ",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 4,
              content: [
                {
                  prompt: "What is the first step in the experiment?",
                  answers: [
                    {
                      text: "Observation",
                    },
                    {
                      text: "Test",
                    },
                    {
                      text: "Hypothesis",
                    },
                    { text: "Prediction" },
                  ],
                  answer: "Observation",
                },
                {
                  prompt:
                    "Lying in bed you notice that you get cold every time your brother opens the door. This is most closely associated with which step in conducting an experiment?",
                  answers: [
                    {
                      text: "Forming a hypothesis",
                    },
                    {
                      text: "Developing a test",
                    },
                    {
                      text: "Making an observation",
                    },
                    { text: "Conclusion" },
                  ],
                  answer: "Making an observation",
                },
                {
                  prompt: "What is the last step in the experiment?",
                  answers: [
                    {
                      text: "Conclusion",
                    },
                    {
                      text: "Communication of results",
                    },
                    {
                      text: "Observation",
                    },
                    {
                      text: "Hypothesis formation",
                    },
                  ],
                  answer: "Conclusion",
                },
                {
                  prompt: "What is a hypothesis?",
                  answers: [
                    {
                      text: "An untestable statement",
                    },
                    {
                      text: "An experiment",
                    },
                    {
                      text: "Your best “educated guess” of what the answer to your question will be",
                    },
                    {
                      text: "Whatever the teacher tells you is the truth",
                    },
                  ],
                  answer:
                    "Your best “educated guess” of what the answer to your question will be",
                },
              ],
            },
          },
        },
      ],
    },
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("common:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradeone:wildlife")}</Translation>, // Wildlife
      icon: require("../../../../assets/chapter-icons/ecology.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch2.jpg"),
      colorOne: "indigo",
      colorTwo: "mediumpurple",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c2l1")}</Translation>, // What are the secrets of plants?
          thumbnail: require("../../../../assets/lesson-icons/plant-hand.png"),
          backgroundColor: "#B25C3E",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/sprout.png"),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",

              backgroundImage: require("../../../../assets/snapshots/plant-bg.jpg"),
              prompt: "What's your favorite plant? Take a picture.",
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What's going on in this photo? How do you think this affects the environment?",
                    placeholder: "I think that..",
                    image: require("../../../../assets/openresponse/cutting.png"),
                  },
                ],
              },
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "In which part of the plant is this obtained?",
                num: 3,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  {
                    name: "Roots",
                  },
                  {
                    name: "Leaves",
                  },
                ],
                options: [
                  { title: "Water", name: "Roots" },
                  {
                    title: "Air",
                    name: "Leaves",
                  },
                  { title: "Mineral plant substances", name: "Roots" },
                  {
                    title: "Solar energy",
                    name: "Leaves",
                  },
                ],
              },
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c2l2")}</Translation>, // How do plants live?
          thumbnail: require("../../../../assets/lesson-icons/plant-water.png"),
          backgroundColor: "#F9F0D7",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/habitat.png"),
              },
            ],
          },
          minigames: {
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "How does this plant (a cactus) survive in a place without water?",
                    placeholder: "A cactus..",
                    image: require("../../../../assets/openresponse/desert.png"),
                  },
                ],
              },
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the different natural habitats.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Polar",
                  image: require("../../../../assets/memory/polar.png"),
                },
                {
                  name: "Polar",
                },
                {
                  type: "image",
                  name: "Tundra",
                  image: require("../../../../assets/memory/tundra.png"),
                },
                {
                  name: "Tundra",
                },
                {
                  type: "image",
                  name: "Evergreen forests",
                  image: require("../../../../assets/memory/evergreen.png"),
                },
                {
                  name: "Evergreen forests",
                },
                {
                  type: "image",
                  name: "Seasonal forests",
                  image: require("../../../../assets/memory/seasonal.png"),
                },
                {
                  name: "Seasonal forests",
                },
                {
                  type: "image",
                  name: "Grasslands",
                  image: require("../../../../assets/memory/grasslands.png"),
                },
                {
                  name: "Grasslands",
                },
                {
                  type: "image",
                  name: "Deserts",
                  image: require("../../../../assets/memory/deserts.png"),
                },
                {
                  name: "Deserts",
                },
                {
                  type: "image",
                  name: "Rainforests",
                  image: require("../../../../assets/memory/rainforests.png"),
                },
                {
                  name: "Rainforests",
                },
                {
                  type: "image",
                  name: "Oceans",
                  image: require("../../../../assets/memory/oceans.png"),
                },
                {
                  name: "Oceans",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/earth-bg.jpg"),
              prompt:
                "Take a picture of a habitat in which your favorite plant grows.",
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c2l3")}</Translation>, // Who hatched from the egg?
          thumbnail: require("../../../../assets/lesson-icons/dino.png"),
          backgroundColor: "#76220C",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/chick.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/egg-shell.png"),
              },
            ],
          },
          minigames: {
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Are the animals below mammals or amphibians?",
                num: 5,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  {
                    name: "Mammals",
                  },
                  {
                    name: "Amphibians",
                  },
                ],

                options: [
                  {
                    name: "Mammals",
                    title: "Horses",
                  },
                  {
                    name: "Amphibians",
                    title: "Frogs",
                  },
                  {
                    name: "Amphibians",
                    title: "Salamanders",
                  },
                  {
                    name: "Mammals",
                    title: "Humans",
                  },
                  {
                    name: "Mammals",
                    title: "Kangaroos",
                  },
                  {
                    name: "Mammals",
                    title: "Blue whales",
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/animal-bg.jpg"),
              prompt:
                "Which group of animals lays eggs? Can you take a picture of one animal that lays eggs?",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 4,
              content: [
                {
                  prompt: "What makes a fish unique from other vertebrates?",
                  answers: [
                    {
                      text: "Pass oxygenated water through their gills",
                    },
                    {
                      text: "Fish breathe oxygen",
                    },
                    {
                      text: "The bones of the fish make up their skeleton",
                    },
                    { text: "Fish can survive outside of their habitat" },
                  ],
                  answer: "Pass oxygenated water through their gills",
                },
                {
                  prompt: "Which one of these is not an insect?",
                  answers: [
                    {
                      text: "Ants",
                    },
                    {
                      text: "Fleas",
                    },
                    {
                      text: "Termites",
                    },
                    { text: "Spiders" },
                  ],
                  answer: "Spiders",
                },
                {
                  prompt: "Which one of the following is a bird?",
                  answers: [
                    {
                      text: "Penguin",
                    },
                    {
                      text: "Bat",
                    },
                    {
                      text: "Flying squirrel",
                    },
                    {
                      text: "Butterflies",
                    },
                  ],
                  answer: "Penguin",
                },
                {
                  prompt: "What is the smallest group of vertebrates?",
                  answers: [
                    {
                      text: "Amphibians",
                    },
                    {
                      text: "Insects",
                    },
                    {
                      text: "Fish",
                    },
                    {
                      text: "Mammals",
                    },
                  ],
                  answer: "Mammals",
                },
              ],
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c2l4")}</Translation>, // Who plays hide and seek?
          thumbnail: require("../../../../assets/lesson-icons/chameleon.png"),
          backgroundColor: "#FF9044",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/chick.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/egg-shell.png"),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 4,
              content: [
                {
                  prompt: "Where does a dolphin live?",
                  answers: [
                    {
                      text: "Ocean",
                    },
                    {
                      text: "Rainforest",
                    },
                    {
                      text: "Polar",
                    },
                    { text: "Tundra" },
                  ],
                  answer: "Ocean",
                },
                {
                  prompt:
                    "Which of these are not methods of animals protecting themselves from predators?",
                  answers: [
                    {
                      text: "Running towards the predator to talk it out",
                    },
                    {
                      text: "Camouflage",
                    },
                    {
                      text: "Having thick shells, sharp needles, and bright colors",
                    },
                    { text: "Running away from enemies" },
                  ],
                  answer: "Running towards the predator to talk it out",
                },
                {
                  prompt: "How has a turtle adapted to its environment?",
                  answers: [
                    {
                      text: "Quick, sharp movements",
                    },
                    {
                      text: "Ability to fly",
                    },
                    {
                      text: "Amazing eyesight",
                    },
                    {
                      text: "Different shaped feet, mouth, and shells",
                    },
                  ],
                  answer: "Different shaped feet, mouth, and shells",
                },
                {
                  prompt: "Can animals live both underground and above ground?",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "True",
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Can you name three underground animals? Explain how these animals have adapted to their surroundings and why their current environment is best.",
                    placeholder: "The animals I want to talk about are..",
                    image: require("../../../../assets/openresponse/rabbit.png"),
                  },
                ],
              },
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradeone:c2l5")}</Translation>, // How are animals protected?
          thumbnail: require("../../../../assets/lesson-icons/birdfeeder.png"),
          backgroundColor: "#9DCD5A",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/predator.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/crossbow.png"),
              },
            ],
          },
          minigames: {
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "How do crocodiles prepare for the summer? Specifically, when there is drought?",
                    placeholder: "Crocodiles..",
                    image: require("../../../../assets/openresponse/croc.png"),
                  },
                ],
              },
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 4,
              content: [
                {
                  prompt: "Why do birds migrate?",
                  answers: [
                    {
                      text: "To look for resources, mainly food and nesting locations",
                    },
                    {
                      text: "To escape the predators",
                    },
                    {
                      text: "Birds are generally nomadic creatures and don’t stay in one place",
                    },
                    { text: "To practice their flight" },
                  ],
                  answer:
                    "To look for resources, mainly food and nesting locations",
                },
                {
                  prompt: "Do all birds follow the same migration patterns?",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                  ],
                  answer: "False",
                },
                {
                  prompt: "Why do bears prepare for the winter?",
                  answers: [
                    {
                      text: "The winter is cold",
                    },
                    {
                      text: "Bears cannot find food in this climate",
                    },
                    {
                      text: "Spend quality time with their loved ones",
                    },
                    {
                      text: "All of the above",
                    },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt:
                    "What should you not do when taking a trip out in nature?",
                  answers: [
                    {
                      text: "Leave a trace on the nature trail to mark your accomplishment",
                    },
                    {
                      text: "Walk briskly",
                    },
                    {
                      text: "Collect rubbish",
                    },
                    {
                      text: "Use refillable water bottles",
                    },
                  ],
                  answer:
                    "Leave a trace on the nature trail to mark your accomplishment",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/save-animals-bg.jpg"),
              prompt:
                "Take a picture of an animal that needs to be protected more.",
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt: "What order are the seasons in? Start from January.",
              data: [
                {
                  text: "Winter",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Fall",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Summer",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Spring",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
              ],
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradeone:c2l6")}</Translation>, // Why are we standing?
          thumbnail: require("../../../../assets/lesson-icons/skeleton.png"),
          backgroundColor: "#004B75",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l6_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/x-ray.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l6_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/bones-bg.jpg"),
              prompt:
                "Take a picture of an animal with legs. Take note of how their bones might be different from yours.",
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "List many of the functions of the human skeleton.",
                    placeholder: "The human skeleton..",
                    image: require("../../../../assets/openresponse/anatomy.png"),
                  },
                ],
              },
            },
            reorder: {
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Order from least to greatest the amount of bones a human has at each stage.",
              data: [
                {
                  text: "Puberty",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Childhood",
                  dormant: "#19a127",
                  active: "#169023",
                },
                {
                  text: "Teenage years",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },

                {
                  text: "Senior years",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Infancy",
                  dormant: "#d38f9f",
                  active: "#cd8193",
                },
                {
                  text: "Adulthood",
                  dormant: "pink",
                  active: "#ffacbb",
                },
              ],
            },
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the different bones in the human body.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Ribs",
                  image: require("../../../../assets/memory/skeleton.png"),
                },
                {
                  name: "Ribs",
                },
                {
                  type: "image",
                  name: "Pelvic bone",
                  image: require("../../../../assets/memory/pelvis.png"),
                },
                {
                  name: "Pelvic bone",
                },
                {
                  type: "image",
                  name: "Skull",
                  image: require("../../../../assets/memory/skull.png"),
                },
                {
                  name: "Skull",
                },
                {
                  type: "image",
                  name: "Upper limbs",
                  image: require("../../../../assets/memory/human-back.png"),
                },
                {
                  name: "Upper limbs",
                },
                {
                  type: "image",
                  name: "Spine",
                  image: require("../../../../assets/memory/spinal-column.png"),
                },
                {
                  name: "Spine",
                },
                {
                  type: "image",
                  name: "Lower limbs",
                  image: require("../../../../assets/memory/running.png"),
                },
                {
                  name: "Lower limbs",
                },
              ],
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradeone:c2l7")}</Translation>, // How do we smile?
          thumbnail: require("../../../../assets/lesson-icons/sunshine.png"),
          backgroundColor: "#76B9F0",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l7_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/apple.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l7_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l7_card3")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "List many of the functions of our muscles.",
                    placeholder: "Our muscles..",
                    image: require("../../../../assets/openresponse/strong.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/smile-bg.jpg"),
              prompt:
                "Take a picture of you smiling. Don't forget to smile big!",
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradeone:c2l8")}</Translation>, // How much does your backpack weigh?
          thumbnail: require("../../../../assets/lesson-icons/backpack.png"),
          backgroundColor: "#FC6467",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l8_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l8_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/school-bag.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l8_card3")}</Translation>
                ),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradeone:c2l9")}</Translation>, // What are microbes afraid of?
          thumbnail: require("../../../../assets/lesson-icons/microbes.png"),
          backgroundColor: "#6040AC",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l9_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c2l9_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/health-care.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 2 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradeone:c2l10")}</Translation>, // Why do my teeth hurt?
          thumbnail: require("../../../../assets/lesson-icons/toothache.png"),
          backgroundColor: "#AA1A44",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c2l10_prompt")}</Translation>
            ),
          },
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradeone:substances")}</Translation>, // Substances and their properties
      icon: require("../../../../assets/chapter-icons/air-pollution.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch3.jpg"),
      colorOne: "orange",
      colorTwo: "orangered",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c3l1")}</Translation>, // What are the properties of air?
          thumbnail: require("../../../../assets/lesson-icons/air.png"),
          backgroundColor: "#C85004",

          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l1_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 7,
              content: [
                {
                  prompt:
                    "Everyone has a carbon footprint",
                  answers: [
                    {
                      text: "True",
                    },
                    {
                      text: "False",
                    },
                
                  ],
                  answer: "True",
                },
                {
                  prompt: "Which is not going to help reduce our carbon footprint?",
                  answers: [
                    {
                      text: "Eating local food",
                    },
                    {
                      text: "Recycling",
                    },
                    {
                      text: "Driving to school",
                    },
                    { text: "Planting trees" },

                  ],
                  answer: "Driving to school",
                },
                {
                  prompt:
                    "What gas is increasing in large amounts due to human activities?",
                  answers: [
                    {
                      text: "Carbon Dioxide",
                    },
                    {
                      text: "Oxygen",
                    },
                    { text: "Diesel"},
                  ],
                  answer: "Carbon Dioxide",
                },
                {
                  prompt: "What is the name of the gas that plants take in?",
                  answers: [
                    {
                      text: "Gas",
                    },
                    {
                      text: "Methane",
                    },
                    {
                      text: "Oxygen",
                    },
                    {
                      text: "Carbon Dioxide",
                    },
                   
                  ],
                  answer: "Carbon Dioxide",
                },
                {
                  prompt: "Which one of these does not add CO2 into the atmosphere?",
                  answers: [
                    { text: "Cooking with gas" },
                    { text: "Planting trees" },
                    { text: "Burning wood" },
                    { text: "Riding in a bus" },
                  ],
                  answer: "Planting trees"
                },
                {
                  prompt: "What is CO2?",
                  answers: [
                    { text: "Carbon" },
                    { text: "Oxygen" },
                    { text: "Carbon Dioxide" },
                    { text: "A type of fizzy drink" },
                  ],
                  answer: "Carbon Dioxide"
                },
                {
                  prompt: "While being cooled down, the air _____.",
                  answers: [
                    { text: "Expands" },
                    { text: "Contracts" },
                  ],
                  answer: "Contracts"
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Why don't animals get cold in the winter?",
                    placeholder: "Animals don't get cold because..",
                    image: require("../../../../assets/openresponse/winter.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take and upload three pictures of different things that pollute the air in the city. ",
            },

            sorting: { 
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Sort the causes of air pollution",
                num: 6,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "Anthropogenic" },
                  {name: "Natural" },
                ],
                options: [
                  { title: "Factories", name: "Anthropogenic" },
                  { title: "Wildfires", name: "Natural" },
                  { title: "Cars", name: "Anthropogenic" },
                  { title: "Planes", name: "Anthropogenic"},
                  { title: "Cigarette Smoke", name: "Anthropogenic"},
                  { title: "Volcanoes", name: "Natural"},
                  { title: "Aerosol Cans", name: "Anthropogenic"},
                ],
              },
            },
          }

        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c3l2")}</Translation>, // Where to build a factory?
          thumbnail: require("../../../../assets/lesson-icons/factory.png"),
          backgroundColor: "#2A8FE5",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/factory.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l2_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            quiz: { //not able to scroll down to see options?
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 5,
              content: [
                {
                  prompt:
                    "What happens to the temperature if more greenhouse gases are released into the atmosphere?",
                  answers: [
                    {text: "Temperature increases" },
                    {text: "Temperature decreases"},
                  ],
                  answer: "Temperature increases",
                },
                {
                  prompt: "Which of the following activities contributes the most to carbon emissions globally?",
                  answers: [
                    { text: "Deforestation" },
                    { text: "Agriculture" },
                    { text: "Burning fossil fuels"},
                    { text: "Respiration" },
                  ],
                  answer: "Burning fossil fuels",
                },
                {
                  prompt: //cant scroll down on this question
                    "Increased carbon dioxide may cause global warming by ________.",
                  answers: [
                    { text: "allowing more sunlight into the atmosphere."},
                    { text: "reflecting more sunlight from clouds." },
                    { text: "reducing the amount of oxygen in the air."},
                    { text: "trapping more heat in the atmosphere.",}
                  ],
                  answer: "trapping more heat in the atmosphere.",
                },
                {
                  prompt: "What is a natural source of greenhouse gases?",
                  answers: [
                    { text: "Aerosols" },
                    { text: "Deforestation" },
                    { text: "Volcanic eurptions" },
                    { text: "Burning fossil fuels" },
                  ],
                  answer: "Volcanic eurptions",
                },
                {
                  prompt: "What is the greenhouse effect?",
                  answers: [
                    { text: "The warming of a planet due to trapped radiation." },
                    { text: "The cooling of Earth due to air pollution." },
                    { text: "The heating of a solid, such as a rock." },
                  ],
                  answer: "The warming of a planet due to trapped radiation."
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Make a plan of how you will avoid polluting the air. ",
                    placeholder: "My plan is...",
                    image: require("../../../../assets/openresponse/smog.png"),
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Upload a picture of the factory that causes the most air pollution in the area",
            },
            sorting: { 
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Determine how each action reduces, resues, or recycles",
                num: 6,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "Reduce" },
                  {name: "Reuse" },
                  { name: "Recycle"}
                ],
                options: [
                  { title: "Refill a water bottle with water from home instead of buying a new one.", name: "Reuse" },
                  { title: "Separating glass", name: "Recycle" },
                  { title: "Update your computer rather than throwing it out and getting a replacement", name: "Reuse" },
                  { title: "Only buy what you need", name: "Reduce"},
                  { title: "Separating aluminum", name: "Recycle"},
                  { title: "Look for items that you can reuse instead of buying ", name: "Reduce"},
                  { title: "Buy in bulk", name: "Reduce"},
                  { title: "Separating cardboard to put in recycling facility", name: "Recycle"},
                  { title: "Separating lead batteries", name: "Recycle"},
                  { title: "Ditch plastic bags and choose reusable, environmentally-friendly bags instead", name: "Reuse"},
                  { title: "Choose products with less packaging", name: "Reduce"},
                ],
              },
            },


          },

        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c3l3")}</Translation>, // What do we know about water?
          thumbnail: require("../../../../assets/lesson-icons/water.png"),
          backgroundColor: "#603A70",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l3_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            quiz: {  //ONLY DOES THE FIRST 5 QUESTIONS
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 12,
              content: [
                {
                  prompt: "What does the world \"pollute\" mean?" ,
                  answers: [
                    {text: "To make something clean." },
                    {text: "To make something cheaper."},
                    { text: "To make something dirty."},
                  ],
                  answer: "To make something dirty.",
                },
                {
                  prompt: "How much water is drinkable on Earth?",
                  answers: [
                    { text: "1%" },
                    { text: "5%" },
                    { text: "10%"},
                    { text: "20%" },
                  ],
                  answer: "1%",
                },
                {
                  prompt: "Which is NOT a major source of water pollution in the modern world?",
                  answers: [
                    { text: "Animal feces and algae"},
                    { text: "Agriculture industry chemicals" },
                    { text: "Industrial chemical toxins"},
                    { text: "Municipal waste (human & other)",}
                  ],
                  answer: "Animal feces and algae",
                },
                {
                  prompt: "Water pollution occurs when:", //last question, doest go into the rest of them 
                  answers: [
                    { text: "Harmful substances enter a water supply." },
                    { text: "Industries dispose of waste safely and correctly." },
                    { text: "None of the above" },
                  ],
                  answer: "Harmful substances enter a water supply.",
                },
                {
                  prompt: "There is nothing we can do to stop water pollution",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "False"
                },
                {
                  prompt: "We can prevent water pollution by:",
                  answers: [
                    { text: "Reducing the use of plastic" },
                    { text: "Properly disposing of chemicals" },
                    { text: "Cleaning up after your animals" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above"
                },
                {
                  prompt: "How any forms does water come in?",
                  answers: [
                    { text: "Three" },
                    { text: "Two" },
                    { text: "One" },
                  ],
                  answer: "Three",
                },
                {
                  prompt: "What is precipitation?",
                  answers: [
                    { text: "Sweat from our bodies on hot days. " },
                    { text: "Warm rain, but not cold snow or sleet." },
                    { text: "Gas that we use in furnaces or ovens." },
                    { text: "Any form of water that falls from the sky." },
                  ],
                  answer: "Any form of water that falls from the sky."
                },
                {
                  prompt: "Which example is a form of precipitation?",
                  answers: [
                    { text: "Dew" },
                    { text: "Fog" },
                    { text: "Frost" },
                    { text: "Hail" },
                  ],
                  answer: "Hail",
                },
                {
                  prompt: "What is the water cycle?",
                  answers: [
                    { text: "The 3 forms of water (solid, liquid, gas)"},
                    { text: "The movement of water on, above, or below the surface of the Earth"},
                    { text: "When water melts" },
                    { text: "When clouds form" },
                  ],
                  answer: "The movement of wate on, above, or below the surface of the Earth",
                },
                {
                  prompt: "Evaporation happens when the sun _____ water and turns it into vapor.",
                  answers: [
                    { text: "cools" },
                    { text: "heats up" },
                    { text: "freezes" },
                    { text: "lights up" },
                  ],
                  answer: "heats up",
                },
                {
                  prompt: "Water in its gas form is called ______.",
                  answers: [
                    { text: "water vapor" },
                    { text: "precipitation" },
                    { text: "ice" },
                    { text: "air" },
                  ],
                  answer: 'water vapor',
                }, 
              ],
            },
            openresponse: { // put in dirty water pic
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Describe the picture. What do you think should be changed?",
                    placeholder: "In this picture I see...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            reorder: { //background image ? or nah
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Put the oceans from the smallest to the largest",
              data: [
                {
                  text: "Pacific",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Indian",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Southern",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Artic",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
                {
                  text: "Atlantic",
                  dormant: "#19a127",
                  active: "#169023",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Draw a picture of the water cycle and take a picture of it. Be sure to label the stages of the cycle!",
            },
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c3l4")}</Translation>, // Without what can't a person survive?
          thumbnail: require("../../../../assets/lesson-icons/sun.png"),
          backgroundColor: "#56AEFF",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c3l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l4_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c3l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecology.png"),
              },
            ],
          },
          minigames: {
            sorting: { 
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Determine which resrouce category the picture corresponds to ",
                
                num: 9,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "Natural" },
                  {name: "Anthropogenic" },
                 
                ],
                options: [ //not done, want to change title to image
                  { image: require("../../../../assets/sorting/sun.png") ,name: "Natural" },
                  { title: "Separating glass", name: "Recycle" },
                  { title: "Update your computer rather than throwing it out and getting a replacement", name: "Reuse" },
                  { title: "Only buy what you need", name: "Reduce"},
                  { title: "Separating aluminum", name: "Recycle"},
                  { title: "Look for items that you can reuse instead of buying ", name: "Reduce"},
                  { title: "Buy in bulk", name: "Reduce"},
                  { title: "Separating cardboard to put in recycling facility", name: "Recycle"},
                  { title: "Separating lead batteries", name: "Recycle"},
                  { title: "Ditch plastic bags and choose reusable, environmentally-friendly bags instead", name: "Reuse"},
                  { title: "Choose products with less packaging", name: "Reduce"},
                ],
              },
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "How do people use natural resources to create energy? Name one good (sustainable) way the energy is created and one bad way (unsustainable) way.",
                    placeholder: "A way people use energy is by...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 5,
              content: [
                {
                  prompt:"What is NOT a sustainable practice?",
                  answers: [
                    {text: "Reducing" },
                    {text: "Reusing" },
                    {text: "Recycling" },
                    {text: "Buying"}
                  ],
                  answer: "Buying",
                },
                {
                  prompt: "What is the term used to describe objects that are being washed and used again?",
                  answers: [
                    { text: "Reducing" },
                    { text: "Reusing" },
                    { text: "Recycling"},
                    { text: "Buying" },
                  ],
                  answer: "Reusing",
                },
                {
                  prompt: "What is the term used to describe objects that are being made into new materials?",
                  answers: [
                    { text: "Reducing" },
                    { text: "Reusing" },
                    { text: "Recycling"},
                    { text: "Buying" },
                  ],
                  answer: "Recycling",
                },
                {
                  prompt: "What is landfill?",
                  answers: [
                    { text: "A place where trash is piled up." },
                    { text: "A place where trash is reduced." },
                    { text: "A place where trash is recycled." },
                    { text: "A place where trash is reused" },
                  ],
                  answer: "A place where trash is piled up.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundImage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take three pictures of the ways you take care of the environment",
              
            },

            
          },
        },
      ],
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("common:chapterfour")}</Translation>, // Chapter 4
      name: <Translation>{(t) => t("gradeone:cosmos")}</Translation>, // Earth and space
      icon: require("../../../../assets/chapter-icons/rocket.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch4.jpg"),
      colorOne: "midnightblue",
      colorTwo: "mediumturquoise",
      lessons: [
        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 1 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c4l1")}</Translation>, // The sun and its influence to Earth
          thumbnail: require("../../../../assets/lesson-icons/sunflower.png"),
          backgroundColor: "#80B673",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l1_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              numAnswers: 5,
              content: [
                {
                  prompt:"The majority of the Earth's energy comes from ...",
                  answers: [
                    {text: "the Earth's core." },
                    {text: "the Sun." },
                    {text: "hydroelectric power." },
                    {text: "burning fossil fuels."}
                  ],
                  answer: "the Sun.",
                },
                {
                  prompt: "The Earth acts like a greenhouse that catches and traps heat from the sun.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "________ is an increase in global temperatures believed to be caused in part by the greenhouse effect.",
                  answers: [
                    { text: "Climate" },
                    { text: "Global warming" },
                    { text: "Climate change"},
                    { text: "Greenhouse effect" },
                  ],
                  answer: "Global warming",
                },
                {
                  prompt: "________ is a change in global and reginal climate patterns attributed to an increase in atmospheric carbon dioxide from the burning of fossil fuels.",
                  answers: [
                    { text: "Radiation" },
                    { text: "Climate change" },
                    { text: "Greenhouse gas" },
                  ],
                  answer: "Climate change",
                },
              ],
            },

          },
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 2 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c4l2")}</Translation>, // Who is friends with the Sun?
          thumbnail: require("../../../../assets/lesson-icons/solar-system.png"),
          backgroundColor: "#051D40",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l2_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 3 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c4l3")}</Translation>, // How do planets live?
          thumbnail: require("../../../../assets/lesson-icons/planet.png"),
          backgroundColor: "#4E1A3D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 4
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c4l4")}</Translation>, // Why does spring follow after winter?
          thumbnail: require("../../../../assets/lesson-icons/spring.png"),
          backgroundColor: "#065D40",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
        },

        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 4 Lesson 5
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradeone:c4l5")}</Translation>, // How to not be late for the lesson?
          thumbnail: require("../../../../assets/lesson-icons/alarm.png"),
          backgroundColor: "#6040AC",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c4l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c4l5_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant.png"),
              },
            ],
          },
        },
      ],
    },
    {
      navigation: "Chapter5",
      title: <Translation>{(t) => t("common:chapterfive")}</Translation>, // Chapter 5
      name: <Translation>{(t) => t("gradeone:physics")}</Translation>, // Physics of nature
      icon: require("../../../../assets/chapter-icons/physics.png"),
      backgroundImage: require("../../../../assets/mastery/bg/ch5.jpg"),
      colorOne: "lightpink",
      colorTwo: "mediumvioletred",
      lessons: [
        /* 
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          Grade 1 Chapter 5 Lesson 1
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
          */

        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradeone:c5l1")}</Translation>, // Why are items moving?
          thumbnail: require("../../../../assets/lesson-icons/force.png"),
          backgroundColor: "#7F72E3",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l1_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/renewable-energy.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 2
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradeone:c5l2")}</Translation>, // Who is faster?
          thumbnail: require("../../../../assets/lesson-icons/race.png"),
          backgroundColor: "#2C1F36",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l2_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l2_card2")}</Translation>
                ),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 3
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradeone:c5l3")}</Translation>, // The quieter you go…the further you will go
          thumbnail: require("../../../../assets/lesson-icons/noise.png"),
          backgroundColor: "#C7B3EE",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/eagle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l3_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/traffic-jam.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 4
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c5l4")}</Translation>, // How much does an elephant weigh?
          thumbnail: require("../../../../assets/lesson-icons/elephant.png"),
          backgroundColor: "#9DCD5A",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l4_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l4_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l4_card3")}</Translation>
                ),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 5
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradeone:c5l5")}</Translation>, // How to get to Emerald City?
          thumbnail: require("../../../../assets/lesson-icons/prism.png"),
          backgroundColor: "#800080",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/sun.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/glass-bottle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l5_card4")}</Translation>
                ),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 6
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradeone:c5l6")}</Translation>, // Where did the ray of light go?
          thumbnail: require("../../../../assets/lesson-icons/rays.png"),
          backgroundColor: "#7F94E4",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l6_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l6_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/crayons.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 7
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradeone:c5l7")}</Translation>, // What is the sound?
          thumbnail: require("../../../../assets/lesson-icons/music.png"),
          backgroundColor: "#74D481",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l7_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l7_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l7_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/loud-speaker.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 8
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradeone:c5l8")}</Translation>, // How do we hear sounds?
          thumbnail: require("../../../../assets/lesson-icons/ear.png"),
          backgroundColor: "#EE3A5D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l8_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l8_card2")}</Translation>
                ),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 9
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradeone:c5l9")}</Translation>, // How does the thermometer know if it is warm or cold?
          thumbnail: require("../../../../assets/lesson-icons/thermometer.png"),
          backgroundColor: "#24632D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l9_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/thermometer.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l9_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l9_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/hot-temperature.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 10
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradeone:c5l10")}</Translation>, // Where does frost hide during the summer?
          thumbnail: require("../../../../assets/lesson-icons/frost.png"),
          backgroundColor: "#22263E",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l10_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l10_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l10_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/heater.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 11
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradeone:c5l11")}</Translation>, // What is used for magnets?
          thumbnail: require("../../../../assets/lesson-icons/magnet.png"),
          backgroundColor: "#4EB6AF",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l11_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/magnet.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l11_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l11_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/refrigerator.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 5 Lesson 12
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradeone:c5l12")}</Translation>, // How to have fun during the summer?
          thumbnail: require("../../../../assets/lesson-icons/summer.png"),
          backgroundColor: "#FCBFC5",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g1c5l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/baby.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/search.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g1c5l12_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/light-bulb.png"),
              },
            ],
          },
        },
      ],
    },
  ],
};
