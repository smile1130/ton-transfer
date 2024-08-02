import MaterialTailwind from "@material-tailwind/react";

declare module "@material-tailwind/react" {
  interface ButtonProps {
    placeholder?;
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }
  interface BreadcrumbsProps extends ButtonProps {}
  interface NavbarProps {
    placeholder?;
  }

  interface TypographyProps {
    placeholder?;
  }
  interface InputProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }

  interface TextareaProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    placeholder?;
  }

  interface MenuItemProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    placeholder?;
  }

  interface MenuListProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    placeholder?;
  }

  interface SelectProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    placeholder?;
  }

  interface SwitchProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }

  interface CheckboxProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }

  interface RadioProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }

  interface TypographyProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }

  interface NavbarProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
  }

  interface IconButtonProps {
    onPointerEnterCapture?;
    onPointerLeaveCapture?;
    crossOrigin?;
    placeholder?;
  }

  interface TabsHeaderProps extends ButtonProps {}

  interface TabProps extends ButtonProps {}

  interface TabsBodyProps extends ButtonProps {}
}
