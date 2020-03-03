export function getInitialFields<F>(fieldList: Array<keyof F>): F {
  return fieldList.reduce((acc: any, field: keyof F) => {
    return { ...acc, [field]: '' };
  }, {});
}
