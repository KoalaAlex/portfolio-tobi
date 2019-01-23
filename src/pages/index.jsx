import React, { useState } from 'react';
import { fontFace } from 'emotion'
import styled from '@emotion/styled'
import { Layout } from '../components/Layout/layout'

import { PartOne } from '../components/part-one'
import { PartTwo } from '../components/part-two'
import { MenuBackground } from '../components/Menu/menu-background'

import BGSlider from '../components/bg-slider'

import { FullWindowGrid } from '../styles/grid/grid-styles'

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <Layout>
      <BGSlider
        activeIndex={activeIndex}>
      </BGSlider>
      {isMenuActive && (
        <MenuBackground />
      )}
      <FullWindowGrid>
        <PartOne
          isMenuActive={isMenuActive}
          menuToggle={setIsMenuActive}
          activeIndex={activeIndex}
          changeActiveIndex={setActiveIndex} />
        <PartTwo
          activeIndex={activeIndex}>
        </PartTwo>
      </FullWindowGrid>
    </Layout>
  )
}
