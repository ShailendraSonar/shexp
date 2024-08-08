import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/react';

const Expense: React.FC = () => {
  const dummyExpenses = [
    { id: 1, amount: 50, description: 'Dinner', group: 'Friends', payer: 'Alice' },
    { id: 2, amount: 30, description: 'Movie', group: 'Family', payer: 'John' },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Expenses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {dummyExpenses.map(expense => (
            <IonItem key={expense.id}>
              <IonLabel>
                {expense.description} - ${expense.amount} (Paid by {expense.payer})
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Expense;
