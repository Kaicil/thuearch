import Link from "next/link";

export default function Profile() {
  return (
    <main className="min-h-screen bg-slate-100 flex justify-center items-center">

      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-xl w-full">

        <Link
          href="/"
          className="text-blue-600"
        >
          ← Kembali
        </Link>

        <div className="w-28 h-28 rounded-full bg-blue-600 text-white text-5xl font-bold flex items-center justify-center mx-auto mt-6">
          KJ
        </div>

        <h1 className="text-3xl font-bold text-center mt-6">
          Kaicil Jibril
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Web Developer | Laravel | Next.js
        </p>

      </div>

    </main>
  );
}