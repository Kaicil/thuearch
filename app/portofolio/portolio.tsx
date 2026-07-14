import Link from "next/link";
import { User, Heart, Activity } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 px-6">

      <div className="max-w-5xl mx-auto">

        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Kembali
        </Link>

        <h1 className="text-4xl font-bold text-center mt-6">
          Tentang Saya
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Perkenalkan, saya Kaicil Jibril Dukotobo.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {/* Profil */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="text-blue-600" />
            </div>

            <h2 className="text-xl font-semibold mt-4">
              Profil
            </h2>

            <p className="text-gray-600 mt-3">
              Saya adalah siswa SMK Telkom Makassar
              jurusan Rekayasa Perangkat Lunak yang
              tertarik pada pengembangan website
              menggunakan Laravel dan Next.js.
            </p>

          </div>

          {/* Hobi */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
              <Heart className="text-red-500" />
            </div>

            <h2 className="text-xl font-semibold mt-4">
              Hobi
            </h2>

            <ul className="text-gray-600 mt-3 space-y-2">
              <li>⚽ Bermain Futsal</li>
              <li>💻 Belajar Coding</li>
              <li>🎮 Bermain Game</li>
              <li>📖 Membaca Teknologi</li>
            </ul>

          </div>

          {/* Aktivitas */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <Activity className="text-green-600" />
            </div>

            <h2 className="text-xl font-semibold mt-4">
              Aktivitas
            </h2>

            <ul className="text-gray-600 mt-3 space-y-2">
              <li>📚 Belajar di SMK Telkom Makassar</li>
              <li>💻 Membuat Website</li>
              <li>🤝 Belajar Kolaborasi GitHub</li>
              <li>🚀 Mengembangkan Skill Web Developer</li>
            </ul>

          </div>

        </div>

      </div>

    </main>
  );
}