import { AddRowButton } from "@/components/atoms/add-row-button";
import { inputLabelClassName } from "@/components/atoms/input-label";
import { SelectInputItem } from "@/components/atoms/select-input-item";
import { TrashButton } from "@/components/atoms/trash-button";
import { NumberInput } from "@/components/molecules/number-input";
import { SelectInput } from "@/components/molecules/select-input";
import { TextInput } from "@/components/molecules/text-input";
import { FormFieldGroup } from "@/hooks/use-form";
import { useFormProvider } from "@/hooks/use-form-provider";
import { useMemo, useState } from "react";

const groupName = "taxesFees";

const taxFeesTypes: SelectInputItem[] = [
  {
    label: "Fixed",
    value: "fixed",
  },
  {
    label: "Percent",
    value: "percent",
  },
];

type TaxFeeRow = {
  fieldKey: number;
  onRemoveClick: () => void;
};
const TaxFeeRow = ({ fieldKey, onRemoveClick }: TaxFeeRow) => {
  const { form } = useFormProvider();

  const group: FormFieldGroup = useMemo<FormFieldGroup>(
    () => ({
      name: groupName,
      key: fieldKey,
    }),
    [fieldKey],
  );

  if (!form) {
    return null;
  }
  const { getValue } = form;

  const type = getValue<SelectInputItem | undefined>("type", group);
  const isPercent = type?.value === "percent";

  return (
    <section className="relative pr-9 grid grid-cols-3 gap-5">
      <TextInput
        name="name"
        className="grid-cols-1"
        label="Name"
        group={group}
        isRequired={true}
      />
      <NumberInput
        name="amount"
        className="grid-cols-1"
        label="Amount"
        group={group}
        isRequired={true}
        suffix={isPercent ? "%" : undefined}
        min={0}
      />
      <SelectInput
        name="type"
        items={taxFeesTypes}
        className="grid-cols-1"
        label="Type"
        group={group}
        isRequired={true}
      />

      <TrashButton
        onClick={onRemoveClick}
        className="absolute right-0 top-[43px]"
      />
    </section>
  );
};

export const TaxFees = () => {
  const { form } = useFormProvider();

  const [taxFeesRows, setTaxFeesRows] = useState<number[]>([]);

  const handleAddRow = () => {
    setTaxFeesRows((old) => [...old, new Date().getMilliseconds()]);
  };

  const handleRemoveRow = (key: number) => {
    setTaxFeesRows((old) => old.filter((row) => row !== key));

    if (!form) {
      return;
    }
    const { unregister } = form;

    unregister(["name", "amount", "type"], {
      name: groupName,
      key,
    });
  };

  return (
    <div className="mt-6">
      <span className={inputLabelClassName}>Taxes & Fees</span>

      <section className="flex flex-col gap-5">
        {taxFeesRows.map((key) => {
          return (
            <TaxFeeRow
              key={key}
              fieldKey={key}
              onRemoveClick={() => handleRemoveRow(key)}
            />
          );
        })}
      </section>

      <AddRowButton onClick={handleAddRow}>Add New Tax/Fee</AddRowButton>
    </div>
  );
};
