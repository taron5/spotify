export const removeDuplicates = (
  arr: {
    map: (arg0: (obj: any) => any[]) => Iterable<readonly [unknown, unknown]> | null | undefined;
  },
  property: string | number
) => {
  // @ts-ignore
  return [...new Map(arr.map((obj) => [obj[property], obj])).values()];
};
