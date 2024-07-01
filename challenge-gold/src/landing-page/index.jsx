import React from "react";
import Header from "../Header";
import Headline from "../Headline";
import Footer from "../Footer";
import "./styles.css";

const LandingPage = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Headline />
      </div>
      {/*section 2*/}
      <div>
        <div className="navigation">
          <img
            className="big-pict"
            src="/landing-page/img_service.png"
            alt="serviceimage"
            width={459}
            height={428}
          />
          <div>
            <h1 className="type-1">
              Best Car Rental for any kind of trip in (Lokasimu)!
            </h1>
            <p className="type-2">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
              lebih murah dibandingkan yang lain, kondisi mobil baru, serta
              kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.
            </p>
            <div className="nav-right">
              <img src="/landing-page/Group 53.png" alt="" />
              <span className="type-3">
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </span>
            </div>
            <div className="nav-right">
              <img src="/landing-page/Group 53.png" alt="" />
              <span className="type-3">
                Sewa Mobil Lepas Kunci di Bali 24 Jam
              </span>
            </div>
            <div className="nav-right">
              <img src="/landing-page/Group 53.png" alt="" />
              <span className="type-3">Sewa Mobil Jangka Panjang Bulanan</span>
            </div>
            <div className="nav-right">
              <img src="/landing-page/Group 53.png" alt="" />
              <span className="type-3">
                Gratis Antar - Jemput Mobil di Bandara
              </span>
            </div>
            <div className="nav-right">
              <img src="/landing-page/Group 53.png" alt="" />
              <span className="type-3">
                Layanan Airport Transfer / Drop In Out
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div>
        <div className="just-sec3">
          <span className="type-1">Why Us?</span>
          <span className="type-2">Mengapa harus pilih Binar Car Rental?</span>
        </div>
        <div className="nav-sec3">
          {" "}
          {/*frames*/}
          <div className="frame-2">
            {" "}
            {/*per frame dan isinya*/}
            <img src="/landing-page/icon_complete.png" alt="complete" />
            <div>Mobil Lengkap</div>
            <div>
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </div>
          </div>
          <div className="frame-2">
            {" "}
            {/*per frame dan isinya*/}
            <img src="/landing-page/icon_price.png" alt="price" />
            <div>Harga Murah</div>
            <div>
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </div>
          </div>
          <div className="frame-2">
            {" "}
            {/*per frame dan isinya*/}
            <img src="/landing-page/icon_24hrs.png" alt="24hrs" />
            <div>Layanan 24 Jam</div>
            <div>
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </div>
          </div>
          <div className="frame-2">
            {" "}
            {/*per frame dan isinya*/}
            <img src="/landing-page/icon_professional.png" alt="prfs" />
            <div>Sopir Profesional</div>
            <div>
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </div>
          </div>
        </div>
      </div>
      {/*section 4*/}
      <div className="bg-sec-4">
        <div className="just-sec4">
          <div className="type-1">Testimonial</div>
          <div className="type-2">
            Berbagai review positif dari para pelanggan kami
          </div>
        </div>
        <div className="nav-frame">
          <div className="frame-testi flex-per-frame">
            <div>
              <img src="/landing-page/img_photo.png" alt="img_1" />
            </div>
            <div className="col-sm-9">
              <div>
                <img src="/landing-page/Rate.png" alt="rate" />
              </div>
              <div>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </div>
              <div>John Dee 32, Bromo</div>
            </div>
          </div>
          <div className="frame-testi flex-per-frame">
            <div>
              <img src="/landing-page/img_photo (1).png" alt="img_2" />
            </div>
            <div className="col-sm-9">
              <div>
                <img src="/landing-page/Rate.png" alt="rate" />
              </div>
              <div>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod”
              </div>
              <div>John Dee 32, Bromo</div>
            </div>
          </div>
        </div>
        <div className="pad-but-sec-4">
          {" "}
          {/*navigation arah*/}
          <img src="/landing-page/Left button.png" alt="arah-kiri" />
          <img src="/landing-page/Right button.png" alt="arah-kanan" />
        </div>
      </div>
      {/*section 5*/}
      <div className="text-center align-sec-5">
        <div className="frame-sec-5">
          {" "}
          {/*frame gede*/}
          <div className="type-sec5-1">Sewa Mobil di (Lokasimu) Sekarang</div>
          <p className="type-sec5-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button type="button" className="btn btn-success">
            Mulai Sewa Mobil
          </button>
        </div>
      </div>
      {/*section 6*/}
      <div className="nav-sec-6a">
        <div>
          {" "}
          {/*left part*/}
          <div className="type-sec6-1">Frequently Asked Question</div>
          <div className="type-sec6-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div>
          {" "}
          {/*right part*/}
          <div>
            {" "}
            {/*frames FAQ*/}
            <div>
              <div className="frame-sec-6 nav-sec-6">
                {" "}
                {/*per frame dan isinya*/}
                <div className="type-sec6-3">
                  Apa saja syarat yang dibutuhkan?
                </div>
                <div className="box-dd">
                  <img
                    src="/landing-page/fi_chevron-down.png"
                    alt="cheron-down"
                  />
                </div>
              </div>
              <div className="frame-sec-6 nav-sec-6">
                {" "}
                {/*per frame dan isinya*/}
                <div className="type-sec6-3">
                  Berapa hari minimal sewa mobil lepas kunci?
                </div>
                <div className="box-dd">
                  <img
                    src="/landing-page/fi_chevron-down.png"
                    alt="cheron-down"
                  />
                </div>
              </div>
              <div className="frame-sec-6 nav-sec-6">
                {" "}
                {/*per frame dan isinya*/}
                <div className="type-sec6-3">
                  Berapa hari sebelumnya sabaiknya booking sewa mobil?
                </div>
                <div className="box-dd">
                  <img
                    src="/landing-page/fi_chevron-down.png"
                    alt="cheron-down"
                  />
                </div>
              </div>
              <div className="frame-sec-6 nav-sec-6">
                {" "}
                {/*per frame dan isinya*/}
                <div className="type-sec6-3">
                  Apakah Ada biaya antar-jemput?
                </div>
                <div className="box-dd">
                  <img
                    src="/landing-page/fi_chevron-down.png"
                    alt="cheron-down"
                  />
                </div>
              </div>
              <div className="frame-sec-6 nav-sec-6">
                {" "}
                {/*per frame dan isinya*/}
                <div className="type-sec6-3">
                  Bagaimana jika terjadi kecelakaan
                </div>
                <div className="box-dd">
                  <img
                    src="/landing-page/fi_chevron-down.png"
                    alt="cheron-down"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
