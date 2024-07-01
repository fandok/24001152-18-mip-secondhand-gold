import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.css";
import HasilCari from "../Hasil-Cari";

const CariMobil = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div className="hero"></div>
        <div className="big-frame-cari nav-bigframe">
          {" "}
          {/*frame search*/}
          <div>
            <div className="type-head-search">Nama Mobil</div>
            <div className="frame-nama-mobil type-inside-search">
              Ketik nama/tipe mobil
            </div>
          </div>
          <div>
            <div className="type-head-search">Kategori</div>
            <div className="frame-kategori nav-search">
              {" "}
              {/*per frame dan isinya*/}
              <div className="type-inside-search">Masukkan kapasitas mobil</div>
              <div className="box-chev">
                <img
                  src="/landing-page/fi_chevron-down.png"
                  alt="cheron-down"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="type-head-search">Harga</div>
            <div className="frame-kategori nav-search">
              {" "}
              {/*per frame dan isinya*/}
              <div className="type-inside-search">
                Masukkan harga sewa per hari
              </div>
              <div className="box-chev">
                <img
                  src="/landing-page/fi_chevron-down.png"
                  alt="cheron-down"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="type-head-search">Status</div>
            <div className="frame-kategori nav-search">
              {" "}
              {/*per frame dan isinya*/}
              <div className="type-inside-search-b">Disewa</div>
              <div className="box-chev">
                <img
                  src="/landing-page/fi_chevron-down.png"
                  alt="cheron-down"
                />
              </div>
            </div>
          </div>
          <button className="green-box">Cari Mobil</button>
        </div>
      </div>
      <div>
        <HasilCari />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CariMobil;
