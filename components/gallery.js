const GalleryComponent = {
  data() {
    return {
      photos: [
        { src: 'image/HIO9403.webp', tall: true },
        { src: 'image/HIO9628.webp', tall: false },
        { src: 'image/HIO9485.webp', tall: false },
        { src: 'image/HIO9737.webp', tall: false },
        { src: 'image/HIO9753.webp', tall: false },
        { src: 'image/HIO9867.webp', tall: true },
        { src: 'image/HIO0082.webp', tall: false },
        { src: 'image/HIO0004.webp', tall: false },
        { src: 'image/HIO9981.webp', tall: false },
        { src: 'image/HIO9986.webp', tall: false }
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
