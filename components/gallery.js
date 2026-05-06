const GalleryComponent = {
  data() {
    return {
      photos: [
        { src: 'image/slide1.webp', tall: true },
        { src: 'image/slide2.webp', tall: false },
        { src: 'image/slide3.webp', tall: false },
        { src: 'image/slide3.webp', tall: false },
        { src: 'image/slide1.webp', tall: false },
        { src: 'image/slide2.webp', tall: true },
        { src: 'image/slide2.webp', tall: false },
        { src: 'image/slide3.webp', tall: false },
        { src: 'image/slide1.webp', tall: false }
      ]
    }
  },
  template: `
    <section id="gallery" class="gallery-section fade-up">
      <div class="section-title">
        <span class="tag">Moments</span>
        <span class="script-title">Bộ Sưu Tập Ảnh Cưới</span>
        <div class="divider"><i class="fas fa-camera"></i></div>
      </div>
      <div class="gallery-grid">
        <div
          v-for="(photo, i) in photos" :key="i"
          class="gallery-item" :class="{ tall: photo.tall }"
        >
          <img :src="photo.src" :alt="'Ảnh cưới ' + (i+1)">
        </div>
      </div>
      <div class="gallery-btn-wrap">
        <a href="#rsvp" class="btn-outline" @click.prevent="scrollToRsvp">
          <i class="fas fa-check-circle" style="margin-right:7px"></i>Xác Nhận Tham Dự
        </a>
      </div>
    </section>
  `,
  methods: {
    scrollToRsvp() {
      const el = document.getElementById('rsvp')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
