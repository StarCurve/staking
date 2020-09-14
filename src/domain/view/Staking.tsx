/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"
import "./Staking.scss"
import { BEM } from "../utils/BEM"
import Logo from "../components/Logo"
import { Button } from "../components/core/Button"
import { StakingCard } from "../components/StakingCard"

export interface Props {}

export interface State {}

export default class Staking extends React.Component<Props, State> {
  private bem = new BEM("Staking")

  public state: State = {
    assets: [],
    selectedToAsset: "",
    selectedFromAsset: "ETH",
    buyAmount: 10,
    quoteData: [],
  }

  componentDidMount() {}

  render() {
    return (
      <div className={this.bem.getClassName()}>
        <div className={this.bem.getElement("container")}>
          <div className={this.bem.getElement("top-container")}>
            <Logo />
            <Button
              title={"Connect wallet"}
              onClick={() => console.log("connect wallet")}
              disabled={true}
            />
          </div>
          <div className={this.bem.getElement("title-container")}>
            <h1>STARCURVE. Staking</h1>
            <p>Earn XSTAR tokens by staking XSTAR liquidity tokens!</p>
          </div>
          <div className={this.bem.getElement("content-container")}>
            <StakingCard
              title={"Balancer"}
              text={"Deposit XTAR-USDC-ETH BPT and earn XSTAR"}
              buttonText={"Coming soon"}
              iconName={"balancer"}
              disabled={true}
              firstColor={"#ffc623"}
              secondColor={"#fcdd87"}
            />
            <StakingCard
              title={"Uniswap"}
              text={"Deposit USDC-XSTAR LP and earn XSTAR"}
              buttonText={"Coming soon"}
              iconName={"uniswap"}
              disabled={true}
              firstColor={"#FF9D5A"}
              secondColor={"#FFD363"}
            />
            <StakingCard
              title={"Sushiswap"}
              text={"Deposit USDC-XSTAR SLP and earn XSTAR"}
              buttonText={"Coming soon"}
              iconName={"sushiswap"}
              disabled={true}
              firstColor={"#FF6969"}
              secondColor={"#FFB972"}
            />
            <StakingCard
              title={"XMOON"}
              text={"Stake on all three platforms and earn XMOON!"}
              buttonText={"Coming soon"}
              iconName={"xmoon"}
              disabled={true}
              firstColor={""}
              secondColor={""}
              xmoon={true}
            />
          </div>
          <div className={this.bem.getElement("footer-container")}>
            <a href="https://starcurve.io/">StarCurve</a>
            <a href="https://sale.starcurve.io/">Tokensale portal</a>
            <a href="https://github.com/starcurve">Github</a>
            <a href="https://medium.com/@StarCurve">Medium</a>
            <a href="https://t.me/starcurve">Telegram</a>
          </div>
        </div>
      </div>
    )
  }
}
