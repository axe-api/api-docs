import { QueryFeature, QueryFeatureType } from "./Enums";
import { IQueryLimitConfig } from "./Interfaces";

export const isQueryFeatureSupported = (
  queryLimits: IQueryLimitConfig[],
  feature: QueryFeature,
  key: string | null = null
): boolean => {
  const rules = queryLimits.filter(
    (limit) => limit.feature === feature && limit.key === null
  );

  if (key) {
    const keyRules = queryLimits.filter(
      (limit) => limit.feature === feature && limit.key === key
    );

    if (keyRules.length > 0) {
      const lastKeyRule = keyRules[keyRules.length - 1];
      if (lastKeyRule?.type === QueryFeatureType.Deny) {
        return false;
      }
      return true;
    }
  }

  if (rules.length === 0) {
    return false;
  }

  const lastRule = rules[rules.length - 1];
  if (lastRule?.type === QueryFeatureType.Deny) {
    return false;
  }

  return true;
};
