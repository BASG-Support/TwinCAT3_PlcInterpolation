declare module TcHmi {
    module Functions {
        module Beckhoff {
            function CheckBindingEx(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string, symbol: TcHmi.Symbol | null): boolean;
        }
    }
}
