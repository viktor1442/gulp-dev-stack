import 'babel-polyfill';
/**
 * https://github.com/Keyamoon/svgxuse
 * If you do not use SVG <use xlink:href="…"> elements, remove svgxuse module
 */
import 'svgxuse';
import init from './init';
import factory from './factory';
import MyModule from './components/module';
import Alertifier from './components/alertifier';

const App = () => {
    const start = (config) => {
        init(MyModule, document.querySelector('.main h1'));
        factory(Alertifier, document.querySelectorAll('.btn'));
    };

    return {
        start
    };
};

const app = App();
app.start(window.config);
