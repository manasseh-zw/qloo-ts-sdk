/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAudienceTypesRequest = {
  /**
   * Filter by a comma-separated list of parental entity types (`urn:audience:communities`). Each type must match exactly.
   */
  filterParentsTypes?: Array<string> | undefined;
  /**
   * The page number of results to return. This is equivalent to take + offset and is the recommended approach for most use cases.
   */
  page?: number | undefined;
  /**
   * The number of results to return.
   */
  take?: number | undefined;
};

export type GetAudienceTypesResults = {
  entities?: Array<any> | undefined;
  duration?: number | undefined;
};

/**
 * Successful Operation
 */
export type GetAudienceTypesResponse = {
  success?: boolean | undefined;
  results?: GetAudienceTypesResults | undefined;
};

/** @internal */
export const GetAudienceTypesRequest$inboundSchema: z.ZodType<
  GetAudienceTypesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "filter.parents.types": z.array(z.string()).optional(),
  page: z.number().int().optional(),
  take: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "filter.parents.types": "filterParentsTypes",
  });
});

/** @internal */
export type GetAudienceTypesRequest$Outbound = {
  "filter.parents.types"?: Array<string> | undefined;
  page?: number | undefined;
  take?: number | undefined;
};

/** @internal */
export const GetAudienceTypesRequest$outboundSchema: z.ZodType<
  GetAudienceTypesRequest$Outbound,
  z.ZodTypeDef,
  GetAudienceTypesRequest
> = z.object({
  filterParentsTypes: z.array(z.string()).optional(),
  page: z.number().int().optional(),
  take: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    filterParentsTypes: "filter.parents.types",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAudienceTypesRequest$ {
  /** @deprecated use `GetAudienceTypesRequest$inboundSchema` instead. */
  export const inboundSchema = GetAudienceTypesRequest$inboundSchema;
  /** @deprecated use `GetAudienceTypesRequest$outboundSchema` instead. */
  export const outboundSchema = GetAudienceTypesRequest$outboundSchema;
  /** @deprecated use `GetAudienceTypesRequest$Outbound` instead. */
  export type Outbound = GetAudienceTypesRequest$Outbound;
}

export function getAudienceTypesRequestToJSON(
  getAudienceTypesRequest: GetAudienceTypesRequest,
): string {
  return JSON.stringify(
    GetAudienceTypesRequest$outboundSchema.parse(getAudienceTypesRequest),
  );
}

export function getAudienceTypesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAudienceTypesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAudienceTypesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAudienceTypesRequest' from JSON`,
  );
}

/** @internal */
export const GetAudienceTypesResults$inboundSchema: z.ZodType<
  GetAudienceTypesResults,
  z.ZodTypeDef,
  unknown
> = z.object({
  entities: z.array(z.any()).optional(),
  duration: z.number().optional(),
});

/** @internal */
export type GetAudienceTypesResults$Outbound = {
  entities?: Array<any> | undefined;
  duration?: number | undefined;
};

/** @internal */
export const GetAudienceTypesResults$outboundSchema: z.ZodType<
  GetAudienceTypesResults$Outbound,
  z.ZodTypeDef,
  GetAudienceTypesResults
> = z.object({
  entities: z.array(z.any()).optional(),
  duration: z.number().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAudienceTypesResults$ {
  /** @deprecated use `GetAudienceTypesResults$inboundSchema` instead. */
  export const inboundSchema = GetAudienceTypesResults$inboundSchema;
  /** @deprecated use `GetAudienceTypesResults$outboundSchema` instead. */
  export const outboundSchema = GetAudienceTypesResults$outboundSchema;
  /** @deprecated use `GetAudienceTypesResults$Outbound` instead. */
  export type Outbound = GetAudienceTypesResults$Outbound;
}

export function getAudienceTypesResultsToJSON(
  getAudienceTypesResults: GetAudienceTypesResults,
): string {
  return JSON.stringify(
    GetAudienceTypesResults$outboundSchema.parse(getAudienceTypesResults),
  );
}

export function getAudienceTypesResultsFromJSON(
  jsonString: string,
): SafeParseResult<GetAudienceTypesResults, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAudienceTypesResults$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAudienceTypesResults' from JSON`,
  );
}

/** @internal */
export const GetAudienceTypesResponse$inboundSchema: z.ZodType<
  GetAudienceTypesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.boolean().optional(),
  results: z.lazy(() => GetAudienceTypesResults$inboundSchema).optional(),
});

/** @internal */
export type GetAudienceTypesResponse$Outbound = {
  success?: boolean | undefined;
  results?: GetAudienceTypesResults$Outbound | undefined;
};

/** @internal */
export const GetAudienceTypesResponse$outboundSchema: z.ZodType<
  GetAudienceTypesResponse$Outbound,
  z.ZodTypeDef,
  GetAudienceTypesResponse
> = z.object({
  success: z.boolean().optional(),
  results: z.lazy(() => GetAudienceTypesResults$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAudienceTypesResponse$ {
  /** @deprecated use `GetAudienceTypesResponse$inboundSchema` instead. */
  export const inboundSchema = GetAudienceTypesResponse$inboundSchema;
  /** @deprecated use `GetAudienceTypesResponse$outboundSchema` instead. */
  export const outboundSchema = GetAudienceTypesResponse$outboundSchema;
  /** @deprecated use `GetAudienceTypesResponse$Outbound` instead. */
  export type Outbound = GetAudienceTypesResponse$Outbound;
}

export function getAudienceTypesResponseToJSON(
  getAudienceTypesResponse: GetAudienceTypesResponse,
): string {
  return JSON.stringify(
    GetAudienceTypesResponse$outboundSchema.parse(getAudienceTypesResponse),
  );
}

export function getAudienceTypesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAudienceTypesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAudienceTypesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAudienceTypesResponse' from JSON`,
  );
}
