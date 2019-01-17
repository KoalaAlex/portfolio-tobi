import React, { useState } from 'react';
import PropTypes from 'prop-types'

import { PartTwoHome } from "./part-two--sub/part-two--home"
import { PartTwoAboutMe } from "./part-two--sub/part-two--about-me"
import { PartTwoHistory } from "./part-two--sub/part-two--history"
import PartTwoProjects from "./part-two--sub/part-two--projects"
import { PartTwoContactMe } from "./part-two--sub/part-two--contact-me"

export const PartTwo = React.memo((props) => {
  const [lastIndex, setLastIndex] = useState(props.activeIndex);
  let content
  switch(props.activeIndex){
    case 0:
      content = <PartTwoHome />
      break
    case 1:
      content = <PartTwoAboutMe />
      break
    case 2:
      content = <PartTwoHistory />
      break;
    case 3:
      content = <PartTwoProjects />
      break;
    case 4:
      content = <PartTwoContactMe />
      break;
    default:
      content = <PartTwoHome />
      break;
  }
  return (
    <>
      {content}
    </>
  )
});

PartTwo.propTypes = {
  activeIndex: PropTypes.number.isRequired,
}
