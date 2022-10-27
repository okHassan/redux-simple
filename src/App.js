import { Provider } from 'react-redux'
import { store } from './redux/store'
import Application from './Components/Application';

function App() {
    return (
        <Provider store={store}>
            <Application />
        </Provider>
    );
}

export default App;
