const WishesComponent = {
  data() {
    return {
      wishes: [
        { name: 'Minh Khoa', avatar: 'MK', msg: 'Chúc hai bạn trăm năm hạnh phúc, mãi mãi bên nhau! 🌸' },
        { name: 'Lan Anh', avatar: 'LA', msg: 'Chúc mừng hạnh phúc! Mong Duy Trúc & Thu Trinh luôn yêu thương nhau nhé!' },
        { name: 'Hoàng Nam', avatar: 'HN', msg: 'Chúc đôi bạn vạn sự như ý, tình yêu bền vững mãi mãi 💕' },
        { name: 'Thuỳ Linh', avatar: 'TL', msg: 'Nhìn hai bạn thấy hạnh phúc lây! Chúc mừng đám cưới nhé 🥂' },
        { name: 'Phúc Bình', avatar: 'PB', msg: 'Chúc hai bạn luôn là bến đỗ bình yên của nhau. Happy wedding! 💍' },
        { name: 'Ngọc Hân', avatar: 'NH', msg: 'Chúc mừng cô dâu chú rể! Mong các bạn sống hạnh phúc đến đầu bạc răng long 🌹' },
        { name: 'Thanh Tùng', avatar: 'TT', msg: 'Wow! Cuối cùng cũng đến ngày trọng đại rồi! Chúc mừng hai bạn 🎊' },
        { name: 'Mỹ Duyên', avatar: 'MD', msg: 'Chúc Duy Trúc & Thu Trinh mãi mãi hạnh phúc, yêu nhau sâu đậm hơn mỗi ngày 💖' },
        { name: 'Gia Bảo', avatar: 'GB', msg: 'Chúc mừng! Cầu mong gia đình nhỏ luôn tràn đầy tiếng cười và yêu thương 🏡' },
        { name: 'Kim Ngân', avatar: 'KN', msg: 'Hôm nay là ngày đẹp nhất! Chúc hai bạn hạnh phúc viên mãn 🌷' },
      ],
      active: [],   // [{ id, name, avatar, msg }]
      index: 0,
      nextId: 0,
      spawnTimer: null,
    }
  },
  mounted() {
    setTimeout(() => this.spawnLoop(), 12500)
  },
  beforeUnmount() {
    clearTimeout(this.spawnTimer)
  },
  methods: {
    spawnLoop() {
      const wish = this.wishes[this.index % this.wishes.length]
      this.index++
      const id = this.nextId++
      this.active.push({ id, ...wish })

      // Xoá khỏi DOM sau khi animation hoàn tất (5s)
      setTimeout(() => {
        this.active = this.active.filter(w => w.id !== id)
      }, 5000)

      // Spawn lời chúc tiếp theo sau 10 giây
      const delay = 10000
      this.spawnTimer = setTimeout(() => this.spawnLoop(), delay)
    }
  },
  template: `
    <div class="wish-stage" aria-hidden="true">
      <div
        v-for="w in active"
        :key="w.id"
        class="wish-float-card"
      >
        <div class="wish-toast-avatar">{{ w.avatar }}</div>
        <div class="wish-toast-body">
          <div class="wish-toast-name">{{ w.name }}</div>
          <div class="wish-toast-msg">{{ w.msg }}</div>
        </div>
      </div>
    </div>
  `
}
