const CountdownComponent = {
  data() {
    return {
      days: 0, hours: 0, minutes: 0, seconds: 0,
      target: new Date('2026-10-10T11:00:00')
    }
  },
  mounted() { this.update(); setInterval(this.update, 1000) },
  methods: {
    update() {
      const diff = this.target - new Date()
      if (diff <= 0) { this.days = this.hours = this.minutes = this.seconds = 0; return }
      this.days    = Math.floor(diff / 86400000)
      this.hours   = Math.floor((diff % 86400000) / 3600000)
      this.minutes = Math.floor((diff % 3600000) / 60000)
      this.seconds = Math.floor((diff % 60000) / 1000)
    },
    pad(n) { return String(n).padStart(2, '0') }
  },
  template: `
    <section class="countdown-section">
      <div class="countdown-date-big">10 &middot; 10 &middot; 2026</div>
      <div class="countdown-day-name">Thứ Bảy &nbsp;·&nbsp; Mười giờ Sáng</div>
      <div class="countdown-grid">
        <div class="countdown-box">
          <span class="c-num">{{ pad(days) }}</span>
          <span class="c-lbl">Ngày</span>
        </div>
        <div class="countdown-box">
          <span class="c-num">{{ pad(hours) }}</span>
          <span class="c-lbl">Giờ</span>
        </div>
        <div class="countdown-box">
          <span class="c-num">{{ pad(minutes) }}</span>
          <span class="c-lbl">Phút</span>
        </div>
        <div class="countdown-box">
          <span class="c-num">{{ pad(seconds) }}</span>
          <span class="c-lbl">Giây</span>
        </div>
      </div>
    </section>
  `
}
