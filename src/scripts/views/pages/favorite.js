const Favorite = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__title" tabindex="0">Favorite Restaurant</h2>
        <div class="content__inner" id="restaurant"></div>
      </section>
    `;
  },

  async afterRender() {
    console.log('helo');
  },
};

export default Favorite;
