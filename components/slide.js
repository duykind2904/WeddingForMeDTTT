const SlideComponent = {

  template: `
    <div class="slide">

      <img
        v-for="(img,index) in images"
        :key="index"
        :src="img"
        class="slide-img"
        :class="{active:index===current}"
      >

      <div class="overlay"></div>

      <div class="slide-text">
        <div>SAVE THE DATE</div>
        <div>Duy Trúc</div>
        <div>Thu Trinh</div>
      </div>

    </div>
        
  `,


  data(){
    return{
      current:0,
      images:[
        "image/slide1.webp",
        "image/slide2.webp",
        "image/slide3.webp"
      ]
    }
  },

  mounted(){

  setInterval(()=>{

    this.current++

    if(this.current >= this.images.length){
      this.current = 0
    }

  },5000)

}

}

// inject CSS
// const style = document.createElement("style");
// style.textContent = `

// .slide{
//   position:relative;
//   height:
// }

// .slide-img{
//   position:absolute;
//   width:100%;
//   height:1500px;
//   object-fit:cover;
//   top:0;
//   left:0;
//   opacity:0;
// }

// .slide-img.active{
//   opacity:1;
//   animation: zoomEffect 6s ease forwards;
// }

// .slide-img.next{
//   animation: fadeIn 1.5s ease forwards;
// }

// @keyframes zoomEffect{
//   from{
//     transform:scale(1.1);
//   }
//   to{
//     transform:scale(1);
//   }
// }

// @keyframes fadeIn{
//   from{
//     opacity:1;
//   }
//   to{
//     opacity:0;
//   }
// }
// `;
// document.head.appendChild(style);