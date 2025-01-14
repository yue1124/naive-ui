"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
const _mixins_1 = require("../../_mixins");
const timeProps = {
    time: {
        type: [Number, Date],
        default: undefined // For unix or non unix mode, it should be different default value
    },
    type: {
        type: String,
        default: 'datetime'
    },
    to: {
        type: [Number, Date],
        default: undefined // the same as `time` prop
    },
    unix: Boolean,
    format: String,
    text: Boolean,
    timezone: String
};
exports.default = (0, vue_1.defineComponent)({
    name: 'Time',
    props: timeProps,
    setup(props) {
        const now = Date.now();
        const { localeRef, dateLocaleRef } = (0, _mixins_1.useLocale)('Time');
        const mergedFormatRef = (0, vue_1.computed)(() => {
            const { timezone } = props;
            if (timezone) {
                return (time, _format) => {
                    return (0, date_fns_1.format)((0, date_fns_1.getTime)(time) +
                        -(0, date_fns_tz_1.getTimezoneOffset)(Intl.DateTimeFormat().resolvedOptions().timeZone, time) +
                        (0, date_fns_tz_1.getTimezoneOffset)(timezone, time), _format);
                };
            }
            return date_fns_1.format;
        });
        const dateFnsOptionsRef = (0, vue_1.computed)(() => {
            return {
                locale: dateLocaleRef.value.locale
            };
        });
        const mergedTimeRef = (0, vue_1.computed)(() => {
            const { time } = props;
            if (props.unix) {
                if (time === undefined)
                    return now;
                return (0, date_fns_1.fromUnixTime)(typeof time === 'number' ? time : time.valueOf());
            }
            return time !== null && time !== void 0 ? time : now;
        });
        const mergedToRef = (0, vue_1.computed)(() => {
            const { to } = props;
            if (props.unix) {
                if (to === undefined)
                    return now;
                return (0, date_fns_1.fromUnixTime)(typeof to === 'number' ? to : to.valueOf());
            }
            return to !== null && to !== void 0 ? to : now;
        });
        const renderedTimeRef = (0, vue_1.computed)(() => {
            if (props.format) {
                return mergedFormatRef.value(mergedTimeRef.value, props.format, dateFnsOptionsRef.value);
            }
            else if (props.type === 'date') {
                return mergedFormatRef.value(mergedTimeRef.value, localeRef.value.dateFormat, dateFnsOptionsRef.value);
            }
            else if (props.type === 'datetime') {
                return mergedFormatRef.value(mergedTimeRef.value, localeRef.value.dateTimeFormat, dateFnsOptionsRef.value);
            }
            else {
                return (0, date_fns_1.formatDistanceStrict)(mergedTimeRef.value, mergedToRef.value, {
                    addSuffix: true,
                    locale: dateLocaleRef.value.locale
                });
            }
        });
        return {
            renderedTime: renderedTimeRef
        };
    },
    render() {
        return this.text
            ? (0, vue_1.createTextVNode)(this.renderedTime)
            : (0, vue_1.h)('time', [this.renderedTime]);
    }
});
