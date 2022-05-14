import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  IonPhotoViewer from './IonPhotoViewer';
import { IonAvatar, IonItem, IonLabel, IonThumbnail } from '@ionic/react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/IonPhotoViewer',
  component: IonPhotoViewer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof IonPhotoViewer>;


export const IonAvatarItemExample = () => (
  <>
    <h2>For development</h2>

    <h3>Ionic avatar</h3>
    <IonItem button lines="none" detail={false}>
      <IonAvatar slot="start">
        <IonPhotoViewer
          title="Martin arrantzalea"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Alcedo_Atthis.jpg/1280px-Alcedo_Atthis.jpg"
          licenseKey='your-license-key'
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Alcedo_Atthis.jpg/1280px-Alcedo_Atthis.jpg"
            alt="Martin arrantzalea"
          />
        </IonPhotoViewer>
      </IonAvatar>
      <IonLabel>Martin arrantzalea</IonLabel>
    </IonItem>
    <IonItem button lines="none" detail={false}>
      <IonAvatar slot="start">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Alcedo_Atthis.jpg/1280px-Alcedo_Atthis.jpg"
          alt="Martin arrantzalea"
        />
      </IonAvatar>
      <IonLabel>Default IonAvatar without photo viewer</IonLabel>
    </IonItem>

    <h3>Ionic thumbnail</h3>
    <IonItem button lines="none" detail={false}>
      <IonThumbnail slot="start">
        <IonPhotoViewer
          title="Martin arrantzalea"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Alcedo_Atthis.jpg/1280px-Alcedo_Atthis.jpg"
          licenseKey='your-license-key'
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Alcedo_Atthis.jpg/1280px-Alcedo_Atthis.jpg"
            alt="Martin arrantzalea"
          />
        </IonPhotoViewer>
      </IonThumbnail>
      <IonLabel>Martin arrantzalea</IonLabel>
    </IonItem>
    <IonItem button lines="none" detail={false}>
      <IonThumbnail slot="start">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Alcedo_Atthis.jpg/1280px-Alcedo_Atthis.jpg"
          alt="Martin arrantzalea"
        />
      </IonThumbnail>
      <IonLabel>Default IonThumbnail without photo viewer</IonLabel>
    </IonItem>
  </>
);
