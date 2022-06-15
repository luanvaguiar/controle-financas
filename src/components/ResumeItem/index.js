import React from 'react';
import * as C from './styles';

const ResumeItem = ({ tittle, Icon, value}) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTittle>{ tittle }</C.HeaderTittle>
                <Icon />
            </C.Header>
            <C.Total>{ value }</C.Total>
        </C.Container>
    )
};

export default ResumeItem;