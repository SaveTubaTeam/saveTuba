## [SaveTuba](https://savetuba.com/)

<div align="center">
  <a href="https://github.com/user-attachments/assets/7e4e0a23-0f91-4243-9f47-b6932478f484"></a>
</div>


Save Tuba is an educational platform for environmental sustainability education in Kazakhstan. For a more in-depth project description, please see [PROJECT_DESCRIPTION.md](./readme/PROJECT_DESCRIPTION.md).

This README is the central documentation point for the entire set of Save Tuba repositories. Below you will find everything you need to get started. Welcome aboard!

For reference, please see [CLI_CHEATSHEET.md] for a cheatsheet of important CLI commands.

## Table of Contents

* [Learning Resources & General Overview of Tech Stack](#learning-resources--general-overview-of-tech-stack)
* [Environment Setup & Getting Started](#environment-setup--getting-started)
* [Developer Access](#developer-access)
* [App Deployment](#app-deployment)
* [Repo Structure & Data Flow](#repo-structure--data-flow)
* [Other](#previous-software-team-leads)

## Learning Resources & General Overview of Tech Stack

The Save Tuba mobile app is written in a Javascript framework called React Native, allowing us to build to both iOS & Android with just Javascript! We also use Expo for native build support; Expo is a set of libraries and build tools that allows us to build React Native apps with ease. We use Redux and RTK Query for state management and data fetching. Firebase is our NoSQL database. These technologies are the [industry preferred solution](https://evanbacon.dev/blog/expo-2024?x) to developing on both iOS and Android without having to make two separate apps and build pipelines.

It is highly recommended that you follow the tutorials on official documentation sites as opposed to following YouTube tutorials. For this project you **need** to be comfortable reading documentation; blindly copy-pasting from YouTube will get you stuck in "tutorial hell".

- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev/tutorial/overview/)
- [Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
- Firebase (note that we work with the "Web namespaced API")
  - [Firebase Firestore](https://firebase.google.com/docs/firestore/quickstart)
  - [Firebase Authentication](https://firebase.google.com/docs/auth/web/start)
  - [Firebase Cloud Storage](https://firebase.google.com/docs/storage/web/start)

The *only* YouTube channel recommended by the team (for Expo/Firebase integration, EAS build, [EAS submit](https://www.youtube.com/watch?v=PdwYDatvJ2I), [Google Sign In](https://www.youtube.com/watch?v=HY3O_wrvDsI), etc.) is: https://www.youtube.com/@MissCoding

Other notable packages:
- [React Navigation](https://reactnavigation.org/docs/getting-started) - page router
- [React Native Google Sign In](https://react-native-google-signin.github.io/docs/original) - a native module for Google sign-in
- [i18next](https://react.i18next.com/) - Javascript internationalization framework. [See here for more](https://locize.com/blog/react-i18next/).

## Environment Setup & Getting Started

Assuming you already have [node](https://nodejs.org/en/download/package-manager) and [git](https://github.com/git-guides/install-git) installed, run the following in a new folder:

```
git clone https://github.com/SaveTubaTeam/saveTuba.git
npm install
```

Note that `npm install` installs all of the packages listed in our package.json within our local directory. Now we need to install a few CLI packages, the first being eas-cli. eas-cli allows us to use [Expo Application Services (EAS)](https://docs.expo.dev/eas/) for building and deploying our app.

```
npm install --global eas-cli
eas login
```

Above, the first command globally installs eas-cli. The second command will prompt you to login to EAS; use our team's [EAS login info](#developer-access) to do so. The `eas whoami` command should verify that you've signed in. 

Next, we install the gcloud CLI. Carefully follow the instructions [here](https://cloud.google.com/sdk/docs/install) to install. We will use gcloud for exporting and importing data from Firebase. The `gcloud --version` command should verify you've installed gcloud correctly once you've done so.

Now, in order to actually run our app, we need two things. One is a valid build of our app, and the other is an emulator to run our build. Let's install our emulators first:

**For both macOS & Windows**, follow the tutorial here to set up Android Studio: https://docs.expo.dev/workflow/android-studio-emulator/

**For macOS only**, follow the tutorial here to set up Xcode: https://docs.expo.dev/workflow/ios-simulator/. Note: it is recommended that you use Android Studio for development because Xcode sucks. Use Xcode for platform-specific testing. We will be using Android Studio for the rest of this setup guide.

And now for the build, **copy and paste the following link in your Android emulator's browser and install the .apk**: https://expo.dev/accounts/savetubateam/projects/SaveTuba/builds/47edb106-71c1-4229-aa16-659ba1d25dd5 (last updated 10/19/24, note that new builds are invalidated after 2 weeks)

In your terminal, run the following command to start the development build:

```
npx expo start --dev-client
```

*Note: if you followed Expo's beginner tutorial, you'll notice we **do not** use Expo Go, as React Native Google Sign In is a native module and does not work with Expo Go. So we are using Expo development builds.*

That's it. You're all set up! Try and change some simple things and see how the app updates (almost) instantly.

## Developer Access

After onboarding, you will be granted admin access to a number of resources including the team's shared Google Drive, Firebase (and Google Cloud console), and Jira/Confluence. If you do not have access for any reason, please contact our faculty advisor Sean Vassilaros. All other resources, including Expo developer login information, can be found in our shared Google Drive in this excel sheet: https://docs.google.com/spreadsheets/d/1arZ3kNvUUUYryvG9KBVtXL5exw28cFbEZe05KJmE9GI

Using the login info on the above spreadsheet, go to https://expo.dev and log in to see our team's dashboard. You'll be able to see all of our past and current dev builds.

Our Firebase security rules and Google Workspaces API key can be found in the following folder: https://drive.google.com/drive/u/1/folders/1u0ivD2nIwGcX-wS_4ex43hDb3Clj8hAC

## App Deployment

Before we dive into specifics, as a brief overview, the entire build to deployment pipeline for the mobile app looks something like this:

[commit to github] --> [create eas dev builds] --> [test in emulator] --> [create eas preview/prod builds] --> [test on phones] --> [deploy prod builds to iOS App Store and Google Play]

PLEASE SEE: [Debugging app crashes with Keith Kurak from the Expo team](https://www.youtube.com/watch?v=LvCci4Bwmpc)

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
- Arthur O'Dwyer's [C++ Blog](https://quuxplusone.github.io/blog/2023/11/20/roast-pig/)
- Theo Browne, ["Deploying on Fridays"](https://www.youtube.com/watch?v=nCK0ey0qqsk)
- Stripe's [dev blog](https://increment.com/)
- Ben Awad on ["Best Practices"](https://www.youtube.com/watch?v=gc8mDZwUlfo)
- Ben Orenstein, ["How to talk to developers"](https://www.youtube.com/watch?v=l9JXH7JPjR4)
- Rich Harris, ["Rethinking reactivity"](https://youtu.be/AdNJ3fydeao?si=QgQEFlq1wHa9G9OC)
- Saron Yitbarek, ["Transitions: the easiest way to improve your tech talk"](https://medium.com/@saronyitbarek/transitions-the-easiest-way-to-improve-your-tech-talk-ebe4d40a3257)
- Theo Browne, ["Rethinking the Technical Interview"](https://www.youtube.com/watch?v=H2OjewTu_fY)
