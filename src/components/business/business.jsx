import React, { useState } from "react";
import Card from "../common/Card/Card";
import CoursesCard from "./CoursesCard";
import "./business.scss";

const BusinessPage = () => {
  const [data, setData] = useState([
    {
      nama: "PT MITRA BAKTI UT",
      desc: "Perusahaan building management yang diakui keberadaannya di Indonesia, peduli akan lingkungan, serta dapat dipercaya.",
      url: "https://www.mitrabaktiut.co.id/",
      linkIg: "https://www.instagram.com/explore/tags/mitrabaktiut/",
      linkYt: "https://www.youtube.com",
      // logo: MBUT
    },
    {
      nama: "PT GLOBAL SERVICE INDONESIA",
      desc: "Penyediaan jasa SDM bidang Administrasi dan IT berbagai perusahaan di Astra Group",
      url: "https://globalservice.co.id/",
      linkIg: "https://www.instagram.com/explore/tags/globalserviceindonesia/",
      linkYt: "https://www.youtube.com",
      // logo: GSI
    },
    {
      nama: "PT KAMAJU",
      desc: "Penyedia Jasa Mekanik dan Operator Alat-Alat Berat bagi perusahaan-perusahaan di Astra Group ",
      url: "https://www.kamaju.co.id/",
      linkIg: "https://www.instagram.com/kamajuofficial/",
      linkYt: "https://www.youtube.com",
    },
    {
      nama: "PT DIAN PANDU PRATAMA",
      desc: "ini adalah deskripsi",
      url: "https://www.dpp.co.id/",
      linkIg: "https://www.instagram.com",
      linkYt: "https://www.youtube.com",
    },
    {
      nama: "LSP ABI",
      desc: "Lembaga pendukung Badan Nasional Sertifikasi Profesi (BNSP) sebagai lembaga sertifikasi profesi dibidang alat berat kelas dunia.",
      url: "https://www.lsp-abi.org/",
      linkIg: "https://www.instagram.com/lspabi/",
      linkYt: "https://www.youtube.com",
    },
  ]);

  return (
    <div className="container container-lg">
      <div className="row justify-content-center container mt-5">
        {data.map((item, index) => (
          <Card
            key={index}
            name={item.nama}
            desc={item.desc}
            url={item.url}
            linkIg={item.linkIg}
            linkYt={item.linkYt}
            logo={item.logo}
            kolom={4}
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessPage;
