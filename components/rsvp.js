const RsvpComponent = {
  data() {
    return {
      form: { name: '', phone: '', attend: 'yes', guests: '1', message: '' },
      submitted: false
    }
  },
  methods: {
    submit() {
      if (!this.form.name.trim()) { alert('Vui lòng nhập họ tên của bạn.'); return }
      this.submitted = true
    }
  },
  template: `
    <section id="rsvp" class="rsvp-section fade-right">
      <div class="section-title">
        <span class="tag">RSVP</span>
        <span class="script-title">Xác Nhận Tham Dự</span>
        <div class="divider"><i class="fas fa-envelope-open-text"></i></div>
        <p style="font-size:0.82rem;color:var(--muted);margin-top:8px;line-height:1.7">
          Kính mời bạn xác nhận tham dự trước ngày <strong>01/10/2026</strong>
        </p>
      </div>

      <div v-if="submitted" class="rsvp-success">
        <i class="fas fa-heart"></i>
        <p>Cảm ơn bạn rất nhiều!</p>
        <small>Chúng tôi đã nhận được xác nhận của bạn.<br>Hẹn gặp bạn trong ngày vui nhé!</small>
      </div>

      <form v-else class="rsvp-form" @submit.prevent="submit">
        <div class="form-group">
          <label>Họ và tên *</label>
          <input type="text" v-model="form.name" placeholder="Nguyễn Văn A">
        </div>
        <div class="form-group">
          <label>Số điện thoại</label>
          <input type="tel" v-model="form.phone" placeholder="0901 234 567">
        </div>
        <div class="form-group">
          <label>Bạn có tham dự không?</label>
          <div class="attend-options">
            <div class="attend-option">
              <input type="radio" id="att-yes" value="yes" v-model="form.attend">
              <label for="att-yes"><i class="fas fa-check"></i> Sẽ tham dự</label>
            </div>
            <div class="attend-option">
              <input type="radio" id="att-no" value="no" v-model="form.attend">
              <label for="att-no"><i class="fas fa-times"></i> Rất tiếc</label>
            </div>
          </div>
        </div>
        <div class="form-group" v-if="form.attend === 'yes'">
          <label>Số người tham dự</label>
          <select v-model="form.guests">
            <option value="1">1 người</option>
            <option value="2">2 người</option>
            <option value="3">3 người</option>
            <option value="4">4 người trở lên</option>
          </select>
        </div>
        <div class="form-group">
          <label>Lời chúc (tùy chọn)</label>
          <textarea v-model="form.message" rows="3" placeholder="Gửi lời chúc đến cô dâu chú rể..."></textarea>
        </div>
        <button type="submit" class="submit-btn">
          <i class="fas fa-paper-plane" style="margin-right:8px"></i>Gửi Xác Nhận
        </button>
      </form>
    </section>
  `
}
