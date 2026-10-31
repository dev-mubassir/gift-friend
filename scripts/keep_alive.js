/**
 * Tiny Keep-Alive Pinger
 * 
 * Periodically pings your website URL to keep instances warm,
 * prevent sleep/cold boots, and keep Edge caches active.
 * 
 * Usage:
 *   node scripts/keep_alive.js https://your-site.vercel.app
 * 
 * Or set TARGET_URL in your environment:
 *   TARGET_URL=https://your-site.vercel.app node scripts/keep_alive.js
 */

const TARGET_URL = process.argv[2] || process.env.TARGET_URL || 'https://gift-friend.vercel.app';
const INTERVAL_MINUTES = 10;
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000;

console.log('--------------------------------------------------');
console.log('🌸 Tiny Instance Keep-Alive Pinger');
console.log(`🎯 Target URL: ${TARGET_URL}`);
console.log(`⏱️ Interval: Every ${INTERVAL_MINUTES} minutes`);
console.log('--------------------------------------------------');

async function ping() {
  const timestamp = new Date().toLocaleTimeString();
  try {
    const startTime = Date.now();
    const response = await fetch(TARGET_URL, {
      method: 'GET',
      headers: {
        'User-Agent': 'KeepAlive-Bot/1.0 (+https://github.com/dev-mubassir/gift-friend)',
      },
    });
    const duration = Date.now() - startTime;

    if (response.ok) {
      console.log(`[${timestamp}] ✅ Instance warm! Status: ${response.status} (${duration}ms)`);
    } else {
      console.warn(`[${timestamp}] ⚠️ Received status: ${response.status} (${duration}ms)`);
    }
  } catch (error) {
    console.error(`[${timestamp}] ❌ Ping error:`, error.message);
  }
}

// Immediate first ping
ping();

// Periodic recurring ping
setInterval(ping, INTERVAL_MS);
