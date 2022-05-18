import React from "react";
import { addDecorator } from "@storybook/react";
import { IonApp, IonContent, IonPage } from "@ionic/react";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";


import { setupIonicReact } from "@ionic/react";
/* Ionic framework configuration to enforce same look and feel across platforms */
// setupIonicReact({
//   mode: 'ios',
// })
setupIonicReact();
const IonWrapper = ({ children }) => {
  return (
        <IonApp>
          <IonPage>
            <IonContent>{children}</IonContent>
          </IonPage>
        </IonApp>
  );
};

addDecorator((storyFn) => <IonWrapper>{storyFn()}</IonWrapper>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  defaultViewport: "Large mobile (P)",
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
    },
    defaultViewport: "iphonex",
  },
};
