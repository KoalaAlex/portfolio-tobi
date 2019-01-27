import React, { useState, useEffect, useRef } from 'react';
import { fontFace } from 'emotion'
import styled from '@emotion/styled'
import { Layout } from '../components/Layout/layout'

import { PartOne } from '../components/part-one'
import { PartTwo } from '../components/part-two'
import { MenuBackground } from '../components/Menu/menu-background'

import BGSlider from '../components/bg-slider'

import { FullWindowGrid } from '../styles/grid/grid-styles'

export default function Index(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef();
  const [isMenuActive, setIsMenuActive] = useState(false);

  // cDM , cWU
  useEffect(() => {
    activeIndexRef.current = activeIndex;
    return () => {
      //cWU
    };
  }, [props]);

  // save state in a ref to check it in a function
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  //  console.log("Change" + activeIndex);
  }, [activeIndex]);


  function changeActiveIndexIfNeeded(activeIndexRef, newState){
    if(newState !== activeIndexRef.current){
      setActiveIndex(newState)
    }
  }

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
          activeIndexRef={activeIndexRef}
          changeActiveIndex={changeActiveIndexIfNeeded} />
        <PartTwo
          activeIndex={activeIndex}>
        </PartTwo>
      </FullWindowGrid>
    </Layout>
  )
}
