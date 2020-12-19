declare module TcHmi {
    module Functions {
        module Beckhoff {
            function CreateBinding(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string, symbol: TcHmi.Symbol | null): void;
        }
    }
}
