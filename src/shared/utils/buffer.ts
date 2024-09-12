export function convertBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return window.btoa(binary);
}

export function convertBufferToStringUtf8(buffer: ArrayBuffer): string {
  return Buffer.from(buffer).toString('utf8');
}
