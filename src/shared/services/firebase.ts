import * as firebase from 'firebase';
import 'firebase/auth';
import { from } from 'rxjs';
import { Question } from 'auth/auth.bloc';
import { userBloc } from '../../user/user.bloc';

const firebaseConfig = {
    apiKey: "AIzaSyB6SF09sSL2gaE7mgn0QSykzupnJM0DIGw",
    authDomain: "jetcake-97cbb.firebaseapp.com",
    databaseURL: "https://jetcake-97cbb.firebaseio.com",
    projectId: "jetcake-97cbb",
    storageBucket: "jetcake-97cbb.appspot.com",
    messagingSenderId: "531769548258",
    appId: "1:531769548258:web:6f507d6808682688d8adbb"
};

class FirebaseService {
    private storageRef: firebase.storage.Reference;
    private auth: firebase.auth.Auth;
    private database: firebase.database.Database;

    constructor() {
        firebase.initializeApp(firebaseConfig);

        this.storageRef = firebase.storage().ref();
        this.auth = firebase.auth();
        this.database = firebase.database();

        this.init();
    }

    private init() {
        this.auth.onAuthStateChanged(user => {
            userBloc.updateUser(user);
        });
    }

    login(email: string, password: string) {
        return from(this.auth.signInWithEmailAndPassword(email, password));
    }

    signUp(email: string, password: string) {
        return from(this.auth.createUserWithEmailAndPassword(email, password));
    }

    uploadImage(imageFile: File, uid: string) {
        const imageName = uid + '.jpg';
        const imageRef = this.storageRef.child(imageName);

        return from(imageRef.put(imageFile));
    }

    setAdditionalData(uid: string, phoneNumber: string, questions: Question[]) {
        const userRef = this.database.ref('user/' + uid)
        const response = userRef.set({
            phoneNumber,
            questions
        });

        return from(response);
    }

    getImageDownloadUrl = (user: firebase.User) => {
        return from(this.storageRef.child(user.uid + '.jpg').getDownloadURL());
    };

    getUserData = (user: firebase.User) => {
        const userRef = this.database.ref('user/' + user.uid)
        return from(userRef.once('value'));
    };

    updateEmail(email: string) {
        return from(this.auth.currentUser.updateEmail(email));
    }

    logout = () => {
        this.auth.signOut();
    };
}

export const firebaseService = new FirebaseService();