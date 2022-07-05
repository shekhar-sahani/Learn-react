function Carousel() {
    return(
        <>
        <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?w=2000"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVOaG4i33PWrhKGLmIuZ82ylJ8TJW0MkihEAU42ILN5umIPo6SUAmRuSq0WLMd_rCNmg&usqp=CAU"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPVOaG4i33PWrhKGLmIuZ82ylJ8TJW0MkihEAU42ILN5umIPo6SUAmRuSq0WLMd_rCNmg&usqp=CAU"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
        </>
    )
}

export default Carousel;