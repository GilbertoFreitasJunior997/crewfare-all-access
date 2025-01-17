import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";
import { Toaster } from ".";
import { Button } from "../button";

const meta: Meta<typeof Toaster> = {
  title: "Design System/Atoms/Toaster",
  component: Toaster,
  parameters: {
    docs: {
      description: {
        component:
          "The `Toaster` component provides a simple way to show toast notifications, which are small messages that inform the user of actions or updates. It integrates with Sonner, offering customizable themes, types, and visual feedback. Toast types include info, success, and warning, each with its distinct styling to convey different meanings to the user.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div className="flex gap-5">
      <Button onClick={() => toast.info("This is an info toast")}>
        Show Info Toast
      </Button>
      <Button onClick={() => toast.warning("This is a warning toast")}>
        Show Warning Toast
      </Button>
      <Button onClick={() => toast.success("This is a success toast")}>
        Show Success Toast
      </Button>
      <Button onClick={() => toast.error("This is a error toast")}>
        Show error Toast
      </Button>
      <Toaster />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story shows how to display different types of toasts (info, warning, and success) using the `Toaster` component. Each button triggers a different toast type to give visual feedback to the user.",
      },
    },
  },
};

export const InfoToast: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.info("This is an info toast")}>
        Show Info Toast
      </Button>
      <Toaster />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the usage of the info toast type. When the button is clicked, an informational toast notification is shown.",
      },
    },
  },
};

export const WarningToast: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.warning("This is a warning toast")}>
        Show Warning Toast
      </Button>
      <Toaster />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the usage of the warning toast type. When the button is clicked, a warning toast notification is displayed to the user.",
      },
    },
  },
};

export const SuccessToast: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.success("This is a success toast")}>
        Show Success Toast
      </Button>
      <Toaster />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the usage of the success toast type. When the button is clicked, a success toast notification is shown to the user.",
      },
    },
  },
};

export const ErrorToast: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.error("This is a error toast")}>
        Show Error Toast
      </Button>
      <Toaster />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the usage of the error toast type. When the button is clicked, a error toast notification is shown to the user.",
      },
    },
  },
};
