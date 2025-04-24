import Constants from 'expo-constants';

// Get environment from app.config.js extras
let currentEnv;
try {
    currentEnv = Constants.expoConfig?.extra?.currentEnvironment || 'development';
    console.log(`Firebase initializing for environment: ${currentEnv}`);
} catch (error) {
    console.log('Could not access Constants.expoConfig, defaulting to development');
    currentEnv = 'development';
}

// Dynamically select the appropriate Firebase configuration
let firebaseModule;
try {
    if (currentEnv === 'production') {
        console.log('Using production Firebase configuration (firebaseTest.js)');
        firebaseModule = require('./firebaseTest.js');
    } else {
        console.log('Using development Firebase configuration (firebase.js)');
        firebaseModule = require('./firebase.js');
    }

    console.log('Firebase configuration loaded successfully');
} catch (error) {
    console.error('Error initializing Firebase:', error);
    throw new Error('Failed to initialize Firebase configuration');
}

// Re-export all exports from the selected module
export const { db, auth, app, storage, googleProvider } = firebaseModule;

// Add a helper function to verify the database connection
export const verifyDatabaseConnection = async () => {
    try {
        const snapshot = await db.collection('verification').doc('test').get();
        console.log(`Database connection verified for ${currentEnv} environment`);
        return true;
    } catch (error) {
        console.error('Database connection test failed:', error);
        return false;
    }
};