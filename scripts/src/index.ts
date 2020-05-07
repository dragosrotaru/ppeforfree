import { facebookRunner, mutualaidRunner } from "./runners";

(async () => {
  await facebookRunner();
  await mutualaidRunner();
})();
