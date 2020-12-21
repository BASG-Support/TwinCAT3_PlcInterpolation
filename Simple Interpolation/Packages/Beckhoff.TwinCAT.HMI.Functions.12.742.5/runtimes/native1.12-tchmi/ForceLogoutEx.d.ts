declare module TcHmi {
    module Functions {
        module Beckhoff {
            function ForceLogoutEx(ctx: Required<TcHmi.Context>, username: string | null | undefined): boolean;
        }
    }
}
