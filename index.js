/**
 * @file mofron-event-clicktap/index.js
 * @brief click and tap event for mofron
 *        set click event or tap event according to access device
 * @license MIT
 */
const comutl = mofron.util.common;
const Click = require('mofron-event-click');
const Tap   = require('mofron-event-tap');

module.exports = class extends mofron.class.Event {
    /**
     * initialize event
     * 
     * @param (mixed) short-form parameter
     *                key-value: event config
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.name("ClickTap");
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (dom) {
        try {
	    let lis     = this.listener();
            let clk_evt = new Click();
	    let tap_evt = new Tap();
	    for (let lidx in lis) {
                clk_evt.listener(lis[lidx][0], lis[lidx][0]);
		tap_evt.listener(lis[lidx][0], lis[lidx][0]);
	    }
            let dev = comutl.accdev();
	    if (("mobile" === dev) || ("tablet" === dev)) {
                tap_evt.taponly(false);
		this.component().event(tap_evt);
	    } else {
                this.component().event(clk_evt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
