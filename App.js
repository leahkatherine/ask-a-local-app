import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

export default function App() {
    return (
        <Provider store={store}>
                <NavigationContainer>
                    <Main />
                </NavigationContainer>
        </Provider>
    );
};