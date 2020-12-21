declare module TcHmi {
    module Functions {
        module Beckhoff {
            function CheckAccess(tco: TcHmi.Controls.System.baseTcHmiControl, AccessRightToCheck: string): boolean;
        }
    }
}
