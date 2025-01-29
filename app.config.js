export default {
  "expo": {
    "name": "Save Tuba",
    "primaryColor": "#C6DC3B",
    "description": "A sustainability learning experience for Almaty's youngest citizens.",
    "slug": "SaveTuba",
    "version": "1.0.2",
    "orientation": "portrait",
    "privacy": "public",
    "icon": "./assets/appIcon.png",
    "splash": {
      "image": "./assets/splashScreen.png",
      "resizeMode": "cover",
      "backgroundColor": "#ffffff"
    },
    "updates": {
      "url": "https://u.expo.dev/4bc56c03-41a0-49df-96e2-596bfa1d1aaf",
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.jameschang.SaveTuba",
      "googleServicesFile": process.env.GOOGLESERVICE_INFO_PLIST,
      "infoPlist": {
        "CFBundleAllowMixedLocalizations": true,
        "NSAppTransportSecurity": {
          "NSExceptionDomains": {
            'exp.direct': {
              "NSIncludesSubdomains": true,
              "NSExceptionAllowsInsecureHTTPLoads": true,
            },
          },
        },
      },
    },
    "android": {
      "softwareKeyboardLayoutMode": "pan",
      "adaptiveIcon": {
        "foregroundImage": "./assets/playstore-icon.png",
        "backgroundColor": "#FFFFFF"
      },
      "package": "com.jameschang.SaveTuba",
      "googleServicesFile": process.env.GOOGLE_SERVICES_JSON
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "4bc56c03-41a0-49df-96e2-596bfa1d1aaf"
      }
    },
    "plugins": [
      [
        "expo-dev-launcher",
        {
          "launchModeExperimental": "most-recent"
        }
      ],
      "expo-font"
    ],
    "runtimeVersion": {
      "policy": "appVersion"
    }
  }
}
