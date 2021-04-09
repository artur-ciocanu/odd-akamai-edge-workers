import { httpRequest } from "http-request";
import { createResponse } from "create-response";
import { logger } from "log";
import TargetClient from "@adobe/target-nodejs-sdk";
import RULES from "./rules";

const STATUS = 200;
const HEADERS = {
  "Content-Type": ["application/json"]
};

const createTargetClient = () => {
  return new Promise(resolve => {
    const result = TargetClient.create({
      client: "targettesting",
      organizationId: "74F652E95F1B16FE0A495C92@AdobeOrg",
      decisioningMethod: "on-device",
      artifactPayload: RULES,
      pollingInterval: 0, // "0" prevents polling, if artifactPayload is provided
      targetLocationHint: "34", // prevent cluster discovery
      logger: logger,
      fetchApi: httpRequest,
      events: {
        clientReady: () => resolve(result)
      }
    });
  });
};

export async function responseProvider(request) {
  const deliveryRequest = {      
    execute: {
      mboxes: [{
        index: 0,
        name: "mbox-params",
        parameters: {
          foo: "bar"
        }
      }]
    }
  };

  logger.log("Received request", JSON.stringify(request));

  const client = await createTargetClient();
  const { response } = await client.getOffers({ request: deliveryRequest });

  logger.log("Sending response", JSON.stringify(response));

  return createResponse(STATUS, HEADERS, JSON.stringify(response));
}
