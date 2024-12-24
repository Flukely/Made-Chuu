$(document).ready(function () {
    // Initialize DataTable
    $('#productTable').DataTable({
      "pageLength": 5, // จำนวนแถวต่อหน้า
      "searching": true, // เปิดการค้นหาผ่านแถบค้นหา
      "ordering": true, // เปิดการจัดเรียงข้อมูลตามคอลัมน์
      "responsive": true, // ทำให้ตารางรองรับการแสดงผลบนอุปกรณ์ต่างๆ
      "paging": false, // ปิดการแบ่งหน้า
      "language": {
        "info": "", // ปิดข้อความ "Showing X to Y of Z entries"
        "lengthMenu": "", // ปิดข้อความ "Show entries"
        "paginate": {
          "previous": "Previous", // ปรับข้อความของปุ่มก่อนหน้า
          "next": "Next", // ปรับข้อความของปุ่มถัดไป
        }
      }
    });
  });
  