import { BehaviorSubject, forkJoin } from 'rxjs';
import { firebaseService } from 'shared/services/firebase';
import { history } from 'shared/history';

export interface Question {
    question: string;
    answer: string;
}

class AuthBloc {
    email = new BehaviorSubject('');
    password = new BehaviorSubject('');
    phone = new BehaviorSubject('');
    avatarImg = new BehaviorSubject<File>(null);
    questions = new BehaviorSubject<Question[]>([]);

    login(email: string, password: string) {
        firebaseService.login(email, password).subscribe(() => {
            setTimeout(() => {
                history.replace('/profile');
            }, 500);
        });
    }

    setCredentials(email: string, password: string, phone: string) {
        this.email.next(email);
        this.password.next(password);
        this.phone.next(phone);
    }

    setAvatarImage(imageFile: File) {
        this.avatarImg.next(imageFile);
    }

    setSecurityQuestions(questions: Question[]) {
        this.questions.next(questions);
    }

    signUp = () => {
        const email = this.email.value;
        const password = this.password.value;
        const phoneNumber = this.phone.value;
        const avatarImg = this.avatarImg.value;
        const questions = this.questions.value;

        firebaseService.signUp(email, password).subscribe(user => {
            const { uid } = user.user;

            forkJoin(
                firebaseService.uploadImage(avatarImg, uid),
                firebaseService.setAdditionalData(uid, phoneNumber, questions)
            )
            .subscribe(res => {
                setTimeout(() => {
                    history.replace('/profile');
                }, 500);
            });
        });
    }

    logOut = () => {
        firebaseService.logout();
    }
}

export const authBloc = new AuthBloc();