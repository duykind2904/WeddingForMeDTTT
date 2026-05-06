const LoveStoryComponent = {
  data() {
    return {
      stories: [
        {
          year: 'Tháng 3, 2020',
          title: 'Lần Đầu Gặp Gỡ',
          desc: 'Chúng tôi tình cờ gặp nhau trong một buổi tiệc của người bạn chung. Một ánh mắt, một nụ cười — và câu chuyện bắt đầu từ đó.'
        },
        {
          year: 'Tháng 8, 2020',
          title: 'Bắt Đầu Hẹn Hò',
          desc: 'Sau những tháng ngày làm bạn, chúng tôi nhận ra mình đã yêu nhau từ lúc nào không hay và chính thức bước vào tình yêu.'
        },
        {
          year: 'Tháng 12, 2022',
          title: 'Chuyến Du Lịch Đầu Tiên',
          desc: 'Chuyến đi Đà Lạt — nơi chúng tôi có những kỷ niệm đẹp đẽ không thể nào quên, cùng nhau dưới màn sương mờ lạnh giá buổi sớm mai.'
        },
        {
          year: 'Tháng 2, 2025',
          title: 'Anh Cầu Hôn',
          desc: 'Trong buổi tối lãng mạn với ánh nến lung linh, anh quỳ gối và hỏi: "Em có muốn làm vợ anh không?" — Câu trả lời là một cái gật đầu đẫm nước mắt hạnh phúc.'
        },
        {
          year: 'Tháng 10, 2026',
          title: 'Về Chung Một Nhà',
          desc: 'Chúng tôi sẽ cùng nhau viết nên chương mới của cuộc đời — một gia đình nhỏ đầy yêu thương, tiếng cười và hạnh phúc bên nhau mãi mãi.'
        }
      ]
    }
  },
  template: `
    <section id="love-story" class="section fade-up">
      <div class="section-title">
        <span class="tag">Our Journey</span>
        <span class="script-heading">Chuyện Tình Yêu</span>
        <div class="divider"><i class="fas fa-heart"></i></div>
      </div>
      <div class="story-wrap">
        <div v-for="(item, i) in stories" :key="i" class="story-item">
          <div class="story-year">{{ item.year }}</div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>
  `
}
