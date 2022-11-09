class RestaurantSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="content" id="mainContent">
        <h2 class="content__title" tabindex="0">Explore Restaurant</h2>
        <div class="content__inner" id="restaurant"></div>
      </section>
      <section class="restaurant__of__the__month">
        <h2 class="rotm__title" tabindex="0">Restaurant of The Month</h2>
        <div class="rotm__inner" id="rotmContainer"></div>
      </section>
    `;
  }
}

customElements.define('restaurant-section', RestaurantSection);
