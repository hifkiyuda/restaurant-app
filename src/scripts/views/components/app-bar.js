class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1 class='header__title' tabindex='0'><a href='/'>Tnaruatser.</a></h1>
      <nav class='header__nav'>
        <button id='hamburger' aria-label='navigation-menu'>☰</button>
        <ul id='drawer'>
          <li><a href='/'>Home</a></li>
          <li><a href='#/favorite'>Favorite</a></li>
          <li><a href='https://www.linkedin.com/in/hifki-yuda-pratama-37ab0b248/' target='_blank'>About Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
