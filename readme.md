# Ionic React Photo Viewer

## [DEMO](https://codesyntax.github.io/ionic-react-photo-viewer/?path=/story/example-ionphotoviewer--ion-avatar-item-example)
A react component for displaying images adapted to Ionic design.

The features:

* Pinch-to-zoom capability.
* IonAvatar and IonThumbnail support.
* Blurred background support ([Available for Chrome and Safari](https://caniuse.com/css-backdrop-filter)).
* IonHeader integration to adapt it to the native design.

![IonPhotoViewer demo](./docs/ion-photo-viewer-demo.gif)


## Installation
```bash
npm install --save @codesyntax/ionic-react-photo-viewer
```

## Use example
```tsx
// import component
import IonPhotoViewer from '@codesyntax/ionic-react-photo-viewer';

// TSX
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
```

## Props
* title: string
  * The title of the image.
* src: string
  * The source of the image in hight quality.
* licenseKey: string
  * The license key of lightgallery.
* children: React.ReactNode
  * Img element.