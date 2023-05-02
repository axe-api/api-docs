import { IColorPair } from "./Interfaces";

export const COLOR_MAP: Record<string, IColorPair> = {
  POST: { color: "#35370A", bgColor: "#E4EB45" },
  GET: { color: "#1D2B25", bgColor: "#00F4B9" },
  DELETE: { color: "#530C02", bgColor: "#FD847E" },
  PUT: { color: "#35370A", bgColor: "#E4EB45" },
  PATCH: { color: "#35370A", bgColor: "#E4EB45" },
};

export const HANDLER_TITLE_MAP: Record<string, string> = {
  store: "Create",
  paginate: "Paginate",
  show: "Show",
  update: "Update",
  destroy: "Delete",
  force_delete: "Force delete",
  patch: "Patch",
  all: "All",
};

export const HANDLER_TITLE_DESCRIPTION: Record<string, string> = {
  store: "You can create a new item on this model",
  paginate: "You can paginate all items",
  show: "You can get a specific item by the primary key",
  update: "You can update an item by the primary key",
  destroy: "You can delete an item by the primary key",
  force_delete: "You can force-delete an item by the primary key",
  patch: "You can patch an item by the primary key",
  all: "You can list all items without pagination",
};

export const VALIDATION_DESCRIPTIONS: Record<string, any> = {
  accepted: "The :attribute must be accepted.",
  after: "The :attribute must be after :after.",
  after_or_equal: "The :attribute must be equal or after :after_or_equal.",
  alpha: "The :attribute field must contain only alphabetic characters.",
  alpha_dash:
    "The :attribute field may only contain alpha-numeric characters, as well as dashes and underscores.",
  alpha_num: "The :attribute field must be alphanumeric.",
  before: "The :attribute must be before :before.",
  before_or_equal: "The :attribute must be equal or before :before_or_equal.",
  between: {
    numeric: "The :attribute field must be between :min and :max.",
    string: "The :attribute field must be between :min and :max characters.",
  },
  confirmed: "The :attribute confirmation does not match.",
  email: "The :attribute format is invalid.",
  date: "The :attribute is not a valid date format.",
  def: "The :attribute attribute has errors.",
  digits: "The :attribute must be :digits digits.",
  digits_between: "The :attribute field must be between :min and :max digits.",
  different: "The :attribute and :different must be different.",
  in: "The selected :attribute is invalid.",
  integer: "The :attribute must be an integer.",
  hex: "The :attribute field should have hexadecimal format",
  min: {
    numeric: "The :attribute must be at least :min.",
    string: "The :attribute must be at least :min characters.",
  },
  max: {
    numeric: "The :attribute may not be greater than :max.",
    string: "The :attribute may not be greater than :max characters.",
  },
  not_in: "The selected :attribute is invalid.",
  numeric: "The :attribute must be a number.",
  present: "The :attribute field must be present (but can be empty).",
  required: "The :attribute field is required.",
  required_if: "The :attribute field is required when :other is :value.",
  required_unless:
    "The :attribute field is required when :other is not :value.",
  required_with: "The :attribute field is required when :field is not empty.",
  required_with_all:
    "The :attribute field is required when :fields are not empty.",
  required_without: "The :attribute field is required when :field is empty.",
  required_without_all:
    "The :attribute field is required when :fields are empty.",
  same: "The :attribute and :same fields must match.",
  size: {
    numeric: "The :attribute must be :size.",
    string: "The :attribute must be :size characters.",
  },
  string: "The :attribute must be a string.",
  url: "The :attribute format is invalid.",
  regex: "The :attribute format is invalid.",
  attributes: {},
};
