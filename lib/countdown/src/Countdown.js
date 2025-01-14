"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const countdownProps = {
    duration: {
        type: Number,
        default: 0
    },
    active: {
        type: Boolean,
        default: true
    },
    precision: {
        type: Number,
        default: 0
    },
    render: Function,
    onFinish: Function
};
exports.default = (0, vue_1.defineComponent)({
    name: 'Countdown',
    props: countdownProps,
    setup(props) {
        let timerId = null;
        let rafId = null;
        let elapsed = 0;
        let finished = false;
        const timeInfo = (0, vue_1.reactive)({
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        });
        deriveDisplayValue(props.duration);
        let pnow = -1;
        function getDistance(time) {
            return props.duration - elapsed + pnow - time;
        }
        function deriveDisplayValue(distance) {
            const hours = Math.floor(distance / 3600000);
            const minutes = Math.floor((distance % 3600000) / 60000);
            const seconds = Math.floor((distance % 60000) / 1000);
            const milliseconds = Math.floor(distance % 1000);
            timeInfo.hours = hours;
            timeInfo.minutes = minutes;
            timeInfo.seconds = seconds;
            timeInfo.milliseconds = milliseconds;
        }
        function getDisplayValue(info) {
            const { hours, minutes, seconds, milliseconds } = info;
            const { precision } = props;
            switch (precision) {
                case 0:
                    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                default:
                    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(Math.floor(milliseconds / (precision === 1 ? 100 : precision === 2 ? 10 : 1))).padStart(precision, '0')}`;
            }
        }
        const frame = () => {
            var _a;
            const { precision } = props;
            const distance = getDistance(performance.now());
            if (distance <= 0) {
                deriveDisplayValue(0);
                stopTimer();
                if (!finished) {
                    (_a = props.onFinish) === null || _a === void 0 ? void 0 : _a.call(props);
                    finished = true;
                }
                return;
            }
            let leftTime;
            switch (precision) {
                case 3:
                case 2:
                    leftTime = distance % 34; // about 30 fps
                    break;
                case 1:
                    leftTime = distance % 100;
                    break;
                default:
                    leftTime = distance % 1000;
            }
            deriveDisplayValue(distance);
            timerId = window.setTimeout(() => {
                frame();
            }, leftTime);
        };
        const stopTimer = () => {
            if (timerId !== null) {
                window.clearTimeout(timerId);
                timerId = null;
            }
            if (rafId !== null) {
                window.cancelAnimationFrame(rafId);
                rafId = null;
            }
        };
        (0, vue_1.onMounted)(() => {
            (0, vue_1.watchEffect)(() => {
                if (props.active) {
                    pnow = performance.now();
                    frame();
                }
                else {
                    const now = performance.now();
                    if (pnow !== -1) {
                        elapsed += now - pnow;
                    }
                    stopTimer();
                }
            });
        });
        (0, vue_1.onBeforeUnmount)(() => {
            stopTimer();
        });
        return () => {
            const { render } = props;
            if (render) {
                return render(timeInfo);
            }
            else {
                return getDisplayValue(timeInfo);
            }
        };
    }
});
