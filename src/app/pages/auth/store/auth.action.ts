import { createAction, props } from "@ngrx/store";

export const setUserSignupStepIndex = createAction(
    "[User Singup Step Index] invoke set user signup wizard step index",
    props<{stepIndex: number}>()
);
export const setMerchantSignupStepIndex = createAction(
    "[Merchant Sign up Step Index] Invoke set merchant sign up wizard index",
    props<{stepIndex: number}>()
)