import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonItem } from '@ionic/react';

const UserProfile: React.FC = () => {
  const dummyUser = {
    name: 'Alice',
    email: 'alice@example.com',
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>Name</IonLabel>
          <IonInput value={dummyUser.name} readonly />
        </IonItem>
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput value={dummyUser.email} readonly />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
