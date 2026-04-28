'use client';

import { useEffect, useState } from 'react';

interface GitHubData {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  bio: string | null;
}

export default function GitHubWidget() {
  const [data, setData]   = useState<GitHubData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/Farikhi562')
      .then(r => r.json())
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) return null;

  return (
    <a
      href="https://github.com/Farikhi562"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-2xl border card-hover transition-all hover:border-blue-300"
      style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
    >
      {/* GitHub icon */}
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" style={{ color: 'var(--text-2)' }}>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-bold" style={{ color: 'var(--text)' }}>Farikhi562</p>
        {data ? (
          <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>
            {data.public_repos} repos · {data.followers} followers
          </p>
        ) : (
          <p className="text-[10px]" style={{ color: 'var(--text-muted)' }}>Loading...</p>
        )}
      </div>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--text-muted)' }}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
    </a>
  );
}