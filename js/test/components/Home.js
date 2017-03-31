import {renderComponent, expect} from '../test_helper';
import App from '../../components/Home';

describe('Home', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('renders something', () => {
        expect(component)
            .to
            .contain('Welcome');
    });
});