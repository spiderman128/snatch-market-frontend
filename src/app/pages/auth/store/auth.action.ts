import { createAction, props } from "@ngrx/store";

export const setUserSignupStepIndex = createAction(
    "[User Singup Step Index] invoke set user signup wizard step index",
    props<{stepIndex: number}>()
);
export const setMerchantSignupStepIndex = createAction(
    "[Merchant Sign up Step Index] Invoke set merchant sign up wizard index",
    props<{stepIndex: number}>()
)

// login action
export const login = createAction(
    "[Log in] Login Action",
    props<{user: any}>()
);

export const loginSuccess = createAction(
    "[Login Page] Login Success",
    props<any>()
)
export const loginFailure = createAction(
    "[Login page] Login Failure"
)

// signup merchant action
export const signupMerchant = createAction(
    "[Sign up As a merchant] Sign up merchant action",
    props<{user: any}>()
)


// user signup action

export const signupUser = createAction(
    "[Sign up] Sign up Action",
    props<{user: any}>()
)
export const signupSuccess = createAction(
    "[Sign up] Sign up success",
    props<any>()
);
export const signupFailure = createAction(
    "[Sign up] Sign up Failure"
)

export const setUserSignupData = createAction(
    "[Sign up] Set Signup Data",
    props<{user: any}>()
)