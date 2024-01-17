type Context = {
  postData: (data: string) => Promise<string>;
  wait: (ms: number) => Promise<void>;
};

export default ({ postData, wait }: Context) =>
  async (data: string) => {
    let waitingMs = 200;

    do {
      try{
        const res = await postData(data);
        return res;
      }catch{
        await wait(waitingMs)
        waitingMs *= 2;
      }
    } while (true);
  };
