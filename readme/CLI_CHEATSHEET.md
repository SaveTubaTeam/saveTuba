### Expo CLI (https://docs.expo.dev/more/expo-cli/) & EAS (https://github.com/expo/eas-cli?tab=readme-ov-file#commands)

`npx expo install <PACKAGE_NAME>` e.g. `npx expo install expo-image-picker` to install a package compatible with our current expo SDK version. PLEASE PREFER THIS INSTEAD OF `npm install <PACKAGE_NAME>`.

`npx expo install --check` to check for incorrect expo-dependent package versions

`npx expo start --dev-client` to start a dev build on an emulator

`npx expo-doctor` to run a diagnostic report on our app config before building

`eas build --profile {development | preview | production} --platform {android | ios}` to build to EAS

`eas credentials` to configure iOS or Android build credentials, also to get SHA1 key

`eas submit` to submit app binaries to iOS App Store or Google Play Store

### gcloud

See here for comprehensive cheatsheet: https://cloud.google.com/sdk/docs/cheatsheet

See also (instructions for importing and exporting data): https://firebase.google.com/docs/firestore/manage-data/export-import

### Git

`git status` to check your current git staging area

`git merge <BRANCH_NAME>` to merge the specified branch into your branch

`git remote -v` to see the remote location(s)

`git log --graph` to see a log of all previous commits

`git commit -am "COMMIT_MESSAGE"` a commit shortcut

`git fetch <UPSTREAM_LOCATION> <BRANCH_NAME>` e.g. `git fetch origin master` to fetch a remote branch (note that `fetch/merge` is preferred to `pull` when merge conflicts arise)

`git push <UPSTREAM_LOCATION> <BRANCH_NAME>` to push to remote

`git branch` lists all local branches

`git checkout -b <NEW_BRANCH_NAME>` to create a new branch

`git checkout <BRANCH_NAME>` to switch to the specified branch 

`git stash` to stash changes to your current working directory

`git stash pop` to get your stashed changes

`git reset --hard HEAD` to reset working directory to HEAD