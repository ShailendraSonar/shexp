import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

const Home: React.FC = () => {
  const dummyGroups = [
    { id: 1, name: 'Friends' },
    { id: 2, name: 'Family' },
  ];

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent>
        <IonList>
          {dummyGroups.map(group => (
            <IonItem key={group.id}>
              <IonLabel>{group.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
