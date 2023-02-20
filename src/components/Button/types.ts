import React from "react";

export enum ButtonThemesEnum {
  primary = 'primary',
  outlined = 'outlined',
  transparent = 'transparent'
}

export type ButtonProps = {
  theme: keyof typeof ButtonThemesEnum,
  children: React.ReactNode
  style?: React.CSSProperties,
  onClick: (attrs?: any) => void,
  isLoading?: boolean,
  disabled?: boolean,
}