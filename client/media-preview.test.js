import React from 'react';
import { render } from 'react-testing-library';
import MediaPreview from './media-preview';

test('ImagePreview renders correctly', () => {
  let { container } = render(<MediaPreview mediaType="image" url="http://localhost/test.jpg" />);
  expect(container.firstChild).toMatchSnapshot();
});

test('AudioPreview renders correctly', () => {
  let { container } = render(<MediaPreview mediaType="audio" url="http://localhost/test.wav" />);
  expect(container.firstChild).toMatchSnapshot();
});

test('VideoPreview renders correctly', () => {
  let { container } = render(<MediaPreview mediaType="video" url="http://localhost/test.mpg" />);
  expect(container.firstChild).toMatchSnapshot();
});
