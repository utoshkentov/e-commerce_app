import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAm9qOKWC13PGH7JejG-kVHtrX4UFUYaFw",
    authDomain: "panda-db-9c050.firebaseapp.com",
    databaseURL: "https://panda-db-9c050.firebaseio.com",
    projectId: "panda-db-9c050",
    storageBucket: "panda-db-9c050.appspot.com",
    messagingSenderId: "949191635091",
    appId: "1:949191635091:web:1c9688747683fc2f9e9d66"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot);

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;







