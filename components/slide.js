const SlideComponent = {
  data() {
    return {
      current: 0,
      images: ['image/HIO9269.webp', 'image/HIO9427.jpg', 'image/HIO9403.webp']
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
        <div class="hero-names">
          <span class="hero-name-left">Duy Trúc</span>
          <span class="hero-amp">&amp;</span>
          <span class="hero-name-right">Thu Trinh</span>
        </div>
        <div class="hero-date-tag">14 · 06 · 2026</div>
      </div>

      
    </section>
  `
}
