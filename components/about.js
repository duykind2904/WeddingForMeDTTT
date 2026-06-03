const AboutComponent = {
  template: `
    <section id="about" class="about-section fade-up">
      <div class="about-photo">
        <img src="image/HIO9622.webp" alt="Duy Trúc & Thu Trinh">
      </div>
      <div class="divider"><i class="fas fa-heart"></i></div>
      <h2 class="about-heading">Chúng Mình</h2>
      <div class="divider"><i class="fas fa-heart"></i></div>
      <p class="about-text" style="margin-top:18px"></p>
    </section>
  `,
  mounted() {
    const paragraphs = [
      'Từ những năm tháng còn ngồi chung lớp, khi mọi thứ vẫn còn vô tư và giản dị. Từ tình bạn tuổi học trò, chúng mình đã cùng nhau lớn lên, chứng kiến những thay đổi trong cuộc sống và dần trở thành một phần không thể thiếu trong hành trình của nhau.',
      'Sau 9 năm bên nhau với biết bao kỷ niệm, những niềm vui, thử thách và cả những ước mơ được sẻ chia, hôm nay chúng mình quyết định cùng nắm tay bước sang một chương mới — xây dựng tổ ấm của riêng mình.',
      'Chúng mình trân trọng kính mời bạn — những người thân yêu nhất — đến chung vui và chứng kiến khoảnh khắc chúng mình chính thức trở thành một gia đình.',
      'Sự hiện diện của bạn chính là món quà ý nghĩa nhất trong ngày trọng đại của chúng mình.'
    ]

    const container = this.$el.querySelector('.about-text')
    const spans = []
    let ms = 0

    paragraphs.forEach((para, pi) => {
      ;[...para].forEach(ch => {
        const span = document.createElement('span')
        span.className = 'about-char'
        span.textContent = ch
        span.style.animationDelay = ms + 'ms'
        container.appendChild(span)
        spans.push(span)
        ms += ch === ' ' ? 7 : 18
      })
      if (pi < paragraphs.length - 1) {
        container.appendChild(document.createElement('br'))
        container.appendChild(document.createElement('br'))
        ms += 30
      }
    })

    let started = false

    const ioStart = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        started = true
        spans.forEach(s => s.classList.add('lit'))
        ioStart.disconnect()
      }
    }, { threshold: 0.4 })
    ioStart.observe(this.$el)

    // Chỉ hoàn thành ngay khi rời view SAU KHI animation đã bắt đầu
    const ioStop = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting && started) {
        spans.forEach(s => {
          s.style.animation = 'none'
          s.style.opacity = '1'
          s.style.filter = 'none'
        })
        ioStop.disconnect()
      }
    }, { threshold: 0 })
    ioStop.observe(this.$el)
  }
}
