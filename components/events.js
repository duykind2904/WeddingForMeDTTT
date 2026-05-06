const EventsComponent = {
  data() {
    return {
      events: [
        {
          icon: 'fas fa-house-user',
          title: 'Lễ Gia Tiên Nhà Trai',
          rows: [
            { icon: 'fas fa-calendar-day', text: 'Thứ Bảy, ngày 10 tháng 10 năm 2026' },
            { icon: 'fas fa-clock',        text: '07:00 Sáng' },
            { icon: 'fas fa-map-marker-alt', text: '123 Đường ABC, Phường 1, Quận 1, TP. HCM' }
          ],
          map: 'https://maps.google.com/?q=Quan+1+Ho+Chi+Minh'
        },
        {
          icon: 'fas fa-home',
          title: 'Lễ Gia Tiên Nhà Gái',
          rows: [
            { icon: 'fas fa-calendar-day', text: 'Thứ Bảy, ngày 10 tháng 10 năm 2026' },
            { icon: 'fas fa-clock',        text: '09:00 Sáng' },
            { icon: 'fas fa-map-marker-alt', text: '456 Đường XYZ, Phường 5, Quận 3, TP. HCM' }
          ],
          map: 'https://maps.google.com/?q=Quan+3+Ho+Chi+Minh'
        },
        {
          icon: 'fas fa-rings-wedding',
          title: 'Tiệc Cưới',
          rows: [
            { icon: 'fas fa-calendar-day', text: 'Thứ Bảy, ngày 10 tháng 10 năm 2026' },
            { icon: 'fas fa-clock',        text: '11:00 Sáng' },
            { icon: 'fas fa-map-marker-alt', text: 'Diamond Palace Wedding Center\n123 Nguyễn Văn Linh, Quận 7, TP. HCM' }
          ],
          map: 'https://maps.google.com/?q=Nguyen+Van+Linh+Quan+7+Ho+Chi+Minh'
        }
      ]
    }
  },
  template: `
    <section id="events" class="events-section fade-up">
      <div class="section-title">
        <span class="tag">Schedule</span>
        <span class="script-title">Sự Kiện Cưới</span>
        <div class="divider"><i class="fas fa-calendar-heart"></i></div>
      </div>

      <div v-for="(ev, i) in events" :key="i" class="event-card">
        <div class="event-card-head">
          <i :class="ev.icon"></i>
          <span class="ev-title">{{ ev.title }}</span>
        </div>
        <div class="event-card-body">
          <div v-for="(row, j) in ev.rows" :key="j" class="event-row">
            <i :class="row.icon"></i>
            <span style="white-space:pre-line">{{ row.text }}</span>
          </div>
          <a :href="ev.map" target="_blank" class="event-map-btn">
            <i class="fas fa-directions"></i> Xem Bản Đồ
          </a>
        </div>
      </div>
    </section>
  `
}
