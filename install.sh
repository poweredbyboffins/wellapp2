mkdir android/app/src/main/assets/
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
react-native run-android
sudo adb -d install -r android/app/build/outputs/apk/app-debug.apk
