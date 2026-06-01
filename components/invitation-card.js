const InvitationCardComponent = {
  data() {
    return {
      guestName: ''
    }
  },
  created() {
    const params = new URLSearchParams(window.location.search)
    const name = params.get('to') || params.get('name') || ''
    this.guestName = decodeURIComponent(name).trim()
  },
  template: `
    <section class="invcard-section fade-left">

      <!-- Hoa trang trí góc trên phải -->
      <div class="invcard-floral" aria-hidden="true">
        <svg width="130" height="185" viewBox="0 0 130 185" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Rose lớn bên trái -->
          <ellipse cx="58" cy="40" rx="21" ry="15" stroke="currentColor" stroke-width="1.2"/>
          <ellipse cx="58" cy="40" rx="15" ry="21" stroke="currentColor" stroke-width="1.2"/>
          <ellipse cx="39" cy="33" rx="13" ry="9" stroke="currentColor" stroke-width="1.2" transform="rotate(-30 39 33)"/>
          <ellipse cx="77" cy="33" rx="13" ry="9" stroke="currentColor" stroke-width="1.2" transform="rotate(30 77 33)"/>
          <ellipse cx="58" cy="21" rx="9" ry="13" stroke="currentColor" stroke-width="1.2"/>
          <ellipse cx="58" cy="59" rx="9" ry="13" stroke="currentColor" stroke-width="1.2"/>
          <circle cx="58" cy="40" r="8" stroke="currentColor" stroke-width="1.1"/>
          <circle cx="58" cy="40" r="3.5" stroke="currentColor" stroke-width="1"/>
          <!-- Cành -->
          <path d="M58 62 C53 85 44 108 36 140" stroke="currentColor" stroke-width="1.4"/>
          <!-- Lá -->
          <path d="M52 78 C38 66 28 77 32 90 C43 82 52 78 52 78Z" stroke="currentColor" stroke-width="1.1"/>
          <path d="M44 108 C30 96 20 107 24 120 C35 112 44 108 44 108Z" stroke="currentColor" stroke-width="1.1"/>
          <!-- Nụ nhỏ -->
          <ellipse cx="36" cy="140" rx="7" ry="5" stroke="currentColor" stroke-width="1"/>
          <ellipse cx="36" cy="140" rx="5" ry="7" stroke="currentColor" stroke-width="1"/>

          <!-- Rose nhỏ bên phải -->
          <ellipse cx="103" cy="70" rx="16" ry="12" stroke="currentColor" stroke-width="1.2"/>
          <ellipse cx="103" cy="70" rx="12" ry="16" stroke="currentColor" stroke-width="1.2"/>
          <ellipse cx="88" cy="64" rx="10" ry="7" stroke="currentColor" stroke-width="1.1" transform="rotate(-25 88 64)"/>
          <ellipse cx="118" cy="64" rx="10" ry="7" stroke="currentColor" stroke-width="1.1" transform="rotate(25 118 64)"/>
          <circle cx="103" cy="70" r="6.5" stroke="currentColor" stroke-width="1.1"/>
          <circle cx="103" cy="70" r="3" stroke="currentColor" stroke-width="1"/>
          <!-- Cành -->
          <path d="M103 86 C98 102 92 122 86 155" stroke="currentColor" stroke-width="1.4"/>
          <!-- Lá -->
          <path d="M95 104 C82 92 72 103 76 115 C87 107 95 104 95 104Z" stroke="currentColor" stroke-width="1.1"/>
          <path d="M89 130 C76 118 66 129 70 142 C81 134 89 130 89 130Z" stroke="currentColor" stroke-width="1.1"/>
        </svg>
      </div>

      <!-- Tiêu đề -->
      <p class="invcard-script-title">Ngày Chung Đôi</p>
      <p class="invcard-couple-names">
        DUY TRÚC&nbsp;
        <i class="fa-solid fa-ring"></i>
        &nbsp;THU TRINH
      </p>

      <div class="invcard-gap"></div>

      <!-- Kính mời -->
      <p class="invcard-heading">TRÂN TRỌNG KÍNH MỜI:</p>
      <p v-if="guestName" class="invcard-guest-name">{{ guestName }}</p>
      <p class="invcard-dots">............................................................</p>
      <p class="invcard-body">Đến dự buổi tiệc chung vui cùng<br>gia đình chúng tôi tại</p>

      <!-- Địa điểm -->
      <p class="invcard-venue-script">Sân Vận Động Đại Bình</p>
      <p class="invcard-venue-addr">Thôn Đại Bình, X. Nông Sơn, TP. Đà Nẵng</p>

      <!-- Thời gian -->
      <p class="invcard-time-bold">VÀO LÚC 10 GIỜ 30&nbsp;|&nbsp;CHỦ NHẬT&nbsp;|&nbsp;14.06.2026</p>
      <p class="invcard-time-lunar">(Nhằm ngày 29 tháng 04 năm Bính Ngọ)</p>

      <!-- Lời kết -->
      <p class="invcard-closing">
        Sự Hiện Diện Của Quý Khách<br>
        Là Niềm Vinh Hạnh Cho Gia Đình Chúng Tôi.
      </p>
      <p class="invcard-schedule">Đón Khách 10:30 - Khai Tiệc 11:00</p>
      <p class="invcard-kinhmoi">Kính Mời!</p>

    </section>
  `
}
