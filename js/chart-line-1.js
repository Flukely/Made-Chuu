// ข้อมูลและการตั้งค่าสำหรับ ApexCharts Line Chart
var options = {
    chart: {
      type: 'line', // เปลี่ยนเป็น line chart
      height: 350
    },
    series: [
      {
        name: 'ยอดขาย',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148] // ข้อมูลกราฟ
      }
    ],
    xaxis: {
      categories: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.'] // ชื่อแกน X
    },
    yaxis: {
      title: {
        text: 'ยอดขาย (บาท)' // ชื่อแกน Y
      }
    },
    colors: ['#4e73df'], // สีของเส้น
    stroke: {
      width: 2, // ความหนาของเส้น
      curve: 'smooth' // เส้นโค้งนุ่มนวล
    },
    markers: {
      size: 4, // ขนาดจุด
      colors: ['#1cc88a'], // สีของจุด
      strokeColors: '#fff',
      strokeWidth: 2
    },
    tooltip: {
      theme: 'light', // ธีม tooltip
      y: {
        formatter: function (val) {
          return `${val} บาท`; // เพิ่มหน่วยบาทใน tooltip
        }
      }
    }
  };
  
  // สร้างกราฟและแสดงผลใน id "myLineChart"
  var chart = new ApexCharts(document.querySelector("#myLineChart"), options);
  chart.render();
  