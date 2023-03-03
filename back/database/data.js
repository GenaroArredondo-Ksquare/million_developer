export default [
    {
        id: 1,
        difficulty: 'easy',
        category: 'data types',
        question : "Which keyword should be used to define a value that should not change in the application?",
        options : [
            'var',
            'let',
            'const',
            'boolean',
        ]
    },
    {
        id: 2,
        difficulty: 'intermediate',
        category: 'data types',
        question : "What type of coercion is automatically performed",
        options : [
            'explicit',
            'implicit',
            'declared',
            'expressive',
        ]
    },
    {
        id: 3,
        difficulty: 'hard',
        category: 'data types',
        question : "When an operator value is NULL, the typeof returned by the unary operator is:",
        options : [
            'Boolean',
            'Undefined',
            'Object',
            'NaN'
        ]
    },
    {
        id: 4,
        difficulty: 'intermediate',
        category: 'classes, objects, functions',
        question : "Symbol used to create an array",
        options : [
            '- -',
            '[]',
            '{}',
            '//'
        ]
    },
    {
        id: 5,
        difficulty: 'intermediate',
        category: 'classes, objects, functions',
        question : "keyword used to create a class that takes properties from another previously defined class",
        options : [
            'takes',
            'accepts',
            'extends',
            'super',
        ]
    },
    {
        id: 6,
        difficulty: 'hard',
        category: 'classes, objects, functions',
        question : "Which function is used to deserialize an object into a JSON string?",
        options : [
            'stringify()',
            'parse()',
            'convert()',
            'deserialize()',
        ]
    },
    {
        id: 7,
        difficulty: 'easy',
        category: 'data types',
        question : "What data type does true/false fall into",
        options : [
            'String',
            'Number',
            'bigInt',
            'boolean'
        ]
    },
    {
        id: 8,
        difficulty: 'intermediate',
        category: 'data types',
        question : "What does the logical operator || stand for?",
        options : [
            'Not',
            'double Not',
            'Or',
            'And'
        ]
    },
    {
        id: 9,
        difficulty: 'intermediate',
        category: 'classes, objects, functions',
        question : "Which function is used to serialize an object into a JSON string?",
        options : [
            'stringify()',
            'parse()',
            'convert()',
            'deserialize()'
        ]
    },
    {
        id: 10,
        difficulty: 'hard',
        category: 'classes, objects, functions',
        question : "aside from dot notation what other method can be used to access an object property",
        options : [
            'bracket notation',
            'curly braces notation',
            'only dot notation can be used',
            'parenthesis notation',
        ]
    }
];

export const answers = [2, 1, 2, 1, 2, 0, 3, 2, 1, 0];