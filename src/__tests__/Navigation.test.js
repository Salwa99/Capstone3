import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Navigation from '../components/Navigation';
import store from '../redux/ConfigueStore';

const App = () => {
  <Provider store={store}>
    <Navigation />
  </Provider>;
};

describe('Navigation component test', () => {
  it('Testing Navigation rendering', () => {
    const NavigationComponent = renderer.create(<App />).toJSON();
    expect(NavigationComponent).toMatchSnapshot();
  });
});
