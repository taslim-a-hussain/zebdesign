import * as zeb from '../../../../css-dist/styler.module.css';
import {findKeysWithPrefix} from '../../../functions';

const Gencolors = ({colorsObj, prefix}) => {

    const colors = findKeysWithPrefix(colorsObj, prefix);
    
    return (
        <div className={`${zeb.row} ${zeb.gap2}`} >
                {
                    colors.map((color, index) => {
                        return (
                        <div className={`${zeb.col12xs} ${zeb.col6sm} ${zeb.col4md} ${zeb.col1lg}`} key={index}>
                            <div className={`${color}`} style={{
                                border: '1px solid rgba(0,0,0,0.8)',
                                height: 'auto',
                                minHeight: '60px'
                            }}>
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
                                    {color.split('_bg')[1]}
                            </div>
                        </div>
                        );
                    })
                }
        </div>
    );
};

export default Gencolors;