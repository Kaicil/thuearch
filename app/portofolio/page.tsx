import Link from "next/link";

export default function PilihPortofolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-slate-100 flex items-center justify-center px-6">

      <div className="max-w-5xl w-full">

        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          ← Kembali
        </Link>

        <h1 className="text-5xl font-bold text-center mt-8">
          Portofolio Tim
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Pilih salah satu anggota untuk melihat portofolionya.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {/* Kaicil */}
          <Link href="/portofolio_Kaicil">

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer">

              <div className="text-6xl text-center">
                👨‍💻
              </div>

              <h2 className="text-3xl font-bold text-center mt-5">
                Kaicil Jibril Dukotobo
              </h2>

              <p className="text-center text-gray-500 mt-3">
                Kaicil Jibril Dukotobo
              </p>

              <button className="w-full mt-8 bg-orange-600 text-white py-3 rounded-xl">
                Lihat Portofolio
              </button>

            </div>

          </Link>

          {/* Akif */}
          <Link href="/portofolio_aqif">

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer">

              <div className="text-6xl text-center">
                👨‍💻
              </div>

              <h2 className="text-3xl font-bold text-center mt-5">
                Akif Alfatih
              </h2>

              <p className="text-center text-gray-500 mt-3">
                Aqif alfatih
              </p>

              <button className="w-full mt-8 bg-green-600 text-white py-3 rounded-xl">
                Lihat Portofolio
              </button>

            </div>

          </Link>

        </div>

      </div>

    </main>
  );
}