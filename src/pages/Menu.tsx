import { IonContent, IonHeader, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { homeOutline, newspaperOutline } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import List from './List';
import Settings from './Settings';

const Menu: React.FC = () => {
    const paths = [
        {name: 'Home', url: '/app/list', icon: homeOutline},
        {name: 'Settings', url: '/app/setting', icon: newspaperOutline},
    ];

    return (
        <IonPage>
            <IonMenu contentId='main'>
                <IonHeader>
                    <IonToolbar color={"secondary"}>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {paths.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="none">
                                {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}
                </IonContent>
            </IonMenu>
            <IonRouterOutlet id='main'>
                <Route exact path="/app/list" component={List} />
                <Route path="/app/setting" component={Settings} />
                <Route exact path="/app" component={Settings}>
                    <Redirect to="app/list" />
                </Route>
            </IonRouterOutlet>
        </IonPage>
    );
};

export default Menu;