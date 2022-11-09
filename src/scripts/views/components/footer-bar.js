class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p tabindex="0">copyright &copy; 2022 - Tnaruatser.</p>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
