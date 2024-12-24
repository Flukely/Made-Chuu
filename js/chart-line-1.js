// ข้อมูลตัวอย่าง
var data = {
  daily: [10, 20, 15, 25, 30, 35, 40],
  monthly: [300, 450, 500, 600, 700, 750, 800],
  yearly: [4500, 4700, 4900, 5200, 5800, 6000, 6500]
};

// ตัวเลือกสำหรับกราฟ
var optionsLine = {
  chart: {
    type: 'line',
    height: 350,
    zoom: { enabled: false }
  },
  series: [{
    name: 'ยอดขาย',
    data: data.daily // เริ่มต้นที่ข้อมูลรายวัน
  }],
  xaxis: {
    categories: ['1', '2', '3', '4', '5', '6', '7'], // วันที่, เดือน หรือปี
    title: { text: 'ช่วงเวลา' }
  },
  yaxis: {
    title: { text: 'ยอดขาย (บาท)' }
  },
  colors: ['#1cc88a'],
  stroke: { width: 2, curve: 'smooth' },
  tooltip: { theme: 'light' },
  legend: { position: 'top' }
};

// สร้างกราฟ
var chartLine = new ApexCharts(document.querySelector("#salesTrendChart"), optionsLine);
chartLine.render();

// ฟังก์ชันอัปเดตกราฟ
function updateChart(type) {
  chartLine.updateSeries([{ name: 'ยอดขาย', data: data[type] }]);

  if (type === 'daily') {
    chartLine.updateOptions({
      xaxis: { categories: ['1', '2', '3', '4', '5', '6', '7'], title: { text: 'วันที่' } }
    });
    document.getElementById('selectedPeriod').innerText = 'ข้อมูลแบบ: รายวัน';
  } else if (type === 'monthly') {
    chartLine.updateOptions({
      xaxis: { categories: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.'], title: { text: 'เดือน' } }
    });
    document.getElementById('selectedPeriod').innerText = 'ข้อมูลแบบ: รายเดือน';
  } else if (type === 'yearly') {
    chartLine.updateOptions({
      xaxis: { categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'], title: { text: 'ปี' } }
    });
    document.getElementById('selectedPeriod').innerText = 'ข้อมูลแบบ: รายปี';
  }
}

// กำหนด Event Listener ให้ Dropdown
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault();  // ป้องกันการรีเฟรชหน้า

    const selectedValue = event.target.getAttribute('data-type'); // รับค่าจาก data-type
    updateChart(selectedValue); // เรียกฟังก์ชัน updateChart
  });
});