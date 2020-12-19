declare module TcHmi {
    module Functions {
        module Beckhoff {
            function TeachAsNewRecipe(ctx: Required<TcHmi.Context>, recipeReference: string, newRecipeName: string, newRecipePath: string): void;
        }
    }
}
