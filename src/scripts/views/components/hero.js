class heroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero__inner">
        <h2 class="hero__title" tabindex="0">Welcome to Tnaruatser.</h2>
        <p class="hero__tagline" tabindex="0">Hallo Foodies! Explore the best restaurant here.</p>
      </div>
    `;
  }
}

customElements.define('hero-element', heroElement);
