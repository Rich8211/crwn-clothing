import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1Fe2QvJWzdsBlL0qscYVM49_LTjLNvoU",
    authDomain: "crwn-db-9450a.firebaseapp.com",
    databaseURL: "https://crwn-db-9450a.firebaseio.com",
    projectId: "crwn-db-9450a",
    storageBucket: "crwn-db-9450a.appspot.com",
    messagingSenderId: "1028368377165",
    appId: "1:1028368377165:web:2994f970f6a5759d808304",
    measurementId: "G-8G66Q7YGP5"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);