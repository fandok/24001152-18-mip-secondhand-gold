import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import axios from "axios";
import Footer from "../Footer";
import Header from "../Header";
import "./styles.css";
import { ACCESS_TOKEN, DETAIL_URL, PLACEHOLDER_URL } from "../const";

const DetailNew = () => {
  const params = useParams();
  const [data, setData] = useState({});

  const no = params.no;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(DETAIL_URL + no, {
        headers: {
          access_token: ACCESS_TOKEN,
        },
      });

      const responseData = await response.json();
      setData(responseData || {});
    };

    fetchData();
  }, [no]);

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="hero"></div>
      <div className="nav-detail">
        <div className="frame-detail">
          <div className="type-1">Tentang Paket</div>
          <div className="type-1">Include</div>
          <ul className="type-2">
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <div>
            <div className="type-1">Exclude</div>
            <ul className="type-2">
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
          <div>
            <div className="type-1">Refund, Reschedule, Overtime</div>
            <ul className="type-2">
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
        </div>
        <div className="frame-car">
          <div>
            <img
              className="pict"
              src={data.image ? data.image : PLACEHOLDER_URL}
              alt="car-image"
            />
          </div>
          <div className="type-1">{data.name}</div>
          <div className="nav-size">
            <img
              src="/landing-page/fi_users.png"
              alt="users"
              width={12}
              height={12}
            />
            <div>{data.category} orang</div>
          </div>
          <div className="nav-total">
            <div className="type-1">Total</div>
            <div className="type-1">Rp {data.price}</div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default DetailNew;
