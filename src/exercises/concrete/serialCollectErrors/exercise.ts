type Context = {
  postData: (data: string) => Promise<string>;
};

export default ({ postData }: Context) =>
  async (list: Array<string>) => {
    const successes = [];
    const errors = [];

    for(const item of list){
      try{
        const res = await postData(item);
        successes.push(res);
      }catch(e){
        errors.push(e);
      }
    }
    return { successes, errors };
  };
