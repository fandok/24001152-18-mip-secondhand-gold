import { Link } from "react-router-dom";
import "./styles.css";

const Headline = () => {
  return (
    <div className="hero-bg">
      {" "}
      {/*section1*/}
      <div className="flex-car-1">
        <div>
          <div className="type-6">
            Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
          </div>
          <div className="type-7">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </div>
          <Link to={"/search"}>
            <button type="button" className="btn btn-success margin-but">
              Mulai Sewa Mobil
            </button>
          </Link>
        </div>
        <img
          className="car-pict"
          src="/landing-page/img_car.png"
          alt="car"
          width={704}
          height={407}
        />
      </div>
    </div>
  );
};

export default Headline;
