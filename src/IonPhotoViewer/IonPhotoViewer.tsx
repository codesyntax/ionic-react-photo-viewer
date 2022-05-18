import React, {useEffect} from "react";
import "photoswipe/dist/photoswipe.css";
import "./IonPhotoViewer.css";
import { getImageDimensions, renderIonHeader } from "./utils";
import { IonPhotoViewerProps } from "./IonPhotoViewer.types";
import { Gallery, Item } from "react-photoswipe-gallery";

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


  useEffect(() => {
    getImageDimensions(src).then((dimensions:any) =>  setImageDimensions(dimensions));
  }, []);
  return (
    <div
      className="ion-photo-viewer"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      role="presentation"
    >
      <Gallery>
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
