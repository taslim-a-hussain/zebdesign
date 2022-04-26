import * as colors from '../../../../css-dist/colors/gray/gray.module.css';
import Gencolors from '../gen/gencolors';

const Gray = ({zeb}) => {

    return (
        <>
            <div className={zeb.row}>
                <div className={`${zeb.col12xs}`}>
                    <h4>Grays</h4>
                    <p>Use prefix <strong>fg</strong> (foreground color) with color names. Example: <strong>fgBlack</strong>.
                    Use prefix <strong>bg</strong> (background color) with color names. Example: <strong>bgBlack</strong>.</p>
                </div>
            </div>
            <Gencolors colorsObj={colors} prefix='bg' zeb={zeb} />
        </>
    );
};

export default Gray;