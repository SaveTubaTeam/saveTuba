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
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description:
                "Match the images with different sources of information.",
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
                    name: "Ruler",
                  },
                  {
                    name: "Beaker",
                  },
                  {
                    name: "Optical microscope",
                  },
                  {
                    name: "Electron microscope",
                  },
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
              backgroundImage: require("../../../../assets/mastery/bg/ch1.jpg"),
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
              prompt:
                "Take a picture of what you analyzed in the previous mini-game.",
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
              description: "Match the images with different natural habitats.",
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
              prompt:
                "Which group of animals lays eggs? Can you take a picture of one animal that lays eggs?",
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
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradeone:c3l4")}</Translation>, // Without what is a person not enough?
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
