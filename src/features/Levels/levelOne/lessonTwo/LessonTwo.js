import { AdventureImages, SortingImages } from "../../IMAGES";
import { questionSetPollution } from "../../../../components/LevelOne/QuestionSetPollution";

import MasteryScreen from "./Screens/Mastery/mastery";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";
import { TestImages } from "../../IMAGES";
import Quiz from "./Screens/Adventures/adventureFour/quiz.screen";

export const Lvl_1_LessonTwo = {
  title: "Устойчивость", //Sustainable Practices
  summary: "Почему важно защищать окружающую среду?", //Why is protecting the environment important?

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
    route: "Мастерство", //Mastery
    component: MasteryScreen,
  },

  info: {
    key: "lesson2",
  },

  minigames: [
    {
      title: "Сортировка", //Sorting
      description: "Выберите соответствующую категорию", //Choose the corresponding category.
      key: "testkey1",
      data: questionSetPollution,
      image: AdventureImages.multiplechoice,
      content: [
        {
          imageBg: SortingImages.bg[0].lvl_1_les_2,
          categoryOne: "Повторное использование",
          categoryTwo: "Переработка",
          categoryThree: "Сокращение",
        },
        {
          first: "Покупайте только то, что вам нужно",
          firstAnswer: "Сокращение",
          second: "Купить оптом",
          secondAnswer: "Сокращение",
          third: "Разделение стекла",
          thirdAnswer: "Переработка",
        },
      ],
    },
    {
      title: "Объем памяти", //Memory
      description: "Соотнесите слово с его определением", //Match the word to its definition
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
            image: TestImages.lvl_1_les_2_img_1,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_1_les_2_img_2,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_1_les_2_img_3,
          },
          {
            prompt: "Bro can u just work please",
            maxChar: 500,
            imageType: "svg",
            image: TestImages.lvl_1_les_2_img_4,
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
