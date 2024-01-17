export default async <T>(promises: Array<Promise<T>>) => {
  return Promise.allSettled(promises);
};
