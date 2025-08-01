/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { audiencesGetAudiences } from "../funcs/audiencesGetAudiences.js";
import { audiencesGetAudienceTypes } from "../funcs/audiencesGetAudienceTypes.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Audiences extends ClientSDK {
  /**
   * Find Audiences
   *
   * @remarks
   * The Find Audiences API retrieves a list of audience IDs that can be used for filtering results and refining targeting in recommendations. You can use the returned audience IDs as values for `signal.demographics.audiences` to filter Insights API query results by specific audiences.
   */
  async getAudiences(
    request?: operations.GetAudiencesRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetAudiencesResponse> {
    return unwrapAsync(audiencesGetAudiences(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Audience Types
   *
   * @remarks
   * The Get Audience Types API returns all available audience type IDs, representing different audience categories. You can use this API to explore audience classifications and refine searches in the Find Audiences API. Including `filter.parents.types` allows you to narrow results by relevant entity types.
   */
  async getAudienceTypes(
    request?: operations.GetAudienceTypesRequest | undefined,
    options?: RequestOptions,
  ): Promise<operations.GetAudienceTypesResponse> {
    return unwrapAsync(audiencesGetAudienceTypes(
      this,
      request,
      options,
    ));
  }
}
