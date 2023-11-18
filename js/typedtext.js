$(document).ready(function() {
    $.fn.typedText = function() {
        var $this = $(this);
        var processArgs = function(args) {
            var numOfArgs = args.length;
            var givenArgs = {
                text2Type: "",
                space: 63,
                callback: ""
            };
            if (numOfArgs >= 1 && numOfArgs <= 3) {
                var currentArg;
                var argType;
                for (var i = 0; i < numOfArgs; i++) {
                    currentArg = args[i];
                    argType = typeof currentArg;
                    switch (argType) {
                        case "string":
                            if (givenArgs.text2Type.length === 0) {
                                givenArgs.text2Type = currentArg;
                            }
                            break;
                        case "number":
                            givenArgs.space = currentArg;
                            break;
                        case "function":
                            if (givenArgs.callback === "") {
                                givenArgs.callback = currentArg;
                            }
                            break;
                        default:
                    }
                }
                return givenArgs;
            } else if (numOfArgs === 0) {
                if ($this.html().length != 0) {
                    givenArgs.text2Type = $this.html();
                    return givenArgs;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        };
        var typeText = function(elementIdentifier, givenArgs) {
            if (!givenArgs) {
                console.log("jQuery TypedText Plugin ERROR: Invalid argument(s).");
                return false;
            } else {
                var element = $(elementIdentifier);
                element.html('');
                var strippedText = givenArgs.text2Type.replace(/(<([^>]+)>)/ig, "");
                var textLength = strippedText.length;
                var currentChar;
                var i = 0;
                var typedTextInterval = setInterval(function() {
                    if (i < (textLength - 1)) {
                        currentChar = strippedText.charAt(i);
                        element.html(element.html() + currentChar);
                        i++;
                    } else {
                        clearInterval(typedTextInterval);
                        element.html(givenArgs.text2Type);
                        if (typeof givenArgs.callback === "function") {
                            givenArgs.callback();
                        }
                    }
                }, givenArgs.space);
                return true;
            }
        };
        var processedArgs = processArgs(arguments);
        typeText(this, processedArgs);
        return this;
    }
})