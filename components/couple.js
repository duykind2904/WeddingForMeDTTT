const CoupleComponent = {
  template: `
    <section class="couple-section fade-right">
      <div class="section-title" >
        <span class="tag">The Couple</span>
        <!-- <span class="script-title">Cô Dâu &amp; Chú Rể</span> -->
        <div class="divider"><i class="fas fa-heart"></i></div>
      </div>

      <div class="couple-duo">
        <!-- Chú Rể -->
        <div class="couple-person groom">
          <div class="cp-name-strip">
            <span>Duy Trúc</span>
          </div>
          <div class="cp-card-wrap">
            <div class="cp-card">
              <img src="image/HIO9582.webp" alt="Duy Trúc">
              <span class="cp-role">Chú rể</span>
            </div>
          </div>
        </div>

        <!-- Cô Dâu -->
        <div class="couple-person bride">
          <div class="cp-card-wrap cp-card-wrap--reverse">
            <div class="cp-card">
              <img src="image/HIO9989.webp" alt="Thu Trinh">
              <span class="cp-role">Cô dâu</span>
            </div>
          </div>
          <div class="cp-name-strip">
            <span>Thu Trinh</span>
          </div>
        </div>
      </div>
    </section>
  `
}
