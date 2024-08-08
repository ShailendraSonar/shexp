import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

const Group: React.FC = () => {
  const dummyGroups = [
    { id: 1, name: 'Friends', members: ['Alice', 'Bob'] },
    { id: 2, name: 'Family', members: ['John', 'Jane'] },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Groups</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {dummyGroups.map(group => (
            <IonItem key={group.id}>
              <IonLabel>{group.name}</IonLabel>
              <p>Members: {group.members.join(', ')}</p>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Group;
