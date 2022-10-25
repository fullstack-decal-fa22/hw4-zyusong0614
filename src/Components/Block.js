import '../Styles/Block.css';
import React from 'react';

const Block = (props) => {
    /* TODO */
    const color = props.color;
    return (
        // ignore this data-testid, it's purely for testing :)
        <div data-testid='main-component'>
            {/* You'll notice pre-assigned class names 'post' and 'caption', 
            we took care of the basic block styling! 
            If curious, check out the css in Styles/Block.css */}
            {/* Refer to hint if stuck on how to color the posts */}
            <div className="post" style={{backgroundColor: color}}></div>
            <div className="caption">{color}</div>
        </div>
    );
}

export default Block;