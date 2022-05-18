import React from "react";
import { ComponentMeta, ComponentStory, Story } from "@storybook/react";

import IonPhotoViewer from "./IonPhotoViewer";
import { IonAvatar, IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { IonPhotoViewerProps } from "./IonPhotoViewer.types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Demo/IonPhotoViewer",
  component: IonPhotoViewer,
} as ComponentMeta<typeof IonPhotoViewer>;

const Template: Story<IonPhotoViewerProps> = (args: IonPhotoViewerProps) => (
  <IonPhotoViewer {...args}>{args.children}</IonPhotoViewer>
);

const imageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/June_odd-eyed-cat_cropped.jpg/712px-June_odd-eyed-cat_cropped.jpg";
export const Default = Template.bind({});
Default.args = {
  title: "Image title",
  src: imageUrl,
  children: <img src={imageUrl} alt="Image alt" />,
};

export const IonAvatarExample: Story = () => (
  <IonItem button lines="none" detail={false}>
    <IonAvatar slot="start">
      <IonPhotoViewer title="User name" src={imageUrl}>
        <img src={imageUrl} alt="Image alt" />
      </IonPhotoViewer>
    </IonAvatar>
    <IonLabel>IonAvatar example</IonLabel>
  </IonItem>
);

export const IonThumbnailExample: Story = () => (
  <IonItem button lines="none" detail={false}>
    <IonThumbnail slot="start">
      <IonPhotoViewer
        title="User name"
        src={imageUrl}
      >
        <img
          src={imageUrl}
          alt="Image alt"
        />
      </IonPhotoViewer>
    </IonThumbnail>
    <IonLabel>IonThumbnail example</IonLabel>
  </IonItem>
);

