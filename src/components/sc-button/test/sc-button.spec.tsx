import { newSpecPage } from '@stencil/core/testing';
import { ScButton } from '../sc-button';

describe('sc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScButton],
      html: `<sc-button></sc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sc-button>
    `);
  });
});
