import React from "react"
import "./StakingCard.scss"
import { BEM } from "../utils/BEM"
import { Button } from "./core/Button"

interface Props {
  disabled?: boolean
  title: string
  text: string
  buttonText: string
  iconName: string
  firstColor: string
  secondColor: string
  xmoon?: boolean
}

export const StakingCard: React.FunctionComponent<Props> = ({
  disabled,
  title,
  text,
  buttonText,
  iconName,
  firstColor,
  secondColor,
  xmoon,
}) => {
  const bem = new BEM("StakingCard", () => ({
    xmoon: xmoon,
  }))

  const bgGradient = {
    backgroundImage:
      "linear-gradient(-59deg, " +
      firstColor +
      " 24%, " +
      secondColor +
      " 100%",
  }

  return (
    <div className={bem.getClassName()} style={bgGradient}>
      <div className={bem.getElement("content")}>
        <h3>{title}</h3>
        <p>{text}</p>
        <Button
          title={buttonText}
          onClick={() => console.log("click")}
          disabled={disabled ? disabled : false}
        ></Button>
      </div>
      <div className={bem.getElement("image")}>
        <img src={"./icons/" + iconName + ".png"} alt={"icon"} />
      </div>
    </div>
  )
}
