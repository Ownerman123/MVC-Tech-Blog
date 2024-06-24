module.exports = {
    logThis: (data) => console.log(data),
    isEqual: (context, boolValue,) => {
    context.isBooleanAdded = boolValue; // Add the boolean property
    console.log(boolValue);
    return context; // Return the modified context
    },
}