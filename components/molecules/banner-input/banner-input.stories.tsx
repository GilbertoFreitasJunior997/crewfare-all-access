import { InputStoriesWrapper } from "@/lib/stories/input-stories-wrapper";
import { inputBaseMeta } from "@/lib/stories/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BannerInput, type BannerInputValue } from ".";

const meta: Meta<typeof BannerInput> = {
  title: "Design System/Molecules/BannerInput",
  component: BannerInput,
  args: {
    showText: true,
    text: "Sample Text",
    ...inputBaseMeta.args,
    label: "Banner",
    name: "banner",
  },
  argTypes: inputBaseMeta.argTypes,
  parameters: {
    docs: {
      description: {
        component:
          "(Must be a controlled input) - The BannerInput component allows the user to upload an image (JPEG or PNG) as a banner. It also displays the uploaded image or a fallback message with drag-and-drop support. It includes visual feedback for valid or invalid inputs and supports custom text to be shown on the banner.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BannerInput>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<BannerInputValue>();

    return (
      <BannerInput
        {...args}
        value={value}
        onChange={(val) => setValue(val ?? undefined)}
      />
    );
  },
};

export const WithForm: Story = {
  args: {
    isRequired: true,
  },
  decorators: (Story) => (
    <InputStoriesWrapper>
      <Story />
    </InputStoriesWrapper>
  ),
};
