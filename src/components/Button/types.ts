import React from "react"

export enum ButtonThemesEnum {
  primary = 'primary',
  outlined = 'outlined',
  transparent = 'transparent'
}

export type ButtonProps = {
  theme: keyof typeof ButtonThemesEnum,
  children: React.ReactNode
  style?: any,
  width?: number | string,
  height?: number | string,
}