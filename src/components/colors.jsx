import * as zeb from '../../css-dist/styler.module.css';

const Colors = () => {

    const {bgWhite, bgGray10, bgGray20, bgGray30, bgGray40, bgGray50, bgGray60, bgGray70, bgGray80, bgGray90, bgGray, bgBlack} = zeb;

    const betweenWhiteBlack = [bgWhite, bgGray10, bgGray20, bgGray30, bgGray40, bgGray50, bgGray60, bgGray70, bgGray80, bgGray90, bgGray, bgBlack];


    return (
        <>
            <div className={zeb.row}>
                <div className={`${zeb.col12xs} ${zeb.col6sm}`}>
                    <p>Use prefix fg (foreground color) with color names. Example: fgBlack</p>
                    <p>Use prefix bg (background color) with color names. Example: bgBlack</p>
                </div>
            </div>
            <div className={`${zeb.row} ${zeb.gap2}`}>
                {
                    betweenWhiteBlack.map((color, index) => {
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
        </>
    );
};

export default Colors;