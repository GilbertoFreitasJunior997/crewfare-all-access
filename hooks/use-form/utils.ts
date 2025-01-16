import { FormFieldGroup } from ".";

const fieldNameGroupSeparator = "__";

export const getFieldName = (baseName: string, group?: FormFieldGroup) => {
  if (group) {
    return `${baseName}${fieldNameGroupSeparator}${group.name}-${group.key}`;
  }

  return baseName;
};

export const getBaseFieldNameFromGroup = (name: string) => {
  const splittedName = name.split(fieldNameGroupSeparator);

  return splittedName[0] ?? "";
};
