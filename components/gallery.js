const GalleryComponent = {
  data() {
    return {
      photos: [
        { src: 'image/_HIO9403.JPG', tall: true },
        { src: 'image/_HIO9628.JPG', tall: false },
        { src: 'image/_HIO9485.jpg', tall: false },
        { src: 'image/_HIO9737.JPG', tall: false },
        { src: 'image/_HIO9753.jpg', tall: false },
        { src: 'image/_HIO9867.JPG', tall: true },
        { src: 'image/_HIO0082.jpg', tall: false },
        { src: 'image/_HIO0004.JPG', tall: false },
        { src: 'image/_HIO9981.JPG', tall: false },
        { src: 'image/_HIO9986.jpg', tall: false }
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
