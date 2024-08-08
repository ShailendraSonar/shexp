import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGroup } from '../redux/groupSlice';
import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonPage, IonSelect, IonSelectOption } from '@ionic/react';

const GroupForm: React.FC = () => {
  const dispatch = useDispatch();
  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState<string[]>([]);
  const [newMember, setNewMember] = useState('');

  const handleAddGroup = () => {
    if (groupName.trim() && members.length > 0) {
      dispatch(addGroup({ name: groupName, members }));
      setGroupName('');
      setMembers([]);
    }
  };

  const handleAddMember = () => {
    if (newMember.trim()) {
      setMembers([...members, newMember]);
      setNewMember('');
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonItem>
          <IonLabel>Group Name</IonLabel>
          <IonInput value={groupName} onIonChange={(e: any) => setGroupName(e.target.value)} />
        </IonItem>
        <IonItem>
          <IonLabel>New Member</IonLabel>
          <IonInput value={newMember} onIonChange={(e: any) => setNewMember(e.target.value)} />
          <IonButton onClick={handleAddMember}>Add Member</IonButton>
        </IonItem>
        <IonList>
          {members.map((member, index) => (
            <IonItem key={index}>{member}</IonItem>
          ))}
        </IonList>
        <IonButton onClick={handleAddGroup}>Create Group</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default GroupForm;
