/*jshint esversion: 6 */
import {MDCRipple} from '@material/ripple/index';
import {MDCSlider} from '@material/slider';

const slider = new MDCSlider(document.querySelector('.mdc-slider'));
const ripple = new MDCRipple(document.querySelector('.foo-button'));
const ripple3 = new MDCRipple(document.querySelector('.foo-button3'));