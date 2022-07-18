import React from 'react';
import styled from 'styled-components';
import Select from 'react-select'

export const options = [...Array(15).keys()].map(x => ({value: x+5, label: x+5}));

export const BoardSize = () => (
    <Select placeholder ={'Board size'} options={options} />
)