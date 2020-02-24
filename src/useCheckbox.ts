import * as React from 'react';

type dataID = string | number;

interface CheckboxProps {
  id: dataID;
  data: Array<object>;
}

interface ListType {
  [key: string]: boolean;
}

type CheckboxReturn = [
  Array<Array<string | boolean>>,
  (id: dataID) => boolean,
  () => ListType,
  (b: boolean) => void
]

export const useCheckbox = ({ id, data }: CheckboxProps): CheckboxReturn => {
  const [list, setList] = React.useState<ListType>(() => {
    let l: ListType = {};
    data.forEach(d => 
      Object.entries(d).forEach(([k, v]) => { if (k === id) l[v] = false })
    );
    return l;
  })

  const isSelected = (id: dataID): boolean => list[id]
  const selected = (): ListType => (
    Object.fromEntries(Object.entries(list).filter(([, v]) => v === true))
  );
  // const toggleSelect = (id: dataID): void => setList(prevList => (
  //   {...prevList, prevList[id] }
  // ));
  const selectAll = (b: boolean): void => setList(() => 
    Object.fromEntries(Object.entries(list).map(([k, ]) => [k, b]))
  );

  return [
    Object.entries(list),
    isSelected,
    selected,
    selectAll,
  ];
}

export default useCheckbox;