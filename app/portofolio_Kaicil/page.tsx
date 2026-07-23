import Link from "next/link";

export default function PortofolioKaicil() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-100 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Tombol Kembali */}
        <Link
          href="/portofolio"
          className="inline-flex items-center bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition shadow-lg"
        >
          ← Kembali
        </Link>

        {/* Header */}
        <div className="text-center mt-10">

          <h1 className="text-5xl font-bold text-slate-800">
            Portofolio
          </h1>

          <p className="text-xl text-orange-600 font-semibold mt-3">
            Kaicil Jibril Dukotobo
          </p>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto leading-8">
            Saya merupakan siswa SMK Telkom Makassar jurusan Rekayasa
            Perangkat Lunak yang memiliki minat dalam pengembangan website
            menggunakan Laravel, Next.js, dan MySQL.
          </p>

        </div>

        {/* Card Menu */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* Tentang Saya */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">

            <div className="text-center text-6xl">
              👨‍💻
            </div>

            <h2 className="text-3xl font-bold text-center mt-5">
              Tentang Saya
            </h2>

            <p className="text-gray-600 text-center mt-4 leading-7">
              Profil lengkap, hobi, aktivitas,
              skill, dan perjalanan belajar saya.
            </p>

            <div className="text-center mt-8">

              <Link
                href="tentang_kaicil"
                className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition"
              >
                Lihat Tentang Saya
              </Link>

            </div>

          </div>

          {/* Project */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">

            <div className="text-center text-6xl">
              🍽️
            </div>

            <h2 className="text-3xl font-bold text-center mt-5">
              Project Dapur Malioboro
            </h2>

            <p className="text-gray-600 text-center mt-4 leading-7">
              Website pemesanan makanan berbasis Laravel
              yang memiliki dashboard admin,
              pemesanan online, serta database MySQL.
            </p>

            <div className="text-center mt-8">

              <Link
                href="project_kaicil"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Lihat Project
              </Link>

            </div>

          </div>

        </div>

        {/* Quote */}
        <div className="mt-12 bg-orange-600 rounded-3xl p-8 text-center text-white shadow-xl">

          <h2 className="text-2xl font-bold">
            "Setiap project adalah kesempatan untuk belajar,
            berkembang, dan menghasilkan solusi melalui teknologi."
          </h2>

        </div>

      </div>

    </main>
  );
}