type Context = {
  postData: (data: string) => Promise<void>;
};

export default ({ postData }: Context) => {
  let lastPromise = Promise.resolve();

  return async (data: string) => {
    const currentPromise = lastPromise.then(async () => await postData(data));
    lastPromise = currentPromise;

    await currentPromise;
  };
};
