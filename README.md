## [SaveTuba](https://savetuba.com/)

Save Tuba is an educational platform for environmental sustainability education in Kazakhstan. For a more in-depth project description, please see [PROJECT_DESCRIPTION.md](./readme/PROJECT_DESCRIPTION.md).

This README is the central documentation point for the entire set of Save Tuba repositories. Below you will find everything you need to get started. Welcome aboard!

Note: for reference, please see [CLI_CHEATSHEET.md] for a cheatsheet of important CLI commands.

## Table of Contents

* [Learning Resources & General Overview of Tech Stack](#learning-resources--general-overview-of-tech-stack)
* [Environment Setup & Installation](#environment-setup--installation)
* [Developer Access](#developer-access)
* [App Deployment](#app-deployment)
* [Repo Structure & Data Flow](#repo-structure--data-flow)
* [Other](#previous-software-team-lead-contacts)

## Learning Resources & General Overview of Tech Stack

The Save Tuba mobile app is written in a Javascript framework called React Native, allowing us to build to both iOS & Android with just Javascript! We also use Expo for native build support; Expo is a set of libraries and build tools that allows us to build React Native apps with ease. We use Redux and RTK Query for state management and data fetching. Firebase is our NoSQL database. These technologies are the [industry preferred solution](https://evanbacon.dev/blog/expo-2024?x) to developing on both iOS and Android without having to make two separate apps and build pipelines.

It is highly recommended that you follow the tutorials on official documentation sites as opposed to following YouTube tutorials. For this project you **need** to be comfortable reading documentation; blindly copy-pasting from YouTube will get you stuck in "tutorial hell".

- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev/tutorial/overview/)
- [Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- Firebase (note that we work with the "Web namespaced API")
  - [Firestore](https://firebase.google.com/docs/firestore/quickstart)
  - [Auth](https://firebase.google.com/docs/auth/web/start)
  - [Cloud Storage](https://firebase.google.com/docs/storage/web/start)

The *only* YouTube channel recommended by the team (for Expo/Firebase integration, EAS build, [EAS submit](https://www.youtube.com/watch?v=PdwYDatvJ2I), [Google Sign In](https://www.youtube.com/watch?v=HY3O_wrvDsI), etc.): https://www.youtube.com/@MissCoding

Other notable packages:
[React Navigation](https://reactnavigation.org/docs/getting-started) - page router
[React Native Google Sign In](https://react-native-google-signin.github.io/docs/original) - a native module for Google sign-in
[i18next](https://react.i18next.com/) - Javascript internationalization framework. [See here for more](https://locize.com/blog/react-i18next/).

## Environment Setup & Installation

Assuming you already have node and git installed

## Developer Access

includes dev secrets

## App Deployment

Before we dive into specifics, as a brief overview, the entire build to deployment pipeline for the mobile app looks something like this:

[commit to github] --> [create eas dev builds] --> [test in emulator] --> [create eas preview/prod builds] --> [test on phones] --> [deploy prod builds to iOS App Store and Google Play]

PLEASE SEE: [Debugging app crashes with Keith Kurak from Expo](https://www.youtube.com/watch?v=LvCci4Bwmpc)

## Polyrepo Structure & Data Flow

Why? include reasoning behind the system

### Previous Software Team Leads

James Chang (team of '24)
Hayden Ossinger (team of '23)
Nadja Stojanovic (team of '22)

Malika Buribayeva (Head of External Relations, team of '23 to '24)
Malika is from Almaty and has several points of contact in the educational sphere. She is the bridge between us and our external partners. All questions regarding contacts overseas should be directed to her.

### Miscellaneous

Below you can find a collection of my favorite conference talks, tech videos, articles, and dev blogs. Enjoy!

- Josh Comeau's [CSS Blog](https://www.joshwcomeau.com/) ([this](https://www.joshwcomeau.com/css/interactive-guide-to-grid/) and [this](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/) are must reads!)
- Carson Gross, ["The Grug Brained Developer"](https://grugbrain.dev/)
- Rich Hickey, ["Hammock Driven Development"](https://www.youtube.com/watch?v=f84n5oFoZBc&t=856s)
- Michael Chan, ["Hot Garbage: Clean Code is Dead"](https://www.youtube.com/watch?v=-NP_upexPFg)
- [Arthur O'Dwyer's C++ Blog](https://quuxplusone.github.io/blog/2023/11/20/roast-pig/)
- Theo Browne, ["Deploying on Fridays"](https://www.youtube.com/watch?v=nCK0ey0qqsk)
- Stripe's [dev blog](https://increment.com/)
- Ben Awad on ["Best Practices"](https://www.youtube.com/watch?v=gc8mDZwUlfo)
- Ben Orenstein, ["How to talk to developers"](https://www.youtube.com/watch?v=l9JXH7JPjR4)
- Rich Harris, ["Rethinking reactivity"](https://youtu.be/AdNJ3fydeao?si=QgQEFlq1wHa9G9OC)
- Saron Yitbarek, ["Transitions: the easiest way to improve your tech talk"](https://medium.com/@saronyitbarek/transitions-the-easiest-way-to-improve-your-tech-talk-ebe4d40a3257)
- Theo Browne, ["Rethinking the Technical Interview"](https://www.youtube.com/watch?v=H2OjewTu_fY)