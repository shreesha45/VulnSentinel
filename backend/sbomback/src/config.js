const path = require('path');

const defaultCorsOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://0.0.0.0:5173',
  'http://[::1]:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://0.0.0.0:3000',
  'http://[::1]:3000',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
  'http://0.0.0.0:4173',
  'http://[::1]:4173',
];

const corsOrigins = (process.env.CORS_ORIGIN || defaultCorsOrigins.join(','))
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

function isAllowedOrigin(origin) {
  if (!origin) return true;
  if (corsOrigins.includes(origin)) return true;

  try {
    const { protocol, hostname, port } = new URL(origin);
    const isLocalHost = ['localhost', '127.0.0.1', '0.0.0.0', '[::1]'].includes(hostname) || hostname === '::1';
    return protocol === 'http:' || protocol === 'https:' ? isLocalHost : false;
  } catch {
    return false;
  }
}

module.exports = {
  port: Number(process.env.PORT) || 5000,
  secureCookies: process.env.COOKIE_SECURE === 'true' || process.env.NODE_ENV === 'production',
  sessionDurationMs: 12 * 60 * 60 * 1000,
  accountsFile: path.join(__dirname, '..', 'data', 'accounts.json'),
  osvBaseUrl: process.env.OSV_BASE_URL || 'https://api.osv.dev',
  osvTimeoutMs: Number(process.env.OSV_TIMEOUT_MS) || 15000,
  groqModel: process.env.GROQ_MODEL || 'qwen/qwen3.8-27b',
  corsOrigins,
  isAllowedOrigin,
  bodyLimit: process.env.BODY_LIMIT || '25mb',
  maxScans: Number(process.env.MAX_SCANS) || 50,
  // Scans are kept in memory. Set PERSIST_SCANS=true to also write them to a local JSON file.
  persistFile: process.env.PERSIST_SCANS === 'true' ? path.join(__dirname, '..', 'data', 'scans.json') : null,
};
