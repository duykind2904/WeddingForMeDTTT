const CoverComponent = {
  data() {
    return {
      opened: false,
      hidden: false,
      countdown: 4,
      timer: null,
      countTimer: null,
    }
  },
  mounted() {
    // Đếm ngược hiển thị trên button
    this.countTimer = setInterval(() => {
      this.countdown--
      if (this.countdown <= 0) clearInterval(this.countTimer)
    }, 1000)

    // Tự mở sau 4 giây
    this.timer = setTimeout(() => this.openCover(), 4000)
  },
  beforeUnmount() {
    clearTimeout(this.timer)
    clearInterval(this.countTimer)
  },
  methods: {
    openCover() {
      clearTimeout(this.timer)
      clearInterval(this.countTimer)
      this.countdown = 0
      this.opened = true
      setTimeout(() => { this.hidden = true }, 3200)
    }
  },
  template: `
    <div v-if="!hidden" class="cover" :class="{ 'cover--open': opened }">

      <div class="cover-panel cover-panel--left">
        <div class="cover-content">
          <p class="cover-save">Save our date</p>
          <p class="cover-name">Duy Trúc</p>
          <p class="cover-and">&amp;</p>
          <p class="cover-name">Thu Trinh</p>
          <p class="cover-date">14 · 06 · 2026</p>

          <button v-if="!opened" class="cover-open-btn" @click="openCover">
            <i class="fas fa-envelope-open"></i>
            <span>Mở thiệp</span>
            <span v-if="countdown > 0" class="cover-open-count">({{ countdown }})</span>
          </button>
        </div>

        <div class="cover-seal">
          <i class="fas fa-leaf"></i>
        </div>
      </div>

      <div class="cover-panel cover-panel--right"></div>
      <div class="cover-line"></div>

    </div>
  `
}
