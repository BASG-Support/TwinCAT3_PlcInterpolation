declare module TcHmi {
    module Functions {
        module Beckhoff {
            function ConvertBooleanToEnum<T = any>(value: boolean, trueValue: T, falseValue: T): T;
        }
    }
}
