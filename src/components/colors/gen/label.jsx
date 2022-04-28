import {useState} from 'react';


const Label = ({color, hex, d}) => {
    const [hover, setHover] = useState(() => false);

    const hexLabelStyle = ({hover}) => ({
        color: '#f8f9fa',
        backgroundColor: hover ? 'rgba(0,0,0,0.3)' : 'transparent',
        opacity: hover ? '1': '0',
        minHeight: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    });
    
    return (
        <div style={hexLabelStyle({hover, color})}
        onPointerOver={()=> setHover(preValue => !preValue)}
        onPointerOut={() => setHover(preValue => !preValue)}
        >
            {hex ? color.v : color.rgb}
        </div>  
    );
};

export default Label;