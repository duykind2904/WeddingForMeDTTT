const GiftComponent = {
  data() {
    return {
      copiedIndex: -1,
      banks: [
        {
          label: 'ĐẾN CHÚ RỂ',
          owner: 'Nguyễn Duy Trúc',
          bank: 'Vietcombank',
          number: '1234567890',
          branch: 'TP.HCM',
          qr: ''
        },
        {
          label: 'ĐẾN CÔ DÂU',
          owner: 'Trần Thu Trinh',
          bank: 'Techcombank',
          number: '9876543210',
          branch: 'TP.HCM',
          qr: ''
        }
      ]
    }
  },
  methods: {
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
      <div class="section-title">
        <span class="tag" style="color:var(--accent)">Gift</span>
        <span class="script-title" style="color:#fff">Mừng Cưới</span>
        <div class="divider"><i class="fas fa-gift" style="color:var(--accent)"></i></div>
      </div>
      <p class="gift-intro">
        Sự hiện diện của bạn là niềm hân hoan lớn nhất với chúng mình.
        Nếu bạn muốn gửi thêm yêu thương, xin nhận qua thông tin dưới đây.
      </p>

      <div class="gift-cards">
        <div v-for="(b, i) in banks" :key="i" class="gift-card">
          <div class="gift-card-title">{{ b.label }}</div>

          <div class="gift-qr">
            <img v-if="b.qr" :src="b.qr" :alt="b.owner">
            <div v-else class="gift-qr-placeholder">
              <i class="fas fa-qrcode"></i>
            </div>
          </div>

          <div class="gift-info">
            <div class="gift-info-row">
              <span class="gi-label">Ngân hàng:</span>
              <span class="gi-val">{{ b.bank }}</span>
            </div>
            <div class="gift-info-row">
              <span class="gi-label">Chủ TK:</span>
              <span class="gi-val">{{ b.owner }}</span>
            </div>
            <div class="gift-info-row">
              <span class="gi-label">Số TK:</span>
              <span class="gi-val gi-accent">{{ b.number }}</span>
            </div>
            <div class="gift-info-row">
              <span class="gi-label">Chi nhánh:</span>
              <span class="gi-val">{{ b.branch }}</span>
            </div>
          </div>

          <button class="gift-copy-btn" :class="{ copied: copiedIndex === i }" @click="copy(b.number, i)">
            <i :class="copiedIndex === i ? 'fas fa-check' : 'fas fa-copy'"></i>
            {{ copiedIndex === i ? 'Đã sao chép!' : 'Sao chép' }}
          </button>
        </div>
      </div>
    </section>
  `
}
