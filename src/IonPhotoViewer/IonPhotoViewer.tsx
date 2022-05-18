import React, { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import "./IonPhotoViewer.css";
import { createElementFromHTML, getImageDimensions } from "./utils";
import { IonPhotoViewerProps } from "./IonPhotoViewer.types";
import { Gallery, GalleryProps, Item } from "react-photoswipe-gallery";
import IonHeaderComponent from "./IonHeaderComponent";
import { renderToString } from "react-dom/server";

const IonPhotoViewer: React.FC<IonPhotoViewerProps> = ({
  children,
  title,
  src,
  showHeader = true,
}) => {
  const [dimensions, setImageDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  const uiElements: GalleryProps['uiElements'] = [
    {
      name: 'bulletsIndicator',
      order: 9,
      isButton: false,
      appendTo: 'wrapper',
      onInit: (el, pswpInstance) => {
        if(showHeader){
          el.style.top = '0';
          el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)';
          el.style.gridTemplateRows = 'repeat(auto-fit, 40px)';
          el.style.justifyContent = 'left';
          el.append(createElementFromHTML(renderToString(<IonHeaderComponent title={title} />)));
        }
      },
      onClick: (e, el, pswpInstance) => {
        const target = e.target as HTMLImageElement | HTMLDivElement
        if(target?.id === 'ion-header-close-button') {
          pswpInstance.close()
        }
      }
    },
  ]


  useEffect(() => {
    getImageDimensions(src).then((dimensions: any) =>
      setImageDimensions(dimensions)
    );
  }, []);

  return (
    <div
      className="ion-photo-viewer"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      role="presentation"
    >
      <Gallery uiElements={uiElements}>
        <Item
          original={src}
          thumbnail={src}
          width={dimensions.width}
          height={dimensions.height}
        >
          {({ ref, open }) => (
            <div
              onClick={open}
              ref={ref as React.MutableRefObject<HTMLImageElement>}
            >
              {children}
            </div>
          )}
        </Item>
      </Gallery>
    </div>
  );
};

export default IonPhotoViewer;
