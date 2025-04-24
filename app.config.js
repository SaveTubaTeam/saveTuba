export default ({ config }) => {
  // Determine build environment
  const buildEnv = process.env.ENVIRONMENT || 'development';
  console.log(`Building for environment: ${buildEnv}`);

  // Configure environment-specific values
  const envConfig = {
    development: {
      name: "Save Tuba (development)",
      packageName: "com.jameschang.SaveTuba", // Original development package name
      googleServicesIOS: process.env.GOOGLESERVICE_INFO_PLIST, // Original dev iOS config
      googleServicesAndroid: process.env.GOOGLE_SERVICES_JSON, // Original dev Android config
    },
    production: {
      name: "Save Tuba",
      packageName: "edu.creativeInquiry.SaveTuba", // Production package name
      googleServicesIOS: process.env.GOOGLESERVICE_INFO_PLIST1, // Production iOS config
      googleServicesAndroid: process.env.GOOGLE_SERVICES_JSON1, // Production Android config
    }
  };

  // Use environment config or fall back to development
  const currentConfig = envConfig[buildEnv] || envConfig.development;
  console.log(`Using package name: ${currentConfig.packageName}`);

  return {
    "expo": {
      "name": currentConfig.name,
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
        "bundleIdentifier": currentConfig.packageName,
        "googleServicesFile": currentConfig.googleServicesIOS,
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
        "package": currentConfig.packageName,
        "googleServicesFile": currentConfig.googleServicesAndroid
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
      "extra": {
        "eas": {
          "projectId": "4bc56c03-41a0-49df-96e2-596bfa1d1aaf"
        },
        // Make environment available in the app
        "currentEnvironment": buildEnv
      },
      "plugins": [
        [
          "expo-dev-launcher",
          {
            "launchMode": "most-recent" // Fixed the deprecated property
          }
        ],
        "expo-font"
      ],
      "runtimeVersion": {
        "policy": "appVersion"
      }
    }
  };
};