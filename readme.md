# Ionic React Photo Viewer

##### Table of Contents

* [Demo](#demo)
* [Features](#features)
* [Installation](#installation)
* [Use example](#example)
* [Props](#props)


<a name="demo"/>

## [Demo](https://codesyntax.github.io/ionic-react-photo-viewer/?path=/story/example-ionphotoviewer--ion-avatar-item-example)
A react component for displaying images adapted to Ionic design.

<a name="features"/>

## Features:

* Pinch-to-zoom capability.
* IonAvatar and IonThumbnail support.
* Blurred background support ([Available for Chrome and Safari](https://caniuse.com/css-backdrop-filter)).
* IonHeader integration to adapt it to the native design.


https://user-images.githubusercontent.com/26112509/168749351-b7446907-458f-424f-86c9-c5ef639353d2.mov

https://user-images.githubusercontent.com/26112509/168749387-d7bb7b4a-f968-4e63-aaa2-876527ee6a58.mov


<a name="installation"/>

## Installation
```bash
npm install --save @codesyntax/ionic-react-photo-viewer
```

<a name="example"/>

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
<a name="props"/>

## Props
* title: string
  * The title of the image.
* src: string
  * The source of the image in hight quality.
* licenseKey: string
  * The license key of lightgallery.
* children: React.ReactNode
  * Img element.
