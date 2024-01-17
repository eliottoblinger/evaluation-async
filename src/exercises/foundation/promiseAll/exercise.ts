export default async <T>(promises: Array<Promise<T>>): Promise<Array<T>> => {
  return Promise.all(promises);
};
