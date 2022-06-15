import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa';

const Resume = () => {
    return (
        <C.Container>
            <ResumeItem tittle={"Entradas"} Icon={FaRegArrowAltCircleUp} value="1000" />
            <ResumeItem tittle={"Saídas"} Icon={FaRegArrowAltCircleDown} value="900" />
            <ResumeItem tittle={"Total"} Icon={FaDollarSign} value="800" />
        </C.Container>
    )
};

export default Resume;