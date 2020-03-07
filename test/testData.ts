interface testDataType {
  name: string;
  enabled: boolean;
  hostname: string;
}

export const testData1: Array<testDataType> = [
  {
    name: 'example1',
    enabled: true,
    hostname: 'www.google.com',
  },
  {
    name: 'example2',
    enabled: false,
    hostname: 'www.facebook.com',
  },
];

export const singleDatum: testDataType = {
  name: 'exampleSingle',
  enabled: true,
  hostname: 'exampleSingle.com',
};
