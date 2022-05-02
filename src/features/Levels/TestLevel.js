import React from 'react';
import {View, Text} from 'react';
import { questionSet } from "./../../components/LevelOne/QuestionSet";
import { questionSetPollution } from "./../../components/LevelOne/QuestionSetPollution";
import { AdventureImages } from './IMAGES';

import SummaryScreen from "./levelOne/lessonOne/Screens/Summary/summary";
import { SummaryScreenAirPollution } from "./levelOne/lessonTwo/Screens/Summary/summary";

export const LevelOneTest = {
  title: "Sustainbility",
  summary:
    "Avoidance of depletion of natural resources in order to maintain an ecological",

  summaryComponent: {
    route: "SustainabilitySummary",
    component: SummaryScreen,
  },

    minigames: [
        {
            title: "Matching",
            description: "Match the pairs together",
            key: "testkey3",
            data: "require('matchingPollution')",
            image: AdventureImages.matching,

        },
        {
            title: "Multiple Choice",
            description: "Guess if you don't know",
            key: "testkey4",
            data: "require('mutliple choice pollution')",
            image: AdventureImages.multiplechoice,
        },
        {
            title: "Crossword",
            description: "A crossword game... duh?",
            key: "testkey1",
            data: questionSet,
            image: AdventureImages.crossword,
        },
        {
            title: "Puzzle",
            description: "Solve the puzzle",
            key: "testkey2",
            data: "require('puzzlePollutionQuestions')",
            image: AdventureImages.puzzle,
        },  
    ]
};

// We would have LevelTwoTest seperate from the LevelOneTest

export const LevelTwoTest = {
  title: "Air Pollution",
  summary:
    "the presence in or introduction into the air of a substance which has harmful or poisonous effects.",

  summaryComponent: {
    route: "Summary",
    component: SummaryScreenAirPollution,
  },

    minigames: [
        
        {
            title: "Puzzle",
            description: "Solve the puzzle",
            key: "testkey2",
            data: "require('puzzlePollutionQuestions')",
            image: AdventureImages.puzzle,
        },
        {
            title: "Matching",
            description: "Match the pairs together",
            key: "testkey3",
            data: "require('matchingPollution')",
            image: AdventureImages.matching,

        },
        {
            title: "Crossword",
            description: "A crossword game... duh?",
            key: "testkey1",
            data: questionSetPollution,
            image: AdventureImages.crossword,
        },
        {
            title: "Multiple Choice",
            description: "Guess if you don't know",
            key: "testkey4",
            data: "require('mutliple choice pollution')",
            image: AdventureImages.multiplechoice,
        }
    ],
};
