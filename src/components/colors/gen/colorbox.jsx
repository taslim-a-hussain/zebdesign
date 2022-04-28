import {orderedList} from '../functions';
import {useState} from 'react';
import Label from './label';
import * as s from '../../../../css-dist/web/site.module.css';


const Colorbox = ({colorsObj, d}) => {

    const [light2dark, setLight2dark] = useState(() => false);
    const [HEX, setHEX] = useState(() => true);
   
    
    const colors = orderedList(colorsObj, light2dark);

    const toggleLight2dark = () => setLight2dark(preValue => !preValue);
    
    return (
        <>
        <div>
            <button onClick={toggleLight2dark}>{!light2dark?'Light-Dark':'Dark-Light'}</button>
            <button className={HEX && s.activeBtn}
            onClick={() => setHEX(preValue => !preValue)}
            >HEX</button>
            <button className={!HEX && s.activeBtn}
            onClick={() => setHEX(preValue => !preValue)}
            >RGB</button>
        </div>
        
        <div className={`${d.row} ${d.fluidCols}`} 
        style={{
            boxShadow: '5px 9px 8px 1px rgba(0,0,0,0.32)'
        }}
        >
            {
                colors.map((color, index) => {
                    return (
                    <div className={`${d.col12xs} ${d.col6sm} ${d.col1md}`} key={index}>
                        <div className={`${color.cn}`} style={{
                            minHeight: '60px'
                        }}>
                            <Label color={color} hex={HEX} d={d}/>
                        </div>
                        <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0,0,0,0.8)',
                                color: 'white',
                                border: '1px solid rgba(0,0,0,0.8)',
                                textAlign: 'center'
                            }}>
                                {color.n}
                        </div>
                    </div>
                    );
                })
            }
        </div>
        </>
    );
};

export default Colorbox;