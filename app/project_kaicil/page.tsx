import Link from "next/link";

export default function ProjectKaicil() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-100 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        <Link
          href="/portofolio"
          className="inline-block bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          ← Kembali
        </Link>

        <h1 className="text-5xl font-bold text-center mt-8">
          🍽️ Project Dapur Malioboro
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Website Pemesanan Makanan Berbasis Web
        </p>

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold text-orange-600">
            Tentang Project
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Dapur Malioboro merupakan website pemesanan makanan berbasis web
            yang dirancang untuk memudahkan pelanggan dalam melakukan
            pemesanan makanan secara online. Sistem ini menyediakan fitur
            menu makanan, keranjang belanja, pemesanan, dashboard admin,
            serta pengelolaan data transaksi.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-orange-600">
              🎯 Fitur
            </h2>

            <ul className="mt-4 space-y-2">
              <li>🍽️ Menu Makanan</li>
              <li>🛒 Keranjang Belanja</li>
              <li>📦 Pemesanan Online</li>
              <li>👨‍💼 Dashboard Admin</li>
              <li>💳 Manajemen Transaksi</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600">
              💻 Teknologi
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-red-100 px-4 py-2 rounded-full">Laravel</span>
              <span className="bg-blue-100 px-4 py-2 rounded-full">HTML</span>
              <span className="bg-yellow-100 px-4 py-2 rounded-full">CSS</span>
              <span className="bg-green-100 px-4 py-2 rounded-full">JavaScript</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full">MySQL</span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold text-green-600">
            👨‍💻 Peran Saya
          </h2>

          <ul className="mt-4 space-y-2">
            <li>✅ Mendesain UI Website</li>
            <li>✅ Membuat Frontend</li>
            <li>✅ Menghubungkan Database</li>
            <li>✅ Mengembangkan Fitur Laravel</li>
          </ul>

        </div>

      </div>

    </main>
  );
}