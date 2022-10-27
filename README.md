## Muy-Feliz

### Softwares

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
<li> git checkout som </li>
</ul>
For committing changes, <br>
<ul>
<li> git pull Muy-Feliz main </li>
<li> git add . </li>
<li> git commit -m "commit message" </li>
<li> git push -u Muy-Feliz som <br>
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

### Setting up personal Android phone (Optional)
If for some reason Android Studio does not work, you can run react native emulator on your personal android/ios phone for live emulation using the app [Expo Go](https://expo.dev/client).

### Setting up build and deployment (Optional)
This setup is done in my laptop using Expo CLI and EAS to build final APK file for testing in any android phone. You only need to worry about successfully running and testing your changes in Android Studio and merging the working code in this repository. I will take of creating the final App to be installed in our phones for demo. 

### References
https://reactnative.dev/docs/components-and-apis <br>
https://builderx.io/ <br>
https://docs.expo.dev/build/eas-json/ <br>
https://docs.expo.dev/build-reference/apk/ <br>
https://expo.dev/ <br>
https://www.waldo.com/blog/react-native-project-structure 