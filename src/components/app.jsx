import * as design from '../../css-dist/design.module.css';
import {Theme, Gray} from './colors';

const App = () => {
    const {container} = design;
    return (
        <div className={container}>
            <h1>ZebDesign</h1>
            <Theme d={design}/>
            <Gray d={design}/>
        </div>
    );
};


export default App;