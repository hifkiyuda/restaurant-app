class FavoriteSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="content">
        <h2 class="content__title" tabindex="0">Favorite Restaurant</h2>
        <div class="content__inner" id="favoriteRestaurant"></div>
      </section>
    `;
  }
}

customElements.define('favorite-section', FavoriteSection);
