const GiftComponent = {
  data() {
    return {
      copiedIndex: -1,
      banks: [
        {
          owner: 'Nguyễn Duy Trúc',
          bank: 'Vietcombank',
          number: '1234 5678 9012',
          branch: 'Chi nhánh TP. Hồ Chí Minh'
        },
        {
          owner: 'Trần Thu Trinh',
          bank: 'Techcombank',
          number: '9876 5432 1098',
          branch: 'Chi nhánh Quận 7'
        }
      ]
    }
  },
  methods: {
    copy(number, i) {
      const clean = number.replace(/\s/g, '')
      navigator.clipboard.writeText(clean).catch(() => {
        const el = document.createElement('textarea')
        el.value = clean
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)
      }).finally ? undefined : null
      this.copiedIndex = i
      setTimeout(() => { this.copiedIndex = -1 }, 2200)
    }
  },
  template: `
    <section id="gift" class="gift-section fade-up">
      <div class="section-title">
        <span class="tag">Gift</span>
        <span class="script-title">Mừng Cưới</span>
        <div class="divider"><i class="fas fa-gift"></i></div>
      </div>
      <p class="gift-intro">
        Sự hiện diện của bạn là niềm hân hoan lớn nhất với chúng tôi.
        Nếu bạn muốn gửi thêm yêu thương, xin nhận qua thông tin dưới đây.
      </p>

      <div v-for="(b, i) in banks" :key="i" class="bank-card">
        <div class="bank-card-top">
          <div class="bank-avatar"><i class="fas fa-university"></i></div>
          <div>
            <span class="bank-label">{{ b.bank }}</span>
            <div class="bank-owner">{{ b.owner }}</div>
          </div>
        </div>
        <div style="font-size:0.72rem;color:var(--muted);margin-bottom:6px">{{ b.branch }}</div>
        <span class="bank-number">{{ b.number }}</span>
        <br>
        <button class="copy-btn" :class="{ copied: copiedIndex === i }" @click="copy(b.number, i)">
          <i :class="copiedIndex === i ? 'fas fa-check' : 'fas fa-copy'"></i>
          {{ copiedIndex === i ? 'Đã sao chép!' : 'Sao chép số TK' }}
        </button>
      </div>
    </section>
  `
}
