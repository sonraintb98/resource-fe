import { convertBufferToBase64, convertBufferToStringUtf8 } from 'src/shared/utils';

describe('convertBufferToBase64', () => {
  test('convertBufferToBase64', () => {
    const mockBuffer = new ArrayBuffer(8);
    const rs = convertBufferToBase64(mockBuffer);

    expect(rs).toBe('AAAAAAAAAAA=');
  });
});

describe('convertBufferToStringUtf8', () => {
  test('convertBufferToStringUtf8', () => {
    const mockBuffer = new Uint8Array([1, 2, 3]).buffer;
    const rs = convertBufferToStringUtf8(mockBuffer);

    expect(rs).toBe('');
  });
});
