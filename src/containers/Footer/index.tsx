import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"
import { CustomGrid } from "../../core/GlobalStyles"

import { useFormatMessages } from "../../utils/hooks"
import { IconGithub, IconReddit, IconDiscord, IconTwitter } from "../../icons"
import Banner from "../../components/Banner"
import Button from "../../components/Button"

import { LINKS } from "../../utils/const"

import * as S from "./styled"

const Footer: React.FC = () => {
  const [followUs] = useFormatMessages([{ id: "FOOTER_FOLLOW_US" }])

  return (
    <S.Footer>
      <S.Wrapper>
        <S.Banner>
          <Banner type="bold" texts={["much wow", "such random"]} />
        </S.Banner>
        <CustomGrid>
          <Row center="xs">
            <Col xs={12} sm={8} md={5} lg={4}>
              <h3>{followUs}</h3>

              <S.ShapesWrapper>
                <Button bordered icon={<IconTwitter />} href={LINKS.twitter} />
                <Button bordered icon={<IconGithub />} href={LINKS.github} />
              </S.ShapesWrapper>
              <S.Copy>
                Released under <a href="http://www.wtfpl.net/">WTFPL</a>
              </S.Copy>
            </Col>
          </Row>
        </CustomGrid>
      </S.Wrapper>
    </S.Footer>
  )
}

export default Footer
