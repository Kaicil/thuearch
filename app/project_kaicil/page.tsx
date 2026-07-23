"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProjectKaicil() {
  const [like, setLike] = useState(0);
  const [sudahLike, setSudahLike] = useState(false);

  const tanganiKlikLike = () => {
    if (sudahLike) {
      setLike(like - 1);
      setSudahLike(false);
    } else {
      setLike(like + 1);
      setSudahLike(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Tombol Kembali */}
        <Link
          href="/portofolio_kaicil"
          className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-orange-700 transition"
        >
          ← Kembali
        </Link>

        {/* Hero */}
        <div className="mt-10 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 rounded-3xl shadow-2xl p-10 text-white">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            Featured Project
          </span>

          <h1 className="text-5xl font-extrabold mt-6">
            🍽️ Dapur Malioboro
          </h1>

          <p className="mt-5 text-lg leading-8 max-w-3xl text-orange-50">
            Dapur Malioboro merupakan website pemesanan makanan berbasis web
            yang dirancang untuk memberikan pengalaman pemesanan yang cepat,
            praktis, dan modern bagi pelanggan maupun admin restoran.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 w-44">
              <h3 className="text-4xl font-bold">10+</h3>
              <p>Fitur</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 w-44">
              <h3 className="text-4xl font-bold">5</h3>
              <p>Teknologi</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 w-44">
              <h3 className="text-4xl font-bold">100%</h3>
              <p>Responsive</p>
            </div>

          </div>

        </div>

        {/* Tentang Project */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mt-10 border border-orange-100">

          <h2 className="text-3xl font-bold text-orange-700">
            📖 Tentang Project
          </h2>

          <p className="mt-6 text-slate-700 leading-8">
            Website Dapur Malioboro dikembangkan sebagai solusi digital
            untuk membantu proses pemesanan makanan secara online.
            Sistem ini memungkinkan pelanggan melihat menu,
            melakukan pemesanan, serta mempermudah admin
            dalam mengelola transaksi dan data makanan.
          </p>

          <p className="mt-4 text-slate-700 leading-8">
            Project ini dibuat menggunakan Laravel sebagai backend
            dan MySQL sebagai database sehingga mampu memberikan
            performa yang stabil serta mudah dikembangkan.
          </p>

        </div>

        {/* Fitur & Teknologi */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* Fitur */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100 hover:-translate-y-2 transition">

            <h2 className="text-3xl font-bold text-orange-700">
              🎯 Fitur Utama
            </h2>

            <p className="text-slate-600 mt-3">
              Fitur-fitur yang tersedia pada aplikasi.
            </p>

            <div className="space-y-4 mt-7">

              <div className="bg-orange-50 p-4 rounded-xl text-slate-700 font-medium">
                🍽️ Menu Makanan Digital
              </div>

              <div className="bg-orange-50 p-4 rounded-xl text-slate-700 font-medium">
                🛒 Keranjang Belanja
              </div>

              <div className="bg-orange-50 p-4 rounded-xl text-slate-700 font-medium">
                📦 Pemesanan Online
              </div>

              <div className="bg-orange-50 p-4 rounded-xl text-slate-700 font-medium">
                💳 Pembayaran
              </div>

              <div className="bg-orange-50 p-4 rounded-xl text-slate-700 font-medium">
                📊 Dashboard Admin
              </div>

              <div className="bg-orange-50 p-4 rounded-xl text-slate-700 font-medium">
                📈 Laporan Penjualan
              </div>

            </div>

          </div>

          {/* Teknologi */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:-translate-y-2 transition">

            <h2 className="text-3xl font-bold text-blue-700">
              💻 Teknologi
            </h2>

            <p className="text-slate-600 mt-3">
              Teknologi yang digunakan dalam project ini.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              <span className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
                Laravel
              </span>

              <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold">
                HTML5
              </span>

              <span className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold">
                CSS3
              </span>

              <span className="bg-yellow-500 text-white px-5 py-2 rounded-full font-semibold">
                JavaScript
              </span>

              <span className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold">
                MySQL
              </span>

              <span className="bg-black text-white px-5 py-2 rounded-full font-semibold">
                GitHub
              </span>

            </div>
                        {/* Like Project */}
            <div className="mt-10 border-t border-gray-200 pt-8">

              <h3 className="text-2xl font-bold text-pink-700">
                ❤️ Dukung Project Ini
              </h3>

              <p className="text-slate-600 mt-3">
                Berikan Like jika menurutmu project ini menarik dan bermanfaat.
              </p>

              {like >= 5 && (
                <div className="mt-5">
                  <span className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg">
                    🔥 Proyek Terpopuler!
                  </span>
                </div>
              )}

              <div className="mt-8 text-center">

                <h1 className="text-6xl font-black text-blue-700">
                  {like}
                </h1>

                <p className="text-slate-600">
                  Total Like
                </p>

              </div>

              <button
                onClick={tanganiKlikLike}
                className={`mt-8 w-full py-4 rounded-2xl text-white font-bold text-lg transition ${
                  sudahLike
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {sudahLike ? "💔 Batal Suka" : "❤️ Beri Like"}
              </button>

            </div>

          </div>

        </div>

        {/* Peran Saya */}
        {/* Peran Saya */}
<div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 rounded-3xl shadow-2xl p-10 mt-10 border border-green-100">

  <div className="text-center">

    <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">
      👨‍💻 My Contribution
    </span>

    <h2 className="text-4xl font-bold text-slate-800 mt-5">
      Peran Saya Dalam Project
    </h2>

    <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-8">
      Pada pengembangan website <strong>Dapur Malioboro</strong>, saya
      bertanggung jawab dalam proses perancangan, pengembangan, hingga
      implementasi sistem agar aplikasi dapat digunakan dengan baik oleh
      pengguna maupun admin restoran.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <div className="text-5xl text-center">
        🎨
      </div>

      <h3 className="text-xl font-bold text-center mt-4 text-orange-600">
        UI Design
      </h3>

      <p className="text-slate-600 text-center mt-3">
        Mendesain tampilan website agar modern,
        menarik, dan mudah digunakan.
      </p>

    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <div className="text-5xl text-center">
        💻
      </div>

      <h3 className="text-xl font-bold text-center mt-4 text-blue-600">
        Frontend
      </h3>

      <p className="text-slate-600 text-center mt-3">
        Membangun halaman website menggunakan
        HTML, CSS, JavaScript, dan Laravel.
      </p>

    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <div className="text-5xl text-center">
        🗄️
      </div>

      <h3 className="text-xl font-bold text-center mt-4 text-green-600">
        Database
      </h3>

      <p className="text-slate-600 text-center mt-3">
        Mengelola database MySQL agar data
        tersimpan dengan aman dan terstruktur.
      </p>

    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      <div className="text-5xl text-center">
        🚀
      </div>

      <h3 className="text-xl font-bold text-center mt-4 text-purple-600">
        Deployment
      </h3>

      <p className="text-slate-600 text-center mt-3">
        Melakukan pengujian sistem serta memastikan
        website berjalan dengan baik.
      </p>

    </div>

  </div>

  {/* Ringkasan */}
  <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-3xl p-8 text-white">

    <h3 className="text-2xl font-bold">
      ✨ Ringkasan Kontribusi
    </h3>

    <p className="mt-4 leading-8 text-green-100">
      Selama pengerjaan project Dapur Malioboro, saya tidak hanya
      berfokus pada penulisan kode, tetapi juga memastikan setiap
      fitur memiliki tampilan yang responsif, mudah digunakan,
      serta memberikan pengalaman pengguna yang baik. Project ini
      menjadi salah satu pengalaman berharga dalam meningkatkan
      kemampuan saya di bidang Web Development.
    </p>

  </div>

</div>

        {/* Progress */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

          <h2 className="text-3xl font-bold text-slate-800">
            📊 Progress Project
          </h2>

          <div className="mt-8 space-y-6">

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">
                  UI / UX Design
                </span>
                <span className="font-bold text-orange-600">
                  100%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-orange-500 h-3 rounded-full w-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">
                  Frontend Development
                </span>
                <span className="font-bold text-blue-600">
                  100%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full w-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">
                  Backend Laravel
                </span>
                <span className="font-bold text-red-600">
                  95%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-red-600 h-3 rounded-[95%]" style={{ width: "95%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-slate-700">
                  Database MySQL
                </span>
                <span className="font-bold text-green-600">
                  90%
                </span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-600 h-3 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-10 bg-gradient-to-r from-orange-600 to-red-500 rounded-3xl p-10 text-center text-white shadow-2xl">

          <h2 className="text-3xl font-bold">
            🚀 Terima Kasih
          </h2>

          <p className="mt-5 leading-8 text-orange-100 max-w-3xl mx-auto">
            Project <strong>Dapur Malioboro</strong> merupakan salah satu
            pengalaman terbaik saya dalam mengembangkan website menggunakan
            Laravel. Melalui project ini saya belajar membangun aplikasi
            berbasis web yang modern, responsif, dan mudah digunakan oleh
            pengguna.
          </p>

          <p className="mt-6 text-orange-200">
            © 2026 Kaicil Jibril Dukotobo
          </p>

        </div>

      </div>

    </main>
  );
}