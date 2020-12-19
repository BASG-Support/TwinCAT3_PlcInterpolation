declare module TcHmi {
    module Functions {
        module Beckhoff {
            function Log(level: string, message: string, ...optionalParameters: any[]): void;
        }
    }
}
