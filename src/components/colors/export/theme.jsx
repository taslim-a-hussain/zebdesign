import * as themeColors from '../../../../css-dist/colors/theme/site-theme.module.css';
import Colorbox from '../gen/colorbox';

const Theme = ({d}) => {

    return (
        <>
            <div className={d.row}>
                <div className={`${d.col12xs}`}>
                    <h3>Color Classes</h3>
                    <p>Use prefix <strong>fg</strong> (foreground color) with color names. Example: <strong>fgPrimary</strong>.
                    Use prefix <strong>bg</strong> (background color) with color names. Example: <strong>bgPrimary</strong>.</p>
                    <h4>Theme Colors</h4>
                </div>
            </div>
            <Colorbox colorsObj={themeColors} d={d}/>
        </>
    );
};

export default Theme;