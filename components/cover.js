const CoverComponent = {
  data() {
    return {
      opened: false,
      hidden: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.opened = true
      setTimeout(() => { this.hidden = true }, 3200)
    }, 2000)
  },
  template: `
    <div v-if="!hidden" class="cover" :class="{ 'cover--open': opened }">

      <!-- Cánh trái: chứa toàn bộ nội dung -->
      <div class="cover-panel cover-panel--left">
        <div class="cover-content">
          <p class="cover-save">Save our date</p>
          <p class="cover-name">Duy Trúc</p>
          <p class="cover-and">&amp;</p>
          <p class="cover-name">Thu Trinh</p>
          <p class="cover-date">14 · 06 · 2026</p>
        </div>
        <!-- Con dấu sáp tại mép phải cánh trái -->
        <div class="cover-seal">
          <i class="fas fa-leaf"></i>
        </div>
      </div>

      <!-- Cánh phải: trống -->
      <div class="cover-panel cover-panel--right"></div>

      <!-- Đường kẻ giữa -->
      <div class="cover-line"></div>

    </div>
  `
}
