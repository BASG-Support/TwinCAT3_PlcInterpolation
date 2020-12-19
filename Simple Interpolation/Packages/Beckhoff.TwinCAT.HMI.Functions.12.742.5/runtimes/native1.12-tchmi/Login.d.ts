declare module TcHmi {
    module Functions {
        module Beckhoff {
            function Login(username: string | null, password: string | null, persistent?: boolean, reload?: boolean): boolean;
        }
    }
}
