import { Router } from "../../../lib/concreteExercise/Router.js";

type Context = {
  router: Router;
};

export default ({ router }: Context) =>
  async (url: string) => {
    return new Promise((resolve, reject) => {
      router.push(url)

      const removeEvents = () => {
        router.off("routeChangeError", routeChangeError);
        router.off("routeChangeComplete", routeChangeComplete);
      }

      const routeChangeError = () => {
        removeEvents();
        reject();
      };
      const routeChangeComplete = () => {
        removeEvents();
        resolve(true);
      }

      router.on("routeChangeError", routeChangeError);
      router.on("routeChangeComplete", routeChangeComplete);
    })
  };
