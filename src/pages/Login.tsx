import { IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Login: React.FC = () => {

    const doLogin = (event : any) => {
        event.preventDefault();
        console.log("doLogin");
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
               Test
            </IonContent>
            
        </IonPage>
    );
};

export default Login;