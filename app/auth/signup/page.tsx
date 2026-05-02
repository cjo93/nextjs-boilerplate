'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupTerminal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement authentication
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div style={{
      background: '#000000',
      color: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: '13px',
      lineHeight: 1.6,
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        margin: '0 16px',
        border: '1px solid #222',
      }}>
        {/* Header */}
        <div style={{
          borderBottom: '1px solid #222',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ color: '#00E5FF' }}>_</span>
          <span style={{ color: '#00E5FF' }}>[ SYSTEM_REGISTRATION ]</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} style={{ padding: '32px 20px' }}>
          {/* Email Input */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="> ENTER_EMAIL..."
              style={{
                width: '100%',
                background: '#000000',
                border: '1px solid #333',
                color: '#ffffff',
                padding: '12px 12px',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '13px',
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'border-color 150ms ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#ffffff'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#333'}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="> ENTER_PASSWORD..."
              style={{
                width: '100%',
                background: '#000000',
                border: '1px solid #333',
                color: '#ffffff',
                padding: '12px 12px',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '13px',
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'border-color 150ms ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#ffffff'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#333'}
            />
          </div>

          {/* Confirm Password Input */}
          <div style={{ marginBottom: '28px' }}>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="> CONFIRM_PASSWORD..."
              style={{
                width: '100%',
                background: '#000000',
                border: '1px solid #333',
                color: '#ffffff',
                padding: '12px 12px',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '13px',
                boxSizing: 'border-box',
                outline: 'none',
                transition: 'border-color 150ms ease',
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#ffffff'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#333'}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              height: '44px',
              background: 'transparent',
              border: '1px solid #ffffff',
              color: '#ffffff',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: loading ? 'default' : 'pointer',
              transition: 'background 150ms ease, color 150ms ease',
              opacity: loading ? 0.5 : 1,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            {loading ? '[ INITIALIZING... ]' : '[ REQUEST_ACCESS ]'}
          </button>
        </form>

        {/* OAuth Links */}
        <div style={{
          borderTop: '1px solid #222',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          <a href="#" style={{
            color: '#888888',
            textDecoration: 'none',
            fontSize: '12px',
            transition: 'color 150ms ease',
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#00E5FF'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}
          >
            &gt; INITIALIZE_VIA_GITHUB
          </a>
          <a href="#" style={{
            color: '#888888',
            textDecoration: 'none',
            fontSize: '12px',
            transition: 'color 150ms ease',
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#00E5FF'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#888888'}
          >
            &gt; INITIALIZE_VIA_GOOGLE
          </a>
        </div>

        {/* Login Link */}
        <div style={{
          borderTop: '1px solid #222',
          padding: '16px 20px',
          textAlign: 'center',
          fontSize: '12px',
          color: '#666666',
        }}>
          <span>already_initialized? </span>
          <Link href="/auth/login" style={{
            color: '#00E5FF',
            textDecoration: 'none',
            transition: 'opacity 150ms ease',
          }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            [ AUTHENTICATE ]
          </Link>
        </div>
      </div>
    </div>
  );
}
