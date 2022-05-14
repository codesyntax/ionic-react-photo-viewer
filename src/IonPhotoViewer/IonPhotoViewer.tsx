import React from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';

import './IonPhotoViewer.css';
import { useCallback, useRef } from 'react';
import { renderIonHeader } from './utils';
import { IonPhotoViewerProps } from './IonPhotoViewer.types';



const IonPhotoViewer: React.FC<IonPhotoViewerProps> = ({
  children,
  title,
  src,
  showHeader = true,
  licenseKey
}) => {
  const lightGallery = useRef<any>(null);

  const onInit = useCallback(
    (detail: any) => {
      if (detail) {
        const instance = detail.instance;
        lightGallery.current = instance;
        // lightGallery.current.openGallery();

        if (showHeader) {
          renderIonHeader(title, instance);
          // closeIonPhotoViewer(instance);
        }
        // instance.refresh();
      }
    },
    [showHeader, title],
  );

  // useEffect(() => {
  //   if (lightGallery.current) {
  //     lightGallery.current.refresh();
  //   }
  // }, [src]);

  return (
    <div
      className="ion-photo-viewer"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      role="presentation"
    >
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom]}
        counter={false}
        controls={false}
        download={false}
        zoom={true}
        // licenseKey="YOUR_KEY_HERE"
        mobileSettings={{
          showCloseIcon: true,
        }}
        getCaptionFromTitleOrAlt={false}
        onAfterClose={() => {
          lightGallery.current.refresh();
        }}
        {...(licenseKey && { licenseKey })}
      >
        <a href={src} className="ion-photo-viewer-img">
          {children}
        </a>
      </LightGallery>
    </div>
  );
};

export default IonPhotoViewer;
