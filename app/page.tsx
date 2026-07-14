import Link from "next/link";
import { User, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="w-full max-w-4xl p-8">

        <h1 className="text-5xl font-bold text-center text-slate-800">
          My Portfolio
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Kaicil Jibril Dukotobo
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <Link href="/profile">

            <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">

                <User className="text-blue-600" size={40} />

              </div>

              <h2 className="text-2xl font-bold text-center mt-6">
                Profil
              </h2>

              <p className="text-gray-500 text-center mt-2">
                Profil
              </p>

            </div>

          </Link>

          <Link href="/portfolio">

            <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition">

              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">

                <Briefcase className="text-green-600" size={40} />

              </div>

              <h2 className="text-2xl font-bold text-center mt-6">
                Portofolio
              </h2>

              <p className="text-gray-500 text-center mt-2">
                portofolio
              </p>

            </div>

          </Link>

        </div>

      </div>

    </main>
  );
}