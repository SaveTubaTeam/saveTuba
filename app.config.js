export default ({ config }) => {
  // Get the build environment from EAS
  const buildEnv = process.env.ENVIRONMENT || 'development';
  if (global._ENV_LOGGED_ !== buildEnv) {
    console.log(`Building for environment: ${buildEnv}`);
    global._ENV_LOGGED_ = buildEnv;
  }
  
  // Configure package/bundle IDs based on environment
  let packageSuffix;
  if (buildEnv === 'production') {
    packageSuffix = '';
  } else if (buildEnv === 'development') {
    packageSuffix = '.dev';
  } else {
    packageSuffix = `.${buildEnv}`;  // For preview and any other environments
  }
  
  const bundleId = `com.kientran.SaveTuba${packageSuffix}`;
  console.log(`Building with package name: ${bundleId}`);
  
  // Simplify Firebase configuration file selection
  const firebaseConfig = {
    development: {
      ios: process.env.GOOGLESERVICE_INFO_PLIST_DEV || process.env.GOOGLESERVICE_INFO_PLIST1,
      android: process.env.GOOGLE_SERVICES_JSON_DEV || process.env.GOOGLE_SERVICES_JSON1
    },
    preview: {
      ios: process.env.GOOGLESERVICE_INFO_PLIST_PREVIEW || process.env.GOOGLESERVICE_INFO_PLIST1,
      android: process.env.GOOGLE_SERVICES_JSON_PREVIEW || process.env.GOOGLE_SERVICES_JSON1
    },
    production: {
      ios: process.env.GOOGLESERVICE_INFO_PLIST1,
      android: process.env.GOOGLE_SERVICES_JSON1
    }
  };
  
  return {
    "expo": {
      "name": buildEnv === 'production' ? "Save Tuba" : `Save Tuba (${buildEnv})`,
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
        "bundleIdentifier": bundleId,
        "googleServicesFile": firebaseConfig[buildEnv].ios,
        "infoPlist": {
          "ITSAppUsesNonExemptEncryption": false,
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
        "package": bundleId,
        "googleServicesFile": firebaseConfig[buildEnv].android,
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
      "extra": {
        "eas": {
          "projectId": "4bc56c03-41a0-49df-96e2-596bfa1d1aaf"
        },
        "environment": buildEnv
      },
      "plugins": [
        [
          "expo-dev-launcher",
          {
            "launchMode": "most-recent" // Updated from launchModeExperimental which is deprecated
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