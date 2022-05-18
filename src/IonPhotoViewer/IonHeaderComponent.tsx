import React from "react";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";

const IonHeaderComponent:  React.FC<{ title: string }> = ({ title }) => (
  <IonHeader class="header-no-shadow">
    <IonToolbar>
      <IonButtons slot="start">
        <IonButton id="ion-header-close-button">
          <IonIcon slot="icon-only" icon={arrowBack} />
        </IonButton>
      </IonButtons>
      <IonTitle>{title}</IonTitle>
    </IonToolbar>
  </IonHeader>
);
export default IonHeaderComponent;
