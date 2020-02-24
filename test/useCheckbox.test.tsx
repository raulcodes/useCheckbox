import { renderHook } from '@testing-library/react-hooks'
import useCheckbox from '../src/useCheckbox';

import { testData1 } from './testData';

describe('useCheckbox hook', () => {
  it('is initialized with data', () => {
    const { result: { current: [list, isSelected, selected,] } } = renderHook(() => 
      useCheckbox({ id: 'name', data: testData1 }));

    expect(list.length).toBe(2);
    expect(isSelected('example1')).toBeFalsy();
    expect(isSelected('example2')).toBeFalsy();
    expect(selected.length).toBe(0);
  });
});
