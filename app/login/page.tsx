'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase/browser';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/defrag';
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const supabase = createSupabaseBrowserClient();
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (authError) throw authError;
      
      // Successful handshake. Route to the Engine.
      router.push(redirectTo);
    } catch (err: any) {
      setError(err.message || 'AUTHENTICATION_FAILED. VERIFY_CREDENTIALS.');
      console.log('[v0] Login error:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async (provider: 'github' | 'google') => {
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback?redirectTo=${encodeURIComponent(redirectTo)}`,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || 'OAUTH_INITIALIZATION_FAILED.');
      console.log('[v0] OAuth error:', err.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center" style={{ background: '#000000' }}>
      <div className="w-full max-w-md px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 
            className="text-4xl font-bold mb-2 tracking-[-0.04em]"
            style={{ 
              color: '#00E5FF',
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            [ INITIALIZE ]
          </h1>
          <p 
            className="text-sm"
            style={{ 
              color: '#ffffff',
              fontFamily: '"JetBrains Mono", monospace',
              opacity: 0.6,
              letterSpacing: '0.08em',
            }}
          >
            AUTHENTICATION_REQUIRED
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="> ENTER_EMAIL..."
              required
              className="w-full px-4 py-3 bg-transparent border text-white placeholder-[#666666] focus:outline-none transition-colors"
              style={{
                borderColor: '#333333',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '13px',
                letterSpacing: '0.02em',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#ffffff'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#333333'}
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="> ENTER_PASSWORD..."
              required
              className="w-full px-4 py-3 bg-transparent border text-white placeholder-[#666666] focus:outline-none transition-colors"
              style={{
                borderColor: '#333333',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '13px',
                letterSpacing: '0.02em',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#ffffff'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#333333'}
            />
          </div>

          {/* Error */}
          {error && (
            <p 
              className="text-xs"
              style={{ 
                color: '#ff4444',
                fontFamily: '"JetBrains Mono", monospace',
              }}
            >
              [ ERROR ] {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 border border-white text-white font-mono hover:bg-white hover:text-black transition-colors disabled:opacity-50"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '13px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            {loading ? '[ INITIALIZING... ]' : '[ SIGN IN ]'}
          </button>
        </form>

        {/* Divider */}
        <div className="my-8 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: '#333333' }}></div>
          <span 
            className="text-xs"
            style={{ 
              color: '#666666',
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            OR
          </span>
          <div className="flex-1 h-px" style={{ background: '#333333' }}></div>
        </div>

        {/* OAuth */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => handleOAuth('github')}
            disabled={loading}
            className="w-full px-4 py-3 border text-white transition-colors disabled:opacity-50"
            style={{
              borderColor: '#333333',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '12px',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00E5FF';
              e.currentTarget.style.color = '#00E5FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#333333';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            &gt; INITIALIZE_VIA_GITHUB
          </button>
          <button
            type="button"
            onClick={() => handleOAuth('google')}
            disabled={loading}
            className="w-full px-4 py-3 border text-white transition-colors disabled:opacity-50"
            style={{
              borderColor: '#333333',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '12px',
              letterSpacing: '0.08em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#00E5FF';
              e.currentTarget.style.color = '#00E5FF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#333333';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            &gt; INITIALIZE_VIA_GOOGLE
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p 
            className="text-xs"
            style={{ 
              color: '#666666',
              fontFamily: '"JetBrains Mono", monospace',
            }}
          >
            No account?{' '}
            <Link 
              href="/signup"
              className="hover:text-[#00E5FF] transition-colors"
              style={{ color: '#00E5FF' }}
            >
              &gt; REGISTER_SYSTEM_ACCESS
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
