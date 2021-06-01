import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sc-button',
  styleUrl: 'sc-button.css',
  shadow: true,
})
export class ScButton {
  @Prop() heading: string = 'h1';

  render() {
    const Heading = `${this.heading}`;

    return (
      <Heading>
        <slot></slot>
      </Heading>
    );
  }
}
