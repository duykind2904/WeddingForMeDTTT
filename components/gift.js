const GiftComponent = {
  data() {
    return {
      showModal: false,
      activeBank: null,
      copiedIndex: -1,
      banks: [
        {
          id: 0,
          label: 'Chú Rể',
          owner: 'Nguyễn Duy Trúc',
          bank: 'ACB Ngân hàng Á Châu',
          number: '11781177',
          qr: 'image/qr.webp'
        },
        {
          id: 1,
          label: 'Cô Dâu',
          owner: 'Nguyễn Thị Thu Trinh',
          bank: 'ViettinBank',
          number: '9876543210',
          qr: 'image/qr.webp'
        }
      ]
    }
  },
  methods: {
    open(bank) {
      this.activeBank = bank
      this.showModal = true
    },
    close() {
      this.showModal = false
      this.copiedIndex = -1
    },
    copy(number, i) {
      navigator.clipboard.writeText(number).catch(() => {
        const el = document.createElement('textarea')
        el.value = number
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
      })
      this.copiedIndex = i
      setTimeout(() => { this.copiedIndex = -1 }, 2200)
    }
  },
  template: `
    <section id="gift" class="gift-section fade-up">

      <div class="gift-header">
        <p class="gift-header-sub">Hộp quà yêu thương</p>
        <h2 class="gift-header-title">Hãy nhấn vào hộp quà</h2>
        <p class="gift-header-hint"><i class="fas fa-hand-pointer"></i></p>
      </div>

      <div class="gift-boxes">
        <div class="gift-box-item" v-for="b in banks" :key="b.id" @click="open(b)">
          <div class="gift-box-icon">
            <i class="fas fa-gift"></i>
          </div>
          <div class="gift-box-label">{{ b.label }}</div>
        </div>
      </div>

      <p class="gift-note">
        Cảm ơn bạn đã đồng hành và chúc phúc cho hành trình yêu thương của chúng mình.<br>
        Niềm vui hôm nay trọn vẹn hơn khi có bạn cùng sẻ chia! 🌷
      </p>

      <!-- Modal -->
      <transition name="qr-fade">
        <div v-if="showModal && activeBank" class="qr-modal-overlay" @click.self="close">
          <div class="qr-modal">
            <button class="qr-modal-close" @click="close"><i class="fas fa-times"></i></button>

            <div class="qr-modal-label">{{ activeBank.label }}</div>
            <div class="qr-modal-owner">{{ activeBank.owner }}</div>

            <div class="qr-modal-img">
              <img v-if="activeBank.qr" :src="activeBank.qr" :alt="activeBank.owner">
              <div v-else class="qr-modal-placeholder">
                <i class="fas fa-qrcode"></i>
              </div>
            </div>

            <div class="qr-modal-info">
              <div class="qr-info-row">
                <span class="qr-info-label">Ngân hàng</span>
                <span class="qr-info-val">{{ activeBank.bank }}</span>
              </div>
              <div class="qr-info-row">
                <span class="qr-info-label">Số tài khoản</span>
                <span class="qr-info-val qr-info-accent">{{ activeBank.number }}</span>
              </div>
              <div class="qr-info-row">
                <span class="qr-info-label">Chi nhánh</span>
                <span class="qr-info-val">{{ activeBank.branch }}</span>
              </div>
            </div>

            <button
              class="qr-copy-btn"
              :class="{ copied: copiedIndex === activeBank.id }"
              @click="copy(activeBank.number, activeBank.id)"
            >
              <i :class="copiedIndex === activeBank.id ? 'fas fa-check' : 'fas fa-copy'"></i>
              {{ copiedIndex === activeBank.id ? 'Đã sao chép!' : 'Sao chép số tài khoản' }}
            </button>
          </div>
        </div>
      </transition>

    </section>
  `
}
