import { ExerciseContext } from "../../../lib/Exercise.js";
import { skipExercise } from "../../../lib/skipExercise.js";

const mixed =
  ({ createPromise }: ExerciseContext) =>
  async () => {};

const asyncAwait =
  ({ createPromise }: ExerciseContext) =>
  async () => {
    const promise1 = async() => {
      await createPromise("A");
      await createPromise("B");
      await createPromise("C");
    }

    const promise2 = async() => {
      await createPromise("D");
      await createPromise("E");
      await createPromise("F");
    }
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
