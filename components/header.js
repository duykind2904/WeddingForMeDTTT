const HeaderComponent = {
  data() {
    return { scrolled: false, menuOpen: false }
  },
  mounted() { window.addEventListener('scroll', this.onScroll) },
  beforeUnmount() { window.removeEventListener('scroll', this.onScroll) },
  methods: {
    onScroll() { this.scrolled = window.scrollY > 60 },
    toggleMenu() { this.menuOpen = !this.menuOpen },
    closeMenu() { this.menuOpen = false },
    scrollTo(id) {
      this.closeMenu()
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  },
  template: `
    <header :class="['site-header', { scrolled }]">
      <div class="logo">
        <img :src="scrolled ? 'image/logo_black.png' : 'image/logo_wihte_1.png'" alt="Logo">
      </div>
      <button class="nav-toggle" @click="toggleMenu" aria-label="Menu">
        <i class="fas fa-bars"></i>
      </button>
    </header>

    <div :class="['side-menu-overlay', { open: menuOpen }]" @click="closeMenu"></div>

    <nav :class="['side-menu', { open: menuOpen }]">
      <button class="close-btn" @click="closeMenu"><i class="fas fa-times"></i></button>
      <div class="menu-logo">Menu</div>
      <ul>
        <li><a href="#" @click.prevent="scrollTo('hero')"><i class="fas fa-home"></i>Trang Chủ</a></li>
        <li><a href="#" @click.prevent="scrollTo('about')"><i class="fas fa-heart"></i>Chúng Mình</a></li>
        <li><a href="#" @click.prevent="scrollTo('gallery')"><i class="fas fa-images"></i>Album Ảnh</a></li>
        <li><a href="#" @click.prevent="scrollTo('events')"><i class="fas fa-calendar-alt"></i>Sự Kiện</a></li>
        <li><a href="#" @click.prevent="scrollTo('rsvp')"><i class="fas fa-envelope"></i>Xác Nhận</a></li>
        <li><a href="#" @click.prevent="scrollTo('gift')"><i class="fas fa-gift"></i>Mừng Cưới</a></li>
      </ul>
    </nav>
  `
}
