import React, { useState } from 'react';
import { Flex, Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const FilterRate = ({rechercheRate, setRechercheRate, isRating, rate}) => {
  
  return (
    <Flex gap="middle" vertical style={{margin:'2%'}}>
      {isRating ?
      <Rate tooltips={desc} onChange={setRechercheRate} value={rechercheRate} />
      :
      <Rate disabled value={rate} />
      }
      </Flex>
  );
};

export default FilterRate;