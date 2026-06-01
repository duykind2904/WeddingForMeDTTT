const VenueComponent = {
  template: `
    <section id="venue" class="venue-section fade-left">
      <div class="section-title">
        <span class="tag">Location</span>
        <span class="script-heading">Địa Điểm</span>
        <div class="divider"><i class="fas fa-map-marker-alt"></i></div>
      </div>

      <div class="venue-cards">
        <div class="venue-card">
          <div class="venue-icon"><i class="fas fa-church"></i></div>
          <div class="venue-card-tag">Nhà Trai</div>
          <div class="venue-name-text">Gia Đình Chú Rể</div>
          <div class="venue-info-text">123 Đường ABC<br>Quận 1, TP.HCM</div>
        </div>
        <div class="venue-card">
          <div class="venue-icon"><i class="fas fa-home"></i></div>
          <div class="venue-card-tag">Nhà Gái</div>
          <div class="venue-name-text">Gia Đình Cô Dâu</div>
          <div class="venue-info-text">456 Đường XYZ<br>Quận 3, TP.HCM</div>
        </div>
      </div>

      <div class="venue-card" style="margin-bottom:15px; grid-template-columns:unset;">
        <div class="venue-icon" style="background:var(--gold)"><i class="fas fa-rings-wedding"></i></div>
        <div class="venue-card-tag" style="text-align:center">Tiệc Cưới</div>
        <div class="venue-name-text" style="font-size:1.25rem; text-align:center">Diamond Palace Wedding Center</div>
        <div class="venue-info-text" style="text-align:center">
          123 Đường Nguyễn Văn Linh, Phường Tân Phong<br>Quận 7, TP. Hồ Chí Minh
        </div>
      </div>

      <div style="overflow:hidden; border-radius:4px 4px 0 0;">
        <iframe
          class="map-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9445!2d106.6908!3d10.7326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f7c5da96de5%3A0x7aff41cf5c5a0f89!2sNguy%E1%BB%85n%20V%C4%83n%20Linh%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1svi!2svn!4v1700000000000!5m2!1svi!2svn"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <a
        href="https://maps.google.com/?q=Nguyen+Van+Linh+Quan+7+Ho+Chi+Minh"
        target="_blank"
        class="map-btn"
      >
        <i class="fas fa-directions" style="margin-right:8px"></i>Xem Bản Đồ
      </a>
    </section>
  `
}
