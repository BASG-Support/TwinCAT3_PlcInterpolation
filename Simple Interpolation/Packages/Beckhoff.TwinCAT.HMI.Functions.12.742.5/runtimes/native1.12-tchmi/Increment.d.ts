declare module TcHmi {
    module Functions {
        module Beckhoff {
            function Increment(ctx: Required<TcHmi.Context>, symbol: TcHmi.Symbol<number> | null, maxValue?: number | null, stepWidth?: number | null): void;
        }
    }
}
