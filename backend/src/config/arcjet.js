import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import { ENV } from "./env.js";

export const aj = arcjet({
  key: ENV.ARJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    shield({ mode: "LIVE" }),

    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Fixed typo: CATEGPORY → CATEGORY
      ],
    }),

    tokenBucket({
      mode: "LIVE",
      interval: 10,
      capacity: 15,
      refillRate: 10,
    }),
  ],
});