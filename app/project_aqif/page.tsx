"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProjectAkif() {

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
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Tombol Kembali */}
        <Link
          href="/portofolio"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          ← Kembali
        </Link>

        {/* Hero */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-3xl shadow-2xl p-10 text-white">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            Featured Project
          </span>

          <h1 className="text-5xl font-extrabold mt-6">
            💳 Syncra POS System
          </h1>

          <p className="mt-5 text-lg leading-8 max-w-3xl text-blue-100">
            Syncra merupakan aplikasi kasir modern berbasis web yang
            dirancang untuk membantu proses transaksi penjualan,
            pengelolaan stok, data pelanggan, dan laporan penjualan
            secara cepat, akurat, dan efisien.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 w-44">
              <h3 className="text-4xl font-bold">10+</h3>
              <p>Fitur</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 w-44">
              <h3 className="text-4xl font-bold">7</h3>
              <p>Teknologi</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 w-44">
              <h3 className="text-4xl font-bold">100%</h3>
              <p>Responsive</p>
            </div>

          </div>

        </div>

        {/* Tentang Project */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mt-10 border border-blue-100">

          <h2 className="text-3xl font-bold text-blue-700">
            📖 Tentang Project
          </h2>

          <p className="mt-6 text-slate-700 leading-8">
            Syncra adalah aplikasi Point of Sale (POS) berbasis web yang
            dikembangkan untuk membantu pelaku usaha dalam mengelola
            transaksi penjualan secara digital. Sistem ini mampu
            mempercepat proses pembayaran sekaligus memudahkan
            pengelolaan data produk, pelanggan, dan stok barang.
          </p>

          <p className="mt-4 text-slate-700 leading-8">
            Project ini dibangun menggunakan Laravel sebagai backend,
            MySQL sebagai database, serta JavaScript dan CSS modern
            untuk menciptakan antarmuka yang responsif dan nyaman
            digunakan oleh kasir maupun pemilik usaha.
          </p>

        </div>

        {/* Fitur & Teknologi */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {/* Fitur */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-cyan-100 hover:-translate-y-2 transition duration-300">

            <h2 className="text-3xl font-bold text-cyan-700">
              🚀 Fitur Utama
            </h2>

            <p className="text-slate-600 mt-3">
              Berbagai fitur yang membantu proses bisnis menjadi lebih mudah.
            </p>

            <div className="space-y-4 mt-7">

              <div className="bg-cyan-50 rounded-xl p-4 text-slate-700 font-medium">
                🛒 Transaksi Penjualan
              </div>

              <div className="bg-cyan-50 rounded-xl p-4 text-slate-700 font-medium">
                📦 Manajemen Produk
              </div>

              <div className="bg-cyan-50 rounded-xl p-4 text-slate-700 font-medium">
                📂 Kategori Produk
              </div>

              <div className="bg-cyan-50 rounded-xl p-4 text-slate-700 font-medium">
                📊 Dashboard Admin
              </div>

              <div className="bg-cyan-50 rounded-xl p-4 text-slate-700 font-medium">
                👥 Data Pelanggan
              </div>

              <div className="bg-cyan-50 rounded-xl p-4 text-slate-700 font-medium">
                📈 Laporan Penjualan
              </div>

              <div className="bg-cyan-50 rounded-xl p-4 text-slate-700 font-medium">
                🧾 Cetak Struk
              </div>

              <div className="bg-cyan-50 rounded-xl p-4 text-slate-700 font-medium">
                📦 Manajemen Stok
              </div>

            </div>

          </div>

          {/* Teknologi */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 hover:-translate-y-2 transition duration-300">

            <h2 className="text-3xl font-bold text-blue-700">
              💻 Teknologi
            </h2>

            <p className="text-slate-600 mt-3">
              Teknologi yang digunakan dalam pengembangan aplikasi.
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

              <span className="bg-cyan-600 text-white px-5 py-2 rounded-full font-semibold">
                Next.js
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
                Berikan Like jika menurutmu aplikasi Syncra bermanfaat.
              </p>

              {like >= 5 && (
                <div className="mt-5">
                  <span className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg">
                    🔥 Project Terpopuler!
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
        <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-3xl shadow-2xl p-10 mt-10 border border-blue-100">

          <div className="text-center">

            <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              👨‍💻 My Contribution
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-5">
              Peran Saya Dalam Project
            </h2>

            <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-8">
              Pada pengembangan aplikasi <strong>Syncra POS System</strong>,
              saya bertanggung jawab dalam membangun backend, mengembangkan
              logika sistem, mendesain database, serta melakukan pengujian
              agar aplikasi berjalan stabil dan mudah digunakan.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-5xl text-center">💻</div>

              <h3 className="text-xl font-bold text-center mt-4 text-blue-600">
                Backend
              </h3>

              <p className="text-center text-slate-600 mt-3">
                Mengembangkan logika aplikasi menggunakan Laravel.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-5xl text-center">⚙️</div>

              <h3 className="text-xl font-bold text-center mt-4 text-cyan-600">
                System Logic
              </h3>

              <p className="text-center text-slate-600 mt-3">
                Membuat proses transaksi, stok, dan laporan penjualan.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-5xl text-center">🗄️</div>

              <h3 className="text-xl font-bold text-center mt-4 text-green-600">
                Database
              </h3>

              <p className="text-center text-slate-600 mt-3">
                Mendesain struktur database MySQL yang efisien.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition">

              <div className="text-5xl text-center">🧪</div>

              <h3 className="text-xl font-bold text-center mt-4 text-purple-600">
                Testing
              </h3>

              <p className="text-center text-slate-600 mt-3">
                Menguji seluruh fitur agar aplikasi berjalan tanpa kendala.
              </p>

            </div>

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
                <span className="font-semibold">Backend Laravel</span>
                <span className="font-bold text-blue-600">100%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full w-full"></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span className="font-semibold">Database</span>
                <span className="font-bold text-green-600">95%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span className="font-semibold">System Testing</span>
                <span className="font-bold text-cyan-600">90%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-cyan-500 h-3 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2">
                <span className="font-semibold">Documentation</span>
                <span className="font-bold text-purple-600">85%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-purple-600 h-3 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="mt-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-center text-white shadow-2xl">

          <h2 className="text-3xl font-bold">
            🚀 Terima Kasih
          </h2>

          <p className="mt-5 leading-8 text-blue-100 max-w-3xl mx-auto">
            Syncra POS System menjadi salah satu pengalaman berharga
            dalam mengembangkan aplikasi kasir modern berbasis web.
            Melalui project ini saya meningkatkan kemampuan dalam
            backend development, database management, serta membangun
            sistem yang efisien dan mudah digunakan.
          </p>

          <p className="mt-6 text-blue-200">
            © 2026 Akif Alfatih
          </p>

        </div>

      </div>

    </main>
  );
}