import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { logInOutline, personCircleOutline } from 'ionicons/icons'
import FCC from '../assets/fcc.svg'
import Intro from '../component/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';

const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(true);
    const [present, dismiss] = useIonLoading();

    useEffect( () => {
        const checkStorage = async () => {
            const seen = await Preferences.get({ key : INTRO_KEY });
            console.log("file Login.tsx", seen);
            setIntroSeen(seen.value === 'true');
        };
        checkStorage();
    }, [])

    const doLogin = async (event : any) => {
        
        event.preventDefault();
        await present('Logging in...');
        setTimeout(() => {
            dismiss();
            router.push('/app', 'root');
        }, 2000);
    
    }

    const finishIntro = async () => {
      console.log('FIN');
      setIntroSeen(true);
      Preferences.set({ key : INTRO_KEY, value : 'true'});  
    };

    const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({ key : INTRO_KEY });
    }

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
                <IonContent scrollY={false} className="ion-padding">
                    <IonGrid fixed>
                        <IonRow class='ion-justify-content-center'>
                            <IonCol size="12" sizeMd='8' sizeLg='6' sizeXl='4'>
                                <div className='ion-text-center ion-padding'>
                                    <img src={ FCC } alt='FCC Logo' width={'50%'}></img>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow class='ion-justify-content-center'>
                            <IonCol size="12" sizeMd='8' sizeLg='6' sizeXl='4'>
                                <IonCard>
                                    <IonCardContent>
                                        <form onSubmit={doLogin}>
                                            <IonInput mode='md' fill='outline' labelPlacement='floating' label="Email" type="email" placeholder="email@domain.com"></IonInput>
                                            <IonInput mode='md' className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password'></IonInput>
                                            <IonButton className='ion-margin-top' type='submit' color={'tertiary'} expand='block'>
                                                Login
                                                <IonIcon icon={ logInOutline } slot="end"></IonIcon>
                                            </IonButton>
                                            <IonButton className='ion-margin-top' routerLink='/register' type='button' expand='block'>
                                                Create Account
                                                <IonIcon icon={ personCircleOutline } slot="end"></IonIcon>
                                            </IonButton>

                                            <IonButton onClick={seeIntroAgain} fill='clear' size='small' color={'medium'} className='ion-margin-top' type='button' expand='block'>
                                                Watch Intro Again
                                                <IonIcon icon={ personCircleOutline } slot="end"></IonIcon>
                                            </IonButton>
                                        </form>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
                
            </IonPage>
        )}
        </>
    );
};

export default Login;