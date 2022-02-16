import { lorem } from 'faker';
import React from 'react';
import Portal from '.';
import { render, screen, within } from '../../test-utils/customRender';

const renderPortal = (content: string, target?: HTMLElement): void => {
  const root = target || document.createElement('div');
  root.classList.add('target');
  document.body.appendChild(root);

  render(<Portal target={root}>{content}</Portal>);
};

describe('Portal', () => {
  it('renders given content inside target when query selector is provided', () => {
    const content = lorem.word();
    renderPortal(content);

    const target = document.querySelector('.target') as HTMLElement;
    const renderedContent = within(target).getByText(content);

    expect(target).toContainElement(renderedContent);
  });

  it('renders given content inside target when dom node is provided', () => {
    const content = lorem.word();
    const domNode = document.createElement('div');
    domNode.classList.add('dom-node');
    renderPortal(content, domNode);

    const target = document.querySelector('.dom-node') as HTMLElement;
    const renderedContent = within(target).getByText(content);

    expect(target).toContainElement(renderedContent);
  });

  it('does not render if provided query selector does not have a match', () => {
    const content = lorem.word();
    render(<Portal target=".not-match">{content}</Portal>);

    const renderedContent = screen.queryByText(content);

    expect(renderedContent).not.toBeInTheDocument();
  });
});
