export default async <T>(promises: Array<Promise<T>>): Promise<T> => {
  return Promise.race(promises);
};
