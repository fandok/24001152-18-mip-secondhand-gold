import Footer from "../Footer";
import Header from "../Header";
import "./styles.css";

const HasilCari = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="hero">
        <div className="big-frame-cari nav-bigframe">
          {" "}
          {/*frame search*/}
          <div>
            <div className="type-pencarianmu">Pencarianmu</div>
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
          <div>
            <button type="button" className="btn btn-success">
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
      <div className="nav-cards">
        <div className="frame-card">
          <img src="/landing-page/image-in.png" alt="car-image" />
          <div className="type-card-car">Innova</div>
          <div className="type-card-fill">Rp 500.000 / hari</div>
          <div className="type-card-fill">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="button">Pilih Mobil</div>
        </div>
        <div className="frame-card">
          <img src="/landing-page/image-in.png" alt="car-image" />
          <div className="type-card-car">Innova</div>
          <div className="type-card-fill">Rp 500.000 / hari</div>
          <div className="type-card-fill">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="button">Pilih Mobil</div>
        </div>
        <div className="frame-card">
          <img src="/landing-page/image-in.png" alt="car-image" />
          <div className="type-card-car">Innova</div>
          <div className="type-card-fill">Rp 500.000 / hari</div>
          <div className="type-card-fill">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="button">Pilih Mobil</div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default HasilCari;
