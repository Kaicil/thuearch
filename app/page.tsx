import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center px-6">

      <div className="max-w-6xl w-full text-center">

        <h1 className="text-5xl font-bold text-slate-800">
          My Portfolio
        </h1>

        <p className="text-gray-600 mt-4 text-lg">
          Selamat Datang di Website Portofolio
        </p>

        <p className="text-gray-500 mb-12">
          Kaicil Jibril Dukotobo & Akif Alfatih
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Profil */}
          <Link
            href="/profile"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition block"
          >
            <div className="text-6xl">
              👤
            </div>

            <h2 className="text-2xl font-bold mt-5">
              Profil
            </h2>

            <p className="text-gray-500 mt-3">
              Lihat informasi lengkap mengenai anggota tim.
            </p>
          </Link>

          {/* Portofolio */}
          <Link
            href="/portofolio"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition block"
          >
            <div className="text-6xl">
              💼
            </div>

            <h2 className="text-2xl font-bold mt-5">
              Portofolio
            </h2>

            <p className="text-gray-500 mt-3">
              <br />
              <span className="font-semibold text-slate-700">
                Kaicil Jibril Dukotobo
              </span>
              <br />
              &
              <br />
              <span className="font-semibold text-slate-700">
                Akif Alfatih
              </span>
            </p>
          </Link>

        </div>

        <footer className="mt-16 text-gray-500 text-sm">
          © 2026 Kaicil Jibril Dukotobo & Akif Alfatih
        </footer>

      </div>

    </main>
  );
}