import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import "./styles.css";
import { LIST_URL, ACCESS_TOKEN } from "../const";
import { Link } from "react-router-dom";

const DummyCariMobil = () => {
  // State untuk menyimpan nilai input dari form
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isRented, setIsRented] = useState("");
  // State untuk menyimpan hasil fetching data mobil dari API
  const [cars, setCars] = useState([]);
  // State untuk menyimpan error jika ada
  const [error, setError] = useState(null);

  // Fungsi untuk melakukan fetching data mobil dari API
  const fetchCars = async () => {
    try {
      // Melakukan request ke API untuk mendapatkan data mobil
      const response = await axios.get(LIST_URL, {
        headers: { access_token: ACCESS_TOKEN },
        params: {
          name: "",
          category: "",
          price: 0,
          isRented: false,
        },
      });
      console.log(response.data);
      // Mengupdate state `cars` dengan data mobil yang didapat dari response API
      if (Array.isArray(response.data.cars)) {
        setCars(response.data.cars);
      } else {
        console.error("Respon API bukan array");
      }
    } catch (error) {
      // Jika terjadi error, mengupdate state `error`
      setError(error);
    }
  };

  //   // useEffect untuk melakukan fetching data mobil ketika komponen dimount atau parameter pencarian berubah
  useEffect(() => {
    fetchCars();
  }, [name, category, price, isRented]); // Dependency array berisi parameter pencarian

  return (
    <>
      <div>
        {/* Komponen Header */}
        <Header />
      </div>
      <div>
        <div className="hero"></div>
        <div className="big-frame-cari nav-bigframe">
          {/* Frame untuk input Nama Mobil */}
          <div>
            <div className="type-head-search">Nama Mobil</div>
            {/* Input untuk Nama Mobil */}
            <input
              type="text"
              className="frame-nama-mobil type-inside-search"
              placeholder="Ketik nama/tipe mobil"
              value={name} // Menggunakan state `name`
              onChange={(e) => setName(e.target.value)} // Mengupdate state `name` ketika input berubah
            />
          </div>
          {/* Frame untuk input Kapasitas Mobil */}
          <div>
            <div className="type-head-search">Kategori</div>
            {/* Input untuk Kapasitas Mobil */}
            <select
              type="number"
              className="frame-kategori nav-search type-inside-search"
              placeholder="Masukkan kapasitas mobil"
              value={category} // Menggunakan state `capacity`
              onChange={(e) => setCategory(e.target.value)} // Mengupdate state `capacity` ketika input berubah
            >
              <option value="" disabled></option>
              <option value="small">2-4 orang</option>
              <option value="medium">4-6 orang</option>
              <option value="large">6-8 orang</option>
            </select>
          </div>
          {/* Frame untuk input Harga Sewa Mobil */}
          <div>
            <div className="type-head-search">Harga</div>
            {/* Input untuk Harga Sewa Mobil */}
            <select
              type="number"
              className="frame-kategori nav-search type-inside-search"
              placeholder="Masukkan harga sewa per hari"
              value={price} // Menggunakan state `price`
              onChange={(e) => setPrice(e.target.value)} // Mengupdate state `price` ketika input berubah
            >
              <option value="" disabled></option>
              <option value="small">{"< Rp. 400.000"}</option>
              <option value="medium">Rp. 400.000 - Rp. 600.000</option>
              <option value="large">{"> Rp. 600.000"}</option>
            </select>
          </div>
          {/* Frame untuk memilih Status Mobil */}
          <div>
            <div className="type-head-search">Status</div>
            {/* Select untuk memilih Status Mobil */}
            <select
              className="frame-kategori nav-search type-inside-search-b"
              placeholder="Pilih Status"
              value={isRented} // Menggunakan state `status`
              onChange={(e) => setIsRented(e.target.value)} // Mengupdate state `status` ketika pilihan berubah
            >
              <option value="" disabled></option>
              <option value="disewa">Disewa</option>
              <option value="available">Tidak Disewa</option>
            </select>
          </div>
          {/* Tombol untuk mencari mobil berdasarkan input */}
          <button className="green-box" onClick={fetchCars}>
            Cari Mobil
          </button>
        </div>
      </div>
      {cars.length > 0 && (
        <div className="nav-cards">
          {/* Menampilkan pesan error jika ada */}
          {error && <div>Error: {error.message}</div>}
          {/* Menampilkan hasil pencarian mobil */}
          {cars.map((car) => (
            <div className="frame-card" key={car.id}>
              {/* Gambar mobil */}
              <img
                className="image-car"
                src={car.image || "/landing-page/image-in.png"}
                alt="car-image"
              />
              {/* Nama mobil */}
              <div className="type-card-car">{car.name}</div>
              {/* Harga sewa per hari */}
              <div className="type-card-fill">Rp {car.price} / hari</div>
              {/* Deskripsi mobil */}
              <div className="type-card-fill">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              {/* Tombol untuk memilih mobil */}
              <div></div>
              <Link to={`/detail/${car.id}`}>
                <div className="button">Pilih Mobil</div>
              </Link>
            </div>
          ))}
        </div>
      )}
      <div>
        {/* Komponen Footer */}
        <Footer />
      </div>
    </>
  );
};

export default DummyCariMobil;
