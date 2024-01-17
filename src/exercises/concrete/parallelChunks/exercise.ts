import { chunk } from "lodash";

type Context = {
  postData: (data: string) => Promise<string>;
};

export default ({ postData }: Context) =>
  async (list: Array<string>) => {
    const chunkedList = chunk(list, 5);
    let results: Array<string> = [];

    for(const sublist of chunkedList){
      const datas = await Promise.all(
        sublist.map(async (data: any) => {
          return await postData(data);
        })
      );

      results = [...results, ...datas];
    }

    return results;
  };
