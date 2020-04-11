import { DogAPI } from './dog-api.model';

describe('DogAPI', () => {
  it('should create an instance', () => {
    expect(new DogAPI({}, '')).toBeTruthy();
  });
});
