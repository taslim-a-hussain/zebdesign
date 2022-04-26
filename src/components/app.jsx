import * as zeba from '../../css-dist/styler.module.css';
import {Theme, Colors, CmpColors, Gray, BlackRgba} from './colors';

const App = () => {
    const {container} = zeba;
    return (
        <div className={container}>
            <h1>React ZebStyler</h1>
            <Theme zeb={zeba}/>
            <Colors zeb={zeba}/>
            <CmpColors zeb={zeba}/>
            <Gray zeb={zeba}/>
            <BlackRgba zeb={zeba}/>
            {/* <div className={`${zeba.bgSecondary} ${zeba.fgSecondaryCmp}`} style={{
                width: '400px',
                borderRadius: '20px',
                height: '200px',
                marginTop: '200px',
                marginBottom: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '80px',
                fontWeight: 'border'
            }}>
                ZebaStyler
            </div> */}
        </div>
    );
};


export default App;