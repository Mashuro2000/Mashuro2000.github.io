import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ReactDOM from 'react-dom'; // ReactDOM for rendering

export const PercentageBar = ({skill, percentage, image}) => {
    return (
        <div className='percentage'>
            <CircularProgressbarWithChildren
                value={percentage}
                styles={{
                    path: {
                        stroke: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(114,9,121,1) 79%)'
                    }
                }}
                >
                <img src={image} style={{ width: 40 }} />
                <div style={{ fontSize: 30 }}>
                    <strong>{percentage}%</strong>
                </div>
            </CircularProgressbarWithChildren>
            <h5>{skill}</h5>
        </div>
    )
}
