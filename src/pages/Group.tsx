import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';
import { useSelector } from 'react-redux';
const Group: React.FC = () => {
    const groups = useSelector((state: any) => state.groups.groups);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Groups</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {groups.map((group: any) => (
            <IonItem key={group.id}>
              <IonLabel>
                {group.name} - Members: {group.members.join(', ')}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Group;
