import React from "react"
import "./Button.scss"
import { BEM } from "../../utils/BEM"

interface Props {
  title: string
  onClick: () => void
  disabled?: boolean
}

interface Modifiers {
  clicked: boolean
  disabled: boolean
  ghost: boolean
  loading: boolean
}

export const Button: React.FunctionComponent<Props> = ({ title, disabled }) => {
  const bem = new BEM<Modifiers>("Button", () => ({
    disabled: disabled,
  }))

  return (
    <div className={bem.getClassName()}>
      <button className={bem.getElement("button")}>
        <span className={bem.getElement("title")}>{title}</span>
      </button>
    </div>
  )
}
