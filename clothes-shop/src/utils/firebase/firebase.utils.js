import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
  
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN7Zidm3wTI-Kxw-2N5Dm0AvMiMi3xKnU",
  authDomain: "clothesshop-d59b5.firebaseapp.com",
  storageBucket: "clothesshop-d59b5.appspot.com",
  messagingSenderId: "1039616529411",
  appId: "1:1039616529411:web:2d39f90f6f75f810512a36",
  projectId: "clothesshop-d59b5",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

/*export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);
  console.log(collectionRef)
  objectsToAdd.forEach((object) => {
    console.log(object)
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });
  await batch.commit();
};*/

/*export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const { displayName } = additionalInformation.displayName;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};*/

export const postUser = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const response = await fetch(
    "https://clothesshop-d59b5-default-rtdb.firebaseio.com/users.json",
    { method: "GET" }
  );
  const data = await response.json();

  const { email } = userAuth;

  let displayName;

  if (userAuth.displayName === null) {
    displayName = additionalInformation.displayName;
  } else {
    displayName = userAuth.displayName;
  }

  const createdAt = new Date();
  const body = {
    email: email,
    displayName: displayName,
    createdAt: createdAt,
    ...additionalInformation,
  };

  let haveUserInDB = false;

  for (let i in data) {
    if (data[i].email === email) {
      haveUserInDB = true;
    }
  }

  if (!haveUserInDB) {
    try {
      const response = await fetch(
        "https://clothesshop-d59b5-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          headers: {},
          body: JSON.stringify(body),
        }
      );
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
};

export const postProducts = async (objects) =>{
  try {
    const response = await fetch(
      "https://clothesshop-d59b5-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        headers: {},
        body: JSON.stringify(objects),
      }
    );
  } catch (error) {
    console.log("error creating the user", error.message);
  }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => signOut(auth);
