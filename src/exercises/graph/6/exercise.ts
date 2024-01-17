import { ExerciseContext } from "../../../lib/Exercise.js";
import { skipExercise } from "../../../lib/skipExercise.js";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    await createPromise("A");

    const promise3 = createPromise("B");
    const promise4 = createPromise("C");
    const promise5 = createPromise("D");

    const promise1 = async () => {
      await Promise.all([promise3, promise4]);
      await createPromise("E");
    };

    const promise2 = async () => {
      await Promise.all([promise4, promise5]);
      await createPromise("F");
    };

    await Promise.all([promise1(), promise2()]);
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: asyncAwait,
  makeThenCatchExercise: skipExercise(thenCatch),
};
