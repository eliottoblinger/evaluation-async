type Context = {
  firstStep: (data: string) => Promise<string>;
  secondStep: (data: string) => Promise<string>;
  thirdStep: (data: string) => Promise<string>;
};

export default ({ firstStep, secondStep, thirdStep }: Context) =>
  async (list: Array<string>) => {
    const processSteps = async (item: string) => {
      const resFirstStep = await firstStep(item);
      const resSecondStep = await secondStep(resFirstStep);
      return await thirdStep(resSecondStep);
    }

    const res = await Promise.all(list.map(processSteps));

    console.log(res)

    return res;
  };
