import { ExerciseContext } from "../../../lib/Exercise.js";
import { skipExercise } from "../../../lib/skipExercise.js";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const promise1 = async () => {
      await createPromise("B");
      await createPromise("D");
    }

    const promise2 = async () => {
      await createPromise("C");
      await createPromise("E");
    }

    await createPromise("A");

    await Promise.all([promise1(), promise2()]);

    await createPromise("F");
  };

const thenCatch =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

export default {
  makeMixedExercise: skipExercise(mixed),
  makeAsyncAwaitExercise: asyncAwait,
  makeThenCatchExercise: skipExercise(thenCatch),
};
