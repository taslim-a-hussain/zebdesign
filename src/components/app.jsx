import {container, containerFluid} from '../../css-dist/styler.module.css';
import Colors from './colors';

const App = () => {
    return (
        <div className={container}>
            <h1>React ZebStyler</h1>
            <Colors />
        </div>
    );
};


export default App;