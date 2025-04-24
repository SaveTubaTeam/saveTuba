const admin = require("firebase-admin");

// Initialize Firebase Admin SDK for the source project
const sourceConfig = {
  credential: admin.credential.cert(require("./savetuba-5e519-firebase-adminsdk-40987-38b6a94eee.json")),
  storageBucket: "savetuba-5e519.appspot.com" // Source bucket
};

// Initialize Firebase Admin SDK for the destination project
const destinationConfig = {
  credential: admin.credential.cert(require("./savetuba-t-firebase-adminsdk-fbsvc-49da88c950.json")),
  storageBucket: "savetuba-t.firebasestorage.app" // Destination bucket
};

// Initialize the source and destination Firebase apps with unique names
const sourceApp = admin.initializeApp(sourceConfig, 'sourceApp');
const destinationApp = admin.initializeApp(destinationConfig, 'destinationApp');

// References for source and destination storage
const sourceStorage = sourceApp.storage().bucket();  // Source Bucket
const destinationStorage = destinationApp.storage().bucket();  // Destination Bucket

// Function to copy files from source to destination
async function copyFiles() {
  try {
    const [files] = await sourceStorage.getFiles(); // Get all files from source
    for (const file of files) {
      const filePath = file.name;
      console.log(`Copying: ${filePath}`);

      // Download file
      const [content] = await file.download();
      console.log(`Downloaded file: ${filePath}`);

      // Upload file to destination
      const destinationRef = destinationStorage.file(filePath);
      await destinationRef.save(content);
      console.log(`Uploaded file to destination: ${filePath}`);
    }
  } catch (error) {
    console.error("Error copying files: ", error);
  }
}

// Call the function to start copying
copyFiles();
