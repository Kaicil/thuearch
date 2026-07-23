import Link from "next/link";

export default function ProjectAkif() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-100 py-10 px-6">

      <div className="max-w-6xl mx-auto">

        <Link
          href="/portofolio"
          className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
        >
          ← Kembali
        </Link>

        <h1 className="text-5xl font-bold text-center mt-8">
          💳 Project Syncra
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Aplikasi Kasir Modern
        </p>

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-3xl font-bold text-green-600">
            Tentang Project
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Syncra merupakan aplikasi kasir modern yang membantu proses
            transaksi penjualan menjadi lebih cepat, efisien, dan
            terstruktur. Sistem ini dilengkapi dengan pengelolaan
            produk, stok barang, laporan penjualan, serta data pelanggan.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-green-600">
              🚀 Fitur
            </h2>

            <ul className="mt-4 space-y-2">
              <li>🛒 Transaksi Penjualan</li>
              <li>📦 Manajemen Produk</li>
              <li>📊 Laporan Penjualan</li>
              <li>👥 Data Pelanggan</li>
              <li>📁 Manajemen Stok</li>
            </ul>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">

            <h2 className="text-2xl font-bold text-blue-600">
              💻 Teknologi
            </h2>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-red-100 px-4 py-2 rounded-full">Laravel</span>
              <span className="bg-blue-100 px-4 py-2 rounded-full">Next.js</span>
              <span className="bg-yellow-100 px-4 py-2 rounded-full">JavaScript</span>
              <span className="bg-green-100 px-4 py-2 rounded-full">MySQL</span>
              <span className="bg-purple-100 px-4 py-2 rounded-full">GitHub</span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold text-blue-600">
            👨‍💻 Peran Saya
          </h2>

          <ul className="mt-4 space-y-2">
            <li>✅ Mengembangkan Backend</li>
            <li>✅ Membuat Logika Sistem</li>
            <li>✅ Pengujian Aplikasi</li>
            <li>✅ Dokumentasi Project</li>
          </ul>

        </div>

      </div>

    </main>
  );
}