// Functions should only be one level of abstraction

// Bad:

function parseBetterJSAlternative(code) {
  const REGEXES = [
    /\b(?:var|let|const)\s+(\w+)\s*=\s*([^;]+)/, // Variable declaration
    /\bfunction\s+(\w+)\s*\(([^)]*)\)\s*\{([^}]*)\}/, // Function declaration
    /\bif\s*\(([^)]+)\)\s*\{([^}]*)\}/, // If statement
    /\bfor\s*\(([^;]+);([^;]+);([^)]+)\)\s*\{([^}]*)\}/, // For loop
    // Add more regex patterns for other JavaScript constructs as needed
  ];

  const statements = code.split(/\s*;\s*/); // Split statements by semicolons

  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      const match = statement.match(REGEX);
      if (match) {
        tokens.push(match);
      }
    });
  });

  const ast = [];
  tokens.forEach((token) => {
    const [_, type, ...values] = token;
    ast.push({ type, values });
  });

  ast.forEach((node) => {
    // You can implement more sophisticated parsing logic based on the node types
    console.log(`Parsing ${node.type} node with values: ${node.values}`);
  });

  // Return or manipulate the AST as needed
  return ast;
}

// Example usage:
const codeToParse = `
  var x = 42;
  function greet(name) {
    if (name) {
      console.log("Hello, " + name + "!");
    }
  }
  for (let i = 0; i < 5; i++) {
    greet("User" + i);
  }
`;

const parsedAST = parseBetterJSAlternative(codeToParse);

function parseBetterJSAlternativeV2(code) {
  const tokens = tokenize(code);
  const syntaxTree = parse(tokens);
  syntaxTree.forEach((node) => {
    // You can add more logic to process or display the parsed syntax tree
    console.log(node);
  });
}

function tokenize(code) {
  const REGEXES = [
    /\b(?:var|let|const)\b/, // Variable declaration
    /\bfunction\b/, // Function keyword
    /\b\w+\b/, // Identifier (variable or function name)
    /\bif\b/, // If keyword
    /\belse\b/, // Else keyword
    /\bfor\b/, // For keyword
    /\b\([^)]*\)\s*\{|\}/, // Parentheses and curly braces
    /\b(?:\d+\.\d*|\.\d+|\d+)\b/, // Numbers (floating-point or integer)
    /"[^"]*"/, // Double-quoted strings
    /'[^']*'/, // Single-quoted strings
    /\+\+|--|\+|-|\*|\/|%|\(|\)/, // Operators and parentheses
  ];

  const tokens = [];
  REGEXES.forEach((REGEX) => {
    const matches = code.match(REGEX);
    if (matches) {
      tokens.push(matches[0]);
    }
  });

  return tokens;
}

function parse(tokens) {
  const syntaxTree = [];
  let currentTokenIndex = 0;

  while (currentTokenIndex < tokens.length) {
    const currentToken = tokens[currentTokenIndex];

    if (
      currentToken === "var" ||
      currentToken === "let" ||
      currentToken === "const"
    ) {
      // Variable declaration
      const identifier = tokens[currentTokenIndex + 1];
      const assignment = tokens[currentTokenIndex + 2];
      const value = tokens[currentTokenIndex + 3];
      syntaxTree.push({
        type: "VariableDeclaration",
        identifier,
        assignment,
        value,
      });
      currentTokenIndex += 4;
    } else if (currentToken === "function") {
      // Function declaration
      const functionName = tokens[currentTokenIndex + 1];
      syntaxTree.push({ type: "FunctionDeclaration", functionName });
      currentTokenIndex += 2;
    } else if (currentToken === "if") {
      // If statement
      syntaxTree.push({ type: "IfStatement" });
      currentTokenIndex += 1;
    } else if (currentToken === "{" || currentToken === "}") {
      // Curly braces
      syntaxTree.push({ type: "CurlyBraces", value: currentToken });
      currentTokenIndex += 1;
    } else {
      // Other tokens (identifiers, operators, etc.)
      syntaxTree.push({ type: "Other", value: currentToken });
      currentTokenIndex += 1;
    }
  }

  return syntaxTree;
}

// Example usage:
const codeToParseV2 = `
  var x = 42;
  function greet(name) {
    if (name) {
      console.log("Hello, " + name + "!");
    }
  }
`;

parseBetterJSAlternativeV2(codeToParseV2);
