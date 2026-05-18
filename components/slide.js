const SlideComponent = {
  data() {
    return {
      current: 0,
      images: ['image/_HIO9269.webp', 'image/_HIO9622.webp', 'image/_HIO9403.webp']
    }
  },
  mounted() {
    setInterval(() => {
      this.current = (this.current + 1) % this.images.length
    }, 5500)
  },
  template: `
    <section id="hero" class="hero">
      <img
        v-for="(img, i) in images" :key="i"
        :src="img" class="hero-img"
        :class="{ active: i === current }"
        alt="Duy Trúc & Thu Trinh"
      >
      <div class="hero-overlay"></div>

      <div class="hero-content">
        <p class="hero-tag">Wedding Invitation</p>
        <div class="hero-happy">Happy Wedding</div>
        <div class="hero-names">
          Duy Trúc
          <span class="hero-amp">&amp;</span>
          Thu Trinh
        </div>
        <div class="hero-date-tag">14 · 06 · 2026</div>
      </div>

      <div class="hero-scroll">
        <span>Cuộn xuống</span>
        <i class="fas fa-chevron-down" style="margin-top:2px"></i>
      </div>
    </section>
  `
}
