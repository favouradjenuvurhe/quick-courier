rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Allow full access to all documents in the "shipments" collection
    match /shipments/{shipmentId} {
      allow read, write: if true;
    }

    // OPTIONAL: Allow subcollections under shipments like history, attachments
    match /shipments/{shipmentId}/{subCollection=**} {
      allow read, write: if true;
    }
  }
      }
