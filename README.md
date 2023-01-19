# Muy Feliz (Android Application)

## Problem Statement and Overview
Navigate to folder docs for a complete detailed implementation of this project.

## Setup Instructions

### Install the following tools

[Git](https://git-scm.com/downloads) <br>
[NodeJS](https://nodejs.org/en/)<br>
[VSCode](https://code.visualstudio.com/)<br>
[Android Studio](https://developer.android.com/studio)<br>

### Setting up Git and GitHub 
If you have never used git and github. <br>
https://kbroman.org/github_tutorial/pages/first_time.html
### Setting up repository for local development
Open any terminal/command line and type:
<ul>
<li> git clone https://github.com/mehroosali/Muy-Feliz.git </li>
<li> cd Muy-Feliz </li>
<li> npm i </li>
</ul>

### Setting up VS Code 
Install VS code extensions for React Native development. There are many options. Install as per your needs/preferences. <br>
Some common ones are https://blog.bitsrc.io/vs-code-extensions-you-should-use-as-a-react-developer-83fb1fc21d1e

### Setting up Android Studio
<ol>
<li> Open Android Studio. </li>
<li> More Actions -> Virtual Device Manager. </li>
<li> Create Device. </li>
<li> Select Pixel 4 (nothing else) and finish setup. </li>
<li> Run the android emulator using the play button under Actions. Wait for the phone to start. </li>
<li> Open any terminal/command line from the Muy-Feliz directory and type npm start. </li>
<li> After the react-native application starts press 'a' on the keyboard and the application should show on the emulator. </li>
</ol>

### Setting up personal Android phone 
If for some reason Android Studio does not work, you can run react native emulator on your personal android/ios phone for live emulation using the app [Expo Go](https://expo.dev/client).
 
### Files and Folder Structure
App.js - main entry file with global app navigation setup. <br>
pages - contains js files for each screen. <br>
components - contains reusable react native components.<br>
assets - contains image and fonts which  were used in the code.<br>
routes - drawer and stack navigation configuration files.<br>
redux - redux configuration files for state management.<br>
utils - helper dummy data.<br>
docs - project docs.<br>
