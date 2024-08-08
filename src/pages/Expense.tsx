// src/pages/Expense.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, splitExpense } from '../redux/expenseSlice';
import { IonContent, IonHeader, IonPage, IonTitle,IonList, IonToolbar, IonItem, IonInput, IonButton, IonLabel } from '@ionic/react';

const Expense: React.FC = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [groupId, setGroupId] = useState(1); // default to group 1

  const handleAddExpense = () => {
    dispatch(addExpense({ description, amount, groupId }));
    setDescription('');
    setAmount(0);
  };

  const handleSplitExpense = (expenseId: number) => {
    dispatch(splitExpense(expenseId));
  };

  // Example expense list (assuming you have some expenses in state)
  const expenses = useSelector((state: any) => state.expenses.expenses);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Expenses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>Description</IonLabel>
          <IonInput value={description} onIonChange={(e: any) => setDescription(e.target.value)} />
        </IonItem>
        <IonItem>
          <IonLabel>Amount</IonLabel>
          <IonInput type="number" value={amount} onIonChange={(e: any) => setAmount(Number(e.target.value))} />
        </IonItem>
        <IonItem>
          <IonLabel>Group ID</IonLabel>
          <IonInput type="number" value={groupId} onIonChange={(e: any) => setGroupId(Number(e.target.value))} />
        </IonItem>
        <IonButton onClick={handleAddExpense}>Add Expense</IonButton>

        <IonList>
          {expenses.map((expense: any) => (
            <IonItem key={expense.id}>
              <IonLabel>
                {expense.description} - ${expense.amount}
              </IonLabel>
              <IonButton onClick={() => handleSplitExpense(expense.id)}>Split</IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Expense;
