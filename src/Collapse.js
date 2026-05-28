export default class Collapse {
  constructor(container) {
    this.container = container;
    this.btn = null;
    this.body = null;
    this.isOpen = true;
  }

  render() {
    this.container.innerHTML = `
      <div class="collapse-widget">
        <div class="collapse-header">
          <button class="collapse-btn">Collapse</button>
        </div>
        <div class="collapse-body">
          <div class="collapse-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;

    this.btn = this.container.querySelector('.collapse-btn');
    this.body = this.container.querySelector('.collapse-body');

    const slotContent = this.container.dataset.content || '';
    this.container.querySelector('.collapse-content').innerHTML = slotContent;

    this.btn.addEventListener('click', () => this.toggle());
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    this.body.style.maxHeight = `${this.body.scrollHeight}px`;
    this.body.classList.remove('collapse-body--closed');
    this.btn.textContent = 'Collapse';
  }

  close() {
    this.isOpen = false;
    this.body.style.maxHeight = `${this.body.scrollHeight}px`;
    requestAnimationFrame(() => {
      this.body.style.maxHeight = '0';
    });
    this.body.classList.add('collapse-body--closed');
    this.btn.textContent = 'Expand';
  }
}
