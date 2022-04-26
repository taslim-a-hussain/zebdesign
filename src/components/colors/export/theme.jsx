import * as colors from '../../../../css-dist/colors/theme/theme.module.css';
import Gencolors from '../gen/gencolors';

const Theme = ({zeb}) => {

    return (
        <>
            <div className={zeb.row}>
                <div className={`${zeb.col12xs}`}>
                    <h3>Color Classes</h3>
                    <h4>Theme Colors</h4>
                    <p>Use prefix <strong>fg</strong> (foreground color) with color names. Example: <strong>fgPrimary</strong>.
                    Use prefix <strong>bg</strong> (background color) with color names. Example: <strong>bgPrimary</strong>.</p>
                </div>
            </div>
            <Gencolors colorsObj={colors} prefix='bg' zeb={zeb} totalCols={8} />
        </>
    );
};

export default Theme;