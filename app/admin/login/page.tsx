'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple hardcoded password for demonstration. 
    // Recommended: Move this to an API check with hashed passwords.
    if (password === 'Lokeshen@58') {
      localStorage.setItem('cnj_admin_auth', 'true')
      router.push('/admin')
      router.refresh()
    } else {
      setError('Incorrect admin password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-sage-light dark:bg-slate-950 px-4 transition-colors">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-100 dark:border-white/5">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-jungle-dark rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-jungle-dark dark:text-white">Admin Access</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">Please enter your credentials</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-jungle-dark dark:text-gray-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-white/10 dark:bg-slate-800 dark:text-white rounded-lg focus:outline-none focus:border-leaf-green transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-jungle-dark text-white font-bold rounded-lg hover:bg-jungle-green transition-all shadow-md active:scale-[0.98]"
          >
            Sign In to Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}
