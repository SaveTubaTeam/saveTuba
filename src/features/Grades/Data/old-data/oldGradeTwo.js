import { Translation } from "react-i18next";
import { React } from 'react';

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
      backgroundimage: require("../../../../assets/mastery/bg/ch1.png"),
      colorOne: "darkorange",
      colorTwo: "goldenrod",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 1 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1", //History of scientific discovery
          title: <Translation>{(t) => t("gradetwo:c1l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wheel.png"),
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
                image: require("../../../../assets/mastery/search-object.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c1l1_card2")}</Translation>
                ),
              },
            ],
          },
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of a scientific discovery that you use on a daily basis.",
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
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
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
              ],
            },
            openresponse: { //correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 2,
                prompts: [
                  {
                    text: "What is the difference between an experiment and observation?",
                    placeholder: "The difference between...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                  {
                    text: "Read the diagram. Tell me where and how a person uses the wheel?",
                    placeholder: "Wheels are used...",
                    image: require("../../../../assets/openresponse/wheelObjects.png"),
                  },
                ],
              },
            },
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", //sources of information
          title: <Translation>{(t) => t("gradetwo:c1l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/read.png"),
          backgroundColor: "#004AAD",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of one of your most used source of information. It could be a book, electronic device, anything!",
            },
            openresponse: { //correct
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 2,
                prompts: [
                  {
                    text: "Where do you get your information and knowledge about the environment? Is it an electronic source, a book, or even a person? What makes this information reliable?",
                    placeholder: "I get information from...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt:
                    "How is information different from knowledge?",
                  answers: [
                    { text: "Information and knowledge are the same" },
                    { text: "Knowledge is the understanding and relevant information gained" },
                    { text: "Information is in a different language than knowledge" },
                    { text: "Knowledge requires less learning and understanding than information" },
                  ],
                  answer: "Knowledge is the understanding and relevant information gained",
                },
                {
                  prompt:
                    "Which of the following are resources?",
                  answers: [
                    { text: "The Internet" },
                    { text: "Your teacher" },
                    { text: "A book" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
              ],
            },
          },
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
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 1 Lesson 3 and 4
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3", // planning and conducting an expirement
          title: <Translation>{(t) => t("gradetwo:c1l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/research.png"),
          backgroundColor: "#00C2CB",
          minigames: {
            openresponse: { //correct
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
                    text: "Think of one way you help reduce your environmental impact in your area. How would you test that you are making a difference? Come up with a hypothesis for an experiment to test your environmental impact.",
                    placeholder: "My hypothesis is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "What is the best way to test your hypothesis?",
                  answers: [
                    {
                      text: "Ask your friends if they think it’s correct",
                    },
                    { text: "By looking it up on the Internet" },
                    { text: "By carrying out an experiment and recording results" },
                    { text: "By assuming the results of an experiment" },
                  ],
                  answer: "By carrying out an experiment and recording results",
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
                    "Why do we do experiments?",
                  answers: [
                    { text: "To go play outside" },
                    { text: "To better understand the world around us" },
                    { text: "To support your hypothesis" },
                    { text: "To find the answer we are looking for" },
                  ],
                  answer: "To better understand the world around us",
                },
                {
                  prompt:
                    "What is the last step of an experimental study?",
                  answers: [
                    { text: "Creating a hypothesis" },
                    { text: "Asking questions " },
                    { text: "Drawing conclusions" },
                    { text: "Recording results" },
                  ],
                  answer: "Drawing conclusions",
                },
                {
                  prompt:
                    "What is the definition of a discovery?",
                  answers: [
                    { text: "A new achievement that is being made in the course of scientific knowledge of nature and society" },
                    { text: "Information about an object, natural phenomenon, scientific discovery." },
                    { text: "Possession of verified information" },
                    { text: "None of the above" },
                  ],
                  answer: "A new achievement that is being made in the course of scientific knowledge of nature and society",
                },
                {
                  prompt:
                    "True or False: There are still discoveries being made about sustainable practices in your area and around the world.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt:
                    "What is the definition of knowledge?",
                  answers: [
                    { text: "A new achievement that is being made in the course of scientific knowledge of nature and society" },
                    { text: "Information about an object, natural phenomenon, scientific discovery" },
                    { text: "Possession of verified information" },
                    { text: "None of the above" },
                  ],
                  answer: "Possession of verified information",
                },
              ],
            },
            reorder: { //correct
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
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
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Based on your hypothesis in the open response section, take a picture of yourself doing your task that helps reduce your environmental impact in your area!",
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
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
                    title: "Elena sees that not all her plants in her garden are growing equally",
                    name: "Observation",
                  },
                  {
                    title:
                      "Sergey is coming up with  a way to explain a natural phenomenon he saw",
                    name: "Hypothesis",
                  },
                  {
                    title:
                      "Vladimir understands from his experiment that flowers cannot grow well in smog",
                    name: "Conclusion",
                  },
                  {
                    title:
                      "Aleksandr wants to figure out the effects of trash on plant growth",
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
      ],
    },
    /**
     * 
     * End of Chapter 1
     * 
     */
    {
      navigation: "Chapter2",
      title: <Translation>{(t) => t("common:chaptertwo")}</Translation>, // Chapter 2
      name: <Translation>{(t) => t("gradetwo:wildlife")}</Translation>, // Wildlife
      backgroundimage: require("../../../../assets/mastery/bg/ch2.png"),
      icon: require("../../../../assets/chapter-icons/butterfly.png"),
      colorOne: "darkolivegreen",
      colorTwo: "darkgreen",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 1 (Lesson five on curriculum sheet)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
        */
        {
          navigation: "Lesson1", //how do plant leaves work
          title: <Translation>{(t) => t("gradetwo:c2l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/leaf.png"),
          backgroundColor: "#008036",
          minigames: {
            openresponse: { //correct
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
                    text: "List 3 plants that you see everyday. Why do you think that you see them so often? \nThink about the environmental conditions they need to survive.",
                    placeholder: "The plants I see everyday are...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
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
            sorting: { //correct
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Match the plant to its common name",
                num: 3,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  {
                    name: "Spider plant",
                    image: require("../../../../assets/sorting/spider-plant.png"),
                  },
                  {
                    name: "Gloxinia",
                    image: require("../../../../assets/sorting/gloxinia.png"),
                  },
                  {
                    name: "Snake plant",
                    image: require("../../../../assets/sorting/snake-plant.png"),
                  },
                  {
                    name: "Jade plant",
                    image: require("../../../../assets/sorting/jade.png"),
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
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Draw and upload a picture of the photosynthesis cycle. Be sure to include lables in your drawing!",
            },
            snapshot_2: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a zoomed in picture of the leaf of a plant. What can you identify from this picture?"
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
                image: require("../../../../assets/mastery/plants-pot.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecosystem.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 2 (Lesson six and seven on curriculum sheet)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2", //how do plants adapt to living conditions
          title: <Translation>{(t) => t("gradetwo:c2l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/wilted.png"),
          backgroundColor: "#7ED957",
          minigames: {
            sorting: { //needs to be changed
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Match the items to thier community", //ideally change to match picutre to word
                num: 8, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_2, //what lesson
                categories: [{ name: "Natural" }, { name: "Artifical" }],
                options: [
                  { title: "Forest", name: "Natural" },
                  { title: "Field", name: "Artifical" },
                ],
              },
            },
            memory: { //correct
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description:
                "Match the plant adaptations to the element they like",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Hydrophytes",
                  image: require("../../../../assets/memory/rain.png"),
                },
                {
                  name: "Hydrophytes",
                },
                {
                  type: "image",
                  name: "Cryophytes",
                  image: require("../../../../assets/memory/snowflake.png"),
                },
                {
                  name: "Cryophytes",
                },
                {
                  type: "image",
                  name: "Thermo-\nphiles",
                  image: require("../../../../assets/memory/temperature.png"),
                },
                {
                  name: "Thermo-\nphiles",
                },
                {
                  type: "image",
                  name: "Heliophytes",
                  image: require("../../../../assets/memory/sunshine.png"),
                },
                {
                  name: "Heliophytes",
                },
              ],
            },
            openresponse: { // correct
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
                    text:
                      "Many plants have to adapt to survive in their environment. Sometimes the environment changes so quickly that plants don't have the ability to adapt." +
                      " What are some human-made adaptations that help us, but hurt plants? ",
                    placeholder: "Some human-made adaptions...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            openresponse_2: { // correct
              navigation: "Image Boom 2",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ), // Image Boom
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text:
                      "List a couple of things that plants need in order to survive. Are these the same " +
                      "things we need to survive? What happens if there is too much of one resource?",
                    placeholder: "Plants need...",
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
                    "Chlorophyll dies if the plant recieves too much direct sunlight.",
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
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
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
                image: require("../../../../assets/mastery/world-map.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l2_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/find-plants.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 3 (lesson eight in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "", //composition of air
          title: <Translation>{(t) => t("gradetwo:c2l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/jungle.png"),
          backgroundColor: "#C0F0F7",
          minigames: {
            openresponse: { // correct
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
                    text:
                      "Which community (natural or artifical) is more environmentally friendly?" +
                      "Are there benefits to one or the other? List a couple of either communities you see in your area.",
                    placeholder: "The community that is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            sorting: { // correct
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
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
                  { title: "Swamp", name: "Natural" },
                ],
              },
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
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
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
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
                image: require("../../../../assets/mastery/coca-leaves.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/swamp.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 4 (lesson nine in curriculum) 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4", //how a person influences the life of plants
          title: <Translation>{(t) => t("gradetwo:c2l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/gardening.png"),
          backgroundColor: "#04A7A8",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
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
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Cleaning up after ourselves in public is a great way to help improve the air quality" +
                "Draw some things that you often see outside on the ground that you can pick up.",
            },
            openresponse: { // correct
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
                    text:
                      "How does the use of chemicals, such as pesticides and fertilizers, affect the growth of plants in the long term?",
                    placeholder: "The use of chemicals...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            sorting: { // correct
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
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
                image: require("../../../../assets/mastery/human-plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/care-nature.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/plant-hand.png"),
              },
            ],
          },
          mastery_2: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l4_2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l4_2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/human-plant.png"),
              },
            ],
          }
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 5 (lesson ten & eleven in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", //red book of plants
          title: <Translation>{(t) => t("gradetwo:c2l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/red-book.png"),
          backgroundColor: "#44312B",
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an endangered animal from the Red Book of Plants. If you can’t find one, take a picture of it online so you can identify it the next time you see it.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
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
                    "Which plant has small white flowers and is commonly found in swamps?",
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
            openresponse: { // correct
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
                    text:
                      "What would be some ways that we could reduce the number of plants listed in the Red Book?" +
                      " How is practicing good sustainable habits going to help reduce the endangered species?",
                    placeholder:
                      "We can reduce the number of endangered plants by ...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            sorting: { // correct
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Sort the following plants into groups whether they are in the red book and which are not?",
                num: 5, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "In Red Book" },
                  { name: "Not in Red Book" },
                ],
                options: [
                  { title: "Picking up trash", name: "In Red Book" },
                  { title: "Steppe Peony", name: "In Red Book" },
                  { title: "Planting native plants", name: "In Red Book" },
                  { title: "Local Farming", name: "In Red Book" },
                  { title: "Littering", name: "Not in Red Book" },
                  { title: "Using Chemicals", name: "Not in Red Book" },
                  { title: "Regel's tulip", name: "In Red Book" },
                  { title: "Red clover", name: "Not in Red Book" },
                  { title: "White birch", name: "Not in Red Book" },
                  { title: "Roundleaf sundew", name: "In Red Book" },
                  { title: "Common apricot", name: "Not in Red Book" },
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
                image: require("../../../../assets/mastery/agriculture-book.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/search-globe.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 6 (lesson twelve in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6", // vertebrates and invertebrates
          title: <Translation>{(t) => t("gradetwo:c2l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/spine.png"),
          backgroundColor: "#EE3A5D",
          minigames: {
            memory: { // correct
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the picture to the name",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Insect",
                  image: require("../../../../assets/memory/beetle.png"),
                },
                {
                  name: "Insect",
                },
                {
                  type: "image",
                  name: "Arachnids",
                  image: require("../../../../assets/memory/spider.png"),
                },
                {
                  name: "Arachnids",
                },
                {
                  type: "image",
                  name: "Crust-\naceans",
                  image: require("../../../../assets/memory/crab.png"),
                },
                {
                  name: "Crust-\naceans",
                },
                {
                  type: "image",
                  name: "Mollusk",
                  image: require("../../../../assets/memory/snail.png"),
                },
                {
                  name: "Mollusk",
                },
                {
                  type: "image",
                  name: "Echino-\nderms",
                  image: require("../../../../assets/memory/starfish.png"),
                },
                {
                  name: "Echino-\nderms",
                },
                {
                  type: "image",
                  name: "Skeleton",
                  image: require("../../../../assets/memory/fishbone.png"),
                },
                {
                  name: "Skeleton",
                },
              ],
            },
            quiz: { // correct  
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
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
            openresponse: { // correct
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
                    text:
                      "Name a couple animals that are veterbrates. Name a couple of " +
                      "animals that are invertebrates. How are they similar? How are they different?",
                    placeholder: "An animal that is ...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Draw a picture of a skeletal system with a vertebrate!",
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
                image: require("../../../../assets/mastery/data-classification.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/spine.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/earthworm.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l6_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/searching.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 7 (lesson thirteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", //animal habitat
          title: <Translation>{(t) => t("gradetwo:c2l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/habitat.png"),
          backgroundColor: "#7B3B16",
          minigames: {
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Draw a picture of a local ecosystem near you. Analyze the picture, is it being contaminated by waste or pollution?",
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
                    text: "A habitat is where an animal lives. What is your habitat?" +
                      " List some things that you have in your home that you use everyday," +
                      " how many of these things do you throw away daily?",
                    placeholder: "On a daily basis, I throw away...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "The way that animals live in their habitat through changing themselves is called?",
                  answers: [
                    { text: "Adaption" },
                    { text: "Adoption" },
                    { text: "Adhering" },
                    { text: "Abomination" },
                  ],
                  answer: "Adaptation",
                },
                {
                  prompt:
                    "What is the meaning of an ecosystem?",
                  answers: [
                    { text: "Only the plants living in their habitat" },
                    { text: "Only animals living in their habitat" },
                    { text: "All the living organisms and their habitat" },
                    { text: "Only referring to the habitat" },
                  ],
                  answer: "All the living organisms and their habitat",
                },
                {
                  prompt:
                    "True or False: All habitats are important and help the environment regulate itself?",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt:
                    "What happens if there is a loss of habitats?",
                  answers: [
                    { text: "Nothing, everything will stay the same" },
                    { text: "There will be a loss of animals" },
                    { text: "A new habitat will form" },
                  ],
                  answer: "There will be a loss of animals",
                }, {
                  prompt:
                    "True or False: One of the main causes for habitat loss is due to human activities?",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
              ],
            },
            sorting:
            {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Match the word to the definition using pictures",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_8,
                categories: [
                  { name: "Soil, ground, & air" },
                  { name: "Aquatic" },
                ],
                options: [
                  {
                    title: "Fish",
                    name: "Aquatic",
                  },
                  {
                    title: "Birds",
                    name: "Soil, ground, & air",
                  },
                  {
                    title: "Reptiles",
                    name: "Soil, ground, & air",
                  },
                  {
                    title: "Whales",
                    name: "Aquatic",
                  },
                  {
                    title: "Earthworms",
                    name: "Soil, ground, & air",
                  },
                  {
                    title: "Mites",
                    name: "Soil, ground, & air",
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l7_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecosystem-circle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l7_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecosystem-search.png"),
              },
            ],
          },
          mastery_2: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l7_2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l7_2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecosystem-circle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l7_2_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/ecosystem-search.png"),
              },
            ],
          },
        },
        /*
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 8 (lesson fourteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8", //what are the relationships between animals that exist in nature
          title: <Translation>{(t) => t("gradetwo:c2l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/dog-cat.png"),
          backgroundColor: "#37B5FF",
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take or find a picture of a relationship between two animals in nature, whether it be a beneficial or harmful relationship.",
            },

            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "What type of relationship exists between these animals: a fox and a rabbit?",
                  answers: [
                    { text: "Parasitism" },
                    { text: "Neutralism" },
                    { text: "Competition" },
                    { text: "Predation" },
                  ],
                  answer: "Predation",
                },
                {
                  prompt:
                    "What type of relationship exists between these animals: a frog and an antelope?",
                  answers: [
                    { text: "Competition" },
                    { text: "Symbiosis" },
                    { text: "Neutralism" },
                    { text: "Predation" },
                  ],
                  answer: "Neutralism",
                },
                {
                  prompt:
                    "What type of relationship exists between these animals: a shark and a fish that attaches to the shark?",
                  answers: [
                    { text: "Competition" },
                    { text: "Parasitism" },
                    { text: "Neutralism" },
                    { text: "Predation" },
                  ],
                  answer: "Parasitism",
                },
                {
                  prompt:
                    "What type of relationship exists between these animals: rhinos and birds?",
                  answers: [
                    { text: "Competition" },
                    { text: "Symbiosis" },
                    { text: "Neutralism" },
                    { text: "Predation" },
                  ],
                  answer: "Symbiosis",
                },
              ],
            },
            memory: { // correct
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the word to the definition using pictures",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              //why u always lying OOOOH oh my god
              content: [
                {
                  type: "image",
                  name: "Mutualism",
                  image: require("../../../../assets/memory/pexels-leticia-leonor-4477814.jpg"),
                },
                {
                  name: "Mutualism: two animals that positivity benefit from living together",
                },
                {
                  type: "image",
                  name: "Parasitism",
                //rimage: require("../../../../assets/memory/pexels-jimmy-chan-2382223.jpg"),
                },
                {
                  name: "Parasitism: one animal benefits and one animal is harmed",
                },
                {
                  type: "image",
                  name: "Predation",
                  image: require("../../../../assets/memory/pexels-george-desipris-726478.jpg"),
                },
                {
                  name: "Predation: animals feeding on other animals",
                },
                {
                  type: "image",
                  name: "Neutralism",
                  image: require("../../../../assets/memory/pexels-israel-delgadillo-figueroa-2577275.jpg"),
                },
                {
                  name: "Neutralism",
                },
                {
                  type: "image",
                  name: "Competition",
                  image: require("../../../../assets/memory/pexels-pixabay-247502.jpg"),
                },
                {
                  name: "Competition",
                },
              ],
            },
            /*
            memory: { // correct
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description: "Match the word to the definition using pictures",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              //change all images
              content: [
                {
                  type: "image",
                  name: "Insect",
                  image: require("../../../../assets/memory/beetle.png"),
                },
                {
                  name: "Insect",
                },
                {
                  type: "image",
                  name: "Arachnids",
                  image: require("../../../../assets/memory/spider.png"),
                },
                {
                  name: "Arachnids",
                },
                {
                  type: "image",
                  name: "Crust-\naceans",
                  image: require("../../../../assets/memory/crab.png"),
                },
                {
                  name: "Crust-\naceans",
                },
                {
                  type: "image",
                  name: "Mollusk",
                  image: require("../../../../assets/memory/snail.png"),
                },
                {
                  name: "Mollusk",
                },
                {
                  type: "image",
                  name: "Echino-\nderms",
                  image: require("../../../../assets/memory/starfish.png"),
                },
                {
                  name: "Echino-\nderms",
                },
                {
                  type: "image",
                  name: "Skeleton",
                  image: require("../../../../assets/memory/fishbone.png"),
                },
                {
                  name: "Skeleton",
                },
              ],
            },
            */
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l8_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/fishes.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l8_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/symbiosis.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 9 (lesson fifteen in currciulum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9", //what is the realtionship beetween plants and animals
          title: <Translation>{(t) => t("gradetwo:c2l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/spring.png"),
          backgroundColor: "#065D40",
          minigames: {
            snapshot: { // correct 
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take a picture of a plant environment in which several plants mutually benefit each other.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "True or False: There are no relationships between plants that are similar to those between animals?",
                  answers: [
                    { text: "true" },
                    { text: "false" },
                  ],
                  answer: "false",
                },
                {
                  prompt:
                    "Which of the following is an example of a mutualistic/symbiotic relationship between plants and animals?",
                  answers: [
                    { text: "Animals eat the plants" },
                    { text: "Pollination" },
                    { text: "Animals use plants to build nests" },
                    { text: "Humans eat the plants" },
                  ],
                  answer: "Pollination",
                },
                {
                  prompt:
                    "True or False: There are relationships between plants and animals, similar to those between only animals?",
                  answers: [
                    { text: "true" },
                    { text: "false" },
                  ],
                  answer: "true",
                },
              ],
            },
            // here all the content is correct but it is a different minigame? 
            sorting: { // incorrect images 
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Match the word to the definition using pictures",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_8,
                categories: [
                  { name: "Commensalism" },
                  { name: "Symbiosis/mutualism" },
                  { name: "Predation" },
                ],
                options: [
                  {
                    title: "A Venus flytrap catches a fly",
                    name: "Predation",
                  },
                  {
                    title:
                      "Bees pollinate a plant",
                    name: "Symbiosis/mutualism",
                  },
                  {
                    title:
                      "A bird makes a nest in a tree",
                    name: "Commensalism",
                  },
                ],
              },
            },
            openresponse: { // correct
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
                    text: "How do the relationships between plants and animals," +
                      "such as mutualism, commensalism, and competition, impact the " +
                      "sustainability of plant communities and ecosystems?",
                    placeholder: "The relationships between plants and animals...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l9_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/pets.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 10 (lesson sixteen and seventeen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10", //how do habitat conditions affect the number of animals pt 1
          title: <Translation>{(t) => t("gradetwo:c2l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/desert.png"),
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
                image: require("../../../../assets/mastery/pets.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l10_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/bee-and-tree.png"),
              },
            ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take a picture of an animal habitat with poor conditions. Analyze the picture " +
                "and identify the ways the poor conditions could affect animal life.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Which of the following is the main way droughts affect aquatic environments?",
                  answers: [
                    { text: "Droughts make non-aquatic animals thirstier and therefore drink more of their water." },
                    { text: "Droughts make the water saltier." },
                    { text: "Droughts make the bodies of water shallower, through evaporation, killing off aquatic animals." },
                    { text: "Droughts cause an increase in the fish population." },
                  ],
                  answer: "Droughts make the bodies of water shallower, through evaporation, killing off aquatic animals.",
                },
                {
                  prompt:
                    "Which of the following events would affect the number of animals in a habitat?",
                  answers: [
                    { text: "Fire" },
                    { text: "Drought" },
                    { text: "Flood" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt:
                    "True or False: Infectious diseases do not impact animal populations?",
                  answers: [
                    { text: "true" },
                    { text: "false" },
                  ],
                  answer: "false",
                },
              ],
            },
            sorting: { // incorrect images
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Match the word to the definition using pictures",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_9,
                categories: [
                  { name: "Ebola" },
                  { name: "Anthrax" },
                ],
                options: [
                  {
                    title: "A disease that infected and killed large numbers of the chimpanzee population in the 1990s.",
                    name: "Ebola",
                  },
                  {
                    title:
                      "A disease discovered 600 years ago that kills any warm-blooded animal. ",
                    name: "Anthrax",
                  },
                ],
              },
            },
            openresponse: { // correct
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
                    text: "How do habitat conditions, such as availability of food, " +
                      "water and protection from predators, impact the number and diversity of animal populations in an ecosystem?",
                    placeholder: "Habitat conditions impact animal populations by...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 11 (lesson eighteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c2l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/fishing.png"),
          backgroundColor: "#004AAD",
          mastery: {
            navigation: "mastery",
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/water-pollution.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_card3")}</Translation>
                ),
              },
            ],
          },
          mastery_2: { // incorrect mastery
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l11_2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/habitat.png"),
              },
            ],
          },
          // test: {
          //   cards: [
          //     {
          //       text: "Hello",
          //       name: "salem ale kum",
          //     },
          //     {
          //       text: "World",
          //       name: "ale kum salem",
          //     }
          //   ],
          // },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take a picture of an animal in your area that you believe will not be here in ten years.",
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "True or False: Deforestation does not cause a serious decrease in the number of animals in the area?",
                  answers: [
                    { text: "False" },
                    { text: "True" },
                  ],
                  answer: "False",
                },
                {
                  prompt:
                    "Which of the following is the most likely outcome if someone cuts down many trees in a forest?",
                  answers: [
                    { text: "Many animals will lose their habitats." },
                    { text: "Many animals will lose their food sources" },
                    { text: "There will be an increased risk of flooding in the area" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt:
                    "Which of the following pairs of actions are both ways humans indirectly impact animal populations?",
                  answers: [
                    { text: "Use of pesticides, deforestation" },
                    { text: "Poisoning from industrial emissions, construction of dams" },
                    { text: "Construction of dams, deforestation" },
                    { text: "Use of pesticides, poisoning from industrial emissions" },
                  ],
                  answer: "Construction of dams, deforestation",
                },
              ],
            },
            openresponse: { // correct
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
                    text: "What are some potential causes for a decrease in the number of animals in a particular ecosystem, " +
                      "and how can we address these issues to promote sustainability and protect biodiversity? Think about laws " +
                      "we can implement. What would you suggest to the government as well?",
                    placeholder: "Potential causes are...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },

          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 12 (lesson nineteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c2l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/magnifying-glass.png"),
          backgroundColor: "#FFBD58",
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l12_prompt")}</Translation>
            ),
            // cards: [
            //   {
            //     text: (
            //       <Translation>{(t) => t("mastery:g2c2l12_card1")}</Translation>
            //     ),
            //     image: require("../../../../assets/mastery/heart.png"),
            //   },
            //   {
            //     text: (
            //       <Translation>{(t) => t("mastery:g2c2l12_card2")}</Translation>
            //     ),
            //     image: require("../../../../assets/mastery/frog.png"),
            //   },
            // ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take a picture of an animal with similar bodily functions to humans. " +
                "Essentially, this animal has a body part that has the same function as we use it for.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "True or False: Humans are vertebrates?",
                  answers: [
                    { text: "False" },
                    { text: "True" },
                  ],
                  answer: "True",
                },
                {
                  prompt:
                    "Which of the following definitions is the best description of an organ?",
                  answers: [
                    { text: "A part of the human body." },
                    { text: "A part of an organism with an unspecified purpose." },
                    { text: "A part of an organism that has its own location and purpose." },
                    { text: "It is the heart of a vertebrate." },
                  ],
                  answer: "A part of an organism that has its own location and purpose",
                },
                {
                  prompt:
                    "What technological advancement in the 1970s made it easier to see humans’ internal organs?",
                  answers: [
                    { text: "MRIs" },
                    { text: "X-rays" },
                    { text: "CTs" },
                    { text: "None of the above" },
                  ],
                  answer: "MRIs",
                },
              ],
            },
            openresponse: { // correct
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
                    text: "What are the three main cavities of the human body? What are the main organs in each of these cavities?",
                    placeholder: "The three main cavities are...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 13 (lesson 20 & 21 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c2l13")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/apple.png"),
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
                image: require("../../../../assets/mastery/fruits.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l13_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/broccoli.png"),
              },
            ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take a picture of an item that humans cannot digest but certain animals can.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Where does digestion begin?",
                  answers: [
                    { text: "Stomach" },
                    { text: "Mouth" },
                    { text: "Intenstine" },
                    { text: "Heart" },
                  ],
                  answer: "Mouth",
                },
                {
                  prompt:
                    "Digestion allows humans to (1)____ nutrients from food, and transform it into (2)____",
                  answers: [
                    { text: "(1) absorb | (2) energy" },
                    { text: "(1) reject | (2) food" },
                    { text: "(1) process | (2) oxygen" },
                    { text: "(1) sort | (2) carbon dioxide" },
                  ],
                  answer: "(1) absorb | (2) energy",
                },
                {
                  prompt:
                    "Which of the following is the correct order of parts of the body that food travels through?",
                  answers: [
                    { text: "Stomach, esophagus, mouth, intestines" },
                    { text: "Mouth, esophagus, stomach, intestines" },
                    { text: "Mouth, stomach, esophagus, intestines" },
                    { text: "Mouth, intestines, stomach, esophagus" },
                  ],
                  answer: "Mouth, esophagus, stomach, intestines",
                },
                {
                  prompt:
                    "Which of the following is the name of the drawing that helps you to make more healthy decisions when choosing what food to eat??",
                  answers: [
                    { text: "Triangle of Choices" },
                    { text: "Pyramid of Food Decisions" },
                    { text: "Pyramid of Nutrition" },
                    { text: "Tiers of Nutrition" },
                  ],
                  answer: "Pyramid of Nutrition",
                },
              ],
            },
            openresponse: { // correct
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
                    text: "There are many factors to consider when it comes to sustainability in the food system, " +
                      "such as how food is grown or raised, how it is transported and distributed, and how much of it " +
                      "is wasted. The apple you eat might be healthy for you but is it healthy for the environment? " +
                      "Identify strategies that can be used when we produce and consume food, so that it is sustainable " +
                      "for the environment, animals, and human communities?",
                    placeholder: "Sustainable ways to produce and consume food are...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 14 (lesson 22 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson14",
          title: <Translation>{(t) => t("gradetwo:c2l14")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/breathing.png"),
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
                image: require("../../../../assets/mastery/breathing.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l14_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/nose.png"),
              },
            ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take a picture of an environment that might be hard to breathe in. " +
                "Identify and analyze why that might be (consider: air pollution, pesticides and contaminants, etc.)",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "True or False: Gas exchange is a process that occurs in the lungs and takes oxygen and releases carbon dioxide.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt:
                    "If the air we breathe in is unclean, containing materials such as dust, " +
                    "what part of the body collects it, preventing it from further entering the body?",
                  answers: [
                    { text: "Nose" },
                    { text: "Lungs" },
                    { text: "Bronchi" },
                    { text: "Trachea" },
                  ],
                  answer: "Nose",
                },
                {
                  prompt:
                    "What is the purpose of the trachea?",
                  answers: [
                    { text: "To only bring air into the lungs" },
                    { text: "To filter out the good air from the bad" },
                    { text: "To produce carbon dioxide" },
                    { text: "To transport air in and out of the lungs" },
                  ],
                  answer: "To transport air in and out of the lungs",
                },
                {
                  prompt:
                    "Which of the following gives the best description of the order in which the parts of the respiratory system help us to breathe?",
                  answers: [
                    { text: "Nose or mouth, Larynx and trachea, bronchi, lungs" },
                    { text: "Mouth, lungs, bronchi" },
                    { text: "Nose, larynx, lungs" },
                    { text: "None of the above" },
                  ],
                  answer: "Nose or mouth, Larynx and trachea, bronchi, lungs",
                },
              ],
            },
            openresponse: { // correct
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
                    text: "How can we ensure that the air we breathe is safe and healthy for all living beings, " +
                      "and how can we protect and improve the quality of the air in our communities? ",
                    placeholder: "Sustainable ways to produce and consume food are...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 15 (lesson 23 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson15",
          title: <Translation>{(t) => t("gradetwo:c2l15")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/circulation.png"),
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
                image: require("../../../../assets/mastery/blood-vessel.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l15_card2")}</Translation>
                ),
                image: (require("../../../../assets/mastery/blood.png")),
              },
            ],
          },
          minigames: {
            minigames: {
              snapshot: { // correct
                navigation: "Snapshot",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt: "Take a picture of a common unhealthy food in your household.",
              },
              quiz: { // correct
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [

                  {
                    prompt:
                      "True or False: The heart is responsible for the movement of blood in the body?",
                    answers: [
                      { text: "True" },
                      { text: "False" },
                    ],
                    answer: "True",
                  },
                  {
                    prompt:
                      "Which of the following is the responsibility of blood in the body?",
                    answers: [
                      { text: "Warm the body." },
                      { text: "Spread oxygen and nutrients to organs and tissues." },
                      { text: "Carry unnecessary and harmful substances to the excretory organs." },
                      { text: "All of the above." },
                    ],
                    answer: "All of the above.",
                  },
                  {
                    prompt:
                      "What do arteries do?",
                    answers: [
                      { text: "Carry food that has been digested" },
                      { text: "Carry carbon dioxide" },
                      { text: "Carry blood" },
                      { text: "None of the above" },
                    ],
                    answer: "Carry blood",
                  },
                ],
              },
              openresponse: { // correct
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
                      text: "What should an individual do to stay healthy? What do they need from their environment in order to stay healthy?",
                      image: require("../../../../assets/openresponse/innovation.png"),
                    },
                  ],
                },
              },
            },
          },
          minigames: {
            minigames: {
              snapshot: { // correct
                navigation: "Snapshot",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt: "Take a picture of a common unhealthy food in your household.",
              },
              quiz: { // correct
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [

                  {
                    prompt:
                      "True or False: The heart is responsible for the movement of blood in the body?",
                    answers: [
                      { text: "True" },
                      { text: "False" },
                    ],
                    answer: "True",
                  },
                  {
                    prompt:
                      "Which of the following is the responsibility of blood in the body?",
                    answers: [
                      { text: "Warm the body." },
                      { text: "Spread oxygen and nutrients to organs and tissues." },
                      { text: "Carry unnecessary and harmful substances to the excretory organs." },
                      { text: "All of the above." },
                    ],
                    answer: "All of the above.",
                  },
                  {
                    prompt:
                      "What do arteries do?",
                    answers: [
                      { text: "Carry food that has been digested" },
                      { text: "Carry carbon dioxide" },
                      { text: "Carry blood" },
                      { text: "None of the above" },
                    ],
                    answer: "Carry blood",
                  },
                ],
              },
              openresponse: { // correct
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
                      text: "What should an individual do to stay healthy? What do they need from their environment in order to stay healthy?",
                      image: require("../../../../assets/openresponse/innovation.png"),
                    },
                  ],
                },
              },
            },
          },
          minigames: {
            minigames: {
              snapshot: { // correct
                navigation: "Snapshot",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt: "Take a picture of a common unhealthy food in your household.",
              },
              quiz: { // correct
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [

                  {
                    prompt:
                      "True or False: The heart is responsible for the movement of blood in the body?",
                    answers: [
                      { text: "True" },
                      { text: "False" },
                    ],
                    answer: "True",
                  },
                  {
                    prompt:
                      "Which of the following is the responsibility of blood in the body?",
                    answers: [
                      { text: "Warm the body." },
                      { text: "Spread oxygen and nutrients to organs and tissues." },
                      { text: "Carry unnecessary and harmful substances to the excretory organs." },
                      { text: "All of the above." },
                    ],
                    answer: "All of the above.",
                  },
                  {
                    prompt:
                      "What do arteries do?",
                    answers: [
                      { text: "Carry food that has been digested" },
                      { text: "Carry carbon dioxide" },
                      { text: "Carry blood" },
                      { text: "None of the above" },
                    ],
                    answer: "Carry blood",
                  },
                ],
              },
              openresponse: { // correct
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
                      text: "What should an individual do to stay healthy? What do they need from their environment in order to stay healthy?",
                      image: require("../../../../assets/openresponse/innovation.png"),
                    },
                  ],
                },
              },
            },
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 2 Lesson 16 (lesson 24 & 25 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson16",
          title: <Translation>{(t) => t("gradetwo:c2l16")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/mask.png"),
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
                image: require("../../../../assets/mastery/heart-rate.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/doctor.png"),
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
                image: require("../../../../assets/mastery/rosemary.png"),
              },
            ],
          },
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take a picture of an item that should be cleaned more often. " +
                "For example, many humans don’t realize how dirty and unclean our phones " +
                "are. What are some other items that we forget to clean?",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Which of the following pairs accurately describe the best ways to strengthen immunity to diseases?",
                  answers: [
                    { text: "Vaccines, exposure to diseases" },
                    { text: "Vaccines, personal hygiene care" },
                    { text: "Washing your hands, bathing" },
                    { text: "Personal hygiene care, nature" },
                  ],
                  answer: "Vaccines, personal hygiene care",
                },
                {
                  prompt:
                    "True or False: Spending time in nature is not helpful for staying healthy?",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "False",
                },
                {
                  prompt:
                    "Which of the following is the best definition for immunity?",
                  answers: [
                    { text: "The state of being at risk for certain diseases." },
                    { text: "The quality of being resistant to a disease or illness." },
                    { text: "The name for people who are never sick." },
                    { text: "The quality of being resistant to medicine. " },
                  ],
                  answer: "The quality of being resistant to a disease or illness.",
                },
              ],
            },
            openresponse: { // correct
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
                    text: "How can we protect the human body from infections in a sustainable way? " +
                      "What cleaning supplies do you see used most often? Are these supplies environmentally friendly? Why? ",
                    placeholder: "Sustainable ways to produce and consume food are...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },
        },
      ],
    },
    {
      navigation: "Chapter3",
      title: <Translation>{(t) => t("common:chapterthree")}</Translation>, // Chapter 3
      name: <Translation>{(t) => t("gradetwo:substances")}</Translation>, // Substances and their properties
      icon: require("../../../../assets/chapter-icons/water-cycle.png"),
      backgroundimage: require("../../../../assets/mastery/bg/ch3.png"),
      colorOne: "tomato",
      colorTwo: "firebrick",
      lessons: [

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 1 Chapter 3 Lesson 1 (lesson 26 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
    */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradetwo:c3l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/snowflake.png"),
          backgroundColor: "#49326B",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an item undergoing change from one state of matter to another.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Which of the following is a state of matter?",
                  answers: [
                    { text: "Solid" },
                    { text: "Liquid" },
                    { text: "Gas" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "True or False: Once substances are in a certain state, it is impossible for them to move to another state.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "False",
                },
                {
                  prompt: "When something freezes, what state of matter does it start and then end in?",
                  answers: [
                    { text: "Solid to liquid state" },
                    { text: "Liquid to gaseous state" },
                    { text: "Solid state to gaseous state" },
                    { text: "Liquid to solid state" },
                  ],
                  answer: "Liquid to solid state",
                },
                {
                  prompt: "On a hot day, a dog bowl of water is left out in the sun. At the end of the day, all of the water is gone. What state is the substance now in?",
                  answers: [
                    { text: "Gas" },
                    { text: "Solid" },
                    { text: "Liquid" },
                    { text: "None of the above" },
                  ],
                  answer: "Gas",
                }
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Open Response
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "When we change an object from one state to another state of matter are we being sustainable? Don't changes of states of matter require energy? If so, think about some changes of matter that harm our environment.",
                    placeholder: "When we change an object from one state to another ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c2l1_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/heart-rate.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/doctor.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l16_card3")}</Translation>
                ),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l1_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/rosemary.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l1_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/raisins.png"),
              },
            ],
          },

        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 2 (lesson 27 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradetwo:c3l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/air.png"),
          backgroundColor: "#C85004",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Research a place with poor air quality. Take a picture of that place (you can take a picture of the image online). Can you identify any characteristics in the picture that show the poor air quality?",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "What gas makes up most of the air (78%)?",
                  answers: [
                    { text: "Nitrogen" },
                    { text: "Oxygen" },
                    { text: "Carbon dioxide" },
                    { text: "Argon" },
                  ],
                  answer: "Nitrogen",
                },
                {
                  prompt: "True or False: We cannot breathe pure nitrogen on its own.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "Which of the following gasses in air have no color and no smell?",
                  answers: [
                    { text: "Nitrogen" },
                    { text: "Argon" },
                    { text: "Oxygen" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "What does the Amazon forest produce the most of all forests in the world?",
                  answers: [
                    { text: "Paper" },
                    { text: "Pollution" },
                    { text: "Oxygen" },
                    { text: "Birds" },
                  ],
                  answer: "Oxygen",
                }
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Open Response
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "I think we can all agree that humans release chemicals, pollutants, pesticides, etc. into the air that negatively impact the air quality. However, not everything we release into the air is necessarily harmful. What can humans release into the air that will positively impact the air quality?",
                    placeholder: "Humans can release ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/rhino.png"),
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
                image: require("../../../../assets/mastery/contamination.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 3 (lesson 28 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradetwo:c3l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/candle.png"),
          backgroundColor: "#9DCD5A",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of a representation of one of the many properties of air. (For example: a carbonated beverage with bubbles).",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "True or False: Combustion refers to the process of burning something.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "What substance supports combustion, while carbon dioxide does not?",
                  answers: [
                    { text: "Nitrogen" },
                    { text: "Oxygen" },
                    { text: "Argon" },
                    { text: "It actually is carbon dioxide" },
                  ],
                  answer: "Oxygen",
                },
                {
                  prompt: "It is very difficult to breathe in a room with a lot of ____, and very little _____.",
                  answers: [
                    { text: "Carbon dioxide; oxygen" },
                    { text: "Oxygen; carbon dioxide" },
                    { text: "Both answers are correct" },
                    { text: "Both answers are incorrect" },
                  ],
                  answer: "Carbon dioxide; oxygen",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Open Response
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What are the many properties of air, and how do they positively impact the environment? Why are these properties so important for maintaining homeostasis?",
                    placeholder: "The main properties of air are ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },
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
                image: require("../../../../assets/mastery/candle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/spy-kid.png"),
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
                image: require("../../../../assets/mastery/colorant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/candle-lit.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l3_card7")}</Translation>
                ),
                image: require("../../../../assets/mastery/look.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 4  // lesson 29
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradetwo:c3l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/duck.png"),
          backgroundColor: "#98DFEC",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of the cleanest source of water in your home.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Which of the following have the highest water content?",
                  answers: [
                    { text: "Acorn" },
                    { text: "Bean" },
                    { text: "Lemon" },
                    { text: "Potato" },
                  ],
                  answer: "Lemon",
                },
                {
                  prompt: "True or False: There is more water in potatoes than apples.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "False",
                },
                {
                  prompt: "True or False: Even though fruits and vegetables are solids, they are also made up of a lot of water.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Open Response
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Do you believe that everyone in the world has access to a water source? If so, it stands to reason that not everyone has the same type of water source. Can you think of the many different types of water sources that exist?",
                    placeholder: "The water sources ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/watering-plants.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l4_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/desert.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 5 // lesson 30 & 31
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradetwo:c3l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-source.png"),
          backgroundColor: "#37B5FF",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of the most natural water source near your home. If you cannot visit it, take a picture of it online. Look at the picture and see if you can understand what differentiates a natural water source from an unnatural one.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "True or False: Most of the water on Earth is freshwater.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "False",
                },
                {
                  prompt: "In what ocean is the Mariana Trench located?",
                  answers: [
                    { text: "Pacific" },
                    { text: "Atlantic" },
                    { text: "Indian" },
                    { text: "Artic" },
                  ],
                  answer: "Pacific",
                },
                {
                  prompt: "What is the largest river in Kazakhstan?",
                  answers: [
                    { text: "Yertis" },
                    { text: "Yesil" },
                    { text: "Zhem" },
                    { text: "Oral" },
                  ],
                  answer: "Yertis",
                },
                {
                  prompt: "What is the largest lake in Kazakhstan?",
                  answers: [
                    { text: "Zaysan" },
                    { text: "Aral" },
                    { text: "Balkhash" },
                    { text: "Alakol" },
                  ],
                  answer: "Balkhash",
                },
                {
                  prompt: "What source of fresh and clean water is caused by excess water seeping through soil and clay?",
                  answers: [
                    { text: "Lakes" },
                    { text: "Groundwater/underground" },
                    { text: "Rain" },
                    { text: "Oceans" },
                  ],
                  answer: "Groundwater/underground",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Open Response
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "Not all communities possess access to a natural water source. However, the communities that do must address the issues of water pollution, overuse, and scarcity. Can you think of ways they address these issues and how you can address these same issues if present, in your community?",
                    placeholder: "They can address these issues by ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
            reorder: { //correct
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Put the following oceans in order from largest to smallest.",
              data: [
                {
                  text: "Pacific",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Atlantic",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Indian",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Artic",
                  dormant: "#ffa500",
                  active: "#e59400",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/planet-earth.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l5_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/summer.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l5_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/river.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 6 //lesson 32
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c3l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-bottle.png"),
          backgroundColor: "#F27B21",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of your water meter to see how much water you’ve used this period. Take another picture at the same time next month to see if your habits have improved your water usage.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "Which of the following household uses of water requires the largest amount of water?",
                  answers: [
                    { text: "Laundry" },
                    { text: "Washing dishes" },
                    { text: "Taking a bath" },
                    { text: "Flushing the toilet" },
                  ],
                  answer: "Taking a bath",
                },
                {
                  prompt: "True or False: On average, taking a bath requires four times the amount of water it takes for a shower.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "Which of the following is a way to reduce water consumption in households?",
                  answers: [
                    { text: "Take showers instead of baths" },
                    { text: "Make sure the dishwasher is full before it gets run" },
                    { text: "Turn of the sink when brushing your teeth" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "Which of the following is NOT a way to reduce water consumption in households?",
                  answers: [
                    { text: "Take shorter showers" },
                    { text: "Wait to repair leaks in sinks and toilets" },
                    { text: "Water plants only during cooler parts of the day" },
                    { text: "Only run full loads of laundry" },
                  ],
                  answer: "Wait to repair leaks in sinks and toilets",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Open Response
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What are some ways that your local government can make sure that human drinking water isn’t used for wrongful purposes, such as wastefulness?",
                    placeholder: "The local government can ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l6_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/drink-water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/brainstorming.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l6_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/studying.png"),
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
        Grade 3 Chapter 3 Lesson 7 //lessons 33 & 34
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c3l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-filter.png"),
          backgroundColor: "#6C3F14",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of a homemade water filtration method. You can do this after you complete the mastery challenge. To show the success of the water filtration method, take a before and after picture of the water.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "What is the main way to purify water?",
                  answers: [
                    { text: "Mechanical" },
                    { text: "Chemical" },
                    { text: "Biological" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "What occurs at water treatment plants?",
                  answers: [
                    { text: "It is where wastewater is treated." },
                    { text: "It is where freshwater is treated." },
                    { text: "It is where ocean water is treated." },
                    { text: "None of the above" },
                  ],
                  answer: "It is where wastewater is treated.",
                },
                {
                  prompt: "Which method of purifying water removes things like branches, sand, leaves?",
                  answers: [
                    { text: "Mechanical" },
                    { text: "Chemical" },
                    { text: "Biological" },
                    { text: "Methodological" },
                  ],
                  answer: "Mechanical",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Open Response
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "How can we protect and restore aquatic ecosystems and the many benefits they provide, such as water purification, flood control, and habitat for a variety of species? Extend your answer to list several water purification methods, from natural to man made.",
                    placeholder: "To protect aquatic ecosystems, we can ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l7_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l7_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/drink-water.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l7_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/test.png"),
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
        Grade 3 Chapter 3 Lesson 8 //lesson 35
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c3l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil.png"),
          backgroundColor: "#E39650",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of nutrient-rich soil. Analyze and identify why the soil in particular is nutrient-dense.",
            },
            quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                {
                  prompt: "What is the purpose of soil?",
                  answers: [
                    { text: "To provide nutrition and support for plant roots and stems" },
                    { text: "To provide a home for many animals" },
                    { text: "The first two answers are correct" },
                    { text: "Neither answers are correct" },
                  ],
                  answer: "The first two answers are correct",
                },
                {
                  prompt: "True or False: Most of the Earth’s surface is covered with a layer of soil of different thicknesses.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "What must occur to begin the process of creating soil?",
                  answers: [
                    { text: "Rocks, such as stones and minerals, are destroyed, making smaller mineral particles." },
                    { text: "Soil must be transported to the area." },
                    { text: "Organic matter must decompose in the area." },
                    { text: "All of the above." },
                  ],
                  answer: "Rocks, such as stones and minerals, are destroyed, making smaller mineral particles.",
                },
              ]
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>), // Open Response
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What role can soil play in slowing down climate change?",
                    placeholder: "Soil ...",
                    image: require("../../../../assets/mastery/state-of-matter.png"),
                  },
                ],
              },
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l8_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/planting.png"),
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
                image: require("../../../../assets/mastery/sweet-potato.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l8_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/glass-of-water.png"),
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
                image: require("../../../../assets/mastery/seed.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 9 (Lesson 36 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradetwo:c3l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil-composition.png"),
          backgroundColor: "#9DCD5A",
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Take a picture of a scientific discovery that you use on a daily basis.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt:
                    "What of the following is the best definition of humus",
                  answers: [
                    { text: "Matter in soil made out of the remains of plants and animals" },
                    { text: "Minerals in soil." },
                    { text: "Grass that grows on top of the soil." },
                    { text: "Rocks embedded in the soil" },
                  ],
                  answer: "Matter in soil made out of the remains of plants and animals.",
                },
                {
                  prompt: "Humus is more abundant in the upper layers of the soil than the lower layers.",
                  answers: [
                    { text: "True" },
                    {
                      text: "False",
                    },
                  ],
                  answer: "True",
                },
                {
                  prompt: "Rock and mineral particles are more abundant in the lower layers of the soil than the upper layers.",
                  answers: [
                    { text: "True" },
                    {
                      text: "False",
                    },
                  ],
                  answer: "True",
                },
                {
                  prompt: "Which of the following conditions can cause the breakdown of rocks, and therefore soil formation?",
                  answers: [
                    {
                      text: "Wind and water",
                    },
                    {
                      text: "Solar heat",
                    },
                    {
                      text: "Living organisms",
                    },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l9_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/soil-plant.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/jar.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l9_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/dirt.png"),
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
                image: require("../../../../assets/mastery/soil.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 10 Lessons 37 and 38 on curriculum
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c3l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil-types.png"),
          backgroundColor: "#F9A949",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt:
                    "What is the best explanation for why air permeability is important for soil?",
                  answers: [
                    { text: "Without it the worms will die " },
                    { text: "This allows air through the soil, which is needed or else plant roots will die. " },
                    { text: "It lets rain through." },
                    { text: "None of the above." },
                  ],
                  answer: "This allows air through the soil, which is needed or else plant roots will die.",
                },
                {
                  prompt: "Which of the following is the best definition of water permeability? ",
                  answers: [
                    { text: "It describes the type of water needed for the soil." },
                    { text: "It is the ability of the soil to support worms and insects." },
                    { text: "It explains the pH of the soil." },
                    { text: "It is the ability of the soil to absorb and transmit water." },
                  ],
                  answer: "It is the ability of the soil to absorb and transmit water.",
                },
                {
                  prompt: "Which of the following processes directly threatens the abundance of soil?",
                  answers: [
                    { text: "Earthquakes" },
                    { text: "Pollution" },
                    { text: "Erosion" },
                    { text: "Evaporation" },
                  ],
                  answer: "Erosion",
                },
                {
                  prompt: "The life of humans, animals, and plants are all dependent on the existence of soil. ",
                  answers: [
                    { text: "True" },
                    {
                      text: "False",
                    },
                  ],
                  answer: "True",
                },
              ],
            },

          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l10_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/crops.png"),
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
                image: require("../../../../assets/mastery/pots.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/kidney.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/watering-plants.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l10_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/seed.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 11 Lessons 39 and 40 on curriculum
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c3l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil-properties.png"),
          backgroundColor: "#76B9F0",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt:
                    "Which of the following statements is true about soil?",
                  answers: [
                    { text: "All of the following" },
                    { text: "Dark soil is rich in humus." },
                    { text: "Red soil is rich in iron." },
                    { text: "Light soil is poor in minerals and humus." },
                  ],
                  answer: "All of the following.",
                },
                {
                  prompt: "Clay soil absorbs water well and does not stick together. ",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "False",
                },
                {
                  prompt: "Which of the following is the main property of sandy soil?",
                  answers: [
                    { text: "It is very loose." },
                    { text: "Is is easy for water to pass through it" },
                    { text: "It heats up and cools down quickly" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "What is the type of soil considered “best,” containing a lot of humus and is characterized by leaving a black greasy mark on the palm of your hand when compressed?",
                  answers: [
                    { text: "Chernozem" },
                    { text: "Clay" },
                    { text: "Humus soil" },
                    { text: "Sand" },
                  ],
                  answer: "Chernozem",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l11_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/soil-scoop.png"),
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
                image: require("../../../../assets/mastery/three-jars.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l11_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/grass.png"),
              },
            ],
          },
        },

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 12 Lessons 41 and 42
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c3l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/earth.png"),
          backgroundColor: "#49326B",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt:
                    "What are the spheres of the earth?",
                  answers: [
                    { text: "Biosphere and lithosphere" },
                    { text: "Hydrosphere and atmosphere" },
                    { text: "Both answers are correct" },
                    { text: "Neither answers are correct" },
                  ],
                  answer: "Both answers are correct.",
                },
                {
                  prompt: "Which of the following is the best definition of the atmosphere of the earth? ",
                  answers: [
                    { text: "A gas shell containing the oxygen needed by living organisms to breathe. It consists of several layers." },
                    { text: "A solid shell that surrounds Earth, holding in the gasses needed for plants." },
                    { text: "A shell made up of gas, consisting of only one layer that protects the earth from asteroids." },
                    { text: "A solid shell that is only responsible for creating weather. " },
                  ],
                  answer: "A gas shell containing the oxygen needed by living organisms to breathe. It consists of several layers.",
                },
                {
                  prompt: "Which of the following is the main property of sandy soil?",
                  answers: [
                    { text: "It is very loose." },
                    { text: "Is is easy for water to pass through it" },
                    { text: "It heats up and cools down quickly" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },
                {
                  prompt: "The lithosphere is the upper solid shell of the Earth.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "Ture",
                },
                {
                  prompt: "What inhabits the biosphere on Earth? ",
                  answers: [
                    { text: "3 million species of plants, animals, fungi and bacteria." },
                    { text: "Earth’s core." },
                    { text: "The troposphere." },
                    { text: "Glaciers." },
                  ],
                  answer: "Glaciers",
                },
                {
                  prompt: "The lithosphere has never moved, and never will.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "False",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l12_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/astronaut.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/universe.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l12_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/drawing.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 13 (lessons 43 and 44 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c3l13")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/astronaut.png"),
          backgroundColor: "#02084B",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt:
                    "What is the main way that space is explored?",
                  answers: [
                    { text: "Automatic spacecrafts" },
                    { text: "Manned space flights" },
                    { text: "Both answers are correct" },
                    { text: "Neither answer is correct" },
                  ],
                  answer: "Both answers are correct",
                },
                {
                  prompt: "In what year was the first human flight to space?",
                  answers: [
                    { text: "1961" },
                    { text: "1990" },
                    { text: "1947" },
                    { text: "1968" },
                  ],
                  answer: "1961",
                },
                {
                  prompt: "Which of the following advancements were created in connection with the development of the space industry?",
                  answers: [
                    { text: "Solar batteries" },
                    { text: "Water filters" },
                    { text: "Digital cameras" },
                    { text: "All of the above" },
                  ],
                  answer: "All of the above",
                },

              ],
            },
          },
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
                image: require("../../../../assets/mastery/superhero.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/angry.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/glove.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l13_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/healing-strip.png"),
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
                image: require("../../../../assets/mastery/water.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 3 Lesson 14 lessons 45 and 46 in curriculum
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson14",
          title: <Translation>{(t) => t("gradetwo:c3l14")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/earth-rotating.png"),
          backgroundColor: "#F6E134",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"), // none of this needs to change for quizzes, all images are constants
              content: [
                {
                  prompt: "What is the best explanation for why there are different time zones in different places? ",
                  answers: [
                    { text: "The sun revolves around the earth, making it light in some places and dark in others. " },
                    { text: "The earth revolves around its axis while orbiting the sun, making it light in some places and dark in others. " },
                    { text: "The earth revolves around the moon, making it night time on one half of the earth." },
                    { text: "None of the above." },
                  ],
                  answer: "The earth revolves around its axis while orbiting the sun, making it light in some places and dark in others.",
                },
                {
                  prompt: "The earth rotates around the ____.",
                  answers: [
                    { text: "Moon" },
                    { text: "Sun" },
                    { text: "Other planets" },
                    { text: "Milky way" },
                  ],
                  answer: "Sun",
                },
                {
                  prompt: "The earth rotates around an axis AND revolves around the sun.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "Ture",
                },
              ],
            },
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c3l14_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/solar-system.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/moon.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c3l14_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/orbit.png"),
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
                image: require("../../../../assets/mastery/orbits.png"),
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
      backgroundimage: require("../../../../assets/lessonbg2.png"),
      icon: require("../../../../assets/chapter-icons/book.png"),
      colorOne: "mediumturquoise",
      colorTwo: "royalblue",
      lessons: [
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 1 (lesson fourty-seven and fourty-eight)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson1",
          title: <Translation>{(t) => t("gradetwo:c4l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/elastic-spring.png"),
          backgroundColor: "#2A731D",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "True or False: Elasticity is the property of bodies to restore their original position and shape",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "What is a common object that utilizes elasticity?",
                  answers: [
                    { text: "Car tires" },
                    {
                      text: "Balloons",
                    },
                    { text: "Long bridges" },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt:
                    "Which of the following statements about elastic forces is true?",
                  answers: [
                    { text: "If the elastic forces cannot handle the amount of external force, the body changes shape." },
                    { text: "The aim of the elastic force is to compress, shift, stretch, and bend." },
                    { text: "Both of the above answers are correct." },
                    { text: "Neither answers are correct." }
                  ],
                  answer: "Both of the above answers are correct.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an object/item that uses elastic force."
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is elastic force, and how does it differ from other types of force?",
                    placeholder: "The elastic force is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
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
                image: require("../../../../assets/mastery/elastic-band.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/catapult.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l1_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/slingshot.png"),
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
        Grade 3 Chapter 4 Lesson 2 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradetwo:c4l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/gravity.png"),
          backgroundColor: "#060644",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt: "Which of the following things that occur on earth need gravity?",
                  answers: [
                    { text: "Holds the moon in orbit." },
                    {
                      text: "Keeps objects on the surface of the earth.",
                    },
                    { text: "Keeps the shape of the earth’s atmosphere." },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt:
                    "True or False: Elasticity is the property of bodies to restore their original position and shape",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt:
                    "Which of the following is the best definition of inertia?",
                  answers: [
                    { text: "The property of the body to maintain a state of rest or movement until some external force acts on it." },
                    { text: "The property of a body to bounce back from an external force." },
                    { text: "The property that drags things down to the center of the earth" },
                    { text: "The speed at which an object falls." }
                  ],
                  answer: "The property of the body to maintain a state of rest or movement until some external force acts on it.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an object experiencing gravity. (Hint: objects in freefall.)"
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is gravity, and how does it differ from other types of force?",
                    placeholder: "The gravity is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l2_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l2_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/space.png"),
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
                image: require("../../../../assets/mastery/paper-cup.png"),
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
                image: require("../../../../assets/mastery/water.png"),
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
        Grade 3 Chapter 4 Lesson 3 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradetwo:c4l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/friction.png"),
          backgroundColor: "#53020C",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "True or False: Friction is stronger on smooth surfaces than rough surfaces.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "False",
                },
                {
                  prompt: "In which of the following scenarios is friction present?",
                  answers: [
                    { text: "Pressing the palms of your hands together and rubbing them quickly, creating heat." },
                    { text: "A pencil leaves traces on a piece of paper when they come into contact with each other.", },
                    { text: "The rubber boots of climbers’ boots keep the climber from slipping off the rocks." },
                    { text: "All the above" },
                  ],
                  answer: "All the above",
                },
                {
                  prompt:
                    "Which of the following can be created by friction?",
                  answers: [
                    { text: "Heat" },
                    { text: "Decline in speed" },
                    { text: "Both answers are correct." },
                    { text: "Neither answers are correct." }
                  ],
                  answer: "Both answers are correct.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an object experiencing friction or an object that causes friction."
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is friction, and how does it differ from other types of force?",
                    placeholder: "The friction is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l3_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l3_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/friction.png"),
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
                image: require("../../../../assets/mastery/book.png"),
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
        Grade 3 Chapter 4 Lesson 4 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradetwo:c4l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/direction.png"),
          backgroundColor: "#F9943B",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "True or False: The direction of gravity coincides with the direction of its free fall.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "The friction force is ____ to the direction of movement. ",
                  answers: [
                    { text: "Opposite" },
                    { text: "Equal", },
                    { text: "Perpendicular" },
                    { text: "All the above" },
                  ],
                  answer: "Opposite",
                },
                {
                  prompt:
                    "Which of the following most accurately describes what creates friction?",
                  answers: [
                    { text: "When one body is in free fall due to gravity." },
                    { text: "When bodies move across one another, causing two surfaces to come into contact." },
                    { text: "When a body bounces back after an external force acts on it." },
                    { text: "When a body breaks after an external force acts on it." }
                  ],
                  answer: "When bodies move across one another, causing two surfaces to come into contact.",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of an object that is experiencing a force. Highlight the direction of the force that is acting on it."
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "How do forces interact with matter, and how do they cause changes in the motion and behavior of objects? And, What are some common examples of forces in everyday life, and how do they affect the motion of objects?",
                    placeholder: "Forces interact by...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l4_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/arrows.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/water-bottle.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l4_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/cone.png"),
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
                image: require("../../../../assets/mastery/water-splash.png"),
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
                image: require("../../../../assets/mastery/forces.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 5 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradetwo:c4l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/shadow.png"),
          backgroundColor: "#159D52",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "True or False: A shadow is an area of space where light does not enter.",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "A ____ light source gives a longer shadow.",
                  answers: [
                    { text: "Lower" },
                    { text: "Higher", },
                    { text: "Colored" },
                    { text: "UV" },
                  ],
                  answer: "Lower",
                },
                {
                  prompt:
                    "The ____ the light source is to the object being illuminated, the shorter the shadow is.",
                  answers: [
                    { text: "Farther" },
                    { text: "More yellow" },
                    { text: "Closer" },
                    { text: "Redder" }
                  ],
                  answer: "Closer",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Take a picture of a shadow."
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "What is a shadow, and how is it formed? What are the many factors that can affect a shadow. For example, the time of day is one factor. Can you think of any more?",
                    placeholder: "Shadow is...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
          mastery: {
            prompt: (
              <Translation>{(t) => t("mastery:g2c4l5_prompt")}</Translation>
            ),
            cards: [
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card1")}</Translation>
                ),
                image: require("../../../../assets/mastery/shadow.png"),
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
                image: require("../../../../assets/mastery/bear.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l5_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/chalk.png"),
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
                image: require("../../../../assets/mastery/time.png"),
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
        Grade 3 Chapter 4 Lesson 6 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c4l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/reflection.png"),
          backgroundColor: "#5AA3F7",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  prompt:
                    "",
                  answers: [
                    { text: "True" },
                    { text: "False" },
                  ],
                  answer: "True",
                },
                {
                  prompt: "",
                  answers: [
                    { text: "" },
                    { text: "", },
                    { text: "" },
                    { text: "" },
                  ],
                  answer: "",
                },
                {
                  prompt:
                    "",
                  answers: [
                    { text: "" },
                    { text: "" },
                    { text: "" },
                    { text: "" }
                  ],
                  answer: "",
                },
              ],
            },
            snapshot: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                ""
            },
            openresponse: {
              navigation: "Image Boom",
              title: (
                <Translation>{(t) => t("common:openresponse")}</Translation>
              ),
              icon: require("../../../../assets/image.png"),
              backgroundColor: "palevioletred",
              data: {
                numberOfPrompts: 1,
                prompts: [
                  {
                    text: "",
                    placeholder: "",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            }
          },
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
                image: require("../../../../assets/mastery/solar-oven.png"),
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
                image: require("../../../../assets/mastery/flap.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/foil.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/wrap.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card7")}</Translation>
                ),
                image: require("../../../../assets/mastery/solar-oven.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l6_card8")}</Translation>
                ),
                image: require("../../../../assets/mastery/sun.png"),
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
                image: require("../../../../assets/mastery/smore.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 7 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c4l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/refraction.png"),
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
                image: require("../../../../assets/mastery/finish-line.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/bird.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/duck.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/cloth.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l7_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/mediums.png"),
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
                image: require("../../../../assets/mastery/flashlight.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 8 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c4l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/sound.png"),
          backgroundColor: "#800080",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 9 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradetwo:c4l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/practical-sound.png"),
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
                image: require("../../../../assets/mastery/love-message.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/telephone.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l9_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/study.png"),
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
                image: require("../../../../assets/mastery/phones.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 10 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c4l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/energy.png"),
          backgroundColor: "#ED5F1E",
          minigames: {},
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 11 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c4l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/circuit.png"),
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
                image: require("../../../../assets/mastery/lightning.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card2")}</Translation>
                ),
                image: require("../../../../assets/mastery/electrical-circuit.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/toaster.png"),
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
                image: require("../../../../assets/mastery/energy.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l11_card6")}</Translation>
                ),
                image: require("../../../../assets/mastery/wind-energy.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 Chapter 4 Lesson 12 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c4l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/magnet.png"),
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
                image: require("../../../../assets/mastery/magnetic.png"),
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
                image: require("../../../../assets/mastery/key-chain.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c4l12_card5")}</Translation>
                ),
                image: require("../../../../assets/mastery/magnet.png"),
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

