const EventsComponent = {
  data() {
    return {
      events: [
        {
          icon: 'fa-solid fa-house',
          time: '07:00',
          title: 'Lễ Gia Tiên Nhà Gái',
          map: 'https://maps.app.goo.gl/Aq4GPe669bTVw1VKA'
        },
        {
          icon: 'fa-solid fa-house-user',
          time: '09:00',
          title: 'Lễ Gia Tiên Nhà Trai',
          map: 'https://maps.app.goo.gl/xHndLnm2QHRKJkXu5'
        },
        {
          icon: 'fa-solid fa-champagne-glasses',
          time: '11:00',
          title: 'Tiệc Cưới',
          map: 'https://maps.app.goo.gl/eeGzAwVXCuT1LA3M6'
        }
      ]
    }
  },
  template: `
    <section id="events" class="events-section fade-left">

      <div class="tl-title">Timeline</div>

      <div class="tl-list">
        <div v-for="(ev, i) in events" :key="i" class="tl-item">
          <div class="tl-icon-col">
            <i :class="ev.icon"></i>
          </div>
          <div class="tl-dot"></div>
          <div class="tl-text-col">
            <div class="tl-time">{{ ev.time }}</div>
            <div class="tl-event-name">{{ ev.title }}</div>
            <a :href="ev.map" target="_blank" class="tl-map-link">
              <i class="fas fa-location-dot"></i> Bản đồ
            </a>
          </div>
        </div>
      </div>

    </section>
  `
}
