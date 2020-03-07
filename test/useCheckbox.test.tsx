import { renderHook, act } from '@testing-library/react-hooks';
import useCheckbox from '../src/useCheckbox/useCheckbox';
import { testData1, singleDatum } from './testData';

type dataID = string | number;

const renderUseCheckbox = (identifier: dataID, data: Array<object>) => {
  const { result } = renderHook(() => useCheckbox({ identifier, data }));
  return result;
};

const identifier = 'name';

describe('useCheckbox react hook', () => {
  test('should be initialized successfully', () => {
    const { current } = renderUseCheckbox(identifier, testData1);
    const { allData, allCheckedData, selectAllData, setSelectedData } = current;

    expect(allData).toStrictEqual(['example1', 'example2']);
    expect(allCheckedData).toStrictEqual([]);
    expect(selectAllData).toBeDefined();
    expect(setSelectedData).toBeDefined();
  });

  test('should select all successfully', () => {
    const result = renderUseCheckbox(identifier, testData1);

    act(() => result.current.selectAllData(true));

    expect(result.current.allCheckedData).toStrictEqual([
      'example1',
      'example2',
    ]);

    act(() => result.current.selectAllData(false));

    expect(result.current.allCheckedData).toStrictEqual([]);
    expect(result.current.allData).toStrictEqual(['example1', 'example2']);
  });

  test('should set a datum successfully', () => {
    const result = renderUseCheckbox(identifier, testData1);

    expect(result.current.allCheckedData).toStrictEqual([]);

    act(() => result.current.setSelectedData('example1', true));

    expect(result.current.allCheckedData).toStrictEqual(['example1']);

    act(() => result.current.setSelectedData('example1', false));

    expect(result.current.allCheckedData).toStrictEqual([]);
    expect(result.current.allData).toStrictEqual(['example1', 'example2']);
  });

  test('should reflect changed data successfully', () => {
    let data = testData1;
    const result = renderUseCheckbox(identifier, data);

    expect(result.current.allData).toStrictEqual(['example1', 'example2']);

    data = [...testData1, singleDatum];

    expect(result.current.allData).toStrictEqual([
      'example1',
      'example2',
      'exampleSingle',
    ]);
  });
});
