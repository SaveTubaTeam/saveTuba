import { AdventureImages, SortingImages } from "../../IMAGES";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";

import { TestImages } from "../../IMAGES";
import Quiz from "./Screens/Adventures/adventureFour/drawing.screen";

export const Lvl_1_LessonOne = {
  title: "Устойчивость", //Sustainability
  summary: "Что такое устойчивое развитие и почему это важно?", //What is sustainability and why is it important?

  summaryComponent: {
    route: "Резюме урока", //Lesson Summary
    component: SummaryScreen,
  },

  puzzle: {
    component: Puzzle,
  },

  quiz: {
    component: Quiz,
  },

  memory: {
    component: AdventureOne,
  },

  drawing: {
    component: null,
  },

  masteryComponent: {
    route: "Мастерство", //Mastery
    component: MasteryScreen,
  },

  info: {
    key: "lessonUno",
  },

  minigames: [
    {
      title: "Сортировка", //Sorting
      description: "Выберите соответствующую категорию", //Choose the corresponding category.
      key: "testkey4",
      image: AdventureImages.multiplechoice,
      content: [
        {
          imageBg: SortingImages.bg[0].lvl_1_les_1,
          categoryOne: "Живой",
          categoryTwo: "Не живой",
        },
        {
          first: "Вода",
          firstAnswer: "Не живой",
          firstImage: SortingImages.lvl_1_les_1[0].firstImage,
          second: "Животные",
          secondAnswer: "Живой",
          secondImage: SortingImages.lvl_1_les_1[0].secondImage,
          third: "Растения",
          thirdAnswer: "Живой",
          thirdImage: SortingImages.lvl_1_les_1[0].thirdImage,
        },
      ],
    },
    {
      title: "Объем памяти", //Memory
      description: "Соотнесите слово с его определением", //Match the word with its definition.
      key: "testkey2",
      data: "require('puzzlePollutionQuestions')",
      image: AdventureImages.puzzle,
    },
    {
      title: "Изображение Бум",
      description: "Отвечать открыто",
      key: "testkey2",
      data: {
        numberOfPrompts: 4,
        prompts: [
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.bikingPic,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.faucetPic,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.recyclingPic,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lightsPic,
          },
        ],
      },
      image: AdventureImages.puzzle,
    },
    {
      title: "Викторина", // Drawing game
      description: "Позвольте художнику в вас ожить!", // Let the artist in you come to life
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.crossword,
    },
  ],
};
