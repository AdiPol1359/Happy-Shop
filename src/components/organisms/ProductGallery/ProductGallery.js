import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

import 'swiper/css';
import GalleryItem from 'components/molecules/GalleryItem/GalleryItem';
import {
  SwiperWrapper,
  Wrapper,
} from 'components/organisms/ProductGallery/ProductGallery.styles';

SwiperCore.use([Navigation]);

const ProductGallery = () => {
  const getSlidesPerView = () => {
    const width = window.innerWidth;

    if (width > 969) {
      return 3;
    } else if (width > 649) {
      return 2;
    }

    return 1;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResolutionChange = () => {
      const tempSlidesPerView = getSlidesPerView();

      if (tempSlidesPerView !== slidesPerView) {
        setSlidesPerView(tempSlidesPerView);
      }
    };

    window.addEventListener('resize', handleResolutionChange);

    return () => window.removeEventListener('resize', handleResolutionChange);
  }, [slidesPerView]);

  return (
    <Wrapper>
      <SwiperWrapper>
        <Swiper spaceBetween={20} slidesPerView={slidesPerView}>
          <SwiperSlide>
            <GalleryItem />
          </SwiperSlide>

          <SwiperSlide>
            <GalleryItem />
          </SwiperSlide>

          <SwiperSlide>
            <GalleryItem />
          </SwiperSlide>

          <SwiperSlide>
            <GalleryItem />
          </SwiperSlide>
        </Swiper>
      </SwiperWrapper>
    </Wrapper>
  );
};

export default ProductGallery;
