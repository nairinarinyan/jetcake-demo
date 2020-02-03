import { BehaviorSubject, forkJoin } from 'rxjs';
import { filter, map, switchMap, tap, catchError } from 'rxjs/operators';
import { User } from 'firebase';
import { firebaseService } from 'shared/services/firebase';
import { Question, authBloc } from 'auth/auth.bloc';

interface UserData {
    phoneNumber: string;
    questions: Question[];
}

export const securityQuestions = [
    'What is the first answer?',
    'What is the second answer?',
    'What is the third answer?'
];

class UserBloc {
    currentUser = new BehaviorSubject<User>(undefined);
    imageUrl = new BehaviorSubject<string>(null);
    userData = new BehaviorSubject<UserData>(null);

    constructor() {
        const userChanged = this.currentUser
            .pipe(
                tap(() => {
                    this.imageUrl.next(null);
                    this.userData.next(null);
                }),
                filter(user => !!user)
            );

        userChanged.pipe(
            switchMap(firebaseService.getImageDownloadUrl)
        ).subscribe(this.imageUrl)

        userChanged.pipe(
            switchMap(firebaseService.getUserData),
            map(snapshot => snapshot.val())
        ).subscribe(this.userData)
    }

    updateUser(user: User) {
        this.currentUser.next(user);
    }

    updateUserData = (email: string, phoneNumber: string, answers: string[]) => {
        const questions: Question[] = answers.map((answer, i): Question => ({
            question: securityQuestions[i], answer
        }))

        forkJoin(
            firebaseService.updateEmail(email),
            firebaseService.setAdditionalData(this.currentUser.value.uid, phoneNumber, questions)
        ).pipe(
            catchError(err => {
                authBloc.logOut();
                return err;
            })
        )
        .subscribe(() => {
              console.log('updated')
        });
    };
}

export const userBloc = new UserBloc();