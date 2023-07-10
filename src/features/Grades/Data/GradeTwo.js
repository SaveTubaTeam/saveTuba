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
        Grade 2 Chapter 1 Lesson 1 
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
                "Күнделікті пайдаланатын ғылыми ашулыңыздың суретін жасаңыз.",
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Мақсаты бар ашудың місалы қайсысы?",
                  answers: [
                    { text: "Жұлдыздарды көру үшін телескоп" },
                    { text: "Бөлмені ысыту үшін шам" },
                    { text: "Жолда жүру үшін ұшақ" },
                    { text: "Мата асыру үшін типография" },
                  ],
                  answer: "Жұлдыздарды көру үшін телескоп",
                },
                {
                  prompt: "Барлық бактериялар зиянды ма?",
                  answers: [{ text: "Шын" }, { text: "Қате" }],
                  answer: "Қате",
                },
                {
                  prompt:
                    "19-ші ғасырда адамдар үйлерін жарықтандыру үшін қандай ресурсты пайдаланды?",
                  answers: [
                    { text: "Газ" },
                    { text: "Су" },
                    { text: "Көмір" },
                    { text: "Барлығы жоғарыда" },
                  ],
                  answer: "Барлығы жоғарыда",
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
                    text: "Тәжірибе мен бақылау арасындағы айырмашылық не?",
                    placeholder: "Айырмашылық...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                  {
                    text: "Сұлбаны оқыңыз. Адамдың дөңгелекті қайда және қалай пайдаланатынын айтып беріңіз.",
                    placeholder: "Дөңгелектер пайдаланылады...",
                    image: require("../../../../assets/openresponse/wheelObjects.png"),
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
          thumbnail: require("../../../../assets/lesson-icons/read.png"),
          backgroundColor: "#004AAD",
          minigames: {
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Ең көп пайдаланатын ақпарат көзіңіздің бірінің суретін жасаңыз. Бұл кітап, электрондық құрылғы, не болмаса болады!",
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
                    text: "Сіз қоршаған орта туралы ақпаратты және білімді қайдан аласыз? Бұл электрондық көз, кітап, немесе адам болуы мүмкін ме? Бұл ақпараттың сенімділігін не қамтамасыз етеді?",
                    placeholder: "Мен ақпаратты аламын...",
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
                    "Ақпарат білімнен айырмашылығы қандай?",
                  answers: [
                    { text: "Ақпарат және білім бірдей" },
                    { text: "Білім - бұл өсіндіру және сәйкес ақпаратты алу" },
                    { text: "Ақпарат білімнен өзге тілде" },
                    { text: "Білім ақпаратқа қарағанда аз өрену және түсіну талап етеді" },
                  ],
                  answer: "Білім - бұл өсіндіру және сәйкес ақпаратты алу",
                },
                {
                  prompt:
                    "Келесідегілерден қайсылары ресурстар?",
                  answers: [
                    { text: "Интернет" },
                    { text: "Мұғалім" },
                    { text: "Кітап" },
                    { text: "Барлығы жоғарыда" },
                  ],
                  answer: "Барлығы жоғарыда",
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
        Grade 2 Chapter 1 Lesson 3 and 4
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
                    text: "Өзіңіздің аймағыңызда қоршаған ортаға әсер етуді азайтуға қалай көмек етесіздер деп ойлайсыз. Қалай тексересіздер ортаға әсер ететіндігіңізді? Ортаға әсер етуді тексеру үшін экспериментке гипотеза қойыңыз.",
                    placeholder: "Менің гипотезам...",
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
                  "prompt": "Гипотезаны тексеру үшін ең жақсы әдіс - не?",
                  "answers": [
                    {
                      "text": "Достарыңыздан ол дұрыс екенін сұрау"
                    },
                    {
                      "text": "Интернеттен іздеу"
                    },
                    {
                      "text": "Экспериментті жүргізу және нәтижелерді жазу"
                    },
                    {
                      "text": "Эксперименттің нәтижелерін болжамдасу"
                    }
                  ],
                  "answer": "Экспериментті жүргізу және нәтижелерді жазу"
                },
                {
                  "prompt": "Экспериментті жасау үшін бірінші не істеу керек?",
                  "answers": [
                    {
                      "text": "Қорытындыларға қараймыз"
                    },
                    {
                      "text": "Бақылау жасау"
                    },
                    {
                      "text": "Нәтижелерді жазу"
                    },
                    {
                      "text": "Барлық эксперименттік материалдарды жинау"
                    }
                  ],
                  "answer": "Бақылау жасау"
                },
                {
                  "prompt": "Гипотеза - бұл не?",
                  "answers": [
                    {
                      "text": "Табиғат немесе қоғамды түсіндіру үшін ғылыми ұсыныс"
                    },
                    {
                      "text": "Сіздің дұрыс екеніңізді түсіндіру үшін ғылыми түсіндірме"
                    },
                    {
                      "text": "Сіздің дұрыс емес екеніңізді түсіндіру үшін ғылыми түсіндірме"
                    },
                    {
                      "text": "Өркениеттік әрекеттер жасау керек екенін түсіндіру үшін ғылыми түсіндірме"
                    }
                  ],
                  "answer": "Табиғат немесе қоғамды түсіндіру үшін ғылыми ұсыныс"
                },
                {
                  "prompt": "Эксперимент не үшін жасайды?",
                  "answers": [
                    {
                      "text": "Сыртқа ойнау үшін"
                    },
                    {
                      "text": "Қоршаған ортағамызды жақсы түсіну үшін"
                    },
                    {
                      "text": "Гипотезаны қолдау үшін"
                    },
                    {
                      "text": "Іздеп жатқан жауабымызды табу үшін"
                    }
                  ],
                  "answer": "Қоршаған ортағамызды жақсы түсіну үшін"
                },
                {
                  "prompt": "Эксперименттік зерттеулердің соңғы қадамы не?",
                  "answers": [
                    { "text": "Гипотезаны жасау" },
                    { "text": "Сұраулар қою" },
                    { "text": "Қорытындыларды шығару" },
                    { "text": "Нәтижелерді жазу" }
                  ],
                  "answer": "Қорытындыларды шығару"
                },
                {
                  "prompt": "Зерттеудің анықтамасы не?",
                  "answers": [
                    { "text": "Ғылыми білімнің жолында жасалған жаңа жетістік" },
                    { "text": "Объект, табиғи жағдай, ғылыми зерттеудің ақпараты." },
                    { "text": "Расталған ақпаратқа ие болу" },
                    { "text": "Жоғарыда аталғандардың ешқайсысы емес" }
                  ],
                  "answer": "Ғылыми білімнің жолында жасалған жаңа жетістік"
                },
                {
                  "prompt": "Шын мен жалған: өз аймағыңызда және әлемде болмасты практикадағы зерттеулер жасалып жатыр.",
                  "answers": [
                    { "text": "Шын" },
                    { "text": "Жалған" }
                  ],
                  "answer": "Шын"
                },
                {
                  "prompt": "Білімнің анықтамасы не?",
                  "answers": [
                    { "text": "Ғылыми білімнің жолында жасалған жаңа жетістік" },
                    { "text": "Объект, табиғи жағдай, ғылыми зерттеудің ақпараты" },
                    { "text": "Расталған ақпаратқа ие болу" },
                    { "text": "Жоғарыда аталғандардың ешқайсысы емес" }
                  ],
                  "answer": "Расталған ақпаратқа ие болу"
                }
              ],
            },
            reorder: { //correct
              navigation: "Reorder",
              icon: require("../../../../assets/reorder.png"),
              backgroundColor: "pink",
              prompt:
                "Экспериментті өткізу әріптемесі бойынша қадамдарды тәртіптеңіз.",
              data: [
                {
                  text: "Зерттеу мақсатын анықтаңыз",
                  dormant: "coral",
                  active: "#DB756B",
                },
                {
                  text: "Бақылауларды табыңыз",
                  dormant: "pink",
                  active: "#ffacbb",
                },
                {
                  text: "Қорытындыларды сызыңыз",
                  dormant: "dodgerblue",
                  active: "#3873E0",
                },
                {
                  text: "Гипотеза дайындаңыз",
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
                "Ашық жауап бөліміндегі гипотезаңызды негізінде, өзіңіздің аймақтағы қоршаған ортаны қысқартуға көмек ететін тапсырманы жасауда өздеріңіздің суретін жасаңыз!",
            },
            sorting: {
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Әрекетті дәл тәжірибенің қадамына сәйкестендіріңіз",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "Бақылау" },
                  { name: "Гипотеза" },
                  { name: "Нәтиже" },
                  { name: "Зерттеудің мақсаты" },
                ],
                options: [
                  {
                    title: "Елена бақылады, еңбек бағының өсімдіктері бірдей өсіп төрмейді",
                    name: "Бақылау",
                  },
                  {
                    title:
                      "Сергей көріп тұрған табиғи жай-жайылысқа қалай түсінік беру үшін әдіс шығарып келеді",
                    name: "Гипотеза",
                  },
                  {
                    title:
                      "Владимир тәжірибесінен үлгеріс келтірді, гүлдер түтіншік әсерінде жақсы өсіп төрмейді",
                    name: "Нәтиже",
                  },
                  {
                    title:
                      "Александр қоқыстың өсімдік өсуіне әсерін түсінгіз келеді",
                    name: "Зерттеудің мақсаты",
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
        Grade 2 Chapter 2 Lesson 1 (Lesson five on curriculum sheet)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~ 
        */
        {
          navigation: "Lesson1", //how do plant leaves work
          title: <Translation>{(t) => t("gradetwo:c2l1")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/leaf.png"),
          backgroundColor: "#008036",
          minigames: {
            sorting: { // Needs to be taken out and put in the next lesson
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Тәжірибенің дәл сәйкес қадамына әрекетті сәйкестіріңіз",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "Бақылау" },
                  { name: "Гипотеза" },
                  { name: "Қорытынды" },
                  { name: "Зерттеу мақсаты" },
                ],
                options: [
                  {
                    title: "Елена барлық өсімдіктерінің де емес екенін көреді.",
                    name: "Бақылау",
                  },
                  {
                    title:
                      "Сергей табиғи көрініске түсінік беру әдісін ойлап таба жатыр.",
                    name: "Гипотеза",
                  },
                  {
                    title:
                      "Владимир тәжірибесінен ғұлдыздар тұтқында жақсы өсе алмайтынын көреді.",
                    name: "Қорытынды",
                  },
                  {
                    title:
                      "Александр өсімдіктердің өсуіне қашықтың әсерін анықтауға қалайды.",
                    name: "Зерттеу мақсаты",
                  }
                ],
              },
            },
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
                    text: "Әр күн көрген 3 өсімдікті тізімдегіңіз. Сіз оларды өте жиі көретін себебі нені деп ойлайсыз? Олардың бақылау ортасына қажетті шарттар туралы ойлаңыз.",
                    placeholder: "Мен әр күн көрген өсімдіктер...",
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
                    "Гипотезаны аяқтаңыз: 'Егер өсімдік суды алмаса, онда...'",
                  answers: [
                    { text: "өсімдік өмір сүреді." },
                    { text: "өсімдік өмір сүрмейді." },
                    { text: "өсімдік өзінің суын өндіреді." },
                    { text: "өсімдік өте биік өседі." },
                  ],
                  answer: "өсімдік өмір сүрмейді.",
                },
                {
                  prompt: "Жапырақтар не істейді?",
                  answers: [
                    { text: "Кесенеге кислород шығарады" },
                    {
                      text: "Кіші тесіктер (стома) арқылы көмірқыштық ангидрит пен күн жарықты сорып алады",
                    },
                    { text: "Өсімдік үшін қантты құрады" },
                    { text: "Барлығы дұрыс" },
                  ],
                  answer: "Барлығы дұрыс",
                },
                {
                  prompt:
                    "Хлорофилл - бұл өсімдіктердің жасыл түсін беретін зат, сол жағдайда өсімдіктерге күн жарығын сорып, қант құруға көмекші болады.",
                  answers: [{ text: "Шынымен" }, { text: "Қате" }],
                  answer: "Шынымен",
                },
                {
                  prompt: "Келесі дайындама дұрыс:",
                  answers: [
                    {
                      text: "Ағаш жылына өмір сүруге жеткізетін кішкентаған семье үшін кислород шығарады.",
                    },
                    {
                      text: "Машинаны екі сағат жүргізу бір ағаштың екі жыл ишінде шығаратын кислородға тең.",
                    },
                    {
                      text: "Хлорофилл мұходжаларда және кейбір бактерияларда да табылады.",
                    },
                    { text: "Барлық дайындамалар дұрыс." },
                  ],
                  answer: "Барлық дайындамалар дұрыс.",
                },
                {
                  prompt:
                    "Ішкі өсімдіктер толық күн жарығында өсімдіктердей шама көп кислород өндіре алады.",
                  answers: [{ text: "Шынымен" }, { text: "Қате" }],
                  answer: "Шынымен",
                },
              ],
            },
            sorting: { //correct
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt: "Өсімдікті оның атына сәйкестіріңіз",
                num: 3,
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  {
                    name: "Өрмекшіл өсімдік",
                    image: require("../../../../assets/sorting/spider-plant.png"),
                  },
                  {
                    name: "Глоксиния",
                    image: require("../../../../assets/sorting/gloxinia.png"),
                  },
                  {
                    name: "Жылан өсімдік",
                    image: require("../../../../assets/sorting/snake-plant.png"),
                  },
                  {
                    name: "Жад өсімдік",
                    image: require("../../../../assets/sorting/jade.png"),
                  },
                ],
                options: [
                  {
                    title: "Өрмекшіл өсімдік",
                    name: "Өрмекшіл өсімдік",
                  },
                  {
                    title: "Глоксиния",
                    name: "Глоксиния",
                  },
                  {
                    title: "Жылан өсімдік",
                    name: "Жылан өсімдік",
                  },
                  { title: "Жад өсімдік", name: "Жад өсімдік" },
                ],
              },
            },
            snapshot_2: {
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Әр күн көрген үш өсімдікті тізімдегіңіз. Неге сіз оларды өте жиі көретін себебі нені ойлайсыз? Олардың бақылау ортасына қажетті шарттар туралы ойлаңыз.",

            },
            snapshot: { //correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
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
        Grade 2 Chapter 2 Lesson 2 (Lesson six and seven on curriculum sheet)
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
                prompt: "Заттарды олардың қоғамдарымен қағаздарға қою", //ideally change to match picutre to word
                num: 8, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_2, //what lesson
                categories: [{ name: "Табиғи" }, { name: "Жасанды" }],
                options: [
                  { title: "Орман", name: "Табиғи" },
                  { title: "Өріс", name: "Жасанды" },
                ],
              },
            },
            memory: { //correct
              navigation: "Memory",
              title: <Translation>{(t) => t("common:memory")}</Translation>, // Memory
              description:
                "Өсімдіктердің қызмет етуіне өздеріне ұнайтын элементтерге сәйкестендіру",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Гидрофиттер",
                  image: require("../../../../assets/memory/rain.png"),
                },
                {
                  name: "Гидрофиттер",
                },
                {
                  type: "image",
                  name: "Криофиттер",
                  image: require("../../../../assets/memory/snowflake.png"),
                },
                {
                  name: "Криофиттер",
                },
                {
                  type: "image",
                  name: "Термофилдер",
                  image: require("../../../../assets/memory/temperature.png"),
                },
                {
                  name: "Термофилдер",
                },
                {
                  type: "image",
                  name: "Гелиофиттер",
                  image: require("../../../../assets/memory/sunshine.png"),
                },
                {
                  name: "Гелиофиттер",
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
                      "Көптеген өсімдіктер өздерінің орташа жағдайына қызмет ету үшін қажет. Базен орташа жағдай жылдам өзгеріп, өсімдіктер қызмет етуге мүмкіндік бермейді." +
                      " Бізге көмек ететін, бірақ өсімдіктерге зиян келтіретін адамдар тарабынан жасалған қызмет етудің кейбір мәселелері - қандайлары болады? ",
                    placeholder: "Адамдар тарабынан жасалған қызмет ету...",
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
                      "Өсімдіктер өмір сүру үшін нені қажет ететіндігінің бірнеше нұсқаларын тізімделіңіз. Бұл сөйлемдер бізге қажет ететін заттармен бірдей ме? Бір ресурс көп болса не болады?",
                    placeholder: "Өсімдіктерге қажет...",
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
                  prompt: "Өсімдік пен жылдам жылуға қандай әсер етеді?",
                  answers: [
                    {
                      text: "Өсімдіктер жылдам өсіп, көп жасулары жылдам болады",
                    },
                    { text: "Жапырақтары олардың кәдімгі түсінде емес" },
                    { text: "Өсімдік көп су жоғалтады" },
                    { text: "Барлығы дұрыс" },
                  ],
                  answer: "Барлығы дұрыс",
                },
                {
                  prompt:
                    "Өсімдік жылдам күн жарығына ұшырағанда, хлорофилл өледі.",
                  answers: [{ text: "Дұрыс" }, { text: "Дұрыс емес" }],
                  answer: "Дұрыс",
                },
                {
                  prompt:
                    "Қай көрнектіктер өтірік жылдам жылу немесе соғу үшін қызмет етуін қамтамасыз етеді, олар өсіп, шығып бастаудан бұрын?" +
                    "қарапайым орта жағдайдағы ұзақтыққа бейімделеді?",
                  answers: [
                    { text: "Соған мен сабыз" },
                    { text: "Гүлдер мен дәрумендер" },
                    { text: "Ағаштар мен шырағайлар" },
                  ],
                  answer: "Соған мен сабыз",
                },
                {
                  prompt:
                    "Өсімдіктерге көп жарық болса, ол не ойлады?",
                  answers: [
                    { text: "Олар көп жасайды және көп жапырақ өседі" },
                    { text: "Жапырақтар күннен бет бұрады" },
                    { text: "Олар топырақтың астында қандай да бір жерге өршейді" },
                    {
                      text: "Жапырақтарында оларды қорғау үшін көп хлорофилл өндіреді",
                    },
                  ],
                  answer: "Жапырақтар күннен бет бұрады",
                },
                {
                  prompt:
                    "Өсімдіктер 0°C және одан төменгі температураларда өсу мүмкін",
                  answers: [{ text: "Дұрыс" }, { text: "Дұрыс емес" }],
                  answer: "Дұрыс",
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
        Grade 2 Chapter 2 Lesson 3 (lesson eight in curriculum)
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
                    text: "Қай қоғамдастық (табиғи немесе жасанды) қоршағанға көре жақсы? " +
                            "Бір немесе екіншісінің артықшылықтары бар ма? Өз аймағыңыздағы бірнеше қоғамдастықтарды тізімдегіңіз.",
                        placeholder: "Қоғамдастық...",
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
                prompt: "Заттарды өз қоғамдастықтарына сәйкестендіріңіз", //әдеттегідей, суретті сөзге сәйкестендіріңіз
                num: 8, //есептеу 0-дан басталады
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [{ name: "Табиғи" }, { name: "Жасанды" }],
                options: [
                    { title: "Орман", name: "Табиғи" },
                    { title: "Алаң", name: "Жасанды" },
                    { title: "Гүлдер бақшасы", name: "Жасанды" },
                    { title: "Қия", name: "Табиғи" },
                    { title: "Батпақ", name: "Жасанды" },
                    { title: "Шөл", name: "Табиғи" },
                    { title: "Сабыз бақшасы", name: "Жасанды" },
                    { title: "Көл", name: "Табиғи" },
                    { title: "Батақ", name: "Табиғи" },
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
                    // қулықты сөздер
                    prompt: "Табиғи қоғамдастық не?",
                    answers: [
                        {
                            text: "Өсімдіктер мен жануарлардың табиғи орташа жайлы топ",
                        },
                        {
                            text: "Өздерінің табиғи орташа жайында тұрмайтын өсімдіктер мен жануарлар тобы",
                        },
                        { text: "Тек өсімдіктерден тұратын топ, олардың табиғи орташа жайында" },
                        { text: "Тек жануарлардан тұратын топ, олардың табиғи орташа жайында" },
                    ],
                    answer: "Өсімдіктер мен жануарлардың табиғи орташа жайлы топ",
                },
                {
                    prompt: "Толықтық не дегені?",
                    answers: [
                        { text: "Тек өзге қасиеттері бар" },
                        { text: "Негізінен-ақ өзге қасиеттері бар" },
                        { text: "Бірдей немесе ұқсас қасиеттері бар" },
                        { text: "Бірдей немесе ұқсас қасиеттері бар" },
                    ],
                    answer: "Бірдей немесе ұқсас қасиеттері бар",
                },
                {
                    prompt: "Жасанды қоғамдастық не?",
                    answers: [
                        {
                            text: "Өсімдіктер мен жануарлардың табиғи орташа жайлы топ",
                        },
                        {
                            text: "Өздерінің табиғи орташа жайында тұрмайтын өсімдіктер мен жануарлар тобы",
                        },
                        { text: "Тек өсімдіктерден тұратын топ, олардың табиғи орташа жайында" },
                        { text: "Тек жануарлардан тұратын топ, олардың табиғи орташа жайында" },
                    ],
                    answer: "Өздерінің табиғи орташа жайында тұрмайтын өсімдіктер мен жануарлар тобы",
                },
                {
                    prompt: "Өсімдіктер мен жануарлар бір-бірісіз өмір сүре алады.",
                    answers: [{ text: "Шын" }, { text: "Жалған" }],
                    answer: "Жалған",
                },
                {
                    prompt: "Толықтық шарттары өмір сүру - бұл...",
                    answers: [
                        { text: "әр түрлі өсімдіктер бір аймақта тұра алмайды" },
                        { text: "әр түрлі өсімдіктер бір аймақта тұра алады" },
                        { text: "тек арнайы өсімдіктер бір аймақта тұра алады" },
                        { text: "Әшқандай өсімдік бір аймақта тұра алмайды" },
                    ],
                    answer: "әр түрлі өсімдіктер бір аймақта тұра алады",
                },
              ],
            },
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Жасыңыз қоғамдастықтың (табиғи немесе жасанды) фотосын түсіріңіз",
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
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card3")}</Translation>
                ),
                image: require("../../../../assets/mastery/garden.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l3_card4")}</Translation>
                ),
                image: require("../../../../assets/mastery/search-location.png"),
              },
            ],
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 4 (lesson nine in curriculum) 
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
                    // қулықты сөздер
                    prompt: "'Pathogenic' атауының мағынасы не?",
                    answers: [
                        { text: "Ауру тудыратын зат" },
                        { text: "Микроорганизм" },
                        { text: "Өсімдік түрі" },
                        { text: "Өте биік өсетін зат" },
                    ],
                    answer: "Ауру тудыратын зат",
                },
                {
                    prompt: "Кесілген орманды толық қалпына келтіру үшін 100 жыл кетуі мүмкін",
                    answers: [{ text: "Шын" }, { text: "Жалған" }],
                    answer: "Шын",
                },
                {
                    prompt: "Өсімдіктер ауаны қалай сақтайды?",
                    answers: [
                        { text: "Ауаны тозап алады" },
                        { text: "Ауаны түтіктен тазартады" },
                        { text: "Ауаны зиянды газдардан тазартады" },
                        { text: "Барлығы" },
                    ],
                    answer: "Барлығы",
                },
                {
                    prompt:
                        "Біз өсімдіктерді көбірек пайдаланып, қалпына келтіру әдістеріне қатысмасақ," +
                        " ауа сапасы төмендейді.",
                    answers: [{ text: "Шын" }, { text: "Жалған" }],
                    answer: "Шын",
                },
                {
                    prompt: "'Anthropogenic' атауының мағынасы не?",
                    answers: [
                        { text: "Адам әрекетінен туындатылған" },
                        { text: "Табиғат әрекетінен туындатылған" },
                        { text: "Ав және жолаушының қатынасы" },
                        { text: "Тұрақты болу идеясы" },
                    ],
                    answer: "Адам әрекетінен туындатылған",
                },
              ],
            },
            snapshot: { // дұрыс
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                  "Жалпы орындарда өзімізден кейіндергі тазалық өткізу - бұл ауа сапасын жақсартуға үлгерім жасайтын адамдар." +
                  "Сыртқы жағдайда жиі көрген заттарды сызыңыз.",
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
                          "Көрсетіңіз өзіңіздің қоршағаның ортасына қандай әсер ететініңізді." +
                          " Бұл әдістер тұрақты ма?",
                      placeholder: "Айырмашылығы ...",
                      image: require("../../../../assets/openresponse/innovation.png"),
                  },
              ],
              },
            },
            sorting: { // дұрыс
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                  prompt:
                      "Бұл әдістерді қоршағанға көмек ететін немесе зиян ететін деп саныңыз",
                  num: 4, //санау басталады 0
                  imageBg: SortingImages.bg[0].lvl_1_les_1,
                  categories: [{ name: "Көмек ететін" }, { name: "Зиян ететін" }],
                  options: [
                      { title: "Зибылды тастау", name: "Зиян ететін" },
                      { title: "Зибылды жинау", name: "Көмек ететін" },
                      { title: "Туған өсімдіктерді көтеру", name: "Көмек ететін" },
                      { title: "Химиялық пестицидтерді пайдалану", name: "Зиян ететін" },
                      { title: "Жергілікті ауыл шаруашылығын қолдау", name: "Көмек ететін" },
                  ],
              },
          }
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
        Grade 2 Chapter 2 Lesson 5 (lesson ten & eleven in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5", //red book of plants
          title: <Translation>{(t) => t("gradetwo:c2l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/red-book.png"),
          backgroundColor: "#44312B",
          minigames: {
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [
                {
                  //funny wording
                  prompt:
                    "Қазақстандағы бірінші Қызыл кітап 1978 жылы баспаға шықты",
                  answers: [{ text: "Дұрыс" }, { text: "Дұрыс емес" }],
                  answer: "Дұрыс",
                },
                {
                  prompt:
                    "Қай өсімдік деңгейлі теңіз деңгейінен 1000-2000 метр өсіп, табиғи резина қамтамасыз етеді?",
                  answers: [
                    { text: "Шарған" },
                    { text: "Дөңгелек құнарлай" },
                    { text: "Степінде қызғылт сабыр" },
                    { text: "Үрмес" },
                  ],
                  answer: "Шарған",
                },
                {
                  prompt:
                    "Қай өсімдік жоғары 15-50 см өсіп, жануар таңдай қылу үшін пайдаланылады?",
                  answers: [
                    { text: "Шарған" },
                    { text: "Дөңгелек құнарлай" },
                    { text: "Степінде қызғылт сабыр" },
                    { text: "Үрмес" },
                  ],
                  answer: "Степінде қызғылт сабыр",
                },
                {
                  prompt:
                    "Қай өсімдікте кішкене ақ гүлдер бар және ол жиі саздардан табылады?",
                  answers: [
                    { text: "Шарған" },
                    { text: "Дөңгелек құнарлай" },
                    { text: "Степінде қызғылт сабыр" },
                    { text: "Үрмес" },
                  ],
                  answer: "Дөңгелек құнарлай",
                },
                {
                  prompt:
                    "Қызыл кітап тек өсімдіктер туралы ақпаратты қамтамасыз етеді, аңдар туралы емес",
                  answers: [{ text: "Дұрыс" }, { text: "Дұрыс емес" }],
                  answer: "Дұрыс емес",
                },
              ],
            },
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                "Өсімдіктердің Қызыл кітабынан қырылған жануардың суретін түсіріңіз. " +
                "Егер оны таба алмасаңыз, онда оны онлайн режимінде суретке түсіріп, келесі рет оны көрсеңіз анықтауыңызға болады.",
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
                      "Қызыл кітаптағы өсімдіктер санын азайтуға қай жолдар болады?" +
                      " Жақсы дамуға ықпал ету әдеттері қандай түрде қырылған түрлер санын азайтуға көмек етеді?",
                    placeholder:
                      "Қырылған өсімдіктер санын азайту үшін біз ...",
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
                prompt: "Қызыл кітапта қай өсімдіктер бар, қайсысы жоқ?",
                num: 5, //count start 0
                imageBg: SortingImages.bg[0].lvl_1_les_1,
                categories: [
                  { name: "Қызыл кітапта" },
                  { name: "Қызыл кітапта жоқ" },
                ],
                options: [
                  { title: "Жұлдызша", name: "Қызыл кітапта жоқ" },
                  { title: "Степінде қызғылт сабыр", name: "Қызыл кітапта" },
                  { title: "Барыс қозырек", name: "Қызыл кітапта" },
                  { title: "Людвиг қозырек", name: "Қызыл кітапта жоқ" },
                  { title: "Тарда түлпигі", name: "Қызыл кітапта жоқ" },
                  { title: "Регель түлпигі", name: "Қызыл кітапта" },
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
        Grade 2 Chapter 2 Lesson 6 (lesson twelve in curriculum)
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
              description: "Ақпарат көздерін сәйкестендіріңіз.",
              icon: require("../../../../assets/willpower.png"),
              backgroundColor: "dodgerblue",
              content: [
                {
                  type: "image",
                  name: "Жәндік",
                  image: require("../../../../assets/memory/beetle.png"),
                },
                {
                  name: "Жәндік",
                },
                {
                  type: "image",
                  name: "Арахнидтер",
                  image: require("../../../../assets/memory/spider.png"),
                },
                {
                  name: "Арахнидтер",
                },
                {
                  type: "image",
                  name: "Күсті\nөрмекшілер",
                  image: require("../../../../assets/memory/crab.png"),
                },
                {
                  name: "Күсті\nөрмекшілер",
                },
                {
                  type: "image",
                  name: "Моллюск",
                  image: require("../../../../assets/memory/snail.png"),
                },
                {
                  name: "Моллюск",
                },
                {
                  type: "image",
                  name: "Ехинодерматалар",
                  image: require("../../../../assets/memory/starfish.png"),
                },
                {
                  name: "Ехинодерматалар",
                },
                {
                  type: "image",
                  name: "Сұйықтар",
                  image: require("../../../../assets/memory/fishbone.png"),
                },
                {
                  name: "Сұйықтар",
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
                  prompt: "Сұйықтар деңгейінің функциясы не?",
                  answers: [
                    { text: "Қажетті тұрақтылықты береді" },
                    { text: "Қозғалуға көмек етеді" },
                    { text: "Ішкі органдарды қорғайды" },
                    { text: "Барлығы бірге" },
                  ],
                  answer: "Барлығы бірге",
                },
                {
                  prompt: "Қай жануар сұйықсыз?",
                  answers: [
                    { text: "Мысық" },
                    { text: "Құрт" },
                    { text: "Тауышқа" },
                    { text: "Құс" },
                  ],
                  answer: "Құрт",
                },
                {
                  prompt: "Қай жануар сұйықты",
                  answers: [
                    { text: "Құрт" },
                    { text: "Жапалақ" },
                    { text: "Көбелек" },
                    { text: "Балық" },
                  ],
                  answer: "Балық",
                },
                {
                  prompt:
                    "Қай топ жануарлары 3 тініс пен 6 аяқты?",
                  answers: [
                    { text: "Күсті өрмекшілер" },
                    { text: "Жәндіктер" },
                    { text: "Ехинодерматалар" },
                    { text: "Арахнидтер" },
                  ],
                  answer: "Жәндіктер",
                },
                {
                  prompt:
                    "Қай топ жануарлары сиңді, қалмақай, бауырсақ, және шабыз түрлерінен тұрады?",
                  answers: [
                    { text: "Күсті өрмекшілер" },
                    { text: "Жәндіктер" },
                    { text: "Ехинодерматалар" },
                    { text: "Моллюск" },
                  ],
                  answer: "Моллюск",
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
                      "Сұйықты жануарлардың бірнеше атауын жазыңыз. Енді сұйықсыз жануарлардың бірнеше атауын жазыңыз. Олар қандай жаттығысы бар? Олар қалай өзгеше?",
                    placeholder: "Жануар болып ...",
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
              prompt: "Сұйықтылы жануардың сұйықтар жүйесін суретке салыңыз!",
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
        Grade 2 Chapter 2 Lesson 7 (lesson thirteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7", //animal habitat
          title: <Translation>{(t) => t("gradetwo:c2l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/habitat.png"),
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
        },

        /* 

        ~~~~~~~~~~~~~~~~~~~~~~~~~
        LESSONS 15 should go somwwhere here

        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        Also temporarily skipping lessons 16 and 17

        */

        /* 

        ~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 3 chapter 1 Lesson 18 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        */

        


        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 8 (lesson fourteen in curriculum)
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
              prompt: "Табиғаттағы екі жануар арасындағы қатынастың суретін табыңыз немесе алыңыз, пайдалы немесе зиянды қатынас болуы мүмкін.",
            },

            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Осы жануарлар арасындағы қандай түрдегі қатынастық бар: түлкі мен тойқан?",
                  answers: [
                    { text: "Паразиттік" },
                    { text: "Нейтралды" },
                    { text: "Рекетеспе" },
                    { text: "Жиртқыш" },
                  ],
                  answer: "Жиртқыш",
                },
                {
                  prompt:
                    "Осы жануарлар арасындағы қандай түрдегі қатынастық бар: құрбаға мен антилопа?",
                  answers: [
                    { text: "Рекетеспе" },
                    { text: "Симбиоздық" },
                    { text: "Нейтралды" },
                    { text: "Жиртқыш" },
                  ],
                  answer: "Нейтралды",
                },
                {
                  prompt:
                    "Осы жануарлар арасындағы қандай түрдегі қатынастық бар: акула мен акулага тіріктеген балық?",
                  answers: [
                    { text: "Рекетеспе" },
                    { text: "Паразиттік" },
                    { text: "Нейтралды" },
                    { text: "Жиртқыш" },
                  ],
                  answer: "Паразиттік",
                },
                {
                  prompt:
                    "Осы жануарлар арасындағы қандай түрдегі қатынастық бар: кербауыл мен құстар?",
                  answers: [
                    { text: "Рекетеспе" },
                    { text: "Симбиоздық" },
                    { text: "Нейтралды" },
                    { text: "Жиртқыш" },
                  ],
                  answer: "Симбиоздық",
                },
              ],
            },
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
        Grade 2 Chapter 2 Lesson 9 (lesson fifteen in currciulum)
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
              prompt: "Оңай-оңай қолданыста болатын өсімдік орта ортасындағы бірнеше өсімдіктің суретін алыңыз.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Шын немесе жалған: Жануарлар арасындағы қатынастарға ұқсас өсімдіктер арасындағы қатынастар жоқ?",
                  answers: [
                    { text: "шын" },
                    { text: "жалған" },
                  ],
                  answer: "жалған",
                },
                {
                  prompt:
                    "Келесідегілерден қайсысы өсімдіктер мен жануарлар арасындағы қосымша / симбиоттық қатынастың місалы?",
                  answers: [
                    { text: "Жануарлар өсімдіктерді жейді" },
                    { text: "Тоқу" },
                    { text: "Жануарлар өсімдіктерді үй құру үшін пайдаланады" },
                    { text: "Адамдар өсімдіктерді жейді" },
                  ],
                  answer: "Тоқу",
                },
                {
                  prompt:
                    "Шын немесе жалған: Жануарларға ғана міндетті болатын жануарлар мен өсімдіктер арасында қатынастар бар?",
                  answers: [
                    { text: "шын" },
                    { text: "жалған" },
                  ],
                  answer: "шын",
                },
              ],
            },
            sorting: { // incorrect images
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Суреттерді пайдалана отырып, сөзді анықтамаға сәйкес келтіріңіз",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_8,
                categories: [
                  { name: "Commensalism" },
                  { name: "Симбиоз/взаимовыгодность" },
                  { name: "Жиртқыштық" },
                ],
                options: [
                  {
                    title: "Венера құшыққорлап тұрған құсыны айналдыратын өсімдік",
                    name: "Жиртқыштық",
                  },
                  {
                    title:
                      "Ары өсімдікті тоқайды",
                    name: "Симбиоз/взаимовыгодность",
                  },
                  {
                    title:
                      "Құстың ағашта үй құрғаны",
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
                    text: "Өсімдіктер мен жануарлар арасындағы қатынастар, себебі," +
                      "симбиоттық, комменсализм және рекетеспе өсімдіктердің қоғамдылығын және экосистемаларды қалай әсерлейді?",
                    placeholder: "Өсімдіктер мен жануарлар арасындағы қатынастар...",
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
        Grade 2 Chapter 2 Lesson 10 (lesson sixteen and seventeen in curriculum)
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
              prompt: "Жақсы жағдайлары болмаған жануар орташа сурет салыңыз. Суретті талдаңыз " +
                "және нашар жағдайлардың жануар өміріне қандай әсер ететінін анықтаңыз.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Келесідегілерден қайсысы қу болмау су орташа қалай әсер етеді?",
                  answers: [
                    { text: "Қу болмау су болмаған жануарларды өте тамақ істейді және сондықтан олардың суын көбірек ішеді." },
                    { text: "Қу болмау суды тұздырады." },
                    { text: "Қу болмау су айналымы арқылы су тігісін шыңғысатын, бұл жақсы су үшін жануарларды өлтіреді." },
                    { text: "Қу болмау балық популяциясын арттырады." },
                  ],
                  answer: "Қу болмау су айналымы арқылы су тігісін шыңғысатын, бұл жақсы су үшін жануарларды өлтіреді.",
                },
                {
                  prompt:
                    "Келесідегі оқиғалардың қайсысы орташа жануарлардың санын әсерлейді?",
                  answers: [
                    { text: "От" },
                    { text: "Қу болмау" },
                    { text: "Тоқырау" },
                    { text: "Барлығы" },
                  ],
                  answer: "Барлығы",
                },
                {
                  prompt:
                    "Шын немесе жалған: Инфекциондық аурулар жануар популяциясына әсер етпейді?",
                  answers: [
                    { text: "шын" },
                    { text: "жалған" },
                  ],
                  answer: "жалған",
                },
              ],
            },
            sorting: { // incorrect images
              navigation: "Sorting",
              icon: require("../../../../assets/recycle-bin.png"),
              backgroundColor: "coral",
              content: {
                prompt:
                  "Суреттерді пайдалана отырып сөзді анықтамаға сәйкестіңіз",
                num: 3, //count start 0
                imageBg: SortingImages.bg[0].lvl_2_les_9,
                categories: [
                  { name: "Эбола" },
                  { name: "Антракс" },
                ],
                options: [
                  {
                    title: "1990 жылдары шимпанзе популяциясын зор инфекциялық және өлтірген ауру.",
                    name: "Эбола",
                  },
                  {
                    title:
                      "600 жыл бұрын анықталған, әр түрлі жылғы жануарларды өлтіретін ауру.",
                    name: "Антракс",
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
                    text: "Орташа жағдайлар, себебі, тамақ, " +
                      "су және жиртқыштардан қорғаныс мүмкіндігі, экосистемадағы жануар популяциясының санын және түрлілігін қалай әсерлейді?",
                    placeholder: "Орташа жағдайлар жануар популяциясына әсер етеді...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 11 (lesson eighteen in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c2l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/fishing.png"),
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
                image: require("../../../../assets/mastery/water-pollution.png"),
              },
              {
                text: (
                  <Translation>{(t) => t("mastery:g2c2l11_card4")}</Translation>
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
          minigames: {
            snapshot: { // correct
              navigation: "Snapshot",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Өзіңіздің аймағыңыздағы осы 10 жыл ішінде болмаса деп ойлайтын жануардың суретін салыңыз.",
            },
            quiz: { //correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Шын немесе жалған: Орманшылық аймақтағы жануарлар санының көбейтін құралмайды?",
                  answers: [
                    { text: "Жалған" },
                    { text: "Шын" },
                  ],
                  answer: "Жалған",
                },
                {
                  prompt:
                    "Егер біреу орманда көп ағашты кескен болса, келесідегілерден қайсысы ең болмаса болады?",
                  answers: [
                    { text: "Көптеген жануарлардың орташа жерлері жоғалады." },
                    { text: "Көптеген жануарлардың тамақ деректері жоғалады" },
                    { text: "Аймақта тоқырау қаупінің артуына себеп болады" },
                    { text: "Барлығы" },
                  ],
                  answer: "Барлығы",
                },
                {
                  prompt:
                    "Келесідегі әрекеттер жұптары адамдардың тікелей жануар популяциясына қалай әсер етеді?",
                  answers: [
                    { text: "Зираттық отыртқыларды қолдану, орманшылық" },
                    { text: "Өнеркәсіптік шығарулардан зыряну, тобықтарды құру" },
                    { text: "Тобықтарды құру, орманшылық" },
                    { text: "Зираттық отыртқыларды қолдану, өнеркәсіптік шығарулардан зыряну" },
                  ],
                  answer: "Тобықтарды құру, орманшылық",
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
                    text: "Екосистемадағы жануарлар санының азайуына қандай себептер болуы мүмкін, " +
                      "және біз қандай мәселелерді шешу үшін даму мен биологиялық түрлілікті қорғау үшін зақонды қандай заңдарды орнатуымыз керек? Сіз қандай өтінішті үкіметке жасасыз?",
                    placeholder: "Мүмкіндік себептер...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },

          },

        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 12 (lesson nineteen in curriculum)
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
              prompt: "Адамдардың денесімен ұқсас функциялары бар жануардың суретін салыңыз. " +
                "Осы жануардың бір бөлігі біздің пайдалануымыздай функциясы бар.",
            },
            quiz: { // correct
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Шын немесе жалған: Адамдар теректеулідер?",
                  answers: [
                    { text: "Жалған" },
                    { text: "Шын" },
                  ],
                  answer: "Шын",
                },
                {
                  prompt:
                    "Келесідегі анықтамалардың қайсысы орган туралы ең жақсы сипаттама?",
                  answers: [
                    { text: "Адам денесінің бөлігі." },
                    { text: "Мақсаты көрсетілмеген организмдің бөлігі." },
                    { text: "Өзінің орнақ және мақсаты бар организмдің бөлігі." },
                    { text: "Бу теректеулінің жүрегі." },
                  ],
                  answer: "Өзінің орнақ және мақсаты бар организмдің бөлігі",
                },
                {
                  prompt:
                    "1970 жылдарда қай технологиялық жетістік адамдардың ішкі органын көруге жеңілдетті?",
                  answers: [
                    { text: "МРТ" },
                    { text: "Рентген" },
                    { text: "КТ" },
                    { text: "Барлығы жоқ" },
                  ],
                  answer: "МРТ",
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
                    text: "Адам денесінің үш негізгі бос қабаты қайлары? Бұл қабаттардың негізгі органдары қайлары?",
                    placeholder: "Үш негізгі бос қабат...",
                    image: require("../../../../assets/openresponse/innovation.png"),
                  },
                ],
              },
            },
          },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 13 (lesson 20 & 21 in curriculum)
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
            snapshot: { 
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt: "Адамдар тамағын есепке алмайтын, бірақ кейбір жануарлар тамағын есепке алуы мүмкін болатын заттың фотосын қойыңыз.",
            },
            quiz: { 
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [

                    {
                        prompt: "Шыу қай жерде басталады?",
                        answers: [
                            { text: "Қарын" },
                            { text: "Ауыз" },
                            { text: "Ішек" },
                            { text: "Жүрек" },
                        ],
                        answer: "Ауыз",
                    },
                    {
                        prompt: "Шыу адамдарға тамақтан (1)____ нутриенттерді алу және оны (2)____ қайта өңдеуге мүмкіндік береді",
                        answers: [
                            { text: "(1) сіңіру | (2) энергия" },
                            { text: "(1) қайтару | (2) тамақ" },
                            { text: "(1) өңдеу | (2) оқсиген" },
                            { text: "(1) сұрыптау | (2) көмірлік газ" },
                        ],
                        answer: "(1) сіңіру | (2) энергия",
                    },
                    {
                        prompt: "Келесіден қайсысы тамағын өткізу жолындағы дене бөліктерінің дұрыс реті?",
                        answers: [
                            { text: "Қарын, өсік, ауыз, ішек" },
                            { text: "Ауыз, өсік, қарын, ішек" },
                            { text: "Ауыз, қарын, өсік, ішек" },
                            { text: "Ауыз, ішек, қарын, өсік" },
                        ],
                        answer: "Ауыз, өсік, қарын, ішек",
                    },
                    {
                        prompt: "Келесіден қайсысы тамақ таңдау кезінде денсаулықты шешу үшін көмекші болатын суреттің атауы?",
                        answers: [
                            { text: "Таңдаулар үшбұрышы" },
                            { text: "Тамақ шешімдері пирамидасы" },
                            { text: "Тамақтандыру пирамидасы" },
                            { text: "Тамақтандыру деңгейлері" },
                        ],
                        answer: "Тамақтандыру пирамидасы",
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
                            text: "Тамақ жүйесіндегі болжамдылықты қарастыруда көптеген факторлар бар, мүлги өсіру, тасымалдау және тарату, және қаншалық уақыт ішінде түсініп алынатынына байланысты. Сіздерге қандай орында, қандай қоректің, және қандай тамақтандыру процесстерінің тамақ жүйесіне қандай әсері тигізетіні ойлайтыныңызды байандап жазыңыз.",
                        }
                      ],
                    },
                },
            },
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 14 (lesson 22 in curriculum)
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
              navigation: "Суретке түсір", 
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt: "Тыныс алуы қиын болатын ортаға сурет салыңыз. " +
                "Бұның себебін табып, талдаңыз (әрекет еткізу: ауа кірізуі, агрохимикалдық заттар және киімдік заттар, т.б.)",
            },
            quiz: { // correct
              navigation: "Tест",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              imageBg: require("../../../../assets/nat.jpg"),
              content: [

                {
                  prompt:
                    "Газ алмасу - бұл біздің тіс ауа болмасаған бүйір жатады, ол ортаға тамыз алады және көмірқышқыл шығарады.",
                  answers: [
                    { text: "Шын" },
                    { text: "Кате" },
                  ],
                  answer: "Шын",
                },
                {
                  prompt:
                    "Егер біз тыныс алған ауамыз таза болмаса, тоңазытқыштарды қоса отырып," +
                    "олардың денемізге кіріп қалуына тоқтатса, онда қай орган оны жинаған болады?",
                  answers: [
                    { "text": "Мұрын" },
                    { "text": "Бүйір" },
                    { "text": "Бронхтар" },
                    { "text": "Трахея" },
                  ],
                  answer: "Мұрын",
                },
                {
                  prompt:
                    "Трахеяның мақсаты не?",
                  answers: [
                    { "text": "Тек ауаны бүйірге тарту" },
                    { "text": "Жақсы ауаны жаманнан сүзу" },
                    { "text": "Көмірқышқыл шығару" },
                    { "text": "Ауаны бүйірге және бүйірден шығару" }
                  ],
                  answer: "Ауаны бүйірге және бүйірден шығару",
                },
                {
                  "prompt": "Келесідегілерден қайсысы тыныс алуға көмек ету үшін тыныспазылық жүйесінің бөліктерінің ретін ең жақсы сипаттайды?",
                  "answers": [
                    { "text": "Мұрын немесе ауыз, гортан, трахея, бронхтар, бүйір" },
                    { "text": "Ауыз, бүйір, бронхтар" },
                    { "text": "Мұрын, гортан, бүйір" },
                    { "text": "Жоғарыдағылардың ешқайсысы да емес" }
                  ],
                  "answer": "Мұрын немесе ауыз, гортан, трахея, бронхтар, бүйір"
                }
              ],
            },
            openresponse: { // correct
              navigation: "Сурет Бум",
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
        Grade 2 Chapter 2 Lesson 15 (lesson 23 in curriculum)
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
            snapshot: {
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt: "Өйіңіздегі жиі кездесетін денсаулықсыз тамақтың фотосын қойыңыз.",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
        
                    {
                        prompt: "Шынымен не қалыпты: Жүрек денедегі қан ағуына жауапты ма?",
                        answers: [
                            { text: "Шын" },
                            { text: "Қате" },
                        ],
                        answer: "Шын",
                    },
                    {
                        prompt: "Келесіден қайсысы денедегі қанның жауабы?",
                        answers: [
                            { text: "Денені жылыту." },
                            { text: "Органдар мен ткендерге оқсиген мен нутриенттерді тарату." },
                            { text: "Керексіз және зиянды заттарды босату органдарына тастау." },
                            { text: "Үстелгісі." },
                        ],
                        answer: "Үстелгісі.",
                    },
                    {
                        prompt: "Артериялар не істейді?",
                        answers: [
                            { text: "Шыуды өткізеді" },
                            { text: "Көмірқыш азотын тастайды" },
                            { text: "Қанны өткізеді" },
                            { text: "Үстелгісі жоқ" },
                        ],
                        answer: "Қанны өткізеді",
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
                            text: "Адам денсаулықты сақтау үшін не істеуі керек? Ол орта жағдайынан не істеуі керек денсаулықты сақтау үшін?",
                            image: require("../../../../assets/openresponse/innovation.png"),
                        },
                    ],
                },
            },
        }
        
        },
        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 2 Lesson 16 (lesson 24 & 25 in curriculum)
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
            snapshot: {
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt: "Жиі тазалануы керек заттың фотосын қойыңыз. Мысалы, біздің ұялы телефондарымыз қаншама кірі мен тазасыз екенін көп адам білмейді. Біздің тазаламағанымыз басқа дайын заттар қандайлар?",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
        
                    {
                        prompt: "Келесі жұптың қайсысы науқасқа иммундылықты қуаттауға ең жақсы жолдарын сипаттауда дәл?",
                        answers: [
                            { text: "Вакциналар, ауруларға ұшыру" },
                            { text: "Вакциналар, жеке гигиенаға қарай ауруларға ұшыру" },
                            { text: "Қолдарыңызды жуу, жуыну" },
                            { text: "Жеке гигиенаға қарай ауруларға ұшыру, табиғат" },
                        ],
                        answer: "Вакциналар, жеке гигиенаға қарай ауруларға ұшыру",
                    },
                    {
                        prompt: "Шынымен не қалыпты: Табиғатта уақыт өткізу денсаулықты сақтау үшін пайдалы емес пе?",
                        answers: [
                            { text: "Шын" },
                            { text: "Қате" },
                        ],
                        answer: "Қате",
                    },
                    {
                        prompt: "Келесіден қайсысы иммундылықтың ең жақсы анықтамасы?",
                        answers: [
                            { text: "Бірқатар ауруларға ұшырылу қауіптілігінің кезеңі." },
                            { text: "Ауру немесе науқастыққа қарсы қорғаныш сипаты." },
                            { text: "Еш уақыт науқас болмаған адамдардың аты." },
                            { text: "Дәріге қарсы қорғаныш сипаты. " },
                        ],
                        answer: "Ауру немесе науқастыққа қарсы қорғаныш сипаты.",
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
                            text: "Қандай түрде біз адам денесін қабылдаулардан қорғау үшін қорғанысты әрекет етуге болады? " +
                              "Қандай тазалық құралдарын ең көп пайдалану көріп тұрасыз? Бұл құралдар өкілдік тұрғысыз ба? Неден? ",
                            placeholder: "Өкілдік түрде тамақ өндіру және тұтыну үшін қандай жолдар болады...",
                            image: require("../../../../assets/openresponse/innovation.png"),
                        },
                    ],
                },
            },
        }
        
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
            snapshot: {
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt: "Бір заттың материялының бір күйден басқа күйге өтудегі фотосын алыңыз.",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                image: "../../../../assets/nat.jpg",
                content: [
                    {
                        prompt: "Келесіден қайсысы материя күйі?",
                        answers: [
                            { text: "Бекіткіш" },
                            { text: "Сұйық" },
                            { text: "Газ" },
                            { text: "Барлығы бірге" },
                        ],
                        answer: "Барлығы бірге",
                    },
                    {
                        prompt: "Шынымен немесе қате: Бір жат берілген күйде болған кезде, оларды басқа күйге көшіру мүмкін емес.",
                        answers: [
                            { text: "Шын" },
                            { text: "Қате" },
                        ],
                        answer: "Қате",
                    },
                    {
                        prompt: "Егер бір зат жумсаса, ол қандай материялық күйден бастап, соңында қай күйге өтеді?",
                        answers: [
                            { text: "Бекіткіштен сұйық күйге" },
                            { text: "Сұйықтан газдық күйге" },
                            { text: "Бекіткіштен газдық күйге" },
                            { text: "Сұйықтан бекіткіш күйге" },
                        ],
                        answer: "Сұйықтан бекіткіш күйге",
                    },
                    {
                        prompt: "Ыстық күні, ит мамысына су қалдырылған. Күн аяғында барлық су жоқ болды. Енді зат қай күйде?",
                        answers: [
                            { text: "Газ" },
                            { text: "Бекіткіш" },
                            { text: "Сұйық" },
                            { text: "Барлығы жоқ" },
                        ],
                        answer: "Газ",
                    }
                ]
            },
            openresponse: {
                navigation: "Image Boom",
                title: (
                    <Translation>{(t) => t("common:openresponse")}</Translation>), // Ашық жауап
                icon: require("../../../../assets/image.png"),
                backgroundColor: "palevioletred",
                data: {
                    numberOfPrompts: 1,
                    prompts: [
                        {
                            text: "Егер біз бір заттың материялық күйін өзгертсек, біз өкілдікпе емес пе? Материялық күйдердің өзгеруі энергияға қажет емес пе? Егер іә, біздің ортағамызға зиян келтіретін материялық өзгерістер туралы ойлаңыз.",
                            placeholder: "Егер біз бір заттың материялық күйін өзгертсек ...",
                            image: require("../../../../assets/mastery/state-of-matter.png"),
                        },
                    ],
                },
            },
        }
        ,
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

        // not complete up until this point 

        /* 
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        Grade 2 Chapter 3 Lesson 2 (lesson 27 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson2",
          title: <Translation>{(t) => t("gradetwo:c3l2")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/air.png"),
          backgroundColor: "#C85004",
          minigames: {
            snapshot: {
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt:
                    "Ауа сапасы нашар ортады зерттеңіз. Осы орның фотосын алыңыз (Сіз интернеттегі суреттің фотосын алуыңызға болады). Фотода ауа сапасының нашар екенін көрсететін нысандарды анықтауыңызға бола ма?",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                image: "../../../../assets/nat.jpg",
                content: [
                    {
                        prompt: "Қай газ ауаның басты бөлігін (78%) құрады?",
                        answers: [
                            { text: "Азот" },
                            { text: "Оксиген" },
                            { text: "Углекислота" },
                            { text: "Аргон" },
                        ],
                        answer: "Азот",
                    },
                    {
                        prompt: "Шынымен немесе қате: Біз азотты текшісінде демалуға болмайды.",
                        answers: [
                            { text: "Шын" },
                            { text: "Қате" },
                        ],
                        answer: "Шын",
                    },
                    {
                        prompt: "Келесіден қай газдардың түсі және иісі жоқ?",
                        answers: [
                            { text: "Азот" },
                            { text: "Аргон" },
                            { text: "Оксиген" },
                            { text: "Барлығы бірге" },
                        ],
                        answer: "Барлығы бірге",
                    },
                    {
                        prompt: "Амазон орманы әлемдегі барлық ормандардың арасынан қандай затты ең көп жасайды?",
                        answers: [
                            { text: "Қағаз" },
                            { text: "Кірлік" },
                            { text: "Оксиген" },
                            { text: "Құстар" },
                        ],
                        answer: "Оксиген",
                    }
                ]
            },
            openresponse: {
                navigation: "Image Boom",
                title: (
                    <Translation>{(t) => t("common:openresponse")}</Translation>), // Ашық жауап
                icon: require("../../../../assets/image.png"),
                backgroundColor: "palevioletred",
                data: {
                    numberOfPrompts: 1,
                    prompts: [
                        {
                            text: "Мен ойлаймын, біз барлық адамдарымыз ауаға химиялық қоспалар, кірлетушілер, пестицидтер және т.б. саламыз, бұл ауа сапасына негізгі терістік әсер етеді. Алайда, біздің ауаға шығаратын барлық заттарымыз қате емес. Қай заттарды адамдар ауаға шығаруға болады, ол ауа сапасына оңтайлы әсер етеді?",
                            placeholder: "Адамдар ... шығаруға болады",
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
        Grade 2 Chapter 3 Lesson 3 (lesson 28 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson3",
          title: <Translation>{(t) => t("gradetwo:c3l3")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/candle.png"),
          backgroundColor: "#9DCD5A",
          minigames: {
            snapshot: {
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt:
                    "Ауаның бірнеше қасиеттерінің бірін көрсететін фотосын алыңыз. (Мысалы: көпіршікті ішімдік пузырыштары бар).",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                image: "../../../../assets/nat.jpg",
                content: [
                    {
                        prompt: "Шынымен немесе қате: Жану - бұл затты өрттеу процессі.",
                        answers: [
                            { text: "Шын" },
                            { text: "Қате" },
                        ],
                        answer: "Шын",
                    },
                    {
                        prompt: "Қай зат жануды қолдайды, ал углекислота қолдамайды?",
                        answers: [
                            { text: "Азот" },
                            { text: "Оксиген" },
                            { text: "Аргон" },
                            { text: "Ол өзі де углекислота" },
                        ],
                        answer: "Оксиген",
                    },
                    {
                        prompt: "Өте қиын демалу керек ____ көп, ал ____ аз болатын бөлмеде.",
                        answers: [
                            { text: "Углекислота; оксиген" },
                            { text: "Оксиген; углекислота" },
                            { text: "Екеуі дұрыс" },
                            { text: "Екеуі дұрыс емес" },
                        ],
                        answer: "Углекислота; оксиген",
                    },
                ]
            },
            openresponse: {
                navigation: "Image Boom",
                title: (
                    <Translation>{(t) => t("common:openresponse")}</Translation>), // Ашық жауап
                icon: require("../../../../assets/image.png"),
                backgroundColor: "palevioletred",
                data: {
                    numberOfPrompts: 1,
                    prompts: [
                        {
                            text: "Ауаның бірнеше қасиеттері не, және олар қандай жолмен ортаға оңтайлы әсер етеді? Бұл қасиеттер неге үй ішіндегі теңдікті сақтау үшін өте маңызды?",
                            placeholder: "Ауаның басым қасиеттері ...",
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
        Grade 2 Chapter 3 Lesson 4  // lesson 29
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson4",
          title: <Translation>{(t) => t("gradetwo:c3l4")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/duck.png"),
          backgroundColor: "#98DFEC",
          minigames: {
            snapshot: {
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt:
                    "Өйіңіздегі ең таза судың көзінің фотосын жасаңыз.",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                image: "../../../../assets/nat.jpg",
                content: [
                    {
                        prompt: "Келесідегілердің қайсысының су мазмұны ең жоғары?",
                        answers: [
                            { text: "Балақай" },
                            { text: "Қырыққабат" },
                            { text: "Лимон" },
                            { text: "Картошка" },
                        ],
                        answer: "Лимон",
                    },
                    {
                        prompt: "Шынымен немесе қате: Картоптаның ішінде алмалардан артық су бар.",
                        answers: [
                            { text: "Шын" },
                            { text: "Қате" },
                        ],
                        answer: "Қате",
                    },
                    {
                        prompt: "Шынымен немесе қате: Жеміс-жидек қатаң болса да, оларда өте көп су бар.",
                        answers: [
                            { text: "Шын" },
                            { text: "Қате" },
                        ],
                        answer: "Шын",
                    },
                ]
            },
            openresponse: {
                navigation: "Image Boom",
                title: (
                    <Translation>{(t) => t("common:openresponse")}</Translation>), // Ашық жауап
                icon: require("../../../../assets/image.png"),
                backgroundColor: "palevioletred",
                data: {
                    numberOfPrompts: 1,
                    prompts: [
                        {
                            text: "Сіздер дүниедегі барлық адамдар су көзіне ие болатынына сенесіз бе? Егер мүмкін болса, бұл барлық адамның бірдей су көзіне ие болатынына кепіл болады. Бірнеше түрлі су көздерін ойлауға болады ма?",
                            placeholder: "Су көздері ...",
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
        Grade 2 Chapter 3 Lesson 5 // lesson 30 & 31
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson5",
          title: <Translation>{(t) => t("gradetwo:c3l5")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-source.png"),
          backgroundColor: "#37B5FF",
          minigames: {
            snapshot: { 
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt:
                    "Өйіңізге жақындағы ең табиғи су көзінің фотосын жасаңыз. Егер сіз оны байқа алмасаңыз, онлайнда оның фотосын алыңыз. Суретке қараңыз және табиғи су көзін табиғисізден қалай айырмашылыққа ие екенін түсініп көріңіз.",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                image: "../../../../assets/nat.jpg",
                content: [
                    {
                        prompt: "Шынымен немесе қате: Жердегі судың басымы таты су.",
                        answers: [
                            { text: "Шын" },
                            { text: "Қате" },
                        ],
                        answer: "Қате",
                    },
                    {
                        prompt: "Mariana шығанағы қай теңізде орналасқан?",
                        answers: [
                            { text: "Тынық" },
                            { text: "Атлантика" },
                            { text: "Үнді" },
                            { text: "Арктика" },
                        ],
                        answer: "Тынық",
                    },
                    {
                        prompt: "Қазақстандағы ең үлкен өзен қайсысы?",
                        answers: [
                            { text: "Ертіс" },
                            { text: "Жасыл" },
                            { text: "Жем" },
                            { text: "Орал" },
                        ],
                        answer: "Ертіс",
                    },
                    {
                        prompt: "Қазақстандағы ең үлкен көл қайсысы?",
                        answers: [
                            { text: "Зайсан" },
                            { text: "Арал" },
                            { text: "Балқаш" },
                            { text: "Алақөл" },
                        ],
                        answer: "Балқаш",
                    },
                    {
                        prompt: "Қай таза және таза су көзі топырақтан және глинадан аса су шығуы себеп болады?",
                        answers: [
                            { text: "Көлдер" },
                            { text: "Жер астындағы су/жер асты" },
                            { text: "Жаңбыр" },
                            { text: "Теңіздер" },
                        ],
                        answer: "Жер астындағы су/жер асты",
                    },
                ]
            },
            openresponse: {
                navigation: "Image Boom",
                title: (
                    <Translation>{(t) => t("common:openresponse")}</Translation>), // Ашық жауап
                icon: require("../../../../assets/image.png"),
                backgroundColor: "palevioletred",
                data: {
                    numberOfPrompts: 1,
                    prompts: [
                        {
                            text: "Барлық қауымдарда табиғи су көзі жоқ. Алайда, табиғи су көзіне ие болатын қауымдар суның кірділіктігі, аса пайдалану және табылмалылық мәселелерін шешу қажет. Сіз осы мәселелерді қалай шешетініңізді ойлауға болады ма және сіздің қауымдаңызда бұл мәселелер болса, оларды қалай шешуге болады?",
                            placeholder: "Олар осы мәселелерді шешуге болады ...",
                            image: require("../../../../assets/mastery/state-of-matter.png"),
                        },
                    ],
                },
            },
            reorder: {
                navigation: "Reorder",
                icon: require("../../../../assets/reorder.png"),
                backgroundColor: "pink",
                prompt:
                    "Келесі теңіздерді ең үлкеннен ең кішіге дейін ретке қойыңыз.",
                data: [
                    {
                        text: "Тынық",
                        dormant: "coral",
                        active: "#DB756B",
                    },
                    {
                        text: "Атлантика",
                        dormant: "pink",
                        active: "#ffacbb",
                    },
                    {
                        text: "Үнді",
                        dormant: "dodgerblue",
                        active: "#3873E0",
                    },
                    {
                        text: "Арктика",
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
        Grade 2 Chapter 3 Lesson 6 //lesson 32
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson6",
          title: <Translation>{(t) => t("gradetwo:c3l6")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-bottle.png"),
          backgroundColor: "#F27B21",
          minigames: {
            snapshot: { 
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt:
                    "Өзіңіздің су санағының суретін жасаңыз, осы периодта қанша су пайдаландығыңызды көріңіз. Келесі айыңыздың сол уақытта өзіңіздің даярлықтарыңыз су пайдалануыңызды жақсартты ма екенін көру үшін тағы бір сурет жасаңыз.",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                image: "../../../../assets/nat.jpg",
                content: [
                    {
                        prompt: "Келесі үй қолданысты судың қайсысы үлкен көлемде су қажет етеді?",
                        answers: [
                            { text: "Кір жуу" },
                            { text: "Тамақ қабы" },
                            { text: "Баня алу" },
                            { text: "Туалет құю" },
                        ],
                        answer: "Баня алу",
                    },
                    {
                        prompt: "Шынымен немесе қате: Орташа бойынша, баня алу душ алуға қарағанда төрт есе көп су талап етеді.",
                        answers: [
                            { text: "Шын" },
                            { text: "Қате" },
                        ],
                        answer: "Шын",
                    },
                    {
                        prompt: "Келесі үйдегі су түрлерінің қайсысы су түрлерін азайтуға көмек етеді?",
                        answers: [
                            { text: "Душ алыңыз, баня алмаңыз" },
                            { text: "Пісіру үшін толық жұмыс істегенше күтіңіз" },
                            { text: "Тіс жуға қазір сусыны өшіріңіз" },
                            { text: "Барлығы бірдей" },
                        ],
                        answer: "Барлығы бірдей",
                    },
                    {
                        prompt: "Келесі үйдегі су түрлерінің қайсысы су түрлерін азайтуға көмек етпейді?",
                        answers: [
                            { text: "Қысқа душ алыңыз" },
                            { text: "Төлегендердегі және туалеттердегі су сızықтарын жататынша күтіңіз" },
                            { text: "Өсімдіктерді күннің салқын бөлігінде су қойыңыз" },
                            { text: "Тек толық жұмыс істеген кезде жуыңыз" },
                        ],
                        answer: "Төлегендердегі және туалеттердегі су сızықтарын жататынша күтіңіз",
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
                            text: "Өзіңіздің жергілікті үкімет өзіңіздің суыңызды қайта жаттығу, мысалы, аяққаба көп су пайдалануыңызға қандай көмек етеді?",
                            placeholder: "Жергілікті үкімет ...",
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
        Grade 2 Chapter 3 Lesson 7 //lessons 33 & 34
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson7",
          title: <Translation>{(t) => t("gradetwo:c3l7")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/water-filter.png"),
          backgroundColor: "#6C3F14",
          minigames: {
            snapshot: { 
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt:
                    "Өзіңіздің үйдегі су тазалау әдісінің суретін жасаңыз. Бұлды өзіңіз мастерлік шығарма орындағандан кейін жасай аласыз. Су тазалау әдісінің сәттілігін көрсету үшін судың бұрын және кейінгі суретін алыңыз.",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                image: "../../../../assets/nat.jpg",
                content: [
                    {
                        prompt: "Суды тазалау негізгі әдісі не?",
                        answers: [
                            { text: "Механикалық" },
                            { text: "Химиялық" },
                            { text: "Биологиялық" },
                            { text: "Барлығы бірдей" },
                        ],
                        answer: "Барлығы бірдей",
                    },
                    {
                        prompt: "Су тазалау заводында не болады?",
                        answers: [
                            { text: "Бұл жерде сүтегі су өңделеді." },
                            { text: "Бұл жерде таза су өңделеді." },
                            { text: "Бұл жерде мұхит суы өңделеді." },
                            { text: "Бұлардың ешқайсысы емес" },
                        ],
                        answer: "Бұл жерде сүтегі су өңделеді.",
                    },
                    {
                        prompt: "Суды тазалау әдісі біртұтас, құм, жапырақтарды сияқты заттарды алып тастайды ма?",
                        answers: [
                            { text: "Механикалық" },
                            { text: "Химиялық" },
                            { text: "Биологиялық" },
                            { text: "Методикалық" },
                        ],
                        answer: "Механикалық",
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
                            text: "Біз қалай су тізімдерін қорғау және қалпына келтіруге және олардың көптеген пайдаларын, мысалы, су тазалау, су тасу, түрлі түрдегі түрлер үшін орташақ сияқты, қорғау үшін және табиғаттан жасалған тазалау әдістерін, тізімдеу үшін жаттығу үшін кеңейту үшін қалай көмек көрсету үшін кеңейту үшін көмек көрсету үшін?",
                            placeholder: "Акватерриториялық экосистемаларды қорғау үшін, біз ...",
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
        Grade 2 Chapter 3 Lesson 8 //lesson 35
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson8",
          title: <Translation>{(t) => t("gradetwo:c3l8")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil.png"),
          backgroundColor: "#E39650",
          minigames: {
            snapshot: { 
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt:
                    "Биіктікке бай қызықаран топырақтың суретін жасаңыз. Топырақты талдаңыз және оның өзге топырақтардан биіктікке бай болуының себебін анықтаңыз.",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                image: "../../../../assets/nat.jpg",
                content: [
                    {
                        prompt: "Топырақтың мақсаты не?",
                        answers: [
                            { text: "Өсімдік тамыры және сұйықты қолдау және тамақ беру үшін" },
                            { text: "Көптеген жануарларға үй ұсыну үшін" },
                            { text: "Бірінші екі жауап дұрыс" },
                            { text: "Ешқайсы жауап дұрыс емес" },
                        ],
                        answer: "Бірінші екі жауап дұрыс",
                    },
                    {
                        prompt: "Шыныменде немесе Жалған: Жердің үсті әр түрлі қалыңдықтағы топырақтың қабағымен өртелген.",
                        answers: [
                            { text: "Шыныменде" },
                            { text: "Жалған" },
                        ],
                        answer: "Шыныменде",
                    },
                    {
                        prompt: "Топырақ жасау процессін бастау үшін не болуы керек?",
                        answers: [
                            { text: "Тас түрлері, мысалы, тастар мен минералдар жойылады, сондықтан кіші минералды зарнашылар пайда болады." },
                            { text: "Топырақ аймаққа тасымалдау керек." },
                            { text: "Аймақта ұлы материалдар өздіктөпірік болуы керек." },
                            { text: "Барлығы бірдей." },
                        ],
                        answer: "Тас түрлері, мысалы, тастар мен минералдар жойылады, сондықтан кіші минералды зарнашылар пайда болады.",
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
                            text: "Топырақ климатты өзгерту жылдамдығын байқауға қандай әсер етеді?",
                            placeholder: "Топырақ ...",
                            image: require("../../../../assets/mastery/state-of-matter.png"),
                        },
                    ],
                },
            },
        },
        minigames: {
          snapshot: { 
              navigation: "Сұрау",
              icon: require("../../../../assets/camera.png"),
              backgroundColor: "#FFD972",
              backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
              prompt:
                  "Биіктікке бай қызықаран топырақтың суретін жасаңыз. Топырақты талдаңыз және оның өзге топырақтардан биіктікке бай болуының себебін анықтаңыз.",
          },
          quiz: {
              navigation: "QuizScreen",
              icon: require("../../../../assets/creativity.png"),
              backgroundColor: "mediumpurple",
              image: "../../../../assets/nat.jpg",
              content: [
                  {
                      prompt: "Топырақтың мақсаты не?",
                      answers: [
                          { text: "Өсімдік тамыры және сұйықты қолдау және тамақ беру үшін" },
                          { text: "Көптеген жануарларға үй ұсыну үшін" },
                          { text: "Бірінші екі жауап дұрыс" },
                          { text: "Ешқайсы жауап дұрыс емес" },
                      ],
                      answer: "Бірінші екі жауап дұрыс",
                  },
                  {
                      prompt: "Шыныменде немесе Жалған: Жердің үсті әр түрлі қалыңдықтағы топырақтың қабағымен өртелген.",
                      answers: [
                          { text: "Шыныменде" },
                          { text: "Жалған" },
                      ],
                      answer: "Шыныменде",
                  },
                  {
                      prompt: "Топырақ жасау процессін бастау үшін не болуы керек?",
                      answers: [
                          { text: "Тас түрлері, мысалы, тастар мен минералдар жойылады, сондықтан кіші минералды зарнашылар пайда болады." },
                          { text: "Топырақ аймаққа тасымалдау керек." },
                          { text: "Аймақта ұлы материалдар өздіктөпірік болуы керек." },
                          { text: "Барлығы бірдей." },
                      ],
                      answer: "Тас түрлері, мысалы, тастар мен минералдар жойылады, сондықтан кіші минералды зарнашылар пайда болады.",
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
                          text: "Топырақ климатты өзгерту жылдамдығын байқауға қандай әсер етеді?",
                          placeholder: "Топырақ ...",
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
        Grade 2 Chapter 3 Lesson 9 (Lesson 36 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson9",
          title: <Translation>{(t) => t("gradetwo:c3l9")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil-composition.png"),
          backgroundColor: "#9DCD5A",
          minigames: {
            snapshot: { 
                navigation: "Сұрау",
                icon: require("../../../../assets/camera.png"),
                backgroundColor: "#FFD972",
                backgroundimage: require("../../../../assets/snapshots/nature-bg.jpg"),
                prompt: "Қазіргі таңда күн сайын пайдаланатын ғылыми ашықтаманың суретін жасаңыз.",
            },
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
                    {
                        prompt: "Келесіден қандайсысы humus дегенді ең жақсы анықтау?",
                        answers: [
                            { text: "Өсімдіктер мен жануарлардың қалдықтарынан топырақтағы зат" },
                            { text: "Топырақтағы минералдар." },
                            { text: "Топырақ үстінде өсетін шөп." },
                            { text: "Топырақта көрінетін тастар" },
                        ],
                        answer: "Өсімдіктер мен жануарлардың қалдықтарынан топырақтағы зат.",
                    },
                    {
                        prompt: "Humus топырақтың жоғары қабаттарында төменгі қабаттарынан көбірек болады.",
                        answers: [
                            { text: "Шыныменде" },
                            { text: "Жалған" },
                        ],
                        answer: "Шыныменде",
                    },
                    {
                        prompt: "Тас және минерал зарнашылары топырақтың төменгі қабаттарында жоғары қабаттарынан көбірек болады.",
                        answers: [
                            { text: "Шыныменде" },
                            { text: "Жалған" },
                        ],
                        answer: "Шыныменде",
                    },
                    {
                        prompt: "Келесі шарттардың қайсысы тастардың сынуына, сондықтан да топырақтың пайда болуына себеп бола алады?",
                        answers: [
                            { text: "Жел және су" },
                            { text: "Күн жылуы" },
                            { text: "Тірі организмдер" },
                            { text: "Барлығы бірдей" },
                        ],
                        answer: "Барлығы бірдей",
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
        Grade 2 Chapter 3 Lesson 10 Lessons 37 and 38 on curriculum
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson10",
          title: <Translation>{(t) => t("gradetwo:c3l10")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil-types.png"),
          backgroundColor: "#F9A949",
          minigames: {
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
                    {
                        prompt: "Топыраққа ауа орналасуының маңызының ең жақсы түсіндірмесі не?",
                        answers: [
                            { text: "Олынбаса құрттар өледі" },
                            { text: "Бұл топырақтан ауаны өткізеді, ол өсімдіктердің тамырлары өлбейді деп қажет." },
                            { text: "Ол жаңбырды өткізеді." },
                            { text: "Жоғарыдағылардың ешқайсысы да емес." },
                        ],
                        answer: "Бұл топырақтан ауаны өткізеді, ол өсімдіктердің тамырлары өлбейді деп қажет.",
                    },
                    {
                        prompt: "Су орналасуының не дегенінің ең жақсы анықтамасы не?",
                        answers: [
                            { text: "Ол топырақ үшін қажетті судың түрін сипаттайды." },
                            { text: "Ол топырақтың құрт және жесектерге қолдау көрсету қабілеті." },
                            { text: "Ол топырақтың рН-ын түсіндіреді." },
                            { text: "Ол топырақтың суды жинау және тарату қабілеті." },
                        ],
                        answer: "Ол топырақтың суды жинау және тарату қабілеті.",
                    },
                    {
                        prompt: "Келесі процессілердің қайсысы топырақтың болушағын тікелей қауіптейді?",
                        answers: [
                            { text: "Жер тірейсі" },
                            { text: "Кірлету" },
                            { text: "Үлкейу" },
                            { text: "Бұхарлау" },
                        ],
                        answer: "Үлкейу",
                    },
                    {
                        prompt: "Адамдардың, жануарлардың және өсімдіктердің өмірі топырақтың болуына тәуелді. ",
                        answers: [
                            { text: "Шыныменде" },
                            { text: "Жалған" },
                        ],
                        answer: "Шыныменде",
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
        Grade 2 Chapter 3 Lesson 11 Lessons 39 and 40 on curriculum
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson11",
          title: <Translation>{(t) => t("gradetwo:c3l11")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/soil-properties.png"),
          backgroundColor: "#76B9F0",
          minigames: {
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
                    {
                        prompt: "Төмендегі қай тақырып топырақ жайлы шын?",
                        answers: [
                            { text: "Барлығы дұрыс" },
                            { text: "Қара топырақ гумус бойынша бай." },
                            { text: "Қызыл топырақ темір бойынша бай." },
                            { text: "Жарық топырақ минералдар мен гумус бойынша нашар." },
                        ],
                        answer: "Барлығы дұрыс.",
                    },
                    {
                        prompt: "Қыр топырағы жақсы суды жинайды және бірге құймастанбайды.",
                        answers: [
                            { text: "Шыныменде" },
                            { text: "Жалған" },
                        ],
                        answer: "Жалған",
                    },
                    {
                        prompt: "Келесіден қайсысы құм топырағының негізгі қасиеті?",
                        answers: [
                            { text: "Бұл өте ерекше." },
                            { text: "Оған су өте жақсы өтеді" },
                            { text: "Ол жылдам ысынады және жылдам соңықтайды" },
                            { text: "Барлығы" },
                        ],
                        answer: "Барлығы",
                    },
                    {
                        prompt: "Қай топырақ “ең жақсы” деп есептеледі, ол көп гумус ішінеді және қолыңызды қысықтаған кезде қара майлы белгі қалдырды?",
                        answers: [
                            { text: "Шертопырақ" },
                            { text: "Қыр" },
                            { text: "Гумус топырағы" },
                            { text: "Құм" },
                        ],
                        answer: "Шертопырақ",
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
        Grade 2 Chapter 3 Lesson 12 Lessons 41 and 42
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson12",
          title: <Translation>{(t) => t("gradetwo:c3l12")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/earth.png"),
          backgroundColor: "#49326B",
          minigames: {
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
                    {
                        prompt: "Жер шаршысындағы шарлар қандай?",
                        answers: [
                            { text: "Биошар және литошар" },
                            { text: "Гидрошар және атмосфера" },
                            { text: "Екеуі дұрыс" },
                            { text: "Ешқайсысы дұрыс емес" },
                        ],
                        answer: "Екеуі дұрыс.",
                    },
                    {
                        prompt: "Келесіден қайсысы жердің атмосферасының ең жақсы анықтамасы?",
                        answers: [
                            { text: "Тірі организмдердің тінеу үшін қажетті кислородды қамтыған газ шар. Бұл бірнеше қабаттан тұрады." },
                            { text: "Жерді қоршаған тұтас қабырға, өсімдіктер үшін қажетті газдарды сақтайды." },
                            { text: "Газдан жасалған шар, тек бір қабаттан тұрады, ол жерді астероидтерден қорғайды." },
                            { text: "Тек ауа жағдайын жасау үшін жауапты болатын тұтас шар." },
                        ],
                        answer: "Тірі организмдердің тінеу үшін қажетті кислородды қамтыған газ шар. Бұл бірнеше қабаттан тұрады.",
                    },
                    {
                        prompt: "Келесіден қайсысы құм топырағының негізгі қасиеті?",
                        answers: [
                            { text: "Бұл өте ерекше." },
                            { text: "Оған су өте жақсы өтеді" },
                            { text: "Ол жылдам ысынады және жылдам соңықтайды" },
                            { text: "Барлығы" },
                        ],
                        answer: "Барлығы",
                    },
                    {
                        prompt: "Литошар - бұл Жердің жоғарғы тұтас шары.",
                        answers: [
                            { text: "Шыныменде" },
                            { text: "Жалған" },
                        ],
                        answer: "Шыныменде",
                    },
                    {
                        prompt: "Жердің биошарында не тұр?",
                        answers: [
                            { text: "3 миллион түрлі өсімдіктер, жануарлар, саңырау және бактериялар." },
                            { text: "Жер ортасы." },
                            { text: "Тропосфера." },
                            { text: "Мұздың шапырауы." },
                        ],
                        answer: "Мұздың шапырауы",
                    },
                    {
                        prompt: "Литошар ешқашан жылжымады, және ешқашан жылжымайды.",
                        answers: [
                            { text: "Шыныменде" },
                            { text: "Жалған" },
                        ],
                        answer: "Жалған",
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
        Grade 2 Chapter 3 Lesson 13 (lessons 43 and 44 in curriculum)
        ~~~~~~~~~~~~~~~~~~~~~~~~~~
        */
        {
          navigation: "Lesson13",
          title: <Translation>{(t) => t("gradetwo:c3l13")}</Translation>,
          thumbnail: require("../../../../assets/lesson-icons/astronaut.png"),
          backgroundColor: "#02084B",
          minigames: {
            quiz: {
                navigation: "QuizScreen",
                icon: require("../../../../assets/creativity.png"),
                backgroundColor: "mediumpurple",
                imageBg: require("../../../../assets/nat.jpg"),
                content: [
                    {
                        prompt: "Әлеуметтік кеңістік қалай зерттеледі?",
                        answers: [
                            { text: "Автоматтандырылған космический аппараттар" },
                            { text: "Адамдарды тасымалдаушы космический ұшақтар" },
                            { text: "Екеуі дұрыс" },
                            { text: "Ешқайсысы дұрыс емес" },
                        ],
                        answer: "Екеуі дұрыс",
                    },
                    {
                        prompt: "Адамдардың бірінші баруы қашан болды?",
                        answers: [
                            { text: "1961" },
                            { text: "1990" },
                            { text: "1947" },
                            { text: "1968" },
                        ],
                        answer: "1961",
                    },
                    {
                        prompt: "Келесіден қайсысы космос өнеркәсіпті дамытудағы прогресс пен байланысты құрылды?",
                        answers: [
                            { text: "Күн жарықты батареялар" },
                            { text: "Су фильтрлері" },
                            { text: "Цифрлық камералар" },
                            { text: "Барлығы" },
                        ],
                        answer: "Барлығы",
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
        Grade 2 Chapter 3 Lesson 14 lessons 45 and 46 in curriculum
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
        Grade 2 Chapter 4 Lesson 1 (lesson fourty-seven and fourty-eight)
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
        Grade 2 Chapter 4 Lesson 2 
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
        Grade 2 Chapter 4 Lesson 3 
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
        Grade 2 Chapter 4 Lesson 4 
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
        Grade 2 Chapter 4 Lesson 5 
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
        Grade 2 Chapter 4 Lesson 6 
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
        Grade 2 Chapter 4 Lesson 7 
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
        Grade 2 Chapter 4 Lesson 8 
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
        Grade 2 Chapter 4 Lesson 9 
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
        Grade 2 Chapter 4 Lesson 10 
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
        Grade 2 Chapter 4 Lesson 11 
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
        Grade 2 Chapter 4 Lesson 12 
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

