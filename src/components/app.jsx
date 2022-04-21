import * as styler from '../../css-dist/styler.module.css';
import {Gray} from './colors';

const App = () => {
    const {container} = styler;
    return (
        <div className={container}>
            <h1>React ZebStyler</h1>
            <Gray zeb={styler}/>
        </div>
    );
};


export default App;