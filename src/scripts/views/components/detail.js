class DetailSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="content">
        <div class="detail__inner" id="restaurant"></div>
      </section>
    `;
  }
}

customElements.define('detail-section', DetailSection);
