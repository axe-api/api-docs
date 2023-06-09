export enum QueryFeature {
  All = "all",
  FieldsAll = "fieldsAll",
  Sorting = "sorting",
  Limits = "limits",
  WhereAll = "where.*",
  WhereEqual = "where.equal",
  WhereNotEqual = "where.notEqual",
  WhereGt = "where.gt",
  WhereGte = "where.gte",
  WhereLt = "where.lt",
  WhereLte = "where.lte",
  WhereLike = "where.like",
  WhereNotLike = "where.notLike",
  WhereIn = "where.in",
  WhereNotIn = "where.notIn",
  WhereBetween = "where.between",
  WhereNotBetween = "where.notBetween",
  WhereNull = "where.null",
  WhereNotNull = "where.notNull",
  Trashed = "trashed",
  WithAll = "with.*",
  WithHasOne = "with.hasOne",
  WithHasMany = "with.hasMany",
}

export enum QueryFeatureType {
  Allow = "Allow",
  Deny = "Deny",
}

export enum Relationships {
  HAS_ONE = "HAS_ONE",
  HAS_MANY = "HAS_MANY",
}
