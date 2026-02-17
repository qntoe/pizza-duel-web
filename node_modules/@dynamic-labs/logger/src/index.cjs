'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var EventEmitter = require('eventemitter3');
var MetaData = require('./MetaData/MetaData.cjs');
var types = require('./types.cjs');
var createCircularReferenceReplacer = require('./utils/createCircularReferenceReplacer.cjs');
var mapLogLevel = require('./utils/mapLogLevel.cjs');
var processArgs = require('./utils/processArgs.cjs');
var getStack = require('./utils/getStack.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

/* eslint-disable @typescript-eslint/no-explicit-any, no-console */
// 1. Define a unique global key
const LOGGER_GLOBAL_STATE_KEY = Symbol.for('__DYNAMIC_LOGGER_GLOBAL_STATE__');
// 3. Initialize or retrieve the global state
const globalState = globalThis[LOGGER_GLOBAL_STATE_KEY] || {
    events: new EventEmitter__default["default"](),
    keys: { emitErrors: true },
    logLevel: undefined,
    metaData: new MetaData.MetaData(),
    troubleshootModeEnabled: false,
};
// Ensure the state persists on the global object
globalThis[LOGGER_GLOBAL_STATE_KEY] = globalState;
const IGNORE_MESSAGES = ['Failed to send logs to server'];
const messageQueue = [];
class Logger {
    static get troubleshootModeEnabled() {
        return globalState.troubleshootModeEnabled;
    }
    static set troubleshootModeEnabled(val) {
        globalState.troubleshootModeEnabled = val;
    }
    constructor(name, level) {
        this.name = name;
        this._level = undefined;
        this.metaData = new MetaData.MetaData();
        this._level = level;
        if (typeof window !== 'undefined' && window.localStorage !== undefined) {
            // Don't unset the value if it's already set
            Logger.troubleshootModeEnabled =
                Logger.troubleshootModeEnabled ||
                    window.localStorage.getItem('dynamic_enableTroubleshootMode') ===
                        'true';
            window.enableTroubleshootMode = () => {
                window.localStorage.setItem('dynamic_enableTroubleshootMode', 'true');
                Logger.troubleshootModeEnabled = true;
            };
            window.disableTroubleshootMode = () => {
                window.localStorage.removeItem('dynamic_enableTroubleshootMode');
                Logger.troubleshootModeEnabled = false;
            };
        }
    }
    static setEmitErrors(emit) {
        if (emit !== undefined) {
            globalState.keys.emitErrors = emit;
        }
    }
    static setEnvironmentId(environmentId) {
        if (environmentId !== undefined) {
            globalState.keys.environmentId = environmentId;
        }
    }
    getNameArray(name) {
        return Array.isArray(name) ? name : [name];
    }
    createLogger(name, level) {
        return new Logger([...this.getNameArray(this.name), ...this.getNameArray(name)], level !== null && level !== void 0 ? level : this.level);
    }
    get logLevel() {
        return types.LogLevel[this.level];
    }
    setLogLevel(level) {
        this._level = mapLogLevel.mapLogLevel(level);
    }
    static setLogLevel(level) {
        globalState.logLevel = mapLogLevel.mapLogLevel(level);
    }
    static resetLogLevel() {
        globalState.logLevel = undefined;
    }
    get level() {
        var _a;
        if (globalState.logLevel && !this._level) {
            return globalState.logLevel;
        }
        if (this._level === undefined &&
            typeof process !== 'undefined' &&
            ((_a = process.env) === null || _a === void 0 ? void 0 : _a['NODE_ENV']) !== 'production') {
            return types.LogLevel.DEBUG;
        }
        if (this._level === undefined) {
            return types.LogLevel.WARN;
        }
        return this._level;
    }
    formatMessage(level, message) {
        var _a;
        if (message instanceof Error) {
            message = message.stack;
        }
        else if (
        // Handle Error-Like Objects
        message instanceof Object &&
            Object.prototype.hasOwnProperty.call(message, 'stack')) {
            message = message.stack;
        }
        else if (message instanceof Object) {
            message = JSON.stringify(message, createCircularReferenceReplacer.createCircularReferenceReplacer());
        }
        const names = (Array.isArray(this.name) ? this.name : [this.name]).map((name) => `[${name}]`);
        return `${names.join('')} [${(_a = types.LogLevel[level]) !== null && _a !== void 0 ? _a : 'TROUBLESHOOTING'}]: ${message}`;
    }
    captureAndSend(level, message, ...args) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (globalState.keys.emitErrors &&
                !IGNORE_MESSAGES.includes(message === null || message === void 0 ? void 0 : message.toString()) &&
                typeof window !== 'undefined') {
                this.emitHttpLogs(level, message, { args });
            }
        });
    }
    emitHttpLogs(level, message, { args = [], transformMeta = (meta) => meta }) {
        const stack = getStack.getStack(this.emitHttpLogs);
        messageQueue.push({ args, level, message, stack });
        if (messageQueue.length === 1) {
            /**
             * Batching the logs to send them in a single request
             * https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide#batching_operations
             *
             * Essentially, multiple calls to log in the same event loop will be batched into a single request
             */
            queueMicrotask(() => _tslib.__awaiter(this, void 0, void 0, function* () {
                // Grab all pending messages immediately and clear the queue
                const currentBatch = messageQueue.splice(0, messageQueue.length);
                const messages = [];
                currentBatch.forEach((msg) => {
                    var _a, _b, _c, _d, _e, _f;
                    const body = {};
                    const { objectArgs, remainingArgs } = processArgs.processArgs(msg);
                    Object.assign(body, ...objectArgs);
                    Object.assign(body, {
                        level: types.LogLevel[msg.level],
                        message: [msg.message, ...remainingArgs].join(' '),
                        meta: transformMeta(globalState.metaData.merge(this.metaData).get()),
                        stack: msg.stack,
                        url: {
                            hostname: (_a = window.location) === null || _a === void 0 ? void 0 : _a.hostname,
                            origin: (_b = window.location) === null || _b === void 0 ? void 0 : _b.origin,
                            pathname: (_c = window.location) === null || _c === void 0 ? void 0 : _c.pathname,
                            port: (_d = window.location) === null || _d === void 0 ? void 0 : _d.port,
                            protocol: (_e = window.location) === null || _e === void 0 ? void 0 : _e.protocol,
                        },
                        userAgent: (_f = window.navigator) === null || _f === void 0 ? void 0 : _f.userAgent,
                    });
                    messages.push(body);
                });
                try {
                    if (!globalState.keys.environmentId) {
                        throw new Error('Environment ID not set');
                    }
                    yield fetch(`https://logs.dynamicauth.com/api/v1/${globalState.keys.environmentId}`, {
                        body: JSON.stringify(messages),
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        method: 'POST',
                        mode: 'cors',
                        referrerPolicy: 'origin-when-cross-origin',
                    });
                }
                catch (error) {
                    this.debug('Failed to send logs to server', error);
                }
                // REMOVE: messageQueue.length = 0;
            }));
        }
    }
    /**
     * Emits an INFO type message to the backend for analysis and debugging
     */
    instrument(message, options) {
        return this.emitHttpLogs(types.LogLevel.INFO, message, {
            args: [options],
            // Don't send any meta to avoid storing PII
            transformMeta: () => undefined,
        });
    }
    log(level, message, ...args) {
        const enableTroubleshootMode = typeof window !== 'undefined' && Logger.troubleshootModeEnabled;
        if (!enableTroubleshootMode &&
            (level < this.level || level === types.LogLevel.MUTE)) {
            return;
        }
        globalState.events.emit('log', level, message, ...args);
        const fmtMsg = this.formatMessage(level, message);
        switch (level) {
            case types.LogLevel.WARN:
                console.warn(fmtMsg, ...args);
                break;
            case types.LogLevel.ERROR:
                console.error(fmtMsg, ...args);
                break;
            default:
                console.log(fmtMsg, ...args);
        }
        if (level === types.LogLevel.ERROR) {
            this.captureAndSend(level, message, ...args);
        }
    }
    logVerboseTroubleshootingMessage(message, ...args) {
        this.log(-1, message, ...args);
    }
    debug(message, ...args) {
        this.log(types.LogLevel.DEBUG, message, ...args);
    }
    info(message, ...args) {
        this.log(types.LogLevel.INFO, message, ...args);
    }
    warn(message, ...args) {
        this.log(types.LogLevel.WARN, message, ...args);
    }
    error(message, ...args) {
        this.log(types.LogLevel.ERROR, message, ...args);
    }
}
Logger.globalMetaData = globalState.metaData;
// REPLACED: public static events = new EventEmitter...
Logger.events = globalState.events;

Object.defineProperty(exports, 'LogLevel', {
  enumerable: true,
  get: function () { return types.LogLevel; }
});
exports.Logger = Logger;
