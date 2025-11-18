const cron = require('node-cron');
const axios = require('axios');

// Cấu hình các liên kết cần chạy
const links = [
  '', // link nap the cao
  'https://cheatiosvip.io.vn/cron/deposit/check',
];

// Hàm chạy liên kết
async function runLinks() {
  for (const link of links) {
    try {
      const response = await axios.get(link);
      console.log(`Fetched ${link} with status ${response.status}`);
    } catch (error) {
      console.error(`Failed to fetch ${link}: ${error.message}`);
    }
  }
}

// Đặt lịch chạy cron 2 giây
cron.schedule('*/8 * * * * *', () => {
  console.log('Running cron job');
  runLinks();
});
