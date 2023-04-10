import { Translation } from "react-i18next";
import { React } from 'react';

import {
  SortingImages,
  // QuizImages,
  // TestImages,
} from "../../../components/Grades/minigames/IMAGES";

export const Grade2 = {
  chapters: [
    {
      navigation: "Chapter1", // you need to specify name or key when calling navigate
      title: <Translation>{(t) => t("common:chapterone")}</Translation>, // Chapter 1
      name: <Translation>{(t) => t("gradetwo:iamanexplorer")}</Translation>, // I am an explorer
      icon:  "../../../../assets/chapter-icons/explore.png",
      backgroundImage:  "../../../../assets/mastery/bg/ch1.png",
      colorOne: "darkorange",
      colorTwo: "goldenrod",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 1 Lesson 1 |||| NEEDS 2 MORE MINIGAMES
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", //History of scientific discovery
          title: <Translation>{(t) => t("gradetwo:c1l1")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/wheel.png",
          backgroundColor: "#87CB28",

          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c1l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l1_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/search-object.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l1_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon:  "../../../../assets/creativity.png",
              backgroundColor: "mediumpurple",
              imageBg:  "../../../../assets/nat.jpg",
              content: [
                {
                  //funny wording
                  prompt:
                    "Which one is an example of a discovery with its purpose?",
                  answers: [
                    { text: "A telescope to see the stars" },
                    { text: "A lightbulb to warm the room" },
                    { text: "An airplane to drive on the road" },
                    { text: "A printing press to make fabric" },
                  ],
                  answer: "A telescope to see the stars",
                },
                {
                  prompt:
                    "After the telescope was invented, what were people able to see better?",
                  answers: [
                    { text: "Air" },
                    { text: "Water" },
                    { text: "Soil" },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt: "Are all bacteria harmful?",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "False",
                },
                {
                  prompt:
                    "In the 19th centry, what resource did people use to illuminate their houses?",
                  answers: [
                    { text: "Gas" },
                    { text: "Water" },
                    { text: "Coal" },
                    { text: "Plants" },
                  ],
                  answer: "Gas",
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon:  "../../../../assets/image.png",
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is the difference between an experiment and observations?",
                    placeholder: "The difference between...",
                    image:  "../../../../assets/openresponse/innovation.png",
                  },
                ],
              },
            },
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
          thumbnail:  "../../../../assets/lesson-icons/read.png",
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
                image:  "../../../../assets/mastery/eco-light.png",
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
          navigation: "Lesson3", // planning and conducting an expirement
          title: <Translation>{(t) => t("gradetwo:c1l3")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/research.png",
          backgroundColor: "#00C2CB",
          minigames: {
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon:  "../../../../assets/image.png",
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is a hypothesis and why is it important? Is it important to ask questions when conducting observations?",
                    placeholder: "A hypothesis is imporant because...",
                    image:  "../../../../assets/openresponse/innovation.png",
                  },
                ],
              },
            },
            quiz: {
              navigation: "QuizScreen",
              icon:  "../../../../assets/creativity.png",
              backgroundColor: "mediumpurple",
              imageBg:  "../../../../assets/nat.jpg",
              content: [
                {
                  //funny wording
                  prompt: "What is the best way to test your hypothesis?",
                  answers: [
                    {
                      text: "Ask your friends if they think your hypothesis is correct",
                    },
                    { text: "By looking it up on the internet" },
                    { text: "Creating an experiment and recording results" },
                    { text: "Do nothing" },
                  ],
                  answer: "Creating an experiment and recording results.",
                },
                {
                  prompt:
                    "What is one of the first things you should do when you want to create an experiment?",
                  answers: [
                    { text: "Look at the conclusions" },
                    { text: "Make observations" },
                    { text: "Record results" },
                    { text: "Collect all experimental materials" },
                  ],
                  answer: "Make observations",
                },
                {
                  prompt: "What is a hypothesis?",
                  answers: [
                    {
                      text: "A scientific proposition to explain a process in nature or society",
                    },
                    {
                      text: "A scientific explanation to explain why you are correct",
                    },
                    {
                      text: "A scientific explanation to explain how you are incorrect",
                    },
                    {
                      text: "A scientific explanation to explain why you should practice sustainable actions",
                    },
                  ],
                  answer:
                    "A scientific proposition to explain a process in nature or society",
                },
                {
                  prompt:
                    "In the 19th centry, what resource did people use to illuminate their houses?",
                  answers: [
                    { text: "Gas" },
                    { text: "Water" },
                    { text: "Coal" },
                    { text: "Plants" },
                  ],
                  answer: "Gas",
                },
              ],
            },
            reorder: {
              navigation: "Reorder",
              icon:  "../../../../assets/reorder.png",
              backgroundColor: "pink",
              prompt:
                "Put the steps in order of how you would run an experiment.",
              data: [
                {
                  text: "Determine the purpose of the study",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Find observations",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Draw conclusions",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Formulate a hypothesis",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon:  "../../../../assets/recycle-bin.png",
              backgroundColor: "coral",
              content: {
                prompt:
                  "Match the action to the correct step of the expirement",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "Observation" },
                  { name: "Hypothesis" },
                  { name: "Conclusion" },
                  { name: "Purpose of study" },
                ],
                options: [
                  {
                    title: "Elena sees that not all her plants.",
                    name: "Observation",
                  },
                  {
                    title:
                      "Sergey is coming up with a way to explain a natural phenomenon he saw.",
                    name: "Hypothesis",
                  },
                  {
                    title:
                      "Vladimir sees from his experiment that flowers cannot grow well in the smog.",
                    name: "Conclusion",
                  },
                  {
                    title:
                      "Aleksandr wants to figure out the effects of trash on plant growth.",
                    name: "Purpose of study",
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/scientist.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/air-pollution.png",
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
                image:  "../../../../assets/mastery/reuse.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l3_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/ask-question.png",
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
      backgroundImage:  "../../../../assets/mastery/bg/ch2.png",
      icon:  "../../../../assets/chapter-icons/butterfly.png",
      colorOne: "darkolivegreen",
      colorTwo: "darkgreen",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", //how do plant leaves work
          title: <Translation>{(t) => t("gradetwo:c2l1")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/leaf.png",
          backgroundColor: "#008036",
          minigames: {
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon:  "../../../../assets/image.png",
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "List 3 plants that you see everyday. Why do you think that you see them so often? \nThink about the environmental conditions they need to survive.",
                    placeholder: "The plants I see everyday are...",
                    image:  "../../../../assets/openresponse/innovation.png",
                  },
                ],
              },
            },
            quiz: {
              navigation: "QuizScreen",
              icon:  "../../../../assets/creativity.png",
              backgroundColor: "mediumpurple",
              imageBg:  "../../../../assets/nat.jpg",
              content: [
                {
                  //funny wording
                  prompt:
                    "Finish the hypothesis: 'If the plant will not recieve water, then...'",
                  answers: [
                    { text: "the plant will live." },
                    { text: "the plant will not survive." },
                    { text: "the plant will produce its own water." },
                    { text: "the plant will grow very tall." },
                  ],
                  answer: "the plant will not survive.",
                },
                {
                  prompt: "What do leaves do?",
                  answers: [
                    { text: "Release oxygen back into the air" },
                    {
                      text: "Absorb carbon dioxide and sunlight through small holes (stomata)",
                    },
                    { text: "Create sugars for the plant" },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt:
                    "Chlorophyll is the substance that helps the leaves capture sunlight and transform it into sugars for the plant, as well as giving the plants their green color.",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
                {
                  prompt: "Which of the following is a true statement:",
                  answers: [
                    {
                      text: "A tree can release enough oxygen for a family of four to breathe within a year.",
                    },
                    {
                      text: "Driving a car for two hours uses the same abount of oxygen a tree produces in two years.",
                    },
                    {
                      text: "Chlorophyll is also found in algae and some bacteria.",
                    },
                    { text: "All the above statements are true." },
                  ],
                  answer: "All the above statements are true.",
                },
                {
                  prompt:
                    "Indoor plants can produce as much oxygen in the shade as some plants do in direct sunshine.",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
              ],
            },
            sorting: {
              navigation: "Sorting",
              icon:  "../../../../assets/recycle-bin.png",
              backgroundColor: "coral",
              content: {
                prompt: "Match the plant to its common name",
                num: 3,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  {
                    name: "Spider plant",
                    image:  "../../../../assets/sorting/spider-plant.png",
                  },
                  {
                    name: "Gloxinia",
                    image:  "../../../../assets/sorting/gloxinia.png",
                  },
                  {
                    name: "Snake plant",
                    image:  "../../../../assets/sorting/snake-plant.png",
                  },
                  {
                    name: "Jade plant",
                    image:  "../../../../assets/sorting/jade.png",
                  },
                ],
                options: [
                  {
                    title: "Spider plant",
                    name: "Spider plant",
                  },
                  {
                    title: "Gloxinia",
                    name: "Gloxinia",
                  },
                  {
                    title: "Snake plant",
                    name: "Snake plant",
                  },
                  { title: "Jade plant", name: "Jade plant" },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon:  "../../../../assets/camera.png",
              backgroundColor: "#FFD972",
              backgroundImage:  "../../../../assets/snapshots/nature-bg.jpg",
              prompt:
                "Draw and upload a picture of the photosynthesis cycle. Be sure to include lables in your drawing!",
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l1_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/plants-pot.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l1_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/ecosystem.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", //how do plants adapt to living conditions
          title: <Translation>{(t) => t("gradetwo:c2l2")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/wilted.png",
          backgroundColor: "#7ED957",
          minigames: {
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description:
                "Match the plant adaptations to the element they like",
              icon:  "../../../../assets/willpower.png",
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Hydrophytes",
                  image:  "../../../../assets/memory/rain.png",
                },
                {
                  name: "Hydrophytes",
                },
                {
                  type: "image",
                  name: "Cryophytes",
                  image:  "../../../../assets/memory/snowflake.png",
                },
                {
                  name: "Cryophytes",
                },
                {
                  type: "image",
                  name: "Thermo-\nphiles",
                  image:  "../../../../assets/memory/temperature.png",
                },
                {
                  name: "Thermo-\nphiles",
                },
                {
                  type: "image",
                  name: "Heliophytes",
                  image:  "../../../../assets/memory/sunshine.png",
                },
                {
                  name: "Heliophytes",
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon:  "../../../../assets/image.png",
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "Many plants have to adapt to survive in their environment. Sometimes the environment changes so quickly that plants don't have the ability to adapt." +
                      " What are some human-made adaptations that help us, but hurt plants? ",
                    placeholder: "Some human-made adaptions...",
                    image:  "../../../../assets/openresponse/innovation.png",
                  },
                ],
              },
            },
            quiz: {
              navigation: "QuizScreen",
              icon:  "../../../../assets/creativity.png",
              backgroundColor: "mediumpurple",
              imageBg:  "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "What happens when a plant recieves too much heat?",
                  answers: [
                    {
                      text: "The plants grow and bloom more quickly than usual",
                    },
                    { text: "The leaves are not their normal color" },
                    { text: "The plant looses a lot of moisture" },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt:
                    "Chlorophyll die if the plant recieves too much direct sunlight.",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
                {
                  prompt:
                    "Which types of plants have the adaptations to include waiting out exteme hot or cold temepratures\n" +
                    "before they begin to sprout?",
                  answers: [
                    { text: "Bulbs and sprouts" },
                    { text: "Flowers and herbs" },
                    { text: "Trees and shrubs" },
                  ],
                  answer: "Bulbs and sprouts",
                },
                {
                  prompt:
                    "What does it look like when plants have too much light?",
                  answers: [
                    { text: "They bloom more and have more leaflets" },
                    { text: "The leaves turn away from the sun" },
                    { text: "They spread their roots our more under the soil" },
                    {
                      text: "More chlorophyll is produced in the leaves to protect it",
                    },
                  ],
                  answer: "The leaves turn away from the sun",
                },
                {
                  prompt:
                    "Plants can grow in 0\u00B0C and below type temperatures",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon:  "../../../../assets/camera.png",
              backgroundColor: "#FFD972",
              backgroundImage:  "../../../../assets/snapshots/nature-bg.jpg",
              prompt:
                "Split a sheet of paper in half, on one side draw a plant that recieved too much sunglight" +
                "and one that recieved too little light. How do they compare to each other? \nThink: Are they the same?",
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l2_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/world-map.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l2_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/find-plants.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", //natural plant communities
          title: <Translation>{(t) => t("gradetwo:c2l3")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/jungle.png",
          backgroundColor: "#C0F0F7",
          minigames: {
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon:  "../../../../assets/image.png",
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "Which communitiy (natural or artifical) is more environmentally friendly?" +
                      "Are there benefits to one or the other? List a couple of either communities you see in your area.",
                    placeholder: "The community that is...",
                    image:  "../../../../assets/openresponse/innovation.png",
                  },
                ],
              },
            },
            sorting: {
              navigation: "Sorting",
              icon:  "../../../../assets/recycle-bin.png",
              backgroundColor: "coral",
              content: {
                prompt: "Match the items to thier community", //ideally change to match picutre to word
                num: 8, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [{ name: "Natural" }, { name: "Artifical" }],
                options: [
                  { title: "Forest", name: "Natural" },
                  { title: "Field", name: "Artifical" },
                  { title: "Flowerbed", name: "Artifical" },
                  { title: "Steppe", name: "Natural" },
                  { title: "Pond", name: "Artifical" },
                  { title: "Desert", name: "Natural" },
                  { title: "Vegetable garden", name: "Artifical" },
                  { title: "Lake", name: "Natural" },
                  { title: "Swap", name: "Natural" },
                ],
              },
            },
            quiz: {
              navigation: "QuizScreen",
              icon:  "../../../../assets/creativity.png",
              backgroundColor: "mediumpurple",
              imageBg:  "../../../../assets/nat.jpg",
              content: [
                {
                  //funny wording
                  prompt: "What is a natural community?",
                  answers: [
                    {
                      text: "A group of plants and animals and their native habitat",
                    },
                    {
                      text: "A group of plants and animals that are not living in their habitat",
                    },
                    { text: "A group of only plants living in their habitat" },
                    { text: "A group of only animals living in their habitat" },
                  ],
                  answer: "A group of plants and animals and their habitat",
                },
                {
                  prompt: "What does homogenous mean?",
                  answers: [
                    { text: "Of having only different features" },
                    { text: "Of having mostly different features" },
                    { text: "Of having some similar features" },
                    { text: "Of having the same or similar features" },
                  ],
                  answer: "Of having the same or similar features",
                },
                {
                  prompt: "What is an artifical community?",
                  answers: [
                    {
                      text: "A group of plants and animals and their native habitat",
                    },
                    {
                      text: "A group of plants and animals that are not living in their habitat",
                    },
                    { text: "A group of only plants living in their habitat" },
                    { text: "A group of only animals living in their habitat" },
                  ],
                  answer:
                    "A group of plants and animals that are not living in their habitat",
                },
                {
                  prompt: "Plants and animals don't need each other to exist.",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "False",
                },
                {
                  prompt: "Homogenous conditions of existence means...",
                  answers: [
                    { text: "different plants can't live in the same area" },
                    { text: "different plants can live in the same area" },
                    { text: "only specific plants can live in tbe same area" },
                    { text: "No plants can live in the same area" },
                  ],
                  answer: "different plants can live in the same area",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon:  "../../../../assets/camera.png",
              backgroundColor: "#FFD972",
              backgroundImage:  "../../../../assets/snapshots/nature-bg.jpg",
              prompt:
                "Take a picture of a community (artifical or natural) near you.",
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/coca-leaves.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/swamp.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/garden.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/search-location.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", //how a person influences the life of plants
          title: <Translation>{(t) => t("gradetwo:c2l4")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/gardening.png",
          backgroundColor: "#04A7A8",
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon:  "../../../../assets/creativity.png",
              backgroundColor: "mediumpurple",
              imageBg:  "../../../../assets/nat.jpg",
              content: [
                {
                  //funny wording
                  prompt: "What is the definition of 'pathogenic' ",
                  answers: [
                    { text: "Something that causes disease" },
                    { text: "A microorganism" },
                    { text: "A type of plant" },
                    { text: "Something that grows very tall" },
                  ],
                  answer: "Something that causes disease",
                },
                {
                  prompt:
                    "It can take up to 100 years to completely restore a forest that was cut down",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
                {
                  prompt: "How do plants protect the air?",
                  answers: [
                    { text: "Help clear the air of dust" },
                    { text: "Help clear the diar of soot" },
                    { text: "Help clear the air of hamful gasses" },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt:
                    "The more we use plants and don't participate in restorative practices, " +
                    " the more likely the air quality will decrease.",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
                {
                  prompt: "What does 'anthropogenic' mean?",
                  answers: [
                    { text: "Casued by human activity" },
                    { text: "Caused by natural activity" },
                    { text: "The realtionship between prey and preditor" },
                    { text: "The idea of being sustainable" },
                  ],
                  answer: "Caused by human activity",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon:  "../../../../assets/camera.png",
              backgroundColor: "#FFD972",
              backgroundImage:  "../../../../assets/snapshots/nature-bg.jpg",
              prompt:
                "Cleaning up after ourselves in public is a great way to help improve the air quality" +
                "Draw some things that you often see outside on the ground that you can pick up.",
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon:  "../../../../assets/image.png",
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "List a few ways in which you indirectly impact the environment" +
                      ", are these practices sustainable?",
                    placeholder: "The difference between...",
                    image:  "../../../../assets/openresponse/innovation.png",
                  },
                ],
              },
            },
            sorting: {
              navigation: "Sorting",
              icon:  "../../../../assets/recycle-bin.png",
              backgroundColor: "coral",
              content: {
                prompt:
                  "Sort these practices into helping or hurting the environment",
                num: 4, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [{ name: "Helping" }, { name: "Hurting" }],
                options: [
                  { title: "Littering", name: "Hurting" },
                  { title: "Picking up trash", name: "Helping" },
                  { title: "Planting native plants", name: "Helping" },
                  { title: "Using chemical pesticides", name: "Hurting" },
                  { title: "Supporting local farming", name: "Helping" },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/human-plant.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/care-nature.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/plant-hand.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card4")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", //red book of plants
          title: <Translation>{(t) => t("gradetwo:c2l5")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/red-book.png",
          backgroundColor: "#44312B",
          minigames: {
            quiz: {
              navigation: "QuizScreen",
              icon:  "../../../../assets/creativity.png",
              backgroundColor: "mediumpurple",
              imageBg:  "../../../../assets/nat.jpg",
              content: [
                {
                  //funny wording
                  prompt:
                    "The first Red Book of Kazakhstan was published in 1978 ",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "True",
                },
                {
                  prompt:
                    "Which plant grows 1000-2000m above sea level and contains natural rubber?",
                  answers: [
                    { text: "Dandelion" },
                    { text: "Sundew Rounded-Leaf" },
                    { text: "Steppe Peony" },
                    { text: "Wormwood" },
                  ],
                  answer: "Dandelion",
                },
                {
                  prompt:
                    "Which plant grows to about 15-50cm and is used to make porridge?",
                  answers: [
                    { text: "Dandelion" },
                    { text: "Sundew Rounded-Leaf" },
                    { text: "Steppe Peony" },
                    { text: "Wormwood" },
                  ],
                  answer: "Steppe Peony",
                },
                {
                  prompt:
                    "Which plant has small white flowres and is commonly found in swamps?",
                  answers: [
                    { text: "Dandelion" },
                    { text: "Sundew Rounded-Leaf" },
                    { text: "Steppe Peony" },
                    { text: "Wormwood" },
                  ],
                  answer: "Sundew Rounded-Leaf",
                },
                {
                  prompt:
                    "The Red Book only contains information about plants and not animals ",
                  answers: [{ text: "True" }, { text: "False" }],
                  answer: "False",
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon:  "../../../../assets/image.png",
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "What would be some ways that we could reduce the number of plants listed in the Red Book?" +
                      " How is practicing good sustainable habits going to help reduce the endangered species?",
                    placeholder:
                      "We can reduce the number of endangered plants by ...",
                    image:  "../../../../assets/openresponse/innovation.png",
                  },
                ],
              },
            },
            sorting: {
              navigation: "Sorting",
              icon:  "../../../../assets/recycle-bin.png",
              backgroundColor: "coral",
              content: {
                prompt: "What plants are in the Red Book and which are not?",
                num: 5, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "In Red Book" },
                  { name: "Not in Red Book" },
                ],
                options: [
                  { title: "Startfruit", name: "Not in Red Book" },
                  { title: "Steppe Peony", name: "In Red Book" },
                  { title: "Tiger Iris", name: "In Red Book" },
                  { title: "Ludwig Iris", name: "Not in Red Book" },
                  { title: "Tarda Tulip", name: "Not in Red Book" },
                  { title: "Regel's Tulip", name: "In Red Book" },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l5_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/agriculture-book.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l5_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/search-globe.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6", // vertebrates and invertebrates
          title: <Translation>{(t) => t("gradetwo:c2l6")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/spine.png",
          backgroundColor: "#EE3A5D",
          minigames: {
            memory: {
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the different sources of information.",
              icon:  "../../../../assets/willpower.png",
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Insect",
                  image:  "../../../../assets/memory/beetle.png",
                },
                {
                  name: "Insect",
                },
                {
                  type: "image",
                  name: "Arachnids",
                  image:  "../../../../assets/memory/spider.png",
                },
                {
                  name: "Arachnids",
                },
                {
                  type: "image",
                  name: "Crust-\naceans",
                  image:  "../../../../assets/memory/crab.png",
                },
                {
                  name: "Crust-\naceans",
                },
                {
                  type: "image",
                  name: "Mollusk",
                  image:  "../../../../assets/memory/snail.png",
                },
                {
                  name: "Mollusk",
                },
                {
                  type: "image",
                  name: "Echino-\nderms",
                  image:  "../../../../assets/memory/starfish.png",
                },
                {
                  name: "Echino-\nderms",
                },
                {
                  type: "image",
                  name: "Skeleton",
                  image:  "../../../../assets/memory/fishbone.png",
                },
                {
                  name: "Skeleton",
                },
              ],
            },
            quiz: {
              navigation: "QuizScreen",
              icon:  "../../../../assets/creativity.png",
              backgroundColor: "mediumpurple",
              imageBg:  "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "What is the function of a skeleton?",
                  answers: [
                    { text: "Gives necessary stability" },
                    { text: "Helps movement" },
                    { text: "Protects internal organs" },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt: "Which animal is an invertebrate?",
                  answers: [
                    { text: "Cat" },
                    { text: "Worm" },
                    { text: "Turtule" },
                    { text: "Bird" },
                  ],
                  answer: "Worm",
                },
                {
                  prompt: "Which animal is a veterbrate",
                  answers: [
                    { text: "Worm" },
                    { text: "Slugs" },
                    { text: "Butterfly" },
                    { text: "Fish" },
                  ],
                  answer: "Fish",
                },
                {
                  prompt:
                    "Which group of animals have 3 body parts and 6 legs?",
                  answers: [
                    { text: "Crustaceans" },
                    { text: "Insects" },
                    { text: "Echinoderms" },
                    { text: "Arachnids" },
                  ],
                  answer: "Insects",
                },
                {
                  prompt:
                    "Which group of animals consist of snails, squids, octupuses, and oysters? ",
                  answers: [
                    { text: "Crustaceans" },
                    { text: "Insects" },
                    { text: "Echinoderms" },
                    { text: "Mollusk" },
                  ],
                  answer: "Mollusk",
                },
              ],
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon:  "../../../../assets/image.png",
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "Name a couple animals that are veterbrates. Now, name a couple of " +
                      "animals that are invertebrates. How are they similar? How are they different?",
                    placeholder: "An animal that is ...",
                    image:  "../../../../assets/openresponse/innovation.png",
                  },
                ],
              },
            },
            snapshot: {
              navigation: "Snapshot",
              icon:  "../../../../assets/camera.png",
              backgroundColor: "#FFD972",
              backgroundImage:  "../../../../assets/snapshots/nature-bg.jpg",
              prompt: "Draw a picture of a skeletal system wit a vertebrate!",
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/data-classification.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/spine.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/earthworm.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/searching.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", //animal habitat
          title: <Translation>{(t) => t("gradetwo:c2l7")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/habitat.png",
          backgroundColor: "#7B3B16",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l7_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/ecosystem-circle.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l7_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/ecosystem-search.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8", //what are the relationships between animals that exist in nature
          title: <Translation>{(t) => t("gradetwo:c2l8")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/dog-cat.png",
          backgroundColor: "#37B5FF",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l8_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/fishes.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l8_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/symbiosis.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l8_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/fishes.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l8_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/symbiosis.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9", //what is the realtionship beetween plants and animals
          title: <Translation>{(t) => t("gradetwo:c2l9")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/spring.png",
          backgroundColor: "#065D40",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l9_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/pets.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l9_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/bee-and-tree.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10", //how do habitat conditions affect the number of animals pt 1
          title: <Translation>{(t) => t("gradetwo:c2l10")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/desert.png",
          backgroundColor: "#FFF9E3",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l10_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l10_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/pets.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l10_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/bee-and-tree.png",
              },
            ],
          },
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 11
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c2l11")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/fishing.png",
          backgroundColor: "#004AAD",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/water-pollution.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/whale.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_card4")}</Translation>
                ),
              },
            ],
          },
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 12
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c2l12")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/magnifying-glass.png",
          backgroundColor: "#FFBD58",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l12_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l12_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/heart.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l12_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/frog.png",
              },
            ],
          },
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 13
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c2l13")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/apple.png",
          backgroundColor: "#56C34D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l13_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l13_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/fruits.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l13_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/broccoli.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l13_card3")}</Translation>
                ),
              },
            ],
          },
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 14
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson14",
          title: <Translation>{(t) => t("gradetwo:c2l14")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/breathing.png",
          backgroundColor: "#FF904D",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l14_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l14_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/breathing.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l14_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/nose.png",
              },
            ],
          },
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 15
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson15",
          title: <Translation>{(t) => t("gradetwo:c2l15")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/circulation.png",
          backgroundColor: "#C0F0F7",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l15_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l15_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/blood-vessel.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l15_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l15_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/blood.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l15_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l15_card5")}</Translation>
                ),
              },
            ],
          },
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 16
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson16",
          title: <Translation>{(t) => t("gradetwo:c2l16")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/mask.png",
          backgroundColor: "#80B673",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l16_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/heart-rate.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/doctor.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/rosemary.png",
              },
            ],
          },
          minigames: {},
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradetwo:substances")}</Translation>, // Substances and their properties
      icon:  "../../../../assets/chapter-icons/water-cycle.png",
      backgroundImage:  "../../../../assets/mastery/bg/ch3.png",
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
          thumbnail:  "../../../../assets/lesson-icons/snowflake.png",
          backgroundColor: "#49326B",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l1_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/state-of-matter.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l1_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l1_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/assessment.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l1_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/glass-of-water.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l1_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/raisins.png",
              },
            ],
          },
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
          thumbnail:  "../../../../assets/lesson-icons/air.png",
          backgroundColor: "#C85004",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l2_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/rhino.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l2_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l2_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/contamination.png",
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
          title: <Translation>{(t) => t("gradetwo:c3l3")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/candle.png",
          backgroundColor: "#9DCD5A",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/candle.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/spy-kid.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/colorant.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/candle-lit.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card7")}</Translation>
                ),
                image:  "../../../../assets/mastery/look.png",
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
          title: <Translation>{(t) => t("gradetwo:c3l4")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/duck.png",
          backgroundColor: "#98DFEC",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l4_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/water.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l4_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/watering-plants.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l4_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/desert.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradetwo:c3l5")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/water-source.png",
          backgroundColor: "#37B5FF",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l5_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/planet-earth.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l5_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/summer.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l5_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/river.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c3l6")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/water-bottle.png",
          backgroundColor: "#F27B21",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/drink-water.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/brainstorming.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/studying.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card4")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c3l7")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/water-filter.png",
          backgroundColor: "#6C3F14",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l7_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/drink-water.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l7_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/test.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l7_card3")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c3l8")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/soil.png",
          backgroundColor: "#E39650",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/planting.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/sweet-potato.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/glass-of-water.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/seed.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradetwo:c3l9")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/soil-composition.png",
          backgroundColor: "#9DCD5A",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/soil-plant.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/jar.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/dirt.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/soil.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c3l10")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/soil-types.png",
          backgroundColor: "#F9A949",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l10_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/crops.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/pots.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/kidney.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/watering-plants.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/seed.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 11 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c3l11")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/soil-properties.png",
          backgroundColor: "#76B9F0",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/soil-scoop.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/three-jars.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/grass.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/soil-layers.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 12 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c3l12")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/earth.png",
          backgroundColor: "#49326B",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l12_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/astronaut.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/universe.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/drawing.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/thesun.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/pencil-and-ruler.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card7")}</Translation>
                ),
                image:  "../../../../assets/mastery/mercury.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card8")}</Translation>
                ),
                image:  "../../../../assets/mastery/venus.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card9")}</Translation>
                ),
                image:  "../../../../assets/mastery/earth.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 13 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c3l13")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/astronaut.png",
          backgroundColor: "#02084B",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l13_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/superhero.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/angry.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/glove.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/healing-strip.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card7")}</Translation>
                ),
                image:  "../../../../assets/mastery/water.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 14 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson14",
          title: <Translation>{(t) => t("gradetwo:c3l14")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/earth-rotating.png",
          backgroundColor: "#F6E134",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l14_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/solar-system.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/moon.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/orbit.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/orbits.png",
              },
            ],
          },
        },
      ],
    },
    {
      navigation: "Chapter4",
      title: <Translation>{(t) => t("common:chapterfour")}</Translation>, // Chapter 6
      name: <Translation>{(t) => t("gradetwo:physics")}</Translation>, // Physics of nature
      backgroundImage:  "../../../../assets/lessonbg2.png",
      icon:  "../../../../assets/chapter-icons/book.png",
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
          thumbnail:  "../../../../assets/lesson-icons/elastic-spring.png",
          backgroundColor: "#2A731D",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/elastic-band.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/catapult.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/slingshot.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card5")}</Translation>
                ),
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
          title: <Translation>{(t) => t("gradetwo:c4l2")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/gravity.png",
          backgroundColor: "#060644",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/space.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/paper-cup.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/water.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card7")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card8")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card9")}</Translation>
                ),
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
          title: <Translation>{(t) => t("gradetwo:c4l3")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/friction.png",
          backgroundColor: "#53020C",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/friction.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/book.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card7")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card8")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card9")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card10")}</Translation>
                ),
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
          title: <Translation>{(t) => t("gradetwo:c4l4")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/direction.png",
          backgroundColor: "#F9943B",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/arrows.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/water-bottle.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/cone.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/water-splash.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card7")}</Translation>
                ),
                image:  "../../../../assets/mastery/forces.png",
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
          title: <Translation>{(t) => t("gradetwo:c4l5")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/shadow.png",
          backgroundColor: "#159D52",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/shadow.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/bear.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/chalk.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card7")}</Translation>
                ),
                image:  "../../../../assets/mastery/time.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card8")}</Translation>
                ),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c4l6")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/reflection.png",
          backgroundColor: "#5AA3F7",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card1")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/solar-oven.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/flap.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/foil.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/wrap.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card7")}</Translation>
                ),
                image:  "../../../../assets/mastery/solar-oven.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card8")}</Translation>
                ),
                image:  "../../../../assets/mastery/sun.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card9")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card10")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card11")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card12")}</Translation>
                ),
                image:  "../../../../assets/mastery/smore.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c4l7")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/refraction.png",
          backgroundColor: "#80B673",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/finish-line.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/bird.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/duck.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/cloth.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/mediums.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card7")}</Translation>
                ),
                image:  "../../../../assets/mastery/flashlight.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c4l8")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/sound.png",
          backgroundColor: "#800080",
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
          thumbnail:  "../../../../assets/lesson-icons/practical-sound.png",
          backgroundColor: "#D2C6FF",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/love-message.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/telephone.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/study.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card5")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card6")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card7")}</Translation>
                ),
                image:  "../../../../assets/mastery/phones.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c4l10")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/energy.png",
          backgroundColor: "#ED5F1E",
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
          thumbnail:  "../../../../assets/lesson-icons/circuit.png",
          backgroundColor: "#76B9F0",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/lightning.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card2")}</Translation>
                ),
                image:  "../../../../assets/mastery/electrical-circuit.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card3")}</Translation>
                ),
                image:  "../../../../assets/mastery/toaster.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card4")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/energy.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card6")}</Translation>
                ),
                image:  "../../../../assets/mastery/wind-energy.png",
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 4 Lesson 12 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c4l12")}</Translation>,
          thumbnail:  "../../../../assets/lesson-icons/magnet.png",
          backgroundColor: "#4EB6AF",
          minigames: {},
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l12_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card1")}</Translation>
                ),
                image:  "../../../../assets/mastery/magnetic.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card2")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card4")}</Translation>
                ),
                image:  "../../../../assets/mastery/key-chain.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card5")}</Translation>
                ),
                image:  "../../../../assets/mastery/magnet.png",
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card6")}</Translation>
                ),
              },
            ],
          },
        },
      ],
    },
  ],
};