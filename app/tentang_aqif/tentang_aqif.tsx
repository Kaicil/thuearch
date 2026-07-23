import Link from "next/link";

export default function Akif() {
  return (
    <main className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-5xl mx-auto">

        <Link
          href="/pilih-portofolio"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          ← Kembali
        </Link>

        <h1 className="text-5xl font-bold text-center mt-8">
          Tentang Saya
        </h1>

        <h2 className="text-3xl text-green-600 text-center mt-3">
          Akif Alfatih
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

          <h3 className="text-2xl font-bold">
            Profil
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Halo, saya Akif Alfatih.
            Saya memiliki minat dalam pengembangan
            aplikasi berbasis web dan sistem informasi.
            Saya senang belajar teknologi baru
            serta bekerja sama dalam tim.
          </p>

          <h3 className="text-2xl font-bold mt-8">
            Hobi
          </h3>

          <ul className="mt-3 space-y-2">
            <li>💻 Coding</li>
            <li>⚽ Bermain Futsal</li>
            <li>📚 Membaca</li>
            <li>🎮 Bermain Game</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8">
            Aktivitas
          </h3>

          <ul className="mt-3 space-y-2">
            <li>📖 Belajar Pemrograman</li>
            <li>🖥️ Membuat Aplikasi Kasir</li>
            <li>🤝 Kolaborasi GitHub</li>
          </ul>

          <Link
            href="/portofolio/tentang-project"
            className="inline-block mt-10 bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Project Tim →
          </Link>

        </div>

      </div>

    </main>
  );
}