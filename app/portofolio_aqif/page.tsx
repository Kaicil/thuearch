import Link from "next/link";

export default function Portofolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Tombol Kembali */}
        <Link
          href="/pilih-portofolio"
          className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          ← Kembali
        </Link>

        {/* Header */}
        <div className="text-center mt-10">

          <h1 className="text-5xl font-bold text-slate-800">
            Portofolio
          </h1>

          <p className="text-xl text-blue-600 font-semibold mt-3">
            Akif Alfatih
          </p>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-8">
            Seorang siswa Rekayasa Perangkat Lunak yang memiliki ketertarikan
            pada pengembangan aplikasi berbasis web. Berfokus pada pembuatan
            sistem yang modern, responsif, dan memberikan pengalaman pengguna
            yang nyaman melalui desain antarmuka yang sederhana namun menarik.
          </p>

        </div>

        {/* Menu */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* Tentang Saya */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">

            <div className="text-6xl text-center">
              👨‍💻
            </div>

            <h2 className="text-3xl font-bold text-center mt-5">
              Tentang Saya
            </h2>

            <p className="text-gray-600 text-center mt-4 leading-7">
              Kenali lebih dekat profil, hobi, aktivitas,
              serta kemampuan yang dimiliki Akif Alfatih.
            </p>

            <div className="text-center mt-8">

              <Link
                href="tentang_aqif"
                className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
              >
                Lihat Tentang Saya
              </Link>

            </div>

          </div>

          {/* Project */}
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">

            <div className="text-6xl text-center">
              💻
            </div>

            <h2 className="text-3xl font-bold text-center mt-5">
              Project Syncra
            </h2>

            <p className="text-gray-600 text-center mt-4 leading-7">
              Lihat informasi lengkap mengenai project
              aplikasi kasir Syncra beserta teknologi
              yang digunakan selama pengembangannya.
            </p>

            <div className="text-center mt-8">

              <Link
                href="project_aqif"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Lihat Project
              </Link>

            </div>

          </div>

        </div>

        {/* Quote */}
        <div className="mt-12 bg-blue-600 text-white rounded-3xl p-8 text-center shadow-lg">

          <h2 className="text-2xl font-bold">
            "Membangun aplikasi bukan hanya tentang menulis kode,
            tetapi menciptakan solusi yang memberikan manfaat bagi pengguna."
          </h2>

        </div>

      </div>

    </main>
  );
}