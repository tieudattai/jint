/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-306.js
 * @description Object.defineProperties - 'O' is an Arguments object, 'P' is generic own data property of 'O', test TypeError is thrown when updating the [[Value]] attribute value of 'P' which is not writable and not configurable (10.6 [[DefineOwnProperty]] step 4)
 */


function testcase() {
        var arg = (function () {
            return arguments;
        }(1, 2, 3));

        Object.defineProperty(arg, "genericProperty", {
            value: 1001,
            writable: false,
            configurable: false
        });

        try {
            Object.defineProperties(arg, {
                "genericProperty": {
                    value: 1002
                }
            });

            return false;
        } catch (ex) {
            return ex instanceof TypeError &&
                dataPropertyAttributesAreCorrect(arg, "genericProperty", 1001, false, false, false);
        }
    }
runTestCase(testcase);
