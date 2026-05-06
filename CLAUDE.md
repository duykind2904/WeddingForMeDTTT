# WeddingForMeDTTT — Thiệp Cưới Duy Trúc & Thu Trinh

## Tổng quan

Trang web thiệp cưới dạng single-page application (SPA), thiết kế theo phong cách mobile-first (hiển thị đẹp nhất trên điện thoại, width max 480px).

**Cặp đôi:** Duy Trúc & Thu Trinh  
**Ngày cưới:** Thứ Bảy, 10/10/2026  
**Địa điểm:** Diamond Palace Wedding Center, Q.7, TP.HCM  

---

## Stack kỹ thuật

- **Framework:** Vue 3 (CDN, không dùng build tool)
- **Styling:** CSS thuần (không dùng Bootstrap nữa)
- **Icons:** Font Awesome 6.7.2 (CDN)
- **Fonts:** Google Fonts — Great Vibes, Cormorant Garamond, Lato

---

## Cấu trúc thư mục

```
WeddingForMeDTTT/
├── index.html                  # Entry point — đăng ký tất cả components
├── css/
│   └── css1.css                # Toàn bộ CSS (variables, layout, sections)
├── components/
│   ├── header.js               # Fixed nav + hamburger menu
│   ├── slide.js                # Hero slideshow fullscreen
│   ├── greeting.js             # Lời chào Happy Wedding
│   ├── countdown.js            # Đồng hồ đếm ngược đến 10/10/2026
│   ├── love-story.js           # Timeline chuyện tình yêu
│   ├── invitation.js           # Thiệp mời (dark background)
│   ├── gallery.js              # Album ảnh grid
│   ├── venue.js                # Địa điểm + Google Maps
│   ├── events.js               # Lịch trình ngày cưới
│   ├── gift.js                 # Thông tin mừng cưới (tài khoản ngân hàng)
│   ├── rsvp.js                 # Form xác nhận tham dự
│   └── footer-section.js       # Lời cảm ơn + footer
├── image/
│   ├── slide1.webp             # Ảnh slideshow hero
│   ├── slide2.webp
│   ├── slide3.webp
│   ├── logo_wihte_1.png        # Logo trắng (dùng khi chưa scroll)
│   └── logo_black.png          # Logo đen (dùng khi header scrolled)
└── music/
    └── background.mp3          # (cần thêm thủ công) Nhạc nền
```

---

## CSS Variables (css/css1.css)

| Variable       | Giá trị     | Dùng cho                    |
|----------------|-------------|------------------------------|
| `--primary`    | `#8eaeba`   | Accent chính (teal-blue)    |
| `--gold`       | `#c9a96e`   | Accent phụ (vàng)           |
| `--dark`       | `#2c2c2c`   | Text tiêu đề, nền tối       |
| `--text`       | `#666`      | Body text                   |
| `--light-bg`   | `#faf8f5`   | Nền section sáng            |
| `--border`     | `#e8ddd5`   | Border, đường kẻ nhạt       |

---

## Sections & IDs

| Section           | ID          | Component               |
|-------------------|-------------|-------------------------|
| Hero Slideshow    | `#hero`     | `slide.js`              |
| Lời chào          | `#greeting` | `greeting.js`           |
| Đếm ngược         | —           | `countdown.js`          |
| Chuyện tình       | `#love-story` | `love-story.js`       |
| Thiệp mời         | `#invitation` | `invitation.js`       |
| Album ảnh         | `#gallery`  | `gallery.js`            |
| Địa điểm          | `#venue`    | `venue.js`              |
| Lịch trình        | `#events`   | `events.js`             |
| Mừng cưới         | `#gift`     | `gift.js`               |
| Xác nhận          | `#rsvp`     | `rsvp.js`               |

---

## Tùy chỉnh thường gặp

### Đổi ngày cưới
- `components/countdown.js` → `weddingDate: new Date('2026-10-10T11:00:00')`
- `components/slide.js` → text `10 · 10 · 2026`
- `components/invitation.js` → phần `inv-detail-value`
- `components/events.js` → các mốc thời gian

### Đổi tên cặp đôi
Tìm kiếm `Duy Trúc` và `Thu Trinh` trong tất cả các file `components/*.js`.

### Thêm ảnh gallery
Thêm ảnh vào thư mục `image/` và cập nhật mảng `photos` trong `components/gallery.js`.

### Thêm nhạc nền
Tạo thư mục `music/` và đặt file `background.mp3` vào đó. Nút nhạc nền đã được tích hợp sẵn.

### Đổi địa điểm Google Maps
Cập nhật `src` của `<iframe>` trong `components/venue.js` bằng Google Maps embed URL thực tế.

### Đổi thông tin ngân hàng
Cập nhật mảng `banks` trong `components/gift.js`.

---

## Tính năng đã có

- Slideshow tự động (5.5 giây/ảnh) với hiệu ứng zoom
- Đồng hồ đếm ngược realtime
- Navigation hamburger menu với smooth scroll
- Header tự động thay đổi khi scroll (transparent → white)
- Fade-in animation khi scroll đến section (IntersectionObserver)
- Copy số tài khoản ngân hàng bằng 1 click
- RSVP form với xác nhận client-side
- Music player nổi (cần thêm file mp3)
- Mobile-first design (max-width: 480px)
