import * as zeb from '../../../../css-dist/styler.module.css';
import * as colors from '../../../../css-dist/colors/class/gray.module.css';
import Gencolors from '../gen/gencolors';

const Gray = () => {

    return (
        <>
            <div className={zeb.row}>
                <div className={`${zeb.col12xs} ${zeb.col6sm}`}>
                    <p>Use prefix fg (foreground color) with color names. Example: fgBlack</p>
                    <p>Use prefix bg (background color) with color names. Example: bgBlack</p>
                </div>
            </div>
            <Gencolors colorsObj={colors} prefix='bg' />
        </>
    );
};

export default Gray;