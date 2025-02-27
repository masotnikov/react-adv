import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first parameters', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hover focus';
    expect(classNames(
      'someClass',
      { hover: true, focus: true },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2 hover';
    expect(classNames(
      'someClass',
      { hover: true, scrollable: false },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class1 class3 hover';
    expect(classNames(
      'someClass',
      { hover: true, focus: undefined },
      ['class1', 'class3'],
    )).toBe(expected);
  });
});
