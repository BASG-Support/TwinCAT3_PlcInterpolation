declare module TcHmi {
    module Functions {
        module Beckhoff {
            function LoginEx(ctx: Required<TcHmi.Context>, username: string | null, password: string | null, persistent?: boolean, reload?: boolean): void;
        }
    }
}
