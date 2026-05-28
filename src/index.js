import './style.css';
import Collapse from './Collapse';

const container = document.getElementById('collapse');
if (!container) throw new Error('Element #collapse not found');

const collapse = new Collapse(container);
collapse.render();

const content = container.querySelector('.collapse-content');
content.innerHTML = `
  <pre class="code-block"><span class="code-copy">Copy</span><code>Some example code...</code></pre>
`;
