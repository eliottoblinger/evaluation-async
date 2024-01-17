type Context = {
  fetchData: (input: string) => Promise<string>;
  setData: (data: string) => void;
};

export default ({ fetchData, setData }: Context) => {
  let isRunning = false;

  return async (input: string) => {
    if (isRunning) return;

    isRunning = true;

    const result = await fetchData(input);
    setData(result);
  };
};
