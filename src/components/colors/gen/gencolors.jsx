import {findKeysWithPrefix} from '../../../functions';

const Gencolors = ({colorsObj, prefix, zeb, totalCols}) => {

    const cols = () => {
        switch (totalCols) {
            case 10:
                return (`${zeb.col12xs} ${zeb.col6sm}`);
            case 9:
                return (`${zeb.col12xs} ${zeb.col4sm}`);
            case 8:
                return (`${zeb.col12xs} ${zeb.col3sm}`);
            case 6:
                return (`${zeb.col12xs} ${zeb.col3sm} ${zeb.col2md}`);
            default:
                return (`${zeb.col12xs} ${zeb.col6sm} ${zeb.col4md} ${zeb.col1lg}`);
        }
    };

    const colors = findKeysWithPrefix(colorsObj, prefix);
    
    return (
        <div className={`${zeb.row} ${zeb.gap2}`} >
                {
                    colors.map((color, index) => {
                        return (
                        <div className={cols()} key={index}>
                            <div className={`${color}`} style={{
                                border: '1px solid rgba(0,0,0,0.8)',
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