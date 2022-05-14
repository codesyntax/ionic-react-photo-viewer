import React from 'react';
import {
    IonButton,
    IonButtons,
    IonHeader,
    IonIcon,
    IonTitle,
    IonToolbar,
  } from '@ionic/react';
  import { arrowBack } from 'ionicons/icons';
  import { renderToString } from 'react-dom/server';
  
  const renderIonHeaderToString = (
    title: string,
    ionPhotoViewerCloseId: string,
  ) => {
    return renderToString(
      <IonHeader class="header-no-shadow">
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton id={ionPhotoViewerCloseId}>
              <IonIcon slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>,
    );
  };
  export default renderIonHeaderToString;

  
