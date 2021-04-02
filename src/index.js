import { httpRequest } from "http-request";
import { createResponse } from "create-response";
import { logger } from "log";
import TargetClient from "@adobe/target-nodejs-sdk";
import RULES from "./rules";

const createTargetClient = () => {
  return new Promise(resolve => {
    const result = TargetClient.create({
      client: "targettesting",
      organizationId: "74F652E95F1B16FE0A495C92@AdobeOrg",
      decisioningMethod: "on-device",
      artifactPayload: RULES,
      logger: logger,
      fetchApi: httpRequest,
      events: {
        clientReady: () => resolve(result)
      }
    });
  });
};

export async function responseProvider(request) {
  const response = await handleRequest(request);

  return Promise.resolve(createResponse(
    200,
    {"Content-Type": ["application/json"]},
    JSON.stringify(response)
  ));
}

async function handleRequest(request) {
  // Need to figure out how to retrieve POST body, is this the right way???
  const body = await request.json();
  
  return await createTargetClient()
  .then(client => client.getOffers({request: body}))
  .then(deliveryResponse => deliveryResponse.response)
  .catch(error => error);
}
