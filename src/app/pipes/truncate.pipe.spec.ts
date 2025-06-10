import { TruncatePipe } from './truncate.pipe';
describe('TruncatePipe', () => {
  const pipe = new TruncatePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the same value if length is less than 100', () => {
    expect(pipe.transform('Hello World')).toBe('Hello World');
  });

  it('should return string truncated if length if larger than 100', () => {
    const data =
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu';
    expect(pipe.transform(data).length).toEqual(103);
    expect(pipe.transform(data).endsWith('...'));
  });
});
