import React from "react"

export enum ButtonThemesEnum {
  primary = 'primary',
  outlined = 'outlined'
}

export type ButtonProps = {
  theme: keyof typeof ButtonThemesEnum,
  children: React.ReactNode
  style: any,
}