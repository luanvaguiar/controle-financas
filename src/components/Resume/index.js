import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from './styles';
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa';

const Resume = ({ income, expense, total }) => {
    return (
        <C.Container>
            <ResumeItem tittle={"Entradas"} Icon={FaRegArrowAltCircleUp} value={income} />
            <ResumeItem tittle={"Saídas"} Icon={FaRegArrowAltCircleDown} value={expense} />
            <ResumeItem tittle={"Total"} Icon={FaDollarSign} value={total} />
        </C.Container>
    )
};

export default Resume;