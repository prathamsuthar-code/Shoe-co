

export const refineValidationsObject = (inputs) => {
    return inputs.error.flatten().fieldErrors
}