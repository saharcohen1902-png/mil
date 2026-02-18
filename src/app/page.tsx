"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const LOGIN_USERNAME = "test";
const LOGIN_PASSWORD = "19022002";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (username !== LOGIN_USERNAME || password !== LOGIN_PASSWORD) {
      setError("שם המשתמש או הסיסמה שגויים");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F5F6F8] px-4 py-8">
      <div className="w-full max-w-sm">
        <h1 className="mb-8 text-center text-2xl font-bold text-[#1C1C1C]">
          התחברות
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[20px] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
        >
          <label className="mb-1 block text-sm font-medium text-gray-700">
            שם משתמש
          </label>
          <input
            type="text"
            placeholder="הכנס שם משתמש"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#7edc82] focus:outline-none focus:ring-2 focus:ring-[#7edc82]/20"
            dir="ltr"
            autoComplete="username"
          />

          <label className="mb-1 block text-sm font-medium text-gray-700">
            סיסמה
          </label>
          <input
            type="password"
            placeholder="הכנס סיסמה"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-[#7edc82] focus:outline-none focus:ring-2 focus:ring-[#7edc82]/20"
            dir="ltr"
            autoComplete="current-password"
          />

          {error && (
            <p className="mb-4 text-center text-sm text-red-600">{error}</p>
          )}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#7edc82] py-3.5 text-base font-semibold text-gray-900 shadow-sm hover:opacity-95"
          >
            התחבר
          </button>
        </form>
      </div>
    </div>
  );
}
