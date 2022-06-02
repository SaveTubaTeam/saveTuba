import { AdventureImages, SortingImages, TestImages } from "../../IMAGES";
import { questionSetPollution } from "../../../../components/LevelOne/QuestionSetPollution";

import SummaryScreen from "./Screens/Summary/summary";
import MasteryScreen from "./Screens/Mastery/mastery";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";
import Quiz from "./Screens/Adventures/adventureFour/quiz.screen";

export const Lvl_2_LessonTwo = {
  title: "Устойчивое сельское хозяйство",
  summary: "Как сделать сельское хозяйство более устойчивым?",

  summaryComponent: {
    route: "Summary",
    component: SummaryScreen,
  },

  quiz: {
    component: Quiz,
  },

  drawing: {
    component: null,
  },

  memory: {
    component: AdventureOne,
  },
  puzzle: {
    component: Puzzle,
  },

  masteryComponent: {
    route: "Mastery",
    component: MasteryScreen,
  },

  info: {
    key: "lesson2",
  },

  minigames: [
    {
      title: "Сортировка",
      description: "Выберите соответствующую категорию.",
      key: "testkey1",
      image: AdventureImages.multiplechoice,
      content: [
        {
          imageBg: SortingImages.bg[0].lvl_2_les_2,
          categoryOne: "Животные продукты",
          categoryTwo: "Растительные продукты",
        },
        {
          first: "Молочные",
          firstAnswer: "Животные продукты",
          firstImage: SortingImages.lvl_2_les_2[0].firstImage,
          second: "Фрукты",
          secondAnswer: "Растительные продукты",
          secondImage: SortingImages.lvl_2_les_2[0].secondImage,
          third: "Мясо",
          thirdAnswer: "Животные продукты",
          thirdImage: SortingImages.lvl_2_les_2[0].thirdImage,
        },
      ],
    },
    {
      title: "Объем памяти",
      description: "Соотнесите слово с его определением.",
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.matching,
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
            image: TestImages.lvl_2_les_2_img_1,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_2_img_2,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_2_img_3,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_2_les_2_img_4,
          },
        ],
      },
      image: AdventureImages.puzzle,
    },
    {
      title: "Викторина", //Quiz
      description: "Скоро.. Следи за обновлениями!", //Reinforce your knowledge!
      key: "testkey3",
      data: "require('matchingPollution')",
      image: AdventureImages.crossword,
    },
  ],
};
