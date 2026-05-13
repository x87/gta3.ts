const is = (node, name) => node.callee?.name === name;

const plugin = {
    name: 'eslint-plugin-cleo',
    rules: {
        'require-wait-in-while': {
            create(context) {
                const loops = [];
                return {
                    WhileStatement: () => loops.push(false),
                    'WhileStatement:exit': (node) => {
                        if (!loops.pop()) {
                            context.report({ node, message: 'Every while loop must contain wait() or asyncWait()' });
                        }
                    },
                    CallExpression: (node) => {
                        if (loops.length && (is(node, 'wait') || is(node, 'asyncWait'))) {
                            loops[loops.length - 1] = true;
                        }
                    },
                };
            },
        },
        'no-wrong-wait-in-function': {
            create(context) {
                return {
                    CallExpression(node) {
                        let fn = node.parent;
                        while (fn && !['FunctionDeclaration', 'FunctionExpression', 'ArrowFunctionExpression'].includes(fn.type)) {
                            fn = fn.parent;
                        }

                        if (is(node, 'wait') && fn?.async) {
                            context.report({ node, message: 'Use await asyncWait() inside async functions instead of wait()' });
                        }
                        if (is(node, 'asyncWait') && !fn?.async) {
                            context.report({ node, message: 'Use wait() inside non-async functions instead of asyncWait()' });
                        }
                        if (is(node, 'asyncWait') && fn?.async && node.parent?.type !== 'AwaitExpression') {
                            context.report({ node, message: 'asyncWait() must be awaited' });
                        }
                    },
                };
            },
        },
    },
};

export default plugin;
