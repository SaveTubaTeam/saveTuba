// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push("cjs");

defaultConfig.transformer.getTransformOptions = async () => ({
    transform: {
        experimentalImportSupport: true,
        nonInlinedRequires: [
            "@react-native-async-storage/async-storage",
            'React',
            'react',
            'react-native',
        ],
    },
});

module.exports = defaultConfig;
