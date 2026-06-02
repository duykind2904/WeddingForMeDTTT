const GalleryComponent = {
  data() {
    return {
      visible: 10,
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
        { src: 'image/HIO9986.webp', tall: false },

        { src: 'image/HIO9726.jpg', tall: false },
        { src: 'image/HIO9753.jpg', tall: false },
        { src: 'image/HIO9938.jpg', tall: true },
        { src: 'image/HIO9427.jpg', tall: false },
        { src: 'image/HIO9622.webp', tall: false },

        { src: 'image/z31.jpg', tall: true },
        { src: 'image/z27.jpg', tall: false },
        { src: 'image/z30.jpg', tall: false },
        { src: 'image/z21.jpg', tall: false },
        { src: 'image/z6.jpg', tall: false },

      ]
    }
  },
  computed: {
    visiblePhotos() {
      return this.photos.slice(0, this.visible)
    },
    hasMore() {
      return this.visible < this.photos.length
    }
  },
  template: `
    <section id="gallery" class="gallery-section zoom-in">
      <div class="section-title">
        <span class="tag">Moments</span>
        <span class="script-title">Bộ Sưu Tập Ảnh Cưới</span>
        <div class="divider"><i class="fas fa-camera"></i></div>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(photo, i) in visiblePhotos" :key="photo.src"
          class="gallery-item" :class="{ tall: photo.tall }"
        >
          <img :src="photo.src" :alt="'Ảnh cưới ' + (i+1)">
        </div>
      </div>

      <div class="gallery-btn-wrap">
        <button v-if="hasMore" class="btn-outline" @click="visible += 10">
          <i class="fas fa-images" style="margin-right:7px"></i>Xem thêm
        </button>
      </div>
    </section>
  `
}
