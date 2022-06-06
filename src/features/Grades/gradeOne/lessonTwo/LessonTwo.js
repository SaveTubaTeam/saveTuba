import { AdventureImages, SortingImages, QuizImages } from "../../IMAGES";

import MasteryScreen from "./Screens/Mastery/mastery";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";
import { TestImages } from "../../IMAGES";

export const Lvl_1_LessonTwo = {
  title: "Устойчивость", //Sustainable Practices
  summary: "Почему важно защищать окружающую среду?", //Why is protecting the environment important?

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
      title: "Викторина", // Quiz
      description: "Выберите правильный ответ.", // Choose the correct answer.
      key: "testkey4",
      image: AdventureImages.multiplechoice,
      content: [
        {
          imageBg: QuizImages.bg[0].lvl_1_les_2,
        },
        {
          prompt: "Что такое устойчивость?",
          first: "Удовлетворение потребностей настоящего",
          second: "Удовлетворение потребностей будущего",
          third: "Имеет три столпа",
          fourth: "Все варианты правильные",
          answer: 4,
        },
        {
          prompt: "Что из следующего не является столпом устойчивого развития?",
          first: "Окружающая среда",
          second: "Зкономическое",
          third: "Образование",
          fourth: "Социальное",
          answer: 3,
        },
        {
          prompt: "Что НЕ является устойчивой практикой?",
          first: "Переработка",
          second: "Сокращение",
          third: "Пповторного использования",
          fourth: "Покупка",
          answer: 4,
        },
      ],
    },
  ],
};
