import * as colors from '../../../../css-dist/colors/gray/site-gray.module.css';
import Colorbox from '../gen/colorbox';

const Gray = ({d}) => {

    return (
        <>
            <div className={d.row}>
                <div className={`${d.col12xs}`}>
                    <h4>Grays</h4>
                </div>
            </div>
            <Colorbox colorsObj={colors} d={d} />
        </>
    );
};

export default Gray;