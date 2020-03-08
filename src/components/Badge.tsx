import React from 'react';
import { BadgeProps } from '../Interfaces/interfaces';

const Badge = (props: BadgeProps) => {
    const { value } = props;
    
    return value! > 0 ? <section className="badge">{value}</section> : null;
}

export default Badge;