import Footer from "../Footer";
import Header from "../Header";
import "./styles.css";

const DetailPaket = () => {
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
            <div className="frame-nama-mobil"> </div>
          </div>
          <div>
            <div className="type-head-search">Kategori</div>
            <div className="frame-kategori"></div>
          </div>
          <div>
            <div className="type-head-search">Harga</div>
            <div className="frame-kategori"></div>
          </div>
          <div>
            <div className="type-head-search">Status</div>
            <div className="frame-kategori"></div>
          </div>
        </div>
      </div>
      <div className="nav-detail">
        <div className="frame-detail">
          <div className="type-1">Tentang Paket</div>
          <div>
            <div className="type-1">Include</div>
            <div className="type-2">
              <div>
                - Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </div>
              <div>- Sudah termasuk bensin selama 12 jam</div>
              <div>- Sudah termasuk Tiket Wisata</div>
              <div>- Sudah termasuk pajak</div>
            </div>
          </div>
          <div>
            <div className="type-1">Exclude</div>
            <div className="type-2">
              <div>- Tidak termasuk biaya makan sopir Rp 75.000/hari</div>
              <div>
                - Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </div>
              <div>- Tidak termasuk akomodasi penginapan</div>
            </div>
          </div>
          <div>
            <div className="type-1">Refund, Reschedule, Overtime</div>
            <div className="type-2">
              <div>- Tidak termasuk biaya makan sopir Rp 75.000/hari</div>
              <div>
                - Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </div>
              <div>- Tidak termasuk akomodasi penginapan</div>
              <div>- Tidak termasuk biaya makan sopir Rp 75.000/hari</div>
              <div>
                - Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </div>
              <div>- Tidak termasuk akomodasi penginapan</div>
              <div>- Tidak termasuk biaya makan sopir Rp 75.000/hari</div>
              <div>
                - Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </div>
              <div>- Tidak termasuk akomodasi penginapan</div>
            </div>
          </div>
        </div>
        <div className="frame-car">
          <div className="pict">
            {" "}
            <img src="/landing-page/image-in.png" alt="car-image" />
          </div>
          <div className="type-1">Innova</div>
          <div className="nav-size">
            <img
              src="/landing-page/fi_users.png"
              alt="users"
              width={12}
              height={12}
            />
            <div>6-8 orang</div>
          </div>
          <div className="nav-total">
            <div className="type-1">Total</div>
            <div className="type-1">Rp 500.000</div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default DetailPaket;
