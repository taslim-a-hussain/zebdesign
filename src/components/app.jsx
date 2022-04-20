import {container, containerFluid} from '../../css-dist/styler.module.css';
import {Gray} from './colors';

const App = () => {
    return (
        <div className={container}>
            <h1>React ZebStyler</h1>
            <Gray />
        </div>
    );
};


export default App;