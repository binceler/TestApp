import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React, { useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons'
import FCC from '../assets/fcc.svg'
import Intro from '../component/Intro';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(false);

    const doLogin = (event : any) => {
        
        event.preventDefault();
        console.log("doLogin");
       // router.push('/home', 'root');
    }

    const finishIntro = async () => {
      console.log('FIN');
      setIntroSeen(true);  
    };

    return (
        <>
        { !introSeen ? (
                <Intro onFinish={finishIntro}/>
        ) : (
            <IonPage>
                <IonHeader>
                    <IonToolbar color={'success'}>
                        <IonTitle>Free Code Camp</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent scrollY={false}>
                    <div className='ion-text-center ion-padding'>
                        <img src={ FCC } alt='FCC Logo' width={'50%'}></img>
                    </div>
                <IonCard>
                        <IonCardContent>
                            <form onSubmit={doLogin}>
                                <IonInput fill='outline' labelPlacement='floating' label="Email" type="email" placeholder="email@domain.com"></IonInput>
                                <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password'></IonInput>
                                <IonButton className='ion-margin-top' type='submit' color={'tertiary'} expand='block'>
                                    Login
                                    <IonIcon icon={ logInOutline } slot="end"></IonIcon>
                                    </IonButton>
                                <IonButton className='ion-margin-top' routerLink='/register' type='button' expand='block'>
                                    Create Account
                                    <IonIcon icon={ personCircleOutline } slot="end"></IonIcon>
                                    </IonButton>
                            </form>
                        </IonCardContent>
                </IonCard>
                </IonContent>
                
            </IonPage>
        )}
        </>
    );
};

export default Login;