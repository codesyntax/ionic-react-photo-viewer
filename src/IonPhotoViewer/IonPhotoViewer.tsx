import React, { useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import "./IonPhotoViewer.css";
import { createElementFromHTML, getImageDimensions } from "./utils";
import { IonPhotoViewerProps } from "./IonPhotoViewer.types";
import { Gallery, GalleryProps, Item } from "react-photoswipe-gallery";
import renderIonHeaderToString from "./renderIonHeaderToString";
import { DataSourceArray } from "photoswipe";

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

      
        // el.style.position = 'absolute'
        el.style.top = '0'
        // el.style.left = '50%'
        // el.style.right = '50%'
        // el.style.display = 'grid'
        // el.style.gridGap = '10px'
        el.style.gridTemplateColumns = 'repeat(auto-fit, 40px)'
        el.style.gridTemplateRows = 'repeat(auto-fit, 40px)'
        el.style.justifyContent = 'left'
        

        // const dataSource = pswpInstance.options.dataSource as DataSourceArray
        el.append(createElementFromHTML(renderIonHeaderToString(title)));

        // renderIonHeaderToString(title, 'ionPhotoViewerClose')

        // for (let i = 0; i < dataSource.length; i++) {
        //   const slideData = dataSource[i]

        //   const thumbnail = document.createElement('div')
        //   thumbnail.style.transition = 'transform 0.15s ease-in'
        //   thumbnail.style.opacity = '0.6'
        //   thumbnail.style.cursor = 'pointer'
        //   thumbnail.onclick = (e: MouseEvent) => {
        //     const target = e.target as HTMLImageElement | HTMLDivElement
        //     const thumbnailEl =
        //       target.tagName === 'IMG'
        //         ? target.parentElement
        //         : (e.target as HTMLImageElement | HTMLDivElement)
        //         thumbnailEl && pswpInstance.goTo(thumbnails.indexOf(thumbnailEl))
        //   }

        //   const thumbnailImage = document.createElement('img')
        //   slideData.msrc && thumbnailImage.setAttribute('src', slideData.msrc)
        //   thumbnailImage.style.width = '100%'
        //   thumbnailImage.style.height = '100%'
        //   thumbnailImage.style.objectFit = 'cover'

        //   thumbnail.appendChild(thumbnailImage)

        //   el.appendChild(thumbnail)

        //   thumbnails.push(thumbnail)
        // }

        // pswpInstance.on('change', () => {
        //   if (prevIndex >= 0) {
        //     const prevThumbnail = thumbnails[prevIndex]
        //     prevThumbnail.style.opacity = '0.6'
        //     prevThumbnail.style.cursor = 'pointer'
        //     prevThumbnail.style.transform = 'scale(1)'
        //   }

        //   const currentThumbnail = thumbnails[pswpInstance.currIndex]
        //   currentThumbnail.style.opacity = '1'
        //   currentThumbnail.style.cursor = 'unset'
        //   currentThumbnail.style.transform = 'scale(1.2)'

        //   prevIndex = pswpInstance.currIndex
        // })
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
