import * as colors from '../../../../css-dist/colors/colors.module.css';
import Gencolors from '../gen/gencolors';

const Colors = ({zeb}) => {

    return (
        <>
            <div className={zeb.row}>
                <div className={`${zeb.col12xs}`}>
                    <h4>Colors</h4>
                    <p>Use prefix <strong>fg</strong> (foreground color) with color names. Example: <strong>fgPrimary</strong>.
                    Use prefix <strong>bg</strong> (background color) with color names. Example: <strong>bgPrimary</strong>.</p>
                </div>
            </div>
            <Gencolors colorsObj={colors} prefix='bg' zeb={zeb} totalCols={10} />
        </>
    );
};

export default Colors;