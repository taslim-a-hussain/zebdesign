import * as colors from '../../../../css-dist/colors/gray/black-rgba.module.css';
import Gencolors from '../gen/gencolors';

const BlackRgba = ({zeb}) => {

    return (
        <>
            <div className={zeb.row}>
                <div className={`${zeb.col12xs}`}>
                    <h4>RGBA</h4>
                    <p>Example: <strong>bgBlackA9</strong> (background: rgba(0,0,0,0.9)) use <strong>A</strong> for alpha transparency between <strong>1-9</strong> and use prefix <strong>bg</strong> for background and <strong>fg</strong> for foreground.</p>
                </div>
            </div>
            <Gencolors colorsObj={colors} prefix='bg' zeb={zeb} totalCols={9} />
        </>
    );
};

export default BlackRgba;