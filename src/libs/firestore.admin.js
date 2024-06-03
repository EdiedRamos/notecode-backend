const admin = require("firebase-admin");

class FirebaseAdmin {
  constructor() {
    if (typeof FirebaseAdmin.instance === "object") {
      return this.firebaseAdmin.instance;
    }

    FirebaseAdmin.instance = this;

    this.firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIRESTORE_PROJECT_ID,
        clientEmail: process.env.FIRESTORE_CLIENT_EMAIL,
        privateKey: process.env.FIRESTORE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      }),
      databaseURL: process.env.FIRESTORE_DATABASE_URL,
    });

    return this;
  }

  getDb() {
    return this.firebaseAdmin.firestore();
  }
}

module.exports = new FirebaseAdmin();
