import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import TokenColor from "../components/tokenColor"
import CT from "../../tokens/colorTokens-light.json"
import Identities from "../../tokens/identities.json"

const Main = styled.main`
  padding: 0;
  padding-top: 2rem;
`
export default function ColorTokens({ children }) {
  const colors = CT.colorTokens.mysph.light

  function refColor(rC, obj) {
    const lastVal = rC.split(".").at(-1)
    const cat = rC.split(".").at(-2)
    const zoneObj = obj[cat][lastVal]
    return zoneObj.value
  }
  return (
    <Layout>
      <Main>
        <h1>Color Tokens</h1>
        <hr></hr>

        <div className="section">
          {Object.keys(colors).map((ckey, index) => {
            const colorKey = colors[ckey]
            const colorVal = colorKey.value.slice(1, -1)

            return (
              <TokenColor
                colorNm={ckey}
                colorValue={refColor(colorVal, Identities.color)}
              ></TokenColor>
            )
          })}
        </div>
      </Main>
    </Layout>
  )
}
