import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sc-heading',
  styleUrl: 'sc-heading.css',
  shadow: true,
})
export class ScHeading {
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
