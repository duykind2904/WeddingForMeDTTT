const EventsComponent = {
  data() {
    return {
      events: [
        {
          icon: 'fas fa-house-user',
          title: 'Lễ Gia Tiên Nhà Trai',
          rows: [
            { icon: 'fas fa-calendar-day', text: 'Chủ nhật, ngày 14 tháng 06 năm 2026' },
            { icon: 'fas fa-clock', text: '09:00' },
            { icon: 'fas fa-map-marker-alt', text: 'Đại Bình, Nông Sơn, TP. Đà Nẵng' }
          ],
          map: 'https://maps.app.goo.gl/xHndLnm2QHRKJkXu5'
        },
        {
          icon: 'fas fa-home',
          title: 'Lễ Gia Tiên Nhà Gái',
          rows: [
            { icon: 'fas fa-calendar-day', text: 'Chủ nhật, ngày 14 tháng 06 năm 2026' },
            { icon: 'fas fa-clock', text: '07:00' },
            { icon: 'fas fa-map-marker-alt', text: 'Đại Bình, Nông Sơn, TP. Đà Nẵng' }
          ],
          map: 'https://maps.app.goo.gl/Aq4GPe669bTVw1VKA'
        },
        {
          icon: 'fas fa-rings-wedding',
          title: 'Tiệc Cưới',
          rows: [
            { icon: 'fas fa-calendar-day', text: 'Chủ nhật, ngày 14 tháng 06 năm 2026' },
            { icon: 'fas fa-clock', text: '11:00' },
            { icon: 'fas fa-map-marker-alt', text: 'Đại Bình, Nông Sơn, TP. Đà Nẵng' }
          ],
          map: 'https://maps.app.goo.gl/eeGzAwVXCuT1LA3M6'
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
