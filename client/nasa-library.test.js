import { searchMediaByKeyword } from './nasa-library';

const FOUND_URL = 'https://images-api.nasa.gov/search?q=test';
const NOT_FOUND_URL = 'https://images-api.nasa.gov/search?q=notfound';
const FAIL_URL = 'https://images-api.nasa.gov/search?q=fail';
const TEST1_URL = 'http://localhost/collection1.json';
const TEST2_URL = 'http://localhost/collection2.json';
const TEST3_URL = 'http://localhost/collection3.json';
const IMAGE_URL = 'http://localhost/test1.jpg';
const AUDIO_URL = 'http://localhost/test2.mp3';
const VIDEO_URL = 'http://localhost/test3.mp4';

beforeAll(() => {
  window.fetch = jest.fn().mockImplementation(url => {
    if (FOUND_URL === url) {
      return mockResponse(200, {
        collection: {
          items: [{
            href: TEST1_URL,
            data: [{
              title: 'test1',
              description: 'test1',
              date_created: '2018-05-31',
              media_type: 'image'
            }]
          }, {
            href: TEST2_URL,
            data: [{
              title: 'test2',
              description: 'test2',
              date_created: '2018-05-31',
              media_type: 'audio'
            }]
          }, {
            href: TEST3_URL,
            data: [{
              title: 'test3',
              description: 'test3',
              date_created: '2018-05-31',
              media_type: 'video'
            }]
          }]
        }
      });
    } else if (NOT_FOUND_URL === url) {
      return mockResponse(200, {
        collection: {
          items: []
        }
      });
    } else if (FAIL_URL === url) {
      return Promise.reject('Failed search');
    } else if (TEST1_URL === url) {
      return mockResponse(200, [IMAGE_URL]);
    } else if (TEST2_URL === url) {
      return mockResponse(200, [AUDIO_URL]);
    } else if (TEST3_URL === url) {
      return mockResponse(404, [VIDEO_URL]);
    } else {
      return Promise.reject('Unsupported test value');
    }
  });
});

function mockResponse(status, json) {
  return Promise.resolve({
    status,
    json: () => Promise.resolve(json)
  });
}

test('search found', async () => {
  let result = await searchMediaByKeyword('test');
  expect(window.fetch).toBeCalled();
  expect(result).toHaveLength(3);
  expect(result[0].url).toBe(IMAGE_URL);
  expect(result[1].url).toBe(AUDIO_URL);
  expect(result[2].url).toBe('');
});

test('search not found', async () => {
  let result = await searchMediaByKeyword('notfound');
  expect(window.fetch).toBeCalled();
  expect(result).toHaveLength(0);
});

test('failed search', async () => {
  let result = await searchMediaByKeyword('fail');
  expect(window.fetch).toBeCalled();
  expect(result).toBeNull();
});
