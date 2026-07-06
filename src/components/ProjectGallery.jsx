/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

export const ProjectGallery = ({ images, title }) => {
  if (!images || images.length === 0) return null;

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: 240, sm: 320, md: 420 },
        borderRadius: 2,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
        bgcolor: "#0a0a0a",
        "& .swiper": { height: "100%" },
        "& .swiper-slide": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
        },
        "& .swiper-slide img": {
          width: "auto",
          maxWidth: "100%",
          maxHeight: "100%",
          height: "100%",
          objectFit: "contain",
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        navigation
        pagination={{ clickable: true }}
        keyboard
        loop={images.length > 1}
        className="mySwiper"
      >
        {images.map((imagen, index) => (
          <SwiperSlide key={index}>
            <img src={imagen} alt={`${title} ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};