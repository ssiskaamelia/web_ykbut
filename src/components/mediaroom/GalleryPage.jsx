import React from "react";
import Back from "../common/back/Back";
import { Container } from "@mui/material";
import Imagelist from "./Imagelist";
import { LightgalleryProvider } from "react-lightgallery";

const MediaPage = () => {
  return (
    <>
      <Back title="MEDIA ROOM" />
      <section className="blog padding">
        <div className="container grid2">
          <LightgalleryProvider
            LightgallerySettings={{}}
            galleryClassName="my_custom_classname"
          >
            <Imagelist />
            <Container
              maxWidth="lg"
              sx={{ textAlign: "center", mt: "5rem", color: "#15c386" }}
            >
              <Imagelist />
            </Container>
          </LightgalleryProvider>
        </div>
      </section>
    </>
  );
};

export default MediaPage;
