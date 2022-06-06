import { AdventureImages, SortingImages, QuizImages } from "../../IMAGES";

import MasteryScreen from "./Screens/Mastery/mastery";
import { AdventureOne } from "./Screens/Adventures/adventureOne/adventureOne.screen";
import { Puzzle } from "./Screens/Adventures/adventureThree/puzzle.component";

import { TestImages } from "../../IMAGES";

export const Lvl_1_LessonOne = {
  title: "Устойчивость", //Sustainability
  summary: "Что такое устойчивое развитие и почему это важно?", //What is sustainability and why is it important?

  puzzle: {
    component: Puzzle,
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
      key: "testkey0",
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
      key: "testkey1",
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
      title: "Викторина", // Quiz
      description: "Выберите правильный ответ.", // Choose the correct answer.
      key: "testkey3",
      image: AdventureImages.multiplechoice,
      content: [
        {
          imageBg: QuizImages.bg[0].lvl_1_les_1,
        },
        {
          prompt: "Устойчивый город — это:",
          first: "Город, использующий чистую энергию",
          second:
            "Город, который перерабатывает, повторно использует и сокращает",
          third: "Город, который уменьшает загрязнение, которое производят они",
          fourth: "Все вышеперечисленное",
          answer: 4,
        },
        {
          prompt:
            "Что из следующего является стратегией построения устойчивого будущего?",
          first: "Импорт дополнительных ресурсов",
          second: "Использование местных материалов",
          third: "Строительство большего количества атомных электростанций",
          fourth: "Создание большего количества отходов",
          answer: 2,
        },
        {
          prompt: "Каково официальное определение устойчивости?",
          first:
            "Понимание того, как удовлетворить потребности нынешнего поколения",
          second:
            "Понимание того, как удовлетворить потребности настоящего, не ставя под угрозу потребности будущих поколений, чтобы удовлетворить их собственные потребности",
          third:
            "Понимание того, как удовлетворить потребности будущих поколений",
          fourth: "Ничего из вышеперечисленного",
          answer: 2,
        },
      ],
    },
  ],
};
